import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import {
  Radar,
  Plane,
  ShieldAlert,
  Globe,
  Signal,
  Satellite,
} from "lucide-react";

const aircraft = [
  {
    callsign: "AFL245",
    altitude: "FL320",
    speed: "452 KT",
    heading: "NE 042°",
    fuel: "78%",
    status: "NORMAL",
  },

  {
    callsign: "DAL912",
    altitude: "FL260",
    speed: "430 KT",
    heading: "SE 118°",
    fuel: "12%",
    status: "EMERGENCY",
  },

  {
    callsign: "BAW672",
    altitude: "FL360",
    speed: "471 KT",
    heading: "NW 310°",
    fuel: "64%",
    status: "NORMAL",
  },
];

export default function RadarPage() {
  return (
    <MainLayout>
      <div
        className="
          w-full
          h-[100dvh]
          overflow-hidden
          p-3
          flex
          flex-col
          gap-3
        "
      >
        {/* HEADER */}
        <div
          className="
            flex
            items-center
            justify-between
            flex-shrink-0
          "
        >
          <div>
            <p
              className="
                text-[#7CFF6B]
                text-[10px]
                tracking-[0.28em]
                mb-1
              "
            >
              RADAR TRACKING SYSTEM
            </p>

            <h1
              className="
                text-[34px]
                leading-none
                font-black
                tracking-tight
              "
            >
              Tactical Radar Operations
            </h1>

            <div
              className="
                flex
                items-center
                gap-3
                mt-3
                text-[11px]
                tracking-[0.24em]
                uppercase
                font-mono
              "
            >
              <span className="text-zinc-500">
                Multi-Sector Airspace Monitoring
              </span>

              <div className="w-1 h-1 rounded-full bg-zinc-700" />

              <span className="text-cyan-400">SATELLITE SYNCHRONIZED</span>
            </div>
          </div>

          {/* STATUS */}
          <div
            className="
              px-4
              py-3
              rounded-2xl
              border
              border-[#7CFF6B]/20
              bg-[#7CFF6B]/10
            "
          >
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

              <span
                className="
                  text-sm
                  font-semibold
                  text-[#7CFF6B]
                "
              >
                RADAR ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div
          className="
            grid
            grid-cols-12
            gap-3
            flex-1
            min-h-0
          "
        >
          {/* LEFT FILTERS */}
          <div
            className="
              col-span-2
              h-full
              min-h-0
              overflow-hidden
            "
          >
            <div
              className="
                h-full
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="mb-5">
                <p
                  className="
                    text-zinc-500
                    text-[10px]
                    tracking-[0.2em]
                    mb-1
                  "
                >
                  AIRSPACE FILTERS
                </p>

                <h2 className="text-lg font-black">Tracking Modes</h2>
              </div>

              <div className="space-y-3">
                {[
                  "Civilian Flights",
                  "Cargo Aircraft",
                  "Military Airspace",
                  "Emergency Signals",
                  "Weather Systems",
                  "Restricted Zones",
                ].map((filter, index) => (
                  <motion.button
                    key={filter}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.05,
                    }}
                    className="
                      w-full
                      text-left
                      px-4
                      py-3
                      rounded-2xl
                      border
                      border-white/5
                      bg-black/20
                      hover:bg-[#7CFF6B]/10
                      hover:border-[#7CFF6B]/20
                      transition
                      text-sm
                    "
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>

              {/* RADAR STATS */}
              <div
                className="
                  mt-auto
                  border
                  border-cyan-500/10
                  rounded-2xl
                  p-4
                  bg-black/20
                "
              >
                <div className="flex items-center gap-2 mb-3">
                  <Signal size={16} className="text-cyan-400" />

                  <span className="text-sm font-semibold">
                    Signal Integrity
                  </span>
                </div>

                <div className="space-y-2 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Uplink</span>

                    <span className="text-[#7CFF6B]">STABLE</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">Tracking</span>

                    <span className="text-cyan-400">248 Targets</span>
                  </div>

                  <div className="flex justify-between">
                    <span className="text-zinc-500">Sweep Rate</span>

                    <span>1.2s</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER RADAR */}
          <div
            className="
              col-span-7
              h-full
              min-h-0
              flex
              flex-col
              gap-3
            "
          >
            {/* RADAR SCREEN */}
            <div
              className="
                flex-1
                relative
                overflow-hidden
                rounded-3xl
                border
                border-[#7CFF6B]/10
                bg-[#071019]
              "
            >
              {/* GRID */}
              <div
                className="
                  absolute
                  inset-0
                  opacity-20
                "
                style={{
                  backgroundImage:
                    "linear-gradient(rgba(124,255,107,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,255,107,0.08) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* RADAR CIRCLES */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[220, 420, 620].map((size) => (
                  <div
                    key={size}
                    className="
                      absolute
                      rounded-full
                      border
                      border-[#7CFF6B]/10
                    "
                    style={{
                      width: size,
                      height: size,
                    }}
                  />
                ))}
              </div>

              {/* CROSSHAIR */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="absolute w-full h-px bg-[#7CFF6B]/10" />

                <div className="absolute h-full w-px bg-[#7CFF6B]/10" />
              </div>

              {/* SWEEP */}
              <motion.div
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="
                  absolute
                  left-1/2
                  top-1/2
                  w-[45%]
                  h-[2px]
                  origin-left
                  bg-gradient-to-r
                  from-[#7CFF6B]
                  to-transparent
                  shadow-[0_0_20px_rgba(124,255,107,0.5)]
                "
              />

              {/* AIRCRAFT */}
              <motion.div
                animate={{
                  y: [0, -8, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="absolute top-[28%] left-[38%]"
              >
                <Plane size={22} className="text-cyan-400 rotate-45" />

                <div
                  className="
                    mt-2
                    text-[10px]
                    font-mono
                    text-cyan-400
                  "
                >
                  AFL245
                </div>
              </motion.div>

              <motion.div
                animate={{
                  y: [0, 6, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                }}
                className="absolute top-[62%] left-[58%]"
              >
                <Plane size={22} className="text-red-400 -rotate-12" />

                <div
                  className="
                    mt-2
                    text-[10px]
                    font-mono
                    text-red-400
                  "
                >
                  DAL912
                </div>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 6, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className="absolute top-[40%] left-[72%]"
              >
                <Plane size={22} className="text-[#7CFF6B] rotate-90" />

                <div
                  className="
                    mt-2
                    text-[10px]
                    font-mono
                    text-[#7CFF6B]
                  "
                >
                  BAW672
                </div>
              </motion.div>

              {/* HUD */}
              <div
                className="
                  absolute
                  bottom-4
                  left-4
                  right-4
                  grid
                  grid-cols-4
                  gap-3
                "
              >
                {[
                  {
                    label: "Tracked Aircraft",
                    value: "248",
                    icon: Plane,
                  },

                  {
                    label: "Radar Range",
                    value: "240NM",
                    icon: Radar,
                  },

                  {
                    label: "Active Sectors",
                    value: "12",
                    icon: Globe,
                  },

                  {
                    label: "Satellite Link",
                    value: "STABLE",
                    icon: Satellite,
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="
                      border
                      border-white/5
                      bg-black/30
                      backdrop-blur-xl
                      rounded-2xl
                      p-3
                    "
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon size={16} className="text-cyan-400" />

                      <span className="text-[10px] text-zinc-500">
                        {item.label}
                      </span>
                    </div>

                    <h3 className="font-bold text-sm">{item.value}</h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div
            className="
              col-span-3
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
                gap-3
                overflow-y-auto
                pr-1
                pb-10
              "
            >
              {/* AIRCRAFT DATA */}
              <div
                className="
                  bg-[#0B1220]
                  border
                  border-white/10
                  rounded-3xl
                  p-4
                "
              >
                <div className="mb-5">
                  <p
                    className="
                      text-zinc-500
                      text-[10px]
                      tracking-[0.2em]
                      mb-1
                    "
                  >
                    AIRCRAFT INTELLIGENCE
                  </p>

                  <h2 className="text-xl font-black">Selected Targets</h2>
                </div>

                <div className="space-y-3">
                  {aircraft.map((plane, index) => (
                    <motion.div
                      key={plane.callsign}
                      initial={{
                        opacity: 0,
                        y: 10,
                      }}
                      animate={{
                        opacity: 1,
                        y: 0,
                      }}
                      transition={{
                        delay: index * 0.08,
                      }}
                      className="
                        border
                        border-white/5
                        rounded-2xl
                        p-4
                      "
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-sm">
                            {plane.callsign}
                          </h3>

                          <p className="text-xs text-zinc-500">
                            {plane.heading}
                          </p>
                        </div>

                        <span
                          className={
                            plane.status === "EMERGENCY"
                              ? "text-red-400 text-[10px]"
                              : "text-[#7CFF6B] text-[10px]"
                          }
                        >
                          {plane.status}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">ALTITUDE</span>

                          <span>{plane.altitude}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-zinc-500">SPEED</span>

                          <span>{plane.speed}</span>
                        </div>

                        <div className="flex justify-between">
                          <span className="text-zinc-500">FUEL</span>

                          <span>{plane.fuel}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* THREAT PANEL */}
              <div
                className="
                  bg-[#0B1220]
                  border
                  border-red-500/10
                  rounded-3xl
                  p-4
                "
              >
                <div className="flex items-center gap-2 mb-4">
                  <ShieldAlert size={18} className="text-red-400" />

                  <h2 className="text-lg font-black">Threat Assessment</h2>
                </div>

                <div className="space-y-3">
                  <div
                    className="
                      border
                      border-red-500/10
                      rounded-2xl
                      p-3
                    "
                  >
                    <h3 className="text-sm font-bold text-red-400 mb-1">
                      DAL912
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Emergency fuel advisory detected. Priority landing
                      sequence active.
                    </p>
                  </div>

                  <div
                    className="
                      border
                      border-cyan-500/10
                      rounded-2xl
                      p-3
                    "
                  >
                    <h3 className="text-sm font-bold text-cyan-400 mb-1">
                      Weather Disturbance
                    </h3>

                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Moderate turbulence forming in Bravo airspace sector.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
