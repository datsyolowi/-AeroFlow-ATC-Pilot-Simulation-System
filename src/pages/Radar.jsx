import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
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
  const { nightMode } = useTheme();
  const darkMode = nightMode;

  const cardClass = darkMode
    ? "bg-[#0B1220] border border-white/10 text-white"
    : "bg-white border border-zinc-200 text-zinc-900";

  const innerCard = darkMode
    ? "border border-white/5 bg-black/20"
    : "border border-zinc-100 bg-zinc-50";

  return (
    <MainLayout>
      <div
        className={`w-full h-[100dvh] overflow-hidden px-5 py-5 flex flex-col gap-4 transition-colors duration-300 ${
          darkMode ? "bg-[#050816] text-white" : "bg-[#f5f5f7] text-zinc-900"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between flex-shrink-0">
          <div>
            <p
              className={`text-[10px] tracking-[0.32em] mb-2 font-semibold ${
                darkMode ? "text-[#7CFF6B]" : "text-zinc-400"
              }`}
            >
              RADAR TRACKING SYSTEM
            </p>
            <h1 className="text-4xl leading-none font-black tracking-tight">
              Tactical Radar Operations
            </h1>
            <div
              className={`flex items-center gap-3 mt-3 text-[11px] tracking-[0.24em] uppercase font-mono ${
                darkMode ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              <span>Multi-Sector Airspace Monitoring</span>
              <div
                className={`w-1 h-1 rounded-full ${darkMode ? "bg-zinc-700" : "bg-zinc-300"}`}
              />
              <span className={darkMode ? "text-cyan-400" : "text-zinc-500"}>
                SATELLITE SYNCHRONIZED
              </span>
            </div>
          </div>

          <div
            className={`px-5 py-3 rounded-2xl border ${
              darkMode
                ? "border-[#7CFF6B]/20 bg-[#7CFF6B]/10"
                : "border-zinc-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${darkMode ? "bg-[#7CFF6B]" : "bg-zinc-900"}`}
              />
              <span
                className={`text-sm font-semibold ${darkMode ? "text-[#7CFF6B]" : "text-zinc-900"}`}
              >
                RADAR ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
          {/* LEFT FILTERS */}
          <div className="col-span-2 h-full min-h-0 overflow-hidden">
            <div
              className={`h-full ${cardClass} rounded-3xl p-5 flex flex-col`}
            >
              <div className="mb-5">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                  AIRSPACE FILTERS
                </p>
                <h2 className="text-lg font-black">Tracking Modes</h2>
              </div>

              <div className="space-y-2.5">
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
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className={`w-full text-left px-4 py-3 rounded-2xl border text-xs transition ${
                      darkMode
                        ? "border-white/5 bg-black/20 hover:bg-[#7CFF6B]/10 hover:border-[#7CFF6B]/20"
                        : "border-zinc-100 bg-zinc-50 hover:bg-zinc-100 hover:border-zinc-300 text-zinc-700"
                    }`}
                  >
                    {filter}
                  </motion.button>
                ))}
              </div>

              {/* RADAR STATS */}
              <div
                className={`mt-auto rounded-2xl p-4 ${
                  darkMode
                    ? "border border-cyan-500/10 bg-black/20"
                    : "border border-zinc-200 bg-zinc-50"
                }`}
              >
                <div className="flex items-center gap-2 mb-3">
                  <Signal
                    size={16}
                    className={darkMode ? "text-cyan-400" : "text-zinc-500"}
                  />
                  <span className="text-sm font-semibold">
                    Signal Integrity
                  </span>
                </div>

                <div className="space-y-2.5 text-xs">
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Uplink</span>
                    <span
                      className={
                        darkMode
                          ? "text-[#7CFF6B]"
                          : "text-zinc-900 font-semibold"
                      }
                    >
                      STABLE
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Tracking</span>
                    <span
                      className={darkMode ? "text-cyan-400" : "text-zinc-700"}
                    >
                      248 Targets
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-zinc-500">Sweep Rate</span>
                    <span className={darkMode ? "" : "text-zinc-700"}>
                      1.2s
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CENTER RADAR */}
          <div className="col-span-7 h-full min-h-0 flex flex-col gap-4">
            {/* RADAR SCREEN */}
            <div
              className={`flex-1 relative overflow-hidden rounded-3xl border ${
                darkMode
                  ? "border-[#7CFF6B]/10 bg-[#071019]"
                  : "border-zinc-200 bg-zinc-100"
              }`}
            >
              {/* GRID */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: darkMode
                    ? "linear-gradient(rgba(124,255,107,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(124,255,107,0.08) 1px, transparent 1px)"
                    : "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
                  backgroundSize: "50px 50px",
                }}
              />

              {/* RADAR CIRCLES */}
              <div className="absolute inset-0 flex items-center justify-center">
                {[220, 420, 620].map((size) => (
                  <div
                    key={size}
                    className={`absolute rounded-full border ${
                      darkMode ? "border-[#7CFF6B]/10" : "border-zinc-300/60"
                    }`}
                    style={{ width: size, height: size }}
                  />
                ))}
              </div>

              {/* CROSSHAIR */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div
                  className={`absolute w-full h-px ${darkMode ? "bg-[#7CFF6B]/10" : "bg-zinc-300/60"}`}
                />
                <div
                  className={`absolute h-full w-px ${darkMode ? "bg-[#7CFF6B]/10" : "bg-zinc-300/60"}`}
                />
              </div>

              {/* SWEEP */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                className="absolute left-1/2 top-1/2 w-[45%] h-[2px] origin-left"
                style={{
                  background: darkMode
                    ? "linear-gradient(to right, #7CFF6B, transparent)"
                    : "linear-gradient(to right, #111111, transparent)",
                  boxShadow: darkMode
                    ? "0 0 20px rgba(124,255,107,0.5)"
                    : "0 0 12px rgba(0,0,0,0.15)",
                }}
              />

              {/* AIRCRAFT */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute top-[28%] left-[38%]"
              >
                <Plane
                  size={22}
                  className={`rotate-45 ${darkMode ? "text-cyan-400" : "text-zinc-700"}`}
                />
                <div
                  className={`mt-2 text-[10px] font-mono ${darkMode ? "text-cyan-400" : "text-zinc-600"}`}
                >
                  AFL245
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute top-[62%] left-[58%]"
              >
                <Plane size={22} className="text-red-400 -rotate-12" />
                <div className="mt-2 text-[10px] font-mono text-red-400">
                  DAL912
                </div>
              </motion.div>

              <motion.div
                animate={{ x: [0, 6, 0] }}
                transition={{ duration: 5, repeat: Infinity }}
                className="absolute top-[40%] left-[72%]"
              >
                <Plane
                  size={22}
                  className={`rotate-90 ${darkMode ? "text-[#7CFF6B]" : "text-zinc-900"}`}
                />
                <div
                  className={`mt-2 text-[10px] font-mono ${darkMode ? "text-[#7CFF6B]" : "text-zinc-900"}`}
                >
                  BAW672
                </div>
              </motion.div>

              {/* HUD */}
              <div className="absolute bottom-4 left-4 right-4 grid grid-cols-4 gap-3">
                {[
                  { label: "Tracked Aircraft", value: "248", icon: Plane },
                  { label: "Radar Range", value: "240NM", icon: Radar },
                  { label: "Active Sectors", value: "12", icon: Globe },
                  { label: "Satellite Link", value: "STABLE", icon: Satellite },
                ].map((item) => (
                  <div
                    key={item.label}
                    className={`rounded-2xl p-3 border backdrop-blur-xl ${
                      darkMode
                        ? "border-white/5 bg-black/30"
                        : "border-zinc-200 bg-white/80"
                    }`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon
                        size={16}
                        className={darkMode ? "text-cyan-400" : "text-zinc-500"}
                      />
                      <span className="text-[10px] text-zinc-500">
                        {item.label}
                      </span>
                    </div>
                    <h3
                      className={`font-bold text-sm ${darkMode ? "" : "text-zinc-900"}`}
                    >
                      {item.value}
                    </h3>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-3 h-full min-h-0 overflow-hidden">
            <div className="h-full flex flex-col gap-4 overflow-y-auto pr-1 pb-10">
              {/* AIRCRAFT DATA */}
              <div className={`${cardClass} rounded-3xl p-5`}>
                <div className="mb-5">
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                    AIRCRAFT INTELLIGENCE
                  </p>
                  <h2 className="text-xl font-black">Selected Targets</h2>
                </div>

                <div className="space-y-3">
                  {aircraft.map((plane, index) => (
                    <motion.div
                      key={plane.callsign}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                      className={`rounded-2xl p-4 ${innerCard}`}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div>
                          <h3 className="font-bold text-sm">
                            {plane.callsign}
                          </h3>
                          <p className="text-xs text-zinc-500 mt-0.5">
                            {plane.heading}
                          </p>
                        </div>
                        <span
                          className={`text-[10px] font-semibold ${
                            plane.status === "EMERGENCY"
                              ? "text-red-400"
                              : darkMode
                                ? "text-[#7CFF6B]"
                                : "text-zinc-900 font-bold"
                          }`}
                        >
                          {plane.status}
                        </span>
                      </div>

                      <div className="space-y-2 text-xs">
                        <div className="flex justify-between">
                          <span className="text-zinc-500">ALTITUDE</span>
                          <span
                            className={
                              darkMode ? "" : "text-zinc-700 font-medium"
                            }
                          >
                            {plane.altitude}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">SPEED</span>
                          <span
                            className={
                              darkMode ? "" : "text-zinc-700 font-medium"
                            }
                          >
                            {plane.speed}
                          </span>
                        </div>
                        <div className="flex justify-between">
                          <span className="text-zinc-500">FUEL</span>
                          <span
                            className={
                              darkMode ? "" : "text-zinc-700 font-medium"
                            }
                          >
                            {plane.fuel}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* THREAT PANEL */}
              <div
                className={`rounded-3xl p-5 border ${
                  darkMode
                    ? "bg-[#0B1220] border-red-500/10"
                    : "bg-white border-zinc-200"
                }`}
              >
                <div className="flex items-center gap-2.5 mb-5">
                  <ShieldAlert size={18} className="text-red-400" />
                  <h2
                    className={`text-lg font-black ${darkMode ? "" : "text-zinc-900"}`}
                  >
                    Threat Assessment
                  </h2>
                </div>

                <div className="space-y-3">
                  <div
                    className={`rounded-2xl p-4 border ${
                      darkMode
                        ? "border-red-500/10 bg-red-500/5"
                        : "border-red-100 bg-red-50"
                    }`}
                  >
                    <h3 className="text-sm font-bold text-red-400 mb-1.5">
                      DAL912
                    </h3>
                    <p className="text-xs text-zinc-400 leading-relaxed">
                      Emergency fuel advisory detected. Priority landing
                      sequence active.
                    </p>
                  </div>

                  <div
                    className={`rounded-2xl p-4 border ${
                      darkMode
                        ? "border-cyan-500/10 bg-cyan-500/5"
                        : "border-zinc-100 bg-zinc-50"
                    }`}
                  >
                    <h3
                      className={`text-sm font-bold mb-1.5 ${darkMode ? "text-cyan-400" : "text-zinc-700"}`}
                    >
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
