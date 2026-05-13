import MainLayout from "../layouts/MainLayout";
import RadarScreen from "../components/RadarScreen";
import AircraftCard from "../components/AircraftCard";

import { useState } from "react";

export default function Home() {
  const [selectedAircraft, setSelectedAircraft] = useState(null);

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

            <h1 className="text-lg font-black">
              Tactical Control Center
            </h1>
          </div>

          {/* STATUS */}
          <div className="flex items-center gap-2">
            <div
              className="
                px-3 py-2 rounded-xl
                bg-[#0B1220] border border-white/10
                min-w-[140px]
              "
            >
              <p className="text-zinc-500 text-[9px] mb-1">
                WEATHER
              </p>

              <h3 className="font-semibold text-xs">
                Light Rain • 18°C
              </h3>
            </div>

            <div
              className="
                px-3 py-2 rounded-xl
                bg-[#0B1220] border border-white/10
                min-w-[100px]
              "
            >
              <p className="text-zinc-500 text-[9px] mb-1">
                AIRSPACE
              </p>

              <h3 className="font-semibold text-xs text-[#7CFF6B]">
                ACTIVE
              </h3>
            </div>
          </div>
        </div>

        {/* MAIN DASHBOARD */}
        <div
          className="
            grid grid-cols-12 gap-2
            flex-1 min-h-0
          "
        >
          {/* LEFT SIDE */}
          <div
            className="
              col-span-8
              flex flex-col
              gap-2
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

            {/* LOWER PANELS */}
            <div className="grid grid-cols-2 gap-2 flex-shrink-0">

              {/* ARRIVALS */}
              <div className="bg-[#0B1220] border border-white/10 rounded-xl p-2.5">

                <div className="flex items-center justify-between mb-2">

                  <h2 className="text-sm font-bold">
                    Arrivals
                  </h2>

                  <div className="px-2 py-1 rounded-full text-[9px] bg-[#7CFF6B]/10 text-[#7CFF6B]">
                    5 Active
                  </div>

                </div>

                <div className="space-y-1.5 text-[11px]">

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
              <div className="bg-[#0B1220] border border-white/10 rounded-xl p-2.5">

                <div className="flex items-center justify-between mb-2">

                  <h2 className="text-sm font-bold">
                    Departures
                  </h2>

                  <div className="px-2 py-1 rounded-full text-[9px] bg-[#7CFF6B]/10 text-[#7CFF6B]">
                    5 Active
                  </div>

                </div>

                <div className="space-y-1.5 text-[11px]">

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

          {/* RIGHT PANEL */}
          <div
            className="
              col-span-4
              flex
              flex-col
              gap-2
              min-h-0
            "
          >

            {selectedAircraft ? (

              <div
                className="
                  bg-[#0B1220]
                  border
                  border-[#7CFF6B]/10
                  rounded-3xl
                  p-5
                  flex-1
                "
              >

                <div className="flex items-start justify-between mb-6">

                  <div>

                    <p className="text-[10px] tracking-[0.25em] text-zinc-500 mb-2">
                      AIRCRAFT INTELLIGENCE
                    </p>

                    <h2 className="text-2xl font-black">
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

                <div className="space-y-5 text-sm">

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

                    <span className="text-zinc-500">
                      STATUS
                    </span>

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

                <div
                  className="
                    mt-8
                    border-t
                    border-white/5
                    pt-5
                  "
                >

                  <p className="text-xs text-zinc-500 mb-4">
                    ACTIVE MONITORING
                  </p>

                  <div className="space-y-3">

                    <div
                      className="
                        rounded-2xl
                        bg-[#071A12]
                        border
                        border-[#7CFF6B]/10
                        p-3
                      "
                    >
                      Flight path stable and under ATC supervision.
                    </div>

                    <div
                      className="
                        rounded-2xl
                        bg-[#1A1207]
                        border
                        border-[#FFB547]/10
                        p-3
                      "
                    >
                      Monitoring telemetry and descent conditions.
                    </div>

                  </div>

                </div>

              </div>

            ) : (

              <>
                <div className="flex flex-col gap-1.5 flex-1 min-h-0 justify-around">

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

                    <h3 className="text-sm font-bold">
                      Alerts
                    </h3>

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

                    <div className="border border-white/5 rounded-xl p-2">

                      <p className="text-[#FFB547] text-xs font-semibold mb-1">
                        Moderate Traffic
                      </p>

                      <p className="text-zinc-500 text-[10px] leading-relaxed">
                        Increased traffic detected in northern sector.
                      </p>

                    </div>

                    <div className="border border-red-500/10 rounded-xl p-2">

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
    </MainLayout>
  );
}