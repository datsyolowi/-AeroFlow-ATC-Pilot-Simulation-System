import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";

const sectorStats = [
  { title: "Active Flights", value: "248", change: "+12%", color: "#7CFF6B" },
  { title: "Sector Load", value: "74%", change: "+4%", color: "#4FD1FF" },
  { title: "Avg Response", value: "1.8s", change: "-0.4s", color: "#FFB547" },
  {
    title: "Radar Accuracy",
    value: "99.2%",
    change: "+0.6%",
    color: "#7CFF6B",
  },
];

const trafficData = [22, 48, 31, 74, 40, 88, 58, 79];

const sectors = [
  { sector: "ALPHA", flights: 42, status: "NORMAL" },
  { sector: "BRAVO", flights: 61, status: "MODERATE" },
  { sector: "CHARLIE", flights: 89, status: "HEAVY" },
  { sector: "DELTA", flights: 56, status: "NORMAL" },
];

const logs = [
  "Traffic density increased in Sector Charlie",
  "Radar synchronization completed",
  "Weather scan updated successfully",
  "Pilot request queue stabilized",
  "North corridor traffic rerouted",
  "Northern corridor rerouting initiated",
  "Weather turbulence detected in Bravo sector",
  "Emergency landing request acknowledged",
];

export default function Analytics() {
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
            <p className="text-[#7CFF6B] text-[10px] tracking-[0.28em] mb-1">
              ANALYTICS OVERVIEW
            </p>

            <h1 className="text-lg font-black text-white">
              Tactical Analytics
            </h1>

            <div className="text-[10px] tracking-[0.18em] text-zinc-500 mt-1 font-mono">
              <div className="flex items-center gap-3">
                <span>Live Operational Metrics</span>
                <span className="text-zinc-700">•</span>
                <span className="text-cyan-400">Updated Every 2 Seconds</span>
              </div>
            </div>
          </div>

          <div className="px-3 py-2 rounded-xl border border-[#7CFF6B]/20 bg-[#7CFF6B]/10">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#7CFF6B]"
              />
              <span className="text-xs font-semibold text-[#7CFF6B]">
                ANALYTICS ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
          {/* LEFT */}
          <div className="col-span-9 flex flex-col gap-3 min-h-0">
            {/* STATS ROW */}
            <div className="grid grid-cols-4 gap-3 flex-shrink-0">
              {sectorStats.map((stat) => (
                <div
                  key={stat.title}
                  className="bg-[#0B1220] border border-white/10 rounded-2xl p-3"
                >
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-2">
                    {stat.title}
                  </p>
                  <div className="flex items-end justify-between">
                    <h2 className="text-2xl font-black">{stat.value}</h2>
                    <span
                      className="text-xs font-semibold"
                      style={{ color: stat.color }}
                    >
                      {stat.change}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* BAR CHART */}
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
              {/* CHART HEADER */}
              <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <div>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                    AIRSPACE TRAFFIC
                  </p>
                  <h2 className="text-lg font-black">Sector Activity</h2>
                </div>
                <div className="px-3 py-1.5 rounded-xl bg-cyan-500/10 text-cyan-400 text-xs font-semibold">
                  LIVE DATA
                </div>
              </div>

              {/*
                BARS — fixed h-40 so height:X% resolves correctly.
                flex-1 + min-h-0 alone doesn't give CSS a "definite height"
                that percentage children can reference.
              */}
              <div className="flex-1 min-h-0 flex flex-col">
                <div className="flex-1 min-h-0 flex items-end justify-between gap-3">
                  {trafficData.map((height, index) => (
                    <div key={index} className="flex-1 h-full flex items-end">
                      <motion.div
                        initial={{ height: 0 }}
                        animate={{ height: `${height}%` }}
                        transition={{ duration: 0.8, delay: index * 0.08 }}
                        style={{ height: `${height}%` }}
                        className="
                          w-full
                          rounded-t-[18px]
                          bg-gradient-to-t
                          from-[#58F29B]
                          to-cyan-400
                          shadow-[0_0_30px_rgba(34,211,238,0.18)]
                        "
                      />
                    </div>
                  ))}
                </div>

                {/* X-AXIS */}
                <div
                  className="
                    grid grid-cols-8 gap-3 mt-3
                    text-center text-[10px] text-zinc-500 tracking-[0.15em]
                    flex-shrink-0
                  "
                >
                  {["00", "03", "06", "09", "12", "15", "18", "21"].map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-3 min-h-0 flex flex-col gap-3">
            {/* SECTOR STATUS */}
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-4 flex-shrink-0">
              <div className="mb-3">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  SECTOR STATUS
                </p>
                <h2 className="text-lg font-black">Traffic Density</h2>
              </div>

              <div className="space-y-2">
                {sectors.map((sector) => (
                  <div
                    key={sector.sector}
                    className="border border-white/5 rounded-2xl p-3"
                  >
                    <div className="flex items-center justify-between mb-1.5">
                      <h3 className="font-bold text-xs">{sector.sector}</h3>
                      <span
                        className={`text-[10px] ${
                          sector.status === "HEAVY"
                            ? "text-red-400"
                            : sector.status === "MODERATE"
                              ? "text-[#FFB547]"
                              : "text-[#7CFF6B]"
                        }`}
                      >
                        {sector.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-[10px]">
                      <span className="text-zinc-500">Active Flights</span>
                      <span>{sector.flights}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* TACTICAL ALERTS */}
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
                  AIRSPACE INCIDENTS
                </p>
                <h2 className="text-lg font-black">Tactical Alerts</h2>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 min-h-0 pr-1">
                {logs.map((log, index) => (
                  <motion.div
                    key={log}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="border border-white/5 rounded-2xl p-3"
                  >
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0" />
                      <p className="text-[10px] text-zinc-300 leading-relaxed">
                        {log}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
