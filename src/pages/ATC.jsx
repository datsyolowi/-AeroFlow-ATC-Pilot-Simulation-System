import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
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
        <div
          className="
            flex
            items-center
            justify-between
            mb-2
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
              AIR TRAFFIC OPERATIONS
            </p>

            <h1 className="text-lg font-black">ATC Control Center</h1>

            <div
              className="
                text-[10px]
                tracking-[0.18em]
                text-zinc-500
                mt-1
                font-mono
              "
            >
              <div className="flex items-center gap-3">
                <span>Live Controller Communications</span>
                <span className="text-zinc-700">•</span>
                <span className="text-cyan-400">Multi-Sector Monitoring</span>
              </div>
            </div>
          </div>

          <div
            className="
              px-3
              py-2
              rounded-xl
              border
              border-[#7CFF6B]/20
              bg-[#7CFF6B]/10
            "
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#7CFF6B]"
              />
              <span className="text-xs font-semibold text-[#7CFF6B]">
                CONTROL ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-12
            gap-3
            flex-1
            min-h-0
          "
        >
          {/* LEFT — Active Requests */}
          <div
            className="
              col-span-4
              min-h-0
              flex
              flex-col
            "
          >
            <div
              className="
                flex-1
                min-h-0
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  COMMUNICATION CHANNELS
                </p>
                <h2 className="text-lg font-black">Active Requests</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-0">
                {communications.map((comm, index) => (
                  <motion.div
                    key={comm.callsign}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="
                      border border-white/5 rounded-2xl p-3 bg-black/20
                    "
                  >
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex items-center gap-2">
                        <div
                          className="
                            w-9 h-9 rounded-xl bg-cyan-500/10
                            flex items-center justify-center flex-shrink-0
                          "
                        >
                          <Plane size={15} className="text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xs">{comm.callsign}</h3>
                          <p className="text-[10px] text-zinc-500">
                            {comm.time}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] ${
                          comm.priority === "HIGH"
                            ? "text-red-400"
                            : comm.priority === "MEDIUM"
                              ? "text-[#FFB547]"
                              : "text-[#7CFF6B]"
                        }`}
                      >
                        {comm.priority}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                      {comm.request}
                    </p>

                    <div className="flex gap-2">
                      <button
                        className="
                          flex-1 py-1.5 rounded-xl bg-[#7CFF6B]/10
                          border border-[#7CFF6B]/20 text-[#7CFF6B]
                          text-[10px] font-semibold hover:bg-[#7CFF6B]/20 transition
                        "
                      >
                        APPROVE
                      </button>
                      <button
                        className="
                          flex-1 py-1.5 rounded-xl bg-red-500/10
                          border border-red-500/20 text-red-400
                          text-[10px] font-semibold hover:bg-red-500/20 transition
                        "
                      >
                        DENY
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Command Console */}
          <div
            className="
              col-span-5
              min-h-0
              flex
              flex-col
              gap-3
            "
          >
            <div
              className="
                flex-1
                min-h-0
                bg-[#0B1220]
                border
                border-[#7CFF6B]/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <div>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                    CONTROL TERMINAL
                  </p>
                  <h2 className="text-lg font-black">Command Console</h2>
                </div>
                <div
                  className="
                    px-3 py-2 rounded-xl bg-[#7CFF6B]/10
                    text-[#7CFF6B] text-xs font-semibold
                  "
                >
                  ENCRYPTED LINK
                </div>
              </div>

              {/* TERMINAL */}
              <div
                className="
                  flex-1
                  min-h-0
                  rounded-2xl bg-black/40
                  border border-[#7CFF6B]/10
                  p-4 overflow-y-auto space-y-3 font-mono
                "
              >
                {commandLogs.map((log, index) => (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.12 }}
                    className="text-[#7CFF6B] text-xs"
                  >
                    {">"} {log}
                  </motion.div>
                ))}
                <motion.div
                  animate={{ opacity: [0, 1, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="w-2.5 h-4 bg-[#7CFF6B]"
                />
              </div>

              {/* INPUT */}
              <div className="flex gap-3 mt-3 flex-shrink-0">
                <div
                  className="
                    flex-1 h-10 rounded-2xl border border-white/10
                    bg-black/20 px-4 flex items-center text-xs text-zinc-500
                  "
                >
                  Enter ATC command...
                </div>
                <button
                  className="
                    w-10 h-10 rounded-2xl bg-cyan-500/10
                    border border-cyan-500/20 flex items-center justify-center
                    text-cyan-400 hover:bg-cyan-500/20 transition flex-shrink-0
                  "
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — Runways + Alerts */}
          <div
            className="
              col-span-3
              min-h-0
              flex
              flex-col
              gap-3
            "
          >
            {/* RUNWAYS */}
            <div
              className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex-shrink-0
              "
            >
              <div className="mb-3">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  RUNWAY OPERATIONS
                </p>
                <h2 className="text-lg font-black">Active Runways</h2>
              </div>

              <div className="space-y-2">
                {runwayOps.map((runway) => (
                  <div
                    key={runway.runway}
                    className="border border-white/5 rounded-2xl p-3"
                  >
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <div
                          className="
                            w-9 h-9 rounded-xl bg-[#7CFF6B]/10
                            flex items-center justify-center flex-shrink-0
                          "
                        >
                          <TowerControl size={15} className="text-[#7CFF6B]" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xs">{runway.runway}</h3>
                          <p className="text-[10px] text-zinc-500">
                            {runway.traffic}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold ${
                          runway.status === "ACTIVE"
                            ? "text-[#7CFF6B]"
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
              className="
                flex-1
                min-h-0
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  SYSTEM ALERTS
                </p>
                <h2 className="text-lg font-black">Critical Notices</h2>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 pr-1 min-h-0">
                <div className="border border-red-500/10 rounded-2xl p-3">
                  <div className="flex items-start gap-2">
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

                <div className="border border-cyan-500/10 rounded-2xl p-3">
                  <div className="flex items-start gap-2">
                    <Radio
                      size={15}
                      className="text-cyan-400 mt-0.5 flex-shrink-0"
                    />
                    <div>
                      <h3 className="text-xs font-bold text-cyan-400 mb-1">
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
