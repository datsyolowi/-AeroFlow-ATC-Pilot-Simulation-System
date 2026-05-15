import MainLayout from "../layouts/MainLayout";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
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
        backgroundColor: enabled ? color + "33" : "rgba(255,255,255,0.05)",
      }}
    >
      <motion.div
        animate={{ x: enabled ? 20 : 2 }}
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
        className="absolute top-0.5 w-4 h-4 rounded-full"
        style={{
          backgroundColor: enabled ? color : "#52525b",
        }}
      />
    </button>
  );
}

function Select({ value, options, onChange }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative z-50">
      <button
        onClick={() => setOpen(!open)}
        className="
          flex items-center gap-2 px-3 py-1.5 rounded-xl
          bg-cyan-400/10 border border-cyan-400/10
          text-cyan-400 text-xs font-medium whitespace-nowrap
          hover:bg-cyan-400/20 transition
        "
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
            className="
              absolute right-0 top-full mt-1 z-[999]
              bg-[#0B1220]
              border border-white/10
              rounded-xl
              overflow-hidden
              min-w-[160px]
              shadow-[0_8px_32px_rgba(0,0,0,0.45)]
            "
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
                      ? "text-cyan-400 bg-cyan-400/10"
                      : "text-zinc-300 hover:bg-white/5"
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
}) {
  const pct = ((value - min) / (max - min)) * 100;

  return (
    <div className="flex items-center gap-3">
      <div className="flex-1 relative h-1.5 rounded-full bg-white/5">
        <div
          className="absolute left-0 top-0 h-full rounded-full"
          style={{
            width: `${pct}%`,
            backgroundColor: color,
          }}
        />

        <input
          type="range"
          min={min}
          max={max}
          step={step}
          value={value}
          onChange={(e) => onChange(Number(e.target.value))}
          className="
            absolute inset-0
            w-full h-full
            opacity-0 cursor-pointer
          "
        />
      </div>

      <span className="text-[10px] font-mono text-zinc-300 w-12 text-right">
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

  const [radarSweep, setRadarSweep] = useState(4);
  const [radarRange, setRadarRange] = useState(240);

  const [commFreq, setCommFreq] = useState(121);
  const [commChannels, setCommChannels] = useState(3);

  const [alertSeverity, setAlertSeverity] = useState("MEDIUM");
  const [alertSound, setAlertSound] = useState(true);

  const [encryptionLevel, setEncryptionLevel] = useState("AES-256");

  const [theme, setTheme] = useState("Tactical Dark");
  const [units, setUnits] = useState("Nautical Miles");
  const [language, setLanguage] = useState("English (US)");
  const [resolution, setResolution] = useState("Ultra HD");

  const [nightMode, setNightMode] = useState(false);
  const [brightness, setBrightness] = useState(80);
  const [region, setRegion] = useState("Asia-Pacific");

  const [saved, setSaved] = useState(false);

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

    setTimeout(() => {
      setSaved(false);
    }, 2000);
  };

  return (
    <MainLayout>
      <div className="w-full h-[100dvh] overflow-hidden p-3 flex flex-col gap-3">
        {/* TOP BAR */}
        <div className="flex items-center justify-between flex-shrink-0">
          <div>
            <p className="text-[#7CFF6B] text-[10px] tracking-[0.28em] mb-1">
              SYSTEM CONFIGURATION CENTER
            </p>

            <h1 className="text-3xl font-black">Tactical Settings</h1>

            <div className="text-[10px] tracking-[0.18em] text-zinc-500 mt-1 font-mono">
              <div className="flex items-center gap-3">
                <span>Operational System Preferences</span>

                <span className="text-zinc-700">•</span>

                <span className="text-cyan-400">All Modules Synchronized</span>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.location.reload()}
              className="
                flex items-center gap-1.5 px-3 py-2 rounded-xl
                bg-white/5 border border-white/10
                text-zinc-400 text-xs font-semibold
                hover:bg-white/10 transition
              "
            >
              <RotateCcw size={12} />
              Reset
            </button>

            <button
              onClick={handleSave}
              className="
                flex items-center gap-1.5 px-3 py-2 rounded-xl
                border text-xs font-semibold transition
              "
              style={{
                backgroundColor: saved ? "#7CFF6B22" : "#7CFF6B11",
                borderColor: saved ? "#7CFF6B55" : "#7CFF6B22",
                color: "#7CFF6B",
              }}
            >
              <Save size={12} />
              {saved ? "Saved!" : "Save Changes"}
            </button>

            <div className="px-3 py-2 rounded-xl border border-[#7CFF6B]/20 bg-[#7CFF6B]/10">
              <div className="flex items-center gap-2">
                <motion.div
                  animate={{
                    opacity: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                  }}
                  className="w-2 h-2 rounded-full bg-[#7CFF6B]"
                />

                <span className="text-xs font-semibold text-[#7CFF6B]">
                  SYSTEM STABLE
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-3 flex-1 min-h-0">
          {/* LEFT */}
          <div className="col-span-8 min-h-0 overflow-y-auto pr-1 space-y-3">
            {/* SYSTEM MODULES */}
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-4">
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  CONTROL MODULES
                </p>

                <h2 className="text-xl font-black">System Configuration</h2>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {[
                  {
                    title: "Radar System",
                    desc: "Sweep interval and tracking precision",
                    icon: Radar,
                    color: "#7CFF6B",
                    enabled: systems.radar,
                    toggle: () =>
                      setSystems((prev) => ({
                        ...prev,
                        radar: !prev.radar,
                      })),
                  },

                  {
                    title: "Communications",
                    desc: "Channels, frequencies, and routing",
                    icon: RadioTower,
                    color: "#22d3ee",
                    enabled: systems.communications,
                    toggle: () =>
                      setSystems((prev) => ({
                        ...prev,
                        communications: !prev.communications,
                      })),
                  },

                  {
                    title: "Alert Notifications",
                    desc: "Severity thresholds and delivery",
                    icon: Bell,
                    color: "#FFB547",
                    enabled: systems.alerts,
                    toggle: () =>
                      setSystems((prev) => ({
                        ...prev,
                        alerts: !prev.alerts,
                      })),
                  },

                  {
                    title: "Security Protocol",
                    desc: "Encryption and authorization",
                    icon: Shield,
                    color: "#f87171",
                    enabled: systems.security,
                    toggle: () =>
                      setSystems((prev) => ({
                        ...prev,
                        security: !prev.security,
                      })),
                  },
                ].map((item) => (
                  <div
                    key={item.title}
                    className="border border-white/5 rounded-2xl p-4 bg-black/20"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div className="flex gap-3">
                        <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center">
                          <item.icon
                            size={18}
                            style={{
                              color: item.color,
                            }}
                          />
                        </div>

                        <div>
                          <h3 className="text-sm font-bold">{item.title}</h3>

                          <p className="text-[10px] text-zinc-500 mt-1">
                            {item.desc}
                          </p>
                        </div>
                      </div>

                      <Toggle
                        enabled={item.enabled}
                        onToggle={item.toggle}
                        color={item.color}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* PREFERENCES */}
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-4">
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  USER PREFERENCES
                </p>

                <h2 className="text-xl font-black">Interface Settings</h2>
              </div>

              <div className="space-y-3 overflow-visible">
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
                    className="
                      flex items-center justify-between gap-4
                      border border-white/5 rounded-2xl
                      p-4 bg-black/20
                    "
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
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-4 min-h-0 overflow-y-auto pr-1 space-y-3">
            {/* QUICK ACCESS */}
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-4">
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  QUICK ACCESS
                </p>

                <h2 className="text-xl font-black">Utilities</h2>
              </div>

              <div className="space-y-3">
                <div className="border border-white/5 rounded-2xl p-4 bg-black/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center">
                        <Globe size={18} className="text-[#7CFF6B]" />
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
                    />
                  </div>
                </div>

                <div className="border border-white/5 rounded-2xl p-4 bg-black/20">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center">
                        {nightMode ? (
                          <Moon size={18} className="text-[#FFB547]" />
                        ) : (
                          <Sun size={18} className="text-[#FFB547]" />
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
                      color="#FFB547"
                    />
                  </div>
                </div>

                <div className="border border-white/5 rounded-2xl p-4 bg-black/20">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-11 h-11 rounded-xl bg-black/30 flex items-center justify-center">
                      <Settings2 size={18} className="text-red-400" />
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
                    color="#f87171"
                  />
                </div>
              </div>
            </div>

            {/* CORE STATUS */}
            <div className="bg-[#0B1220] border border-white/10 rounded-3xl p-4">
              <div className="mb-4">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  SYSTEM OVERVIEW
                </p>

                <h2 className="text-xl font-black">Core Status</h2>
              </div>

              <div className="space-y-4">
                {[
                  {
                    label: "Radar Systems",
                    value: coreStats.radar,
                    color: "#7CFF6B",
                  },

                  {
                    label: "Signal Integrity",
                    value: coreStats.signal,
                    color: "#22d3ee",
                  },

                  {
                    label: "Server Uptime",
                    value: coreStats.uptime,
                    color: "#7CFF6B",
                  },

                  {
                    label: "Network Stability",
                    value: coreStats.network,
                    color: "#FFB547",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs text-zinc-400">
                        {item.label}
                      </span>

                      <span
                        className="text-xs font-semibold font-mono"
                        style={{
                          color: item.color,
                        }}
                      >
                        {item.value.toFixed(1)}%
                      </span>
                    </div>

                    <div className="w-full h-2 rounded-full bg-white/5 overflow-hidden">
                      <motion.div
                        animate={{
                          width: `${item.value}%`,
                        }}
                        transition={{
                          duration: 1,
                        }}
                        className="h-full rounded-full"
                        style={{
                          backgroundColor: item.color,
                        }}
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
