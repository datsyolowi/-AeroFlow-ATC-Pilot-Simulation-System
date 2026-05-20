import MainLayout from "../layouts/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { useTheme } from "../context/ThemeContext";
import {
  Settings2,
  Radar,
  Bell,
  Shield,
  Globe,
  RadioTower,
  Moon,
  ChevronDown,
  Save,
  RotateCcw,
  Sun,
} from "lucide-react";

function Toggle({ enabled, onToggle, color = "#7CFF6B" }) {
  return (
    <button
      onClick={onToggle}
      className="relative flex-shrink-0 w-10 h-5 rounded-full transition-all duration-300"
      style={{
        backgroundColor: enabled ? color + "33" : "rgba(120,120,120,0.15)",
      }}
    >
      <motion.div
        animate={{ x: enabled ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-4 h-4 rounded-full"
        style={{ backgroundColor: enabled ? color : "#71717a" }}
      />
    </button>
  );
}

function Select({ value, options, onChange, darkMode }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className={`
          flex items-center gap-2 px-3 py-1.5 rounded-xl
          border text-xs font-medium whitespace-nowrap transition
          ${
            darkMode
              ? "bg-white/5 border-white/10 text-zinc-300 hover:bg-white/10"
              : "bg-zinc-100 border-zinc-200 text-zinc-700 hover:bg-zinc-200"
          }
        `}
      >
        {value}
        <ChevronDown
          size={12}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            className={`
              absolute right-0 top-full mt-1 z-[999]
              rounded-xl overflow-hidden min-w-[160px]
              shadow-[0_8px_32px_rgba(0,0,0,0.10)]
              border
              ${
                darkMode
                  ? "bg-[#0B1220] border-white/10"
                  : "bg-white border-zinc-200"
              }
            `}
          >
            {options.map((opt) => (
              <button
                key={opt}
                onClick={() => {
                  onChange(opt);
                  setOpen(false);
                }}
                className={`
                  w-full text-left px-3 py-2 text-xs transition
                  ${
                    opt === value
                      ? darkMode
                        ? "text-white bg-white/10"
                        : "text-zinc-900 bg-zinc-100 font-semibold"
                      : darkMode
                        ? "text-zinc-300 hover:bg-white/5"
                        : "text-zinc-600 hover:bg-zinc-50"
                  }
                `}
              >
                {opt}
              </button>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

function Slider({
  value,
  min,
  max,
  step = 1,
  unit = "",
  onChange,
  color = "#7CFF6B",
  darkMode,
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex items-center gap-3">
      <div
        className={`flex-1 relative h-1.5 rounded-full ${
          darkMode ? "bg-white/5" : "bg-zinc-200"
        }`}
      >
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: darkMode ? color : "#111111",
          }}
        />
        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
        />
      </div>

      <span
        className={`text-[10px] font-mono w-12 text-right ${
          darkMode ? "text-zinc-300" : "text-zinc-500"
        }`}
      >
        {value}
        {unit}
      </span>
    </div>
  );
}

export default function Settings() {
  const [systems, setSystems] = useState({
    radar: true,
    communications: true,
    alerts: true,
    security: true,
  });

  const [theme, setTheme] = useState("Tactical Dark");
  const [units, setUnits] = useState("Nautical Miles");
  const [language, setLanguage] = useState("English (US)");
  const [resolution, setResolution] = useState("Ultra HD");

  const { nightMode, setNightMode } = useTheme();

  const [brightness, setBrightness] = useState(80);
  const [region, setRegion] = useState("Asia-Pacific");
  const [saved, setSaved] = useState(false);

  const darkMode = nightMode;

  const [coreStats, setCoreStats] = useState({
    radar: 98,
    signal: 94,
    uptime: 99,
    network: 96,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setCoreStats((prev) => ({
        radar: Math.min(
          100,
          Math.max(90, prev.radar + (Math.random() - 0.5) * 2),
        ),
        signal: Math.min(
          100,
          Math.max(88, prev.signal + (Math.random() - 0.5) * 2),
        ),
        uptime: Math.min(
          100,
          Math.max(97, prev.uptime + (Math.random() - 0.3) * 0.5),
        ),
        network: Math.min(
          100,
          Math.max(89, prev.network + (Math.random() - 0.5) * 2),
        ),
      }));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2000);
  };

  const modules = [
    {
      title: "Radar System",
      desc: "Sweep interval and tracking precision",
      icon: Radar,
      color: darkMode ? "#7CFF6B" : "#16a34a",
      key: "radar",
    },
    {
      title: "Communications",
      desc: "Channels, frequencies, and routing",
      icon: RadioTower,
      color: darkMode ? "#22d3ee" : "#0284c7",
      key: "communications",
    },
    {
      title: "Alert Notifications",
      desc: "Severity thresholds and delivery",
      icon: Bell,
      color: darkMode ? "#FFB547" : "#d97706",
      key: "alerts",
    },
    {
      title: "Security Protocol",
      desc: "Encryption and authorization",
      icon: Shield,
      color: darkMode ? "#f87171" : "#dc2626",
      key: "security",
    },
  ];

  const statItems = [
    {
      label: "Radar Systems",
      value: coreStats.radar,
      color: darkMode ? "#7CFF6B" : "#111111",
    },
    {
      label: "Signal Integrity",
      value: coreStats.signal,
      color: darkMode ? "#22d3ee" : "#111111",
    },
    {
      label: "Server Uptime",
      value: coreStats.uptime,
      color: darkMode ? "#7CFF6B" : "#111111",
    },
    {
      label: "Network Stability",
      value: coreStats.network,
      color: darkMode ? "#FFB547" : "#111111",
    },
  ];

  const cardClass = darkMode
    ? "bg-[#0B1220] border border-white/10 text-white"
    : "bg-white border border-zinc-200 text-zinc-900";

  const innerCard = darkMode
    ? "border border-white/5 bg-black/20"
    : "border border-zinc-100 bg-zinc-50";

  return (
    <MainLayout>
      <div
        className={`w-full h-full overflow-y-auto p-3 pb-12 flex flex-col gap-3 transition-colors duration-300 ${
          darkMode ? "bg-[#050816]" : "bg-[#fafafa]"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
          <div>
            <p
              className={`text-[10px] tracking-[0.28em] mb-1 ${darkMode ? "text-[#7CFF6B]" : "text-zinc-400"}`}
            >
              SYSTEM CONFIGURATION CENTER
            </p>

            <h1
              className={`text-3xl font-black ${darkMode ? "text-white" : "text-zinc-900"}`}
            >
              Tactical Settings
            </h1>

            <div
              className={`flex flex-wrap items-center gap-3 text-[10px] tracking-[0.18em] mt-1 font-mono ${darkMode ? "text-zinc-500" : "text-zinc-400"}`}
            >
              <span>Operational System Preferences</span>
              <span>•</span>
              <span className={darkMode ? "text-cyan-400" : "text-zinc-500"}>
                All Modules Synchronized
              </span>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={() => window.location.reload()}
              className={`
                flex items-center gap-1.5 px-3 py-2 rounded-xl
                text-xs font-semibold transition border
                ${
                  darkMode
                    ? "bg-white/5 border-white/10 text-zinc-400 hover:bg-white/10"
                    : "bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-100"
                }
              `}
            >
              <RotateCcw size={12} />
              Reset
            </button>

            <button
              onClick={handleSave}
              className={`flex items-center gap-1.5 px-3 py-2 rounded-xl border text-xs font-semibold transition ${
                darkMode
                  ? ""
                  : "bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-700"
              }`}
              style={
                darkMode
                  ? {
                      backgroundColor: saved ? "#7CFF6B22" : "#7CFF6B11",
                      borderColor: saved ? "#7CFF6B55" : "#7CFF6B22",
                      color: "#7CFF6B",
                    }
                  : {}
              }
            >
              <Save size={12} />
              {saved ? "Saved!" : "Save Changes"}
            </button>

            <div
              className={`px-3 py-2 rounded-xl border ${
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
                  SYSTEM STABLE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 xl:grid-cols-12 gap-3 xl:items-stretch">
          {/* LEFT */}
          <div className="xl:col-span-8 flex flex-col gap-3">
            {/* SYSTEM MODULES */}
            <div className={`${cardClass} rounded-3xl p-4`}>
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  CONTROL MODULES
                </p>
                <h2 className="text-xl font-black">System Configuration</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {modules.map((item) => (
                  <div
                    key={item.title}
                    className={`${innerCard} rounded-2xl p-4`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-3">
                        <div
                          className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                            darkMode
                              ? "bg-black/30"
                              : "bg-white border border-zinc-100"
                          }`}
                        >
                          <item.icon size={18} style={{ color: item.color }} />
                        </div>
                        <div>
                          <h3 className="text-sm font-bold">{item.title}</h3>
                          <p className="text-[10px] text-zinc-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <Toggle
                        enabled={systems[item.key]}
                        onToggle={() =>
                          setSystems((prev) => ({
                            ...prev,
                            [item.key]: !prev[item.key],
                          }))
                        }
                        color={item.color}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* INTERFACE SETTINGS */}
            <div className={`${cardClass} rounded-3xl p-4 flex-1`}>
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  USER PREFERENCES
                </p>
                <h2 className="text-xl font-black">Interface Settings</h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    title: "Interface Theme",
                    subtitle: "Color scheme and visual style",
                    value: theme,
                    options: [
                      "Tactical Dark",
                      "Midnight Blue",
                      "Classic Green",
                    ],
                    onChange: setTheme,
                  },
                  {
                    title: "Display Resolution",
                    subtitle: "Screen rendering quality",
                    value: resolution,
                    options: ["Ultra HD", "Full HD", "HD"],
                    onChange: setResolution,
                  },
                  {
                    title: "Tracking Units",
                    subtitle: "Distance measurement",
                    value: units,
                    options: ["Nautical Miles", "Kilometers", "Miles"],
                    onChange: setUnits,
                  },
                  {
                    title: "Language",
                    subtitle: "System locale",
                    value: language,
                    options: ["English (US)", "English (UK)", "Deutsch"],
                    onChange: setLanguage,
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className={`${innerCard} rounded-2xl p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4`}
                  >
                    <div>
                      <h3 className="text-sm font-semibold">{item.title}</h3>
                      <p className="text-[10px] text-zinc-500 mt-1">
                        {item.subtitle}
                      </p>
                    </div>
                    <Select
                      value={item.value}
                      options={item.options}
                      onChange={item.onChange}
                      darkMode={darkMode}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="xl:col-span-4 flex flex-col gap-3 h-full">
            {/* QUICK ACCESS */}
            <div className={`${cardClass} rounded-3xl p-4 flex-1`}>
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  QUICK ACCESS
                </p>
                <h2 className="text-xl font-black">Utilities</h2>
              </div>

              <div className="space-y-3">
                {/* REGION */}
                <div className={`${innerCard} rounded-2xl p-4`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          darkMode
                            ? "bg-black/30"
                            : "bg-white border border-zinc-100"
                        }`}
                      >
                        <Globe
                          size={18}
                          className={
                            darkMode ? "text-[#7CFF6B]" : "text-zinc-700"
                          }
                        />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">
                          Regional Network
                        </h3>
                        <p className="text-[10px] text-zinc-500 mt-1">
                          Server region
                        </p>
                      </div>
                    </div>
                    <Select
                      value={region}
                      options={["Asia-Pacific", "North America", "Europe"]}
                      onChange={setRegion}
                      darkMode={darkMode}
                    />
                  </div>
                </div>

                {/* NIGHT MODE */}
                <div className={`${innerCard} rounded-2xl p-4`}>
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                          darkMode
                            ? "bg-black/30"
                            : "bg-white border border-zinc-100"
                        }`}
                      >
                        {nightMode ? (
                          <Moon size={18} className="text-[#FFB547]" />
                        ) : (
                          <Sun size={18} className="text-zinc-500" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold">Night Mode</h3>
                        <p className="text-[10px] text-zinc-500 mt-1">
                          {nightMode ? "Enabled" : "Disabled"}
                        </p>
                      </div>
                    </div>
                    <Toggle
                      enabled={nightMode}
                      onToggle={() => setNightMode(!nightMode)}
                      color={darkMode ? "#FFB547" : "#111111"}
                    />
                  </div>
                </div>

                {/* BRIGHTNESS */}
                <div className={`${innerCard} rounded-2xl p-4`}>
                  <div className="flex items-center gap-3 mb-3">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center ${
                        darkMode
                          ? "bg-black/30"
                          : "bg-white border border-zinc-100"
                      }`}
                    >
                      <Settings2
                        size={18}
                        className={darkMode ? "text-red-400" : "text-zinc-500"}
                      />
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold">
                        Screen Brightness
                      </h3>
                      <p className="text-[10px] text-zinc-500 mt-1">
                        Display luminosity
                      </p>
                    </div>
                  </div>
                  <Slider
                    value={brightness}
                    min={10}
                    max={100}
                    unit="%"
                    onChange={setBrightness}
                    color={darkMode ? "#f87171" : "#111111"}
                    darkMode={darkMode}
                  />
                </div>
              </div>
            </div>

            {/* CORE STATUS */}
            <div className={`${cardClass} rounded-3xl p-4`}>
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  SYSTEM OVERVIEW
                </p>
                <h2 className="text-xl font-black">Core Status</h2>
              </div>

              <div className="space-y-4">
                {statItems.map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-zinc-400">
                        {item.label}
                      </span>
                      <span
                        className="text-xs font-semibold font-mono"
                        style={{ color: item.color }}
                      >
                        {item.value.toFixed(1)}%
                      </span>
                    </div>
                    <div
                      className={`w-full h-2 rounded-full overflow-hidden ${
                        darkMode ? "bg-white/5" : "bg-zinc-100"
                      }`}
                    >
                      <motion.div
                        animate={{ width: `${item.value}%` }}
                        transition={{ duration: 1 }}
                        className="h-full rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
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
