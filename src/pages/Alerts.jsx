import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import {
  AlertTriangle,
  ShieldAlert,
  CloudLightning,
  RadioTower,
  Plane,
  Activity,
  Satellite,
  Fuel,
} from "lucide-react";

const alerts = [
  {
    level: "CRITICAL",
    title: "Emergency Fuel Advisory",
    sector: "Sector Bravo",
    time: "12s ago",
  },
  {
    level: "WARNING",
    title: "Severe Weather Disturbance",
    sector: "Sector Charlie",
    time: "1m ago",
  },
  {
    level: "ADVISORY",
    title: "Radar Signal Fluctuation",
    sector: "Sector Alpha",
    time: "3m ago",
  },
  {
    level: "WARNING",
    title: "Runway Congestion",
    sector: "RWY 24L",
    time: "5m ago",
  },
];

const timeline = [
  "Emergency signal received from DAL912",
  "Priority runway sequence activated",
  "Emergency response teams dispatched",
  "Fuel reserve monitoring enabled",
  "Weather rerouting corridor approved",
];

export default function Alerts() {
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
          {/* LEFT */}
          <div>
            <p
              className="
                text-[#7CFF6B]
                text-[10px]
                tracking-[0.25em]
                mb-1
              "
            >
              INCIDENT MANAGEMENT SYSTEM
            </p>

            <h1 className="text-lg font-black">Tactical Alert Center</h1>

            <div
              className="
                text-[10px]
                tracking-[0.18em]
                text-zinc-500
                mt-1
                font-mono
              "
            >
              <div className="flex items-center gap-3 flex-wrap">
                <span>Real-Time Emergency Monitoring</span>

                <span className="text-zinc-700">•</span>

                <span className="text-red-400">Priority Incident Active</span>
              </div>
            </div>
          </div>

          {/* RIGHT STATUS */}
          <div
            className="
              w-fit
              px-3
              py-2
              rounded-xl
              border
              border-red-500/20
              bg-red-500/10
            "
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-400"
              />
              <span className="text-xs font-semibold text-red-400">
                ALERT STATUS ACTIVE
              </span>
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
          {/* LEFT — Critical Alerts */}
          <div
            className="
              col-span-3
              min-h-0
              flex
              flex-col
            "
          >
            <div
              className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex-1
                min-h-0
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  INCIDENT FEED
                </p>
                <h2 className="text-lg font-black">Critical Alerts</h2>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 pr-1">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={alert.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="
                      border
                      border-white/5
                      rounded-2xl
                      p-3
                      bg-black/20
                    "
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div className="flex gap-2 min-w-0">
                        <div
                          className={`
                            w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0
                            ${
                              alert.level === "CRITICAL"
                                ? "bg-red-500/10"
                                : alert.level === "WARNING"
                                  ? "bg-[#FFB547]/10"
                                  : "bg-cyan-500/10"
                            }
                          `}
                        >
                          <AlertTriangle
                            size={15}
                            className={
                              alert.level === "CRITICAL"
                                ? "text-red-400"
                                : alert.level === "WARNING"
                                  ? "text-[#FFB547]"
                                  : "text-cyan-400"
                            }
                          />
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-xs font-bold leading-tight">
                            {alert.title}
                          </h3>
                          <p className="text-[10px] text-zinc-500 mt-0.5">
                            {alert.sector}
                          </p>
                        </div>
                      </div>

                      <div className="text-right flex-shrink-0">
                        <p
                          className={`text-[10px] ${
                            alert.level === "CRITICAL"
                              ? "text-red-400"
                              : alert.level === "WARNING"
                                ? "text-[#FFB547]"
                                : "text-cyan-400"
                          }`}
                        >
                          {alert.level}
                        </p>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          {alert.time}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Command + Timeline */}
          <div
            className="
              col-span-6
              flex
              flex-col
              gap-3
              min-h-0
            "
          >
            {/* COMMAND PANEL */}
            <div
              className="
                bg-[#0B1220]
                border
                border-red-500/10
                rounded-3xl
                p-4
                flex-shrink-0
              "
            >
              <div className="flex items-start justify-between gap-4 mb-4">
                <div>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                    INCIDENT COMMAND
                  </p>
                  <h2 className="text-3xl font-black leading-none">DAL912</h2>
                  <p className="text-red-400 mt-1 text-xs">
                    Emergency Landing Sequence Active
                  </p>
                </div>

                <div
                  className="
                    px-3 py-2 rounded-xl border border-red-500/20
                    bg-red-500/10 text-red-400 text-[10px] font-semibold flex-shrink-0
                  "
                >
                  CRITICAL PRIORITY
                </div>
              </div>

              {/* QUICK STATS */}
              <div className="grid grid-cols-4 gap-2">
                {[
                  {
                    icon: Plane,
                    title: "Aircraft",
                    value: "B777-300ER",
                    color: "text-cyan-400",
                  },
                  {
                    icon: Fuel,
                    title: "Fuel",
                    value: "12%",
                    color: "text-[#FFB547]",
                  },
                  {
                    icon: CloudLightning,
                    title: "Weather",
                    value: "Storm",
                    color: "text-cyan-400",
                  },
                  {
                    icon: ShieldAlert,
                    title: "Threat",
                    value: "Critical",
                    color: "text-red-400",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-white/5 rounded-2xl p-3 bg-black/20"
                  >
                    <item.icon size={15} className={`${item.color} mb-2`} />
                    <p className="text-[10px] text-zinc-500 mb-0.5">
                      {item.title}
                    </p>
                    <h3 className="text-xs font-bold">{item.value}</h3>
                  </div>
                ))}
              </div>
            </div>

            {/* TIMELINE */}
            <div
              className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex-1
                min-h-0
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  RESPONSE TIMELINE
                </p>
                <h2 className="text-lg font-black">Incident Progress</h2>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 pr-1">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="
                      flex items-start gap-3
                      border border-white/5 rounded-2xl p-3 bg-black/20
                    "
                  >
                    <div
                      className="
                        w-2 h-2 rounded-full bg-cyan-400 mt-1.5 flex-shrink-0
                        shadow-[0_0_10px_rgba(34,211,238,0.7)]
                      "
                    />
                    <div>
                      <p className="text-xs text-zinc-300">{item}</p>
                      <p className="text-[10px] text-zinc-500 mt-0.5">
                        JUST NOW
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — System Health + Runways */}
          <div
            className="
              col-span-3
              flex
              flex-col
              gap-3
              min-h-0
            "
          >
            {/* SYSTEM HEALTH */}
            <div
              className="
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex-1
                min-h-0
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  SYSTEM HEALTH
                </p>
                <h2 className="text-lg font-black leading-none">
                  Infrastructure
                </h2>
              </div>

              <div className="space-y-2 overflow-y-auto flex-1 pr-1">
                {[
                  {
                    icon: Activity,
                    title: "Radar Stability",
                    status: "99.2%",
                    color: "text-[#7CFF6B]",
                  },
                  {
                    icon: RadioTower,
                    title: "Communications",
                    status: "STABLE",
                    color: "text-cyan-400",
                  },
                  {
                    icon: Satellite,
                    title: "Satellite Link",
                    status: "ONLINE",
                    color: "text-[#7CFF6B]",
                  },
                  {
                    icon: CloudLightning,
                    title: "Weather Severity",
                    status: "MODERATE",
                    color: "text-[#FFB547]",
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-white/5 rounded-2xl p-3 bg-black/20"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2 min-w-0">
                        <div
                          className="
                            w-9 h-9 rounded-xl bg-black/30
                            flex items-center justify-center flex-shrink-0
                          "
                        >
                          <item.icon size={15} className={item.color} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-xs font-semibold leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-[10px] text-zinc-500 mt-0.5">
                            Operational
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] font-semibold whitespace-nowrap ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

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
                {[
                  { runway: "RWY 24L", status: "EMERGENCY" },
                  { runway: "RWY 18R", status: "MAINTENANCE" },
                  { runway: "RWY 09C", status: "AVAILABLE" },
                ].map((runway) => (
                  <div
                    key={runway.runway}
                    className="border border-white/5 rounded-2xl p-3 bg-black/20"
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-xs">{runway.runway}</h3>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          Runway Status
                        </p>
                      </div>
                      <span
                        className={`text-[10px] font-semibold ${
                          runway.status === "EMERGENCY"
                            ? "text-red-400"
                            : runway.status === "MAINTENANCE"
                              ? "text-[#FFB547]"
                              : "text-[#7CFF6B]"
                        }`}
                      >
                        {runway.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
