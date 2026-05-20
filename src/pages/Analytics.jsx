import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import { Radio, Plane, TowerControl, AlertTriangle, Send } from "lucide-react";

const communications = [
  {
    callsign: "AFL245",
    request: "Requesting descent clearance",
    priority: "NORMAL",
    time: "12s ago",
  },
  {
    callsign: "BAW672",
    request: "Taxi route confirmation",
    priority: "LOW",
    time: "18s ago",
  },
  {
    callsign: "DAL912",
    request: "Emergency fuel advisory",
    priority: "HIGH",
    time: "4s ago",
  },
  {
    callsign: "QTR721",
    request: "Ready for departure",
    priority: "NORMAL",
    time: "22s ago",
  },
  {
    callsign: "CPA880",
    request: "Holding pattern request",
    priority: "MEDIUM",
    time: "35s ago",
  },
];

const runwayOps = [
  { runway: "RWY 24L", status: "ACTIVE", traffic: "Landing Queue: 4" },
  { runway: "RWY 18R", status: "MAINTENANCE", traffic: "Unavailable" },
  { runway: "RWY 09C", status: "ACTIVE", traffic: "Departure Queue: 2" },
];

const commandLogs = [
  "Altitude FL320 assigned to AFL245",
  "Departure clearance transmitted to QTR721",
  "Weather advisory issued to Bravo sector",
  "Runway 24L switched to active landing sequence",
  "Emergency response team alerted for DAL912",
];

export default function ATC() {
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
        className={`w-full h-[100dvh] overflow-hidden px-5 py-5 flex flex-col transition-colors duration-300 ${
          darkMode ? "bg-[#050816] text-white" : "bg-[#f5f5f7] text-zinc-900"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-5 flex-shrink-0">
          <div>
            <p
              className={`text-[10px] tracking-[0.32em] mb-1.5 font-semibold ${
                darkMode ? "text-[#7CFF6B]" : "text-zinc-400"
              }`}
            >
              AIR TRAFFIC OPERATIONS
            </p>
            <h1 className="text-2xl font-black">ATC Control Center</h1>
            <div
              className={`flex items-center gap-3 text-[10px] tracking-[0.18em] mt-1.5 font-mono ${
                darkMode ? "text-zinc-500" : "text-zinc-400"
              }`}
            >
              <span>Live Controller Communications</span>
              <span className={darkMode ? "text-zinc-700" : "text-zinc-300"}>
                •
              </span>
              <span className={darkMode ? "text-cyan-400" : "text-zinc-500"}>
                Multi-Sector Monitoring
              </span>
            </div>
          </div>

          <div
            className={`px-4 py-2.5 rounded-xl border ${
              darkMode
                ? "border-[#7CFF6B]/20 bg-[#7CFF6B]/10"
                : "border-zinc-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${darkMode ? "bg-[#7CFF6B]" : "bg-zinc-900"}`}
              />
              <span
                className={`text-xs font-semibold ${darkMode ? "text-[#7CFF6B]" : "text-zinc-900"}`}
              >
                CONTROL ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
          {/* LEFT — Active Requests */}
          <div className="col-span-4 min-h-0 flex flex-col">
            <div
              className={`flex-1 min-h-0 ${cardClass} rounded-3xl p-5 flex flex-col`}
            >
              <div className="mb-4 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                  COMMUNICATION CHANNELS
                </p>
                <h2 className="text-lg font-black">Active Requests</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 min-h-0">
                {communications.map((comm, index) => (
                  <motion.div
                    key={comm.callsign}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`rounded-2xl p-4 ${innerCard}`}
                  >
                    <div className="flex items-start justify-between mb-2.5">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            darkMode
                              ? "bg-cyan-500/10"
                              : "bg-white border border-zinc-200"
                          }`}
                        >
                          <Plane
                            size={15}
                            className={
                              darkMode ? "text-cyan-400" : "text-zinc-500"
                            }
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xs">{comm.callsign}</h3>
                          <p className="text-[10px] text-zinc-500 mt-0.5">
                            {comm.time}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold ${
                          comm.priority === "HIGH"
                            ? "text-red-400"
                            : comm.priority === "MEDIUM"
                              ? "text-[#FFB547]"
                              : darkMode
                                ? "text-[#7CFF6B]"
                                : "text-zinc-500"
                        }`}
                      >
                        {comm.priority}
                      </span>
                    </div>

                    <p
                      className={`text-xs leading-relaxed mb-3 ${darkMode ? "text-zinc-300" : "text-zinc-600"}`}
                    >
                      {comm.request}
                    </p>

                    <div className="flex gap-2">
                      <button
                        className={`flex-1 py-2 rounded-xl text-[10px] font-semibold transition border ${
                          darkMode
                            ? "bg-[#7CFF6B]/10 border-[#7CFF6B]/20 text-[#7CFF6B] hover:bg-[#7CFF6B]/20"
                            : "bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-700"
                        }`}
                      >
                        APPROVE
                      </button>
                      <button className="flex-1 py-2 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-[10px] font-semibold hover:bg-red-500/20 transition">
                        DENY
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Command Console */}
          <div className="col-span-5 min-h-0 flex flex-col gap-4">
            <div
              className={`flex-1 min-h-0 rounded-3xl p-5 flex flex-col border ${
                darkMode
                  ? "bg-[#0B1220] border-[#7CFF6B]/10 text-white"
                  : "bg-white border-zinc-200 text-zinc-900"
              }`}
            >
              <div className="flex items-center justify-between mb-5 flex-shrink-0">
                <div>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                    CONTROL TERMINAL
                  </p>
                  <h2 className="text-lg font-black">Command Console</h2>
                </div>
                <div
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold ${
                    darkMode
                      ? "bg-[#7CFF6B]/10 text-[#7CFF6B]"
                      : "bg-zinc-100 text-zinc-600 border border-zinc-200"
                  }`}
                >
                  ENCRYPTED LINK
                </div>
              </div>

              {/* TERMINAL */}
              <div
                className={`flex-1 min-h-0 rounded-2xl p-5 overflow-y-auto space-y-3 font-mono border ${
                  darkMode
                    ? "bg-black/40 border-[#7CFF6B]/10"
                    : "bg-zinc-950 border-zinc-800"
                }`}
              >
                {commandLogs.map((log, index) => (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.12 }}
                    className={`text-xs ${darkMode ? "text-[#7CFF6B]" : "text-zinc-300"}`}
                  >
                    {">"} {log}
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className={`w-2.5 h-4 ${darkMode ? "bg-[#7CFF6B]" : "bg-zinc-400"}`}
                />
              </div>

              {/* INPUT */}
              <div className="flex gap-3 mt-4 flex-shrink-0">
                <div
                  className={`flex-1 h-11 rounded-2xl border px-4 flex items-center text-xs ${
                    darkMode
                      ? "border-white/10 bg-black/20 text-zinc-500"
                      : "border-zinc-200 bg-zinc-50 text-zinc-400"
                  }`}
                >
                  Enter ATC command...
                </div>
                <button
                  className={`w-11 h-11 rounded-2xl border flex items-center justify-center transition flex-shrink-0 ${
                    darkMode
                      ? "bg-cyan-500/10 border-cyan-500/20 text-cyan-400 hover:bg-cyan-500/20"
                      : "bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-700"
                  }`}
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — Runways + Alerts */}
          <div className="col-span-3 min-h-0 flex flex-col gap-4">
            {/* RUNWAYS */}
            <div className={`${cardClass} rounded-3xl p-5 flex-shrink-0`}>
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                  RUNWAY OPERATIONS
                </p>
                <h2 className="text-lg font-black">Active Runways</h2>
              </div>

              <div className="space-y-2.5">
                {runwayOps.map((runway) => (
                  <div
                    key={runway.runway}
                    className={`rounded-2xl p-3.5 ${innerCard}`}
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <div
                          className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                            darkMode
                              ? "bg-[#7CFF6B]/10"
                              : "bg-white border border-zinc-200"
                          }`}
                        >
                          <TowerControl
                            size={15}
                            className={
                              darkMode ? "text-[#7CFF6B]" : "text-zinc-500"
                            }
                          />
                        </div>
                        <div>
                          <h3 className="font-bold text-xs">{runway.runway}</h3>
                          <p className="text-[10px] text-zinc-500 mt-0.5">
                            {runway.traffic}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold ${
                          runway.status === "ACTIVE"
                            ? darkMode
                              ? "text-[#7CFF6B]"
                              : "text-zinc-900 font-bold"
                            : "text-[#FFB547]"
                        }`}
                      >
                        {runway.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* ALERTS */}
            <div
              className={`flex-1 min-h-0 ${cardClass} rounded-3xl p-5 flex flex-col`}
            >
              <div className="mb-4 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                  SYSTEM ALERTS
                </p>
                <h2 className="text-lg font-black">Critical Notices</h2>
              </div>

              <div className="space-y-2.5 overflow-y-auto flex-1 pr-1 min-h-0">
                <div
                  className={`rounded-2xl p-4 border ${
                    darkMode
                      ? "border-red-500/10 bg-red-500/5"
                      : "border-red-100 bg-red-50"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <AlertTriangle
                      size={15}
                      className="text-red-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xs font-bold text-red-400 mb-1">
                        Emergency Fuel Alert
                      </h3>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        DAL912 reported critically low reserve fuel.
                      </p>
                    </div>
                  </div>
                </div>

                <div
                  className={`rounded-2xl p-4 border ${
                    darkMode
                      ? "border-cyan-500/10 bg-cyan-500/5"
                      : "border-zinc-100 bg-zinc-50"
                  }`}
                >
                  <div className="flex items-start gap-2.5">
                    <Radio
                      size={15}
                      className={`mt-0.5 flex-shrink-0 ${darkMode ? "text-cyan-400" : "text-zinc-500"}`}
                    />
                    <div>
                      <h3
                        className={`text-xs font-bold mb-1 ${darkMode ? "text-cyan-400" : "text-zinc-700"}`}
                      >
                        Communications Stable
                      </h3>
                      <p className="text-[10px] text-zinc-400 leading-relaxed">
                        Multi-sector radio channels fully operational.
                      </p>
                    </div>
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
