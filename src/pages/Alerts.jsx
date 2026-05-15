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

const levelColor = (level) => {
  if (level === "CRITICAL") return "text-red-400";
  if (level === "WARNING") return "text-[#FFB547]";
  return "text-cyan-400";
};

const levelBg = (level) => {
  if (level === "CRITICAL") return "bg-red-500/10";
  if (level === "WARNING") return "bg-[#FFB547]/10";
  return "bg-cyan-500/10";
};

export default function Alerts() {
  return (
    <MainLayout>
      {/* Single scroll container */}
      <div className="w-full h-full overflow-y-auto p-4 pb-12 flex flex-col gap-4">
        {/* TOP BAR */}
        <div className="flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[#7CFF6B] text-[10px] tracking-[0.28em] mb-1">
              INCIDENT MANAGEMENT SYSTEM
            </p>
            <h1 className="text-[34px] leading-none font-black tracking-tight">
              Tactical Alert Center
            </h1>
            <div className="flex items-center gap-3 mt-3 text-[11px] tracking-[0.2em] font-mono">
              <span className="text-zinc-500">
                Real-Time Emergency Monitoring
              </span>
              <div className="w-1 h-1 rounded-full bg-zinc-700" />
              <span className="text-red-400">Priority Incident Active</span>
            </div>
          </div>

          <div className="px-4 py-3 rounded-2xl border border-red-500/20 bg-red-500/10">
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-red-400"
              />
              <span className="text-sm font-semibold text-red-400">
                ALERT STATUS ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* COMMAND PANEL */}
        <div className="bg-[#0B1220] border border-red-500/15 rounded-3xl p-6">
          <div className="flex items-start justify-between gap-6 mb-6">
            <div>
              <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-2">
                INCIDENT COMMAND
              </p>
              <h2 className="text-5xl font-black leading-none tracking-tight">
                DAL912
              </h2>
              <p className="text-red-400 mt-2 text-sm font-medium">
                Emergency Landing Sequence Active
              </p>
            </div>
            <div className="px-4 py-2.5 rounded-2xl border border-red-500/20 bg-red-500/10 text-red-400 text-xs font-semibold flex-shrink-0">
              CRITICAL PRIORITY
            </div>
          </div>

          <div className="grid grid-cols-4 gap-3">
            {[
              {
                icon: Plane,
                title: "Aircraft",
                value: "B777-300ER",
                color: "text-cyan-400",
                bg: "bg-cyan-400/10",
              },
              {
                icon: Fuel,
                title: "Fuel",
                value: "12%",
                color: "text-[#FFB547]",
                bg: "bg-[#FFB547]/10",
              },
              {
                icon: CloudLightning,
                title: "Weather",
                value: "Storm",
                color: "text-cyan-400",
                bg: "bg-cyan-400/10",
              },
              {
                icon: ShieldAlert,
                title: "Threat",
                value: "Critical",
                color: "text-red-400",
                bg: "bg-red-400/10",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="border border-white/5 rounded-2xl p-4 bg-black/20 flex items-center gap-4"
              >
                <div
                  className={`w-11 h-11 rounded-xl ${item.bg} flex items-center justify-center flex-shrink-0`}
                >
                  <item.icon size={18} className={item.color} />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 mb-1 tracking-widest uppercase">
                    {item.title}
                  </p>
                  <h3 className="text-sm font-bold">{item.value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-4 items-stretch">
          {/* LEFT — Critical Alerts */}
          <div className="col-span-3 flex flex-col">
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-5 flex-1 flex flex-col">
              <div className="mb-4 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  INCIDENT FEED
                </p>
                <h2 className="text-xl font-black">Critical Alerts</h2>
              </div>
              <div className="flex flex-col flex-1 justify-between gap-3">
                {alerts.map((alert, index) => (
                  <motion.div
                    key={alert.title}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="border border-white/5 rounded-2xl p-4 bg-black/20 flex-1 flex flex-col justify-between"
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${levelBg(alert.level)}`}
                      >
                        <AlertTriangle
                          size={15}
                          className={levelColor(alert.level)}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs font-bold leading-tight">
                          {alert.title}
                        </h3>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          {alert.sector}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-semibold ${levelColor(alert.level)}`}
                      >
                        {alert.level}
                      </span>
                      <span className="text-[10px] text-zinc-500">
                        {alert.time}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Timeline */}
          <div className="col-span-6 flex flex-col">
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-5 flex-1 flex flex-col">
              <div className="mb-4 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  RESPONSE TIMELINE
                </p>
                <h2 className="text-xl font-black">Incident Progress</h2>
              </div>
              <div className="flex flex-col flex-1 justify-between gap-3">
                {timeline.map((item, index) => (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.06 }}
                    className="flex items-start gap-4 border border-white/5 rounded-2xl p-4 bg-black/20 flex-1"
                  >
                    <div className="flex flex-col items-center gap-1 pt-1 flex-shrink-0">
                      <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]" />
                      {index < timeline.length - 1 && (
                        <div className="w-px flex-1 bg-cyan-400/20 mt-1" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-zinc-200 font-medium">
                        {item}
                      </p>
                      <p className="text-[10px] text-zinc-500 mt-1 tracking-widest">
                        JUST NOW
                      </p>
                    </div>
                    <span className="text-[10px] text-zinc-600 font-mono flex-shrink-0 pt-0.5">
                      T+{String(index * 2).padStart(2, "0")}:00
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — System Health + Runways */}
          <div className="col-span-3 flex flex-col gap-4">
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-5">
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  SYSTEM HEALTH
                </p>
                <h2 className="text-xl font-black">Infrastructure</h2>
              </div>
              <div className="space-y-3">
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
                    className="border border-white/5 rounded-2xl p-4 bg-black/20"
                  >
                    <div className="flex items-center justify-between gap-6">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-10 h-10 rounded-xl bg-black/30 flex items-center justify-center flex-shrink-0">
                          <item.icon size={17} className={item.color} />
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-sm font-semibold leading-tight">
                            {item.title}
                          </h3>
                          <p className="text-[10px] text-zinc-500 mt-1">
                            Operational
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-xs font-bold whitespace-nowrap tracking-wide ${item.color}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-5">
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  RUNWAY OPERATIONS
                </p>
                <h2 className="text-xl font-black">Active Runways</h2>
              </div>
              <div className="space-y-3">
                {[
                  {
                    runway: "RWY 24L",
                    status: "EMERGENCY",
                    color: "text-red-400",
                    bg: "border-red-500/10",
                  },
                  {
                    runway: "RWY 18R",
                    status: "MAINTENANCE",
                    color: "text-[#FFB547]",
                    bg: "border-[#FFB547]/10",
                  },
                  {
                    runway: "RWY 09C",
                    status: "AVAILABLE",
                    color: "text-[#7CFF6B]",
                    bg: "border-[#7CFF6B]/10",
                  },
                ].map((runway) => (
                  <div
                    key={runway.runway}
                    className={`border ${runway.bg} rounded-2xl p-4 bg-black/20`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <div>
                        <h3 className="font-bold text-sm">{runway.runway}</h3>
                        <p className="text-[10px] text-zinc-500 mt-0.5">
                          Runway Status
                        </p>
                      </div>
                      <span className={`text-[10px] font-bold ${runway.color}`}>
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
