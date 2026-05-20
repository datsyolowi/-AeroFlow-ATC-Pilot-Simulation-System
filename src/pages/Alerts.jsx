import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
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

const levelColor = (level, dark) => {
  if (level === "CRITICAL") return dark ? "text-red-400" : "text-red-600";
  if (level === "WARNING") return dark ? "text-[#FFB547]" : "text-amber-600";
  return dark ? "text-cyan-400" : "text-zinc-500";
};

const levelBg = (level, dark) => {
  if (level === "CRITICAL")
    return dark
      ? "bg-red-500/10 border border-red-500/20"
      : "bg-red-50 border border-red-100";
  if (level === "WARNING")
    return dark
      ? "bg-[#FFB547]/10 border border-[#FFB547]/20"
      : "bg-amber-50 border border-amber-100";
  return dark
    ? "bg-cyan-500/10 border border-cyan-500/20"
    : "bg-zinc-100 border border-zinc-200";
};

export default function Alerts() {
  const { nightMode } = useTheme();
  const dark = nightMode;

  const card = dark
    ? "bg-[#0B1220] border border-white/10 text-white"
    : "bg-white border border-zinc-200 text-zinc-900";

  const inner = dark
    ? "border border-white/5 bg-black/20"
    : "border border-zinc-100 bg-zinc-50";

  return (
    <MainLayout>
      <div
        className={`w-full h-full overflow-y-auto px-6 py-6 pb-14 flex flex-col gap-6 transition-colors duration-300 ${
          dark ? "bg-[#050816]" : "bg-[#f5f5f7]"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex items-start justify-between flex-shrink-0">
          <div>
            <p
              className={`text-[10px] tracking-[0.32em] mb-2 font-semibold ${
                dark ? "text-[#7CFF6B]" : "text-zinc-400"
              }`}
            >
              INCIDENT MANAGEMENT SYSTEM
            </p>

            <h1
              className={`text-4xl leading-none font-black tracking-tight ${
                dark ? "text-white" : "text-zinc-900"
              }`}
            >
              Tactical Alert Center
            </h1>

            <div className="flex items-center gap-3 mt-3 text-[11px] tracking-[0.18em] font-mono">
              <span className="text-zinc-500">
                Real-Time Emergency Monitoring
              </span>
              <div
                className={`w-1 h-1 rounded-full ${dark ? "bg-zinc-600" : "bg-zinc-300"}`}
              />
              <span className={dark ? "text-red-400" : "text-red-500"}>
                Priority Incident Active
              </span>
            </div>
          </div>

          <div
            className={`px-5 py-3 rounded-2xl border ${
              dark
                ? "border-red-500/20 bg-red-500/10"
                : "border-red-200 bg-red-50"
            }`}
          >
            <div className="flex items-center gap-2.5">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.2, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${dark ? "bg-red-400" : "bg-red-500"}`}
              />
              <span
                className={`text-sm font-semibold tracking-wide ${dark ? "text-red-400" : "text-red-600"}`}
              >
                ALERT STATUS ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* COMMAND PANEL */}
        <div className={`${card} rounded-3xl p-7`}>
          <div className="flex items-start justify-between gap-6 mb-7">
            <div>
              <p className="text-zinc-500 text-[10px] tracking-[0.24em] mb-2.5">
                INCIDENT COMMAND
              </p>
              <h2
                className={`text-6xl font-black leading-none tracking-tight ${
                  dark ? "text-white" : "text-zinc-900"
                }`}
              >
                DAL912
              </h2>
              <p
                className={`mt-3 text-sm font-medium ${dark ? "text-red-400" : "text-red-600"}`}
              >
                Emergency Landing Sequence Active
              </p>
            </div>

            <div
              className={`px-5 py-2.5 rounded-2xl border text-xs font-semibold flex-shrink-0 tracking-widest ${
                dark
                  ? "border-red-500/20 bg-red-500/10 text-red-400"
                  : "border-red-200 bg-red-50 text-red-600"
              }`}
            >
              CRITICAL PRIORITY
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4">
            {[
              {
                icon: Plane,
                title: "Aircraft",
                value: "B777-300ER",
                darkColor: "text-cyan-400",
                lightColor: "text-zinc-700",
                darkBg: "bg-cyan-400/10",
                lightBg: "bg-zinc-100",
              },
              {
                icon: Fuel,
                title: "Fuel",
                value: "12%",
                darkColor: "text-[#FFB547]",
                lightColor: "text-amber-600",
                darkBg: "bg-[#FFB547]/10",
                lightBg: "bg-amber-50",
              },
              {
                icon: CloudLightning,
                title: "Weather",
                value: "Storm",
                darkColor: "text-cyan-400",
                lightColor: "text-zinc-700",
                darkBg: "bg-cyan-400/10",
                lightBg: "bg-zinc-100",
              },
              {
                icon: ShieldAlert,
                title: "Threat",
                value: "Critical",
                darkColor: "text-red-400",
                lightColor: "text-red-600",
                darkBg: "bg-red-400/10",
                lightBg: "bg-red-50",
              },
            ].map((item) => (
              <div
                key={item.title}
                className={`${inner} rounded-2xl p-5 flex items-center gap-4`}
              >
                <div
                  className={`w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 ${
                    dark ? item.darkBg : item.lightBg
                  }`}
                >
                  <item.icon
                    size={20}
                    className={dark ? item.darkColor : item.lightColor}
                  />
                </div>
                <div>
                  <p className="text-[10px] text-zinc-500 mb-1.5 tracking-widest uppercase">
                    {item.title}
                  </p>
                  <h3 className="text-sm font-bold">{item.value}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-5 items-stretch">
          {/* LEFT — Critical Alerts */}
          <div className="col-span-3 flex flex-col">
            <div className={`${card} rounded-3xl p-6 flex-1 flex flex-col`}>
              <div className="mb-5 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.24em] mb-1.5">
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
                    className={`${inner} rounded-2xl p-4 flex-1 flex flex-col justify-between`}
                  >
                    <div className="flex items-start gap-3 mb-3">
                      <div
                        className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${levelBg(alert.level, dark)}`}
                      >
                        <AlertTriangle
                          size={15}
                          className={levelColor(alert.level, dark)}
                        />
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="text-xs font-bold leading-tight">
                          {alert.title}
                        </h3>
                        <p className="text-[10px] text-zinc-500 mt-1">
                          {alert.sector}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between">
                      <span
                        className={`text-[10px] font-semibold tracking-wider ${levelColor(alert.level, dark)}`}
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
            <div className={`${card} rounded-3xl p-6 flex-1 flex flex-col`}>
              <div className="mb-5 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.24em] mb-1.5">
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
                    className={`${inner} flex items-start gap-5 rounded-2xl p-5 flex-1`}
                  >
                    <div className="flex flex-col items-center gap-1 pt-1 flex-shrink-0">
                      <div
                        className={`w-2 h-2 rounded-full ${
                          dark
                            ? "bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,0.7)]"
                            : "bg-zinc-900"
                        }`}
                      />
                      {index < timeline.length - 1 && (
                        <div
                          className={`w-px flex-1 mt-1 ${
                            dark ? "bg-cyan-400/20" : "bg-zinc-200"
                          }`}
                        />
                      )}
                    </div>

                    <div className="flex-1">
                      <p
                        className={`text-sm font-medium ${dark ? "text-zinc-200" : "text-zinc-800"}`}
                      >
                        {item}
                      </p>
                      <p className="text-[10px] text-zinc-500 mt-1.5 tracking-widest">
                        JUST NOW
                      </p>
                    </div>

                    <span className="text-[10px] text-zinc-400 font-mono flex-shrink-0 pt-0.5">
                      T+{String(index * 2).padStart(2, "0")}:00
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT — System Health */}
          <div className="col-span-3 flex flex-col gap-5">
            {/* SYSTEM HEALTH */}
            <div className={`${card} rounded-3xl p-6`}>
              <div className="mb-5">
                <p className="text-zinc-500 text-[10px] tracking-[0.24em] mb-1.5">
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
                    darkColor: "text-[#7CFF6B]",
                    lightColor: "text-zinc-900",
                  },
                  {
                    icon: RadioTower,
                    title: "Communications",
                    status: "STABLE",
                    darkColor: "text-cyan-400",
                    lightColor: "text-zinc-900",
                  },
                  {
                    icon: Satellite,
                    title: "Satellite Link",
                    status: "ONLINE",
                    darkColor: "text-[#7CFF6B]",
                    lightColor: "text-zinc-900",
                  },
                  {
                    icon: CloudLightning,
                    title: "Weather Severity",
                    status: "MODERATE",
                    darkColor: "text-[#FFB547]",
                    lightColor: "text-amber-600",
                  },
                ].map((item) => (
                  <div key={item.title} className={`${inner} rounded-2xl p-4`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <item.icon
                          size={15}
                          className={dark ? item.darkColor : item.lightColor}
                        />
                        <span className="text-xs font-medium">
                          {item.title}
                        </span>
                      </div>
                      <span
                        className={`text-xs font-bold ${dark ? item.darkColor : item.lightColor}`}
                      >
                        {item.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RUNWAY STATUS */}
            <div className={`${card} rounded-3xl p-6 flex-1`}>
              <div className="mb-5">
                <p className="text-zinc-500 text-[10px] tracking-[0.24em] mb-1.5">
                  RUNWAY STATUS
                </p>
                <h2 className="text-xl font-black">Active Runways</h2>
              </div>

              <div className="space-y-3">
                {[
                  { id: "RWY 24L", status: "ACTIVE", queue: "Landing: 4" },
                  { id: "RWY 18R", status: "MAINT", queue: "Unavailable" },
                  { id: "RWY 09C", status: "ACTIVE", queue: "Depart: 2" },
                ].map((rwy) => (
                  <div key={rwy.id} className={`${inner} rounded-2xl p-4`}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold">{rwy.id}</span>
                      <span
                        className={`text-[10px] font-semibold tracking-wider ${
                          rwy.status === "ACTIVE"
                            ? dark
                              ? "text-[#7CFF6B]"
                              : "text-green-600"
                            : dark
                              ? "text-[#FFB547]"
                              : "text-amber-600"
                        }`}
                      >
                        {rwy.status}
                      </span>
                    </div>
                    <p className="text-[10px] text-zinc-500">{rwy.queue}</p>
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
