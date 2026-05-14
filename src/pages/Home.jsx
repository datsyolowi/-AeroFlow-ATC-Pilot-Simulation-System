import MainLayout from "../layouts/MainLayout";
import RadarScreen from "../components/RadarScreen";
import AircraftCard from "../components/AircraftCard";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import CommandConsole from "../components/CommandConsole";

export default function Home() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

  const [utcTime, setUtcTime] = useState("");

  const radarEvents = [
    "[09:17:01] AFL245 entered Sector Alpha",
    "[09:17:04] Radar sweep synchronized",
    "[09:17:07] DAL912 descent detected",
    "[09:17:10] Weather scan updated",
    "[09:17:13] BAW672 route stabilized",
    "[09:17:17] Runway clearance approved",
    "[09:17:21] Sector Bravo synchronized",
    "[09:17:25] CPA880 taxi sequence started",
    "[09:17:28] Signal calibration complete",
    "[09:17:31] QTR721 ready for departure",
  ];

  const [liveFeed, setLiveFeed] = useState(radarEvents.slice(0, 5));

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();

      setUtcTime(now.toUTCString().split(" ")[4]);
    };

    updateClock();

    const interval = setInterval(updateClock, 1000);

    const feedInterval = setInterval(() => {
      setLiveFeed((prev) => {
        const nextEvent =
          radarEvents[Math.floor(Math.random() * radarEvents.length)];

        return [...prev.slice(1), nextEvent];
      });
    }, 2500);

    return () => {
      clearInterval(interval);
      clearInterval(feedInterval);
    };
  }, []);

  return (
    <MainLayout>
      <div
        className="
            w-full
            h-[100dvh]
            overflow-hidden
            p-2
            flex
            flex-col
          "
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-2 flex-shrink-0">
          <div>
            <p className="text-[#7CFF6B] text-[10px] tracking-[0.25em] mb-1">
              AIRSPACE OVERVIEW
            </p>

            <h1 className="text-lg font-black">Tactical Control Center</h1>

            <p
              className="
                  text-[10px]
                  tracking-[0.18em]
                  text-zinc-500
                  mt-1
                  font-mono
                "
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span>UTC {utcTime}</span>

                <span className="text-zinc-700">•</span>

                <span>SECTOR ALPHA</span>

                <span className="text-zinc-700">•</span>

                <div className="flex items-center gap-2">
                  <motion.div
                    animate={{
                      opacity: [0.3, 1, 0.3],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                    }}
                    className="
        w-2
        h-2
        rounded-full
        bg-[#7CFF6B]
      "
                  />

                  <span className="text-[#7CFF6B]">SCANNING</span>
                </div>

                <span className="text-zinc-700">•</span>

                <span className="text-cyan-400">RANGE 240NM</span>

                <span className="text-zinc-700">•</span>

                <span className="text-zinc-500">SAT-LINK STABLE</span>
              </div>
            </p>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-2">
            {/* WEATHER */}
            <div
              className="
                  px-3 py-2 rounded-xl
                  bg-[#0B1220]
                  border border-white/10
                  min-w-[140px]
                "
            >
              <p className="text-zinc-500 text-[9px] mb-1">WEATHER</p>

              <h3 className="font-semibold text-xs">Light Rain • 18°C</h3>
            </div>

            {/* AIRSPACE */}
            <div
              className="
                  px-3 py-2 rounded-xl
                  bg-[#0B1220]
                  border border-white/10
                  min-w-[110px]
                "
            >
              <p className="text-zinc-500 text-[9px] mb-1">AIRSPACE</p>

              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                    scale: [1, 1.15, 1],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="
                      w-2
                      h-2
                      rounded-full
                      bg-[#7CFF6B]
                    "
                />

                <h3 className="font-semibold text-xs text-[#7CFF6B]">ACTIVE</h3>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN DASHBOARD */}
        <div
          className="
              grid
              grid-cols-12
              gap-3
              flex-1
              min-h-0
            "
        >
          {/* LEFT SIDE */}
          <div
            className="
                col-span-8
                flex
                flex-col
                gap-3
                min-h-0
              "
          >
            {/* RADAR */}
            <div className="flex-1 min-h-0">
              <RadarScreen
                selectedAircraft={selectedAircraft}
                setSelectedAircraft={setSelectedAircraft}
              />
            </div>

            {/* LOWER SECTION */}
            <div
              className="
                flex
                flex-col
                gap-3
                mt-1
                flex-shrink-0
              "
            >
              {/* LIVE FEED */}
              <div
                className="
                bg-[#08111F]
                border
                border-cyan-500/10
                rounded-xl
                p-3
                flex
                flex-col
                gap-1
                shadow-[0_0_20px_rgba(0,255,200,0.03)]
              "
              >
                {/* HEADER */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <div
                      className="
                        w-2
                        h-2
                        rounded-full
                        bg-cyan-400
                        animate-pulse
                      "
                    />

                    <h2 className="text-sm font-bold text-white">Live Feed</h2>
                  </div>

                  <div
                    className="
                      px-2
                      py-[3px]
                      rounded-full
                      text-[9px]
                      font-semibold
                      bg-cyan-500/10
                      text-cyan-400
                      leading-none
                    "
                  >
                    LIVE
                  </div>
                </div>

                {/* FEED CONTENT */}
                <div
                  className="
                    grid
                    grid-cols-2
                    gap-x-10
                  "
                >
                  {/* LEFT COLUMN */}
                  <div
                    className="
                      space-y-1
                      text-[10px]
                      font-mono
                      leading-tight
                    "
                  >
                    {liveFeed.slice(0, 3).map((event, index) => (
                      <motion.div
                        key={`${event}-${index}`}
                        initial={{
                          opacity: 0,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={
                          event.includes("descent")
                            ? "text-[#FFB547]"
                            : event.includes("Weather")
                              ? "text-zinc-500"
                              : event.includes("Radar")
                                ? "text-cyan-400"
                                : "text-[#7CFF6B]"
                        }
                      >
                        {event}
                      </motion.div>
                    ))}
                  </div>

                  {/* RIGHT COLUMN */}
                  <div
                    className="
                      space-y-1
                      text-[10px]
                      font-mono
                      leading-tight
                    "
                  >
                    {liveFeed.slice(3, 5).map((event, index) => (
                      <motion.div
                        key={`${event}-${index}`}
                        initial={{
                          opacity: 0,
                          y: 4,
                        }}
                        animate={{
                          opacity: 1,
                          y: 0,
                        }}
                        transition={{
                          duration: 0.25,
                        }}
                        className={
                          event.includes("descent")
                            ? "text-[#FFB547]"
                            : event.includes("Weather")
                              ? "text-zinc-500"
                              : event.includes("Radar")
                                ? "text-cyan-400"
                                : "text-[#7CFF6B]"
                        }
                      >
                        {event}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>

              {/* ARRIVALS + DEPARTURES */}
              <div
                className="
                    grid
                    grid-cols-2
                    gap-3
                  "
              >
                {/* ARRIVALS */}
                <div
                  className="
                      bg-[#0B1220]
                      border
                      border-white/10
                      rounded-xl
                      p-3
                    "
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-bold">Arrivals</h2>

                    <div
                      className="
                          px-2
                          py-1
                          rounded-full
                          text-[9px]
                          bg-[#7CFF6B]/10
                          text-[#7CFF6B]
                        "
                    >
                      5 Active
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between">
                      <span>AFL245</span>
                      <span className="text-zinc-500">RJTT</span>
                      <span className="text-[#7CFF6B]">ON TIME</span>
                    </div>

                    <div className="flex justify-between">
                      <span>BAW672</span>
                      <span className="text-zinc-500">EGLL</span>
                      <span className="text-[#7CFF6B]">ON TIME</span>
                    </div>

                    <div className="flex justify-between">
                      <span>DAL912</span>
                      <span className="text-zinc-500">KJFK</span>
                      <span className="text-[#FFB547]">DELAYED</span>
                    </div>
                  </div>
                </div>

                {/* DEPARTURES */}
                <div
                  className="
                      bg-[#0B1220]
                      border
                      border-white/10
                      rounded-xl
                      p-3
                    "
                >
                  <div className="flex items-center justify-between mb-2">
                    <h2 className="text-sm font-bold">Departures</h2>

                    <div
                      className="
                          px-2
                          py-1
                          rounded-full
                          text-[9px]
                          bg-[#7CFF6B]/10
                          text-[#7CFF6B]
                        "
                    >
                      5 Active
                    </div>
                  </div>

                  <div className="space-y-2 text-[11px]">
                    <div className="flex justify-between">
                      <span>ANA215</span>
                      <span className="text-zinc-500">RJTT</span>
                      <span className="text-[#7CFF6B]">BOARDING</span>
                    </div>

                    <div className="flex justify-between">
                      <span>CPA880</span>
                      <span className="text-zinc-500">VHHH</span>
                      <span className="text-[#FFB547]">TAXI</span>
                    </div>

                    <div className="flex justify-between">
                      <span>QTR721</span>
                      <span className="text-zinc-500">OTHH</span>
                      <span className="text-[#7CFF6B]">READY</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
                col-span-4
                h-full
                min-h-0
                overflow-hidden
              "
          >
            <div
              className="
                  h-full
                  flex
                  flex-col
                  gap-2
                  overflow-y-auto
                  scroll-smooth
                  pr-1
                  pb-10
                "
            >
              {selectedAircraft ? (
                <div
                  className="
                      bg-[#0B1220]
                      border
                      border-[#7CFF6B]/10
                      rounded-3xl
                      p-4
                      flex-1
                    "
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <p className="text-[10px] tracking-[0.25em] text-zinc-500 mb-2">
                        AIRCRAFT INTELLIGENCE
                      </p>

                      <h2 className="text-xl font-black">
                        {selectedAircraft.callsign}
                      </h2>
                    </div>

                    <button
                      onClick={() => setSelectedAircraft(null)}
                      className="
                          text-zinc-500
                          hover:text-white
                          transition
                        "
                    >
                      ✕
                    </button>
                  </div>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-zinc-500">ALTITUDE</span>
                      <span>{selectedAircraft.altitude}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">SPEED</span>
                      <span>{selectedAircraft.speed}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">HEADING</span>
                      <span>{selectedAircraft.heading}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">DESTINATION</span>
                      <span>{selectedAircraft.destination}</span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">STATUS</span>

                      <span
                        className={
                          selectedAircraft.status === "DESCENT"
                            ? "text-[#FFB547]"
                            : "text-[#7CFF6B]"
                        }
                      >
                        {selectedAircraft.status}
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <span className="text-zinc-500">FUEL</span>
                      <span>{selectedAircraft.fuel}</span>
                    </div>
                  </div>
                </div>
              ) : (
                <>
                  {/* AIRCRAFT CARDS */}
                  <div
                    className="
                        flex
                        flex-col
                        gap-2
                        flex-shrink-0
                      "
                  >
                    <AircraftCard
                      callsign="AFL245"
                      altitude="FL320"
                      speed="452 KT"
                      status="CRUISING"
                    />

                    <AircraftCard
                      callsign="BAW672"
                      altitude="FL360"
                      speed="471 KT"
                      status="CRUISING"
                    />

                    <AircraftCard
                      callsign="DAL912"
                      altitude="FL260"
                      speed="430 KT"
                      status="DESCENT"
                    />
                  </div>

                  {/* ALERTS */}
                  <div
                    className="
                        bg-[#0B1220]
                        border
                        border-[#FFB547]/20
                        rounded-xl
                        p-2.5
                        flex-shrink-0
                      "
                  >
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-sm font-bold">Alerts</h3>

                      <div
                        className="
                            px-2
                            py-1
                            rounded-full
                            text-[9px]
                            bg-[#FFB547]/10
                            text-[#FFB547]
                          "
                      >
                        2 Active
                      </div>
                    </div>

                    <div className="space-y-2">
                      <div
                        className="
                            border
                            border-white/5
                            rounded-xl
                            p-2
                          "
                      >
                        <p className="text-[#FFB547] text-xs font-semibold mb-1">
                          Moderate Traffic
                        </p>

                        <p className="text-zinc-500 text-[10px] leading-relaxed">
                          Increased traffic detected in northern sector.
                        </p>
                      </div>

                      <div
                        className="
                            border
                            border-red-500/10
                            rounded-xl
                            p-2
                          "
                      >
                        <p className="text-red-400 text-xs font-semibold mb-1">
                          Weather Warning
                        </p>

                        <p className="text-zinc-500 text-[10px] leading-relaxed">
                          Thunderstorms approaching eastern airspace.
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
