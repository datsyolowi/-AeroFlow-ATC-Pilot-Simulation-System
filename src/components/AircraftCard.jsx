import { motion } from "framer-motion";
import { Plane, Fuel, Radio, Navigation } from "lucide-react";
import { useTheme } from "../context/ThemeContext";

export default function AircraftCard({ callsign, altitude, speed, status }) {
  const isDescent = status === "DESCENT";
  const { nightMode } = useTheme();
  const darkMode = nightMode;

  return (
    <motion.div
      whileHover={{ scale: 1.01 }}
      transition={{ duration: 0.2 }}
      className="relative overflow-hidden rounded-2xl p-3"
      style={{
        border: darkMode
          ? "1px solid rgba(255,255,255,0.10)"
          : "1px solid rgba(0,0,0,0.08)",
        background: darkMode
          ? "linear-gradient(135deg, rgba(124,255,107,0.06), rgba(11,18,32,0.95), rgba(0,0,0,0.96))"
          : "linear-gradient(135deg, rgba(0,0,0,0.02), #ffffff, #f9f9f9)",
        boxShadow: darkMode
          ? "0 0 40px rgba(124,255,107,0.04)"
          : "0 1px 4px rgba(0,0,0,0.06)",
      }}
    >
      {/* BACKGROUND GLOW */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle at top left, rgba(124,255,107,0.08), transparent 40%)"
            : "radial-gradient(circle at top left, rgba(0,0,0,0.02), transparent 40%)",
        }}
      />

      {/* HEADER */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p className="text-[9px] tracking-[0.22em] text-zinc-500 mb-1">
            AIRCRAFT
          </p>
          <div className="flex items-center gap-2">
            <Plane
              size={14}
              style={{ color: darkMode ? "#7CFF6B" : "#111111" }}
            />
            <h2
              className={`text-xl font-black ${darkMode ? "text-white" : "text-zinc-900"}`}
            >
              {callsign}
            </h2>
          </div>
        </div>

        {/* STATUS */}
        <div
          className="px-2.5 py-1 rounded-full text-[9px] font-semibold tracking-wide"
          style={
            isDescent
              ? { background: "rgba(255,181,71,0.15)", color: "#FFB547" }
              : darkMode
                ? { background: "rgba(124,255,107,0.15)", color: "#7CFF6B" }
                : {
                    background: "rgba(0,0,0,0.06)",
                    color: "#111111",
                    border: "1px solid rgba(0,0,0,0.10)",
                  }
          }
        >
          {status}
        </div>
      </div>

      {/* TELEMETRY GRID */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {[
          { label: "ALTITUDE", value: altitude },
          { label: "SPEED", value: speed },
        ].map((item) => (
          <div
            key={item.label}
            className="rounded-xl p-2"
            style={{
              border: darkMode
                ? "1px solid rgba(255,255,255,0.05)"
                : "1px solid rgba(0,0,0,0.06)",
              background: darkMode ? "rgba(0,0,0,0.20)" : "rgba(0,0,0,0.03)",
            }}
          >
            <p className="text-[9px] text-zinc-500 mb-1">{item.label}</p>
            <h3
              className={`text-lg font-bold ${darkMode ? "text-white" : "text-zinc-900"}`}
            >
              {item.value}
            </h3>
          </div>
        ))}
      </div>

      {/* LOWER DATA */}
      <div className="space-y-2">
        {/* SIGNAL */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio
              size={12}
              style={{ color: darkMode ? "#7CFF6B" : "#71717a" }}
            />
            <span className="text-[10px] text-zinc-400">SIGNAL</span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ background: darkMode ? "#7CFF6B" : "#111111" }}
            />
            <span
              className="text-[10px] font-semibold"
              style={{ color: darkMode ? "#7CFF6B" : "#111111" }}
            >
              STABLE
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation
              size={12}
              style={{ color: darkMode ? "#22d3ee" : "#71717a" }}
            />
            <span className="text-[10px] text-zinc-400">HEADING</span>
          </div>
          <span
            className={`text-[10px] font-semibold ${darkMode ? "text-white" : "text-zinc-900"}`}
          >
            274°
          </span>
        </div>

        {/* FUEL */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <Fuel size={12} className="text-[#FFB547]" />
              <span className="text-[10px] text-zinc-400">FUEL</span>
            </div>
            <span
              className={`text-[10px] font-semibold ${darkMode ? "text-white" : "text-zinc-900"}`}
            >
              82%
            </span>
          </div>
          <div
            className="h-1.5 rounded-full overflow-hidden"
            style={{
              background: darkMode
                ? "rgba(255,255,255,0.05)"
                : "rgba(0,0,0,0.08)",
            }}
          >
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "82%" }}
              transition={{ duration: 1.2 }}
              className="h-full rounded-full"
              style={{
                background: darkMode
                  ? "linear-gradient(to right, #7CFF6B, #22d3ee)"
                  : "linear-gradient(to right, #111111, #52525b)",
              }}
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="mt-2 pt-2 flex items-center justify-between text-[9px] tracking-wide"
        style={{
          borderTop: darkMode
            ? "1px solid rgba(255,255,255,0.05)"
            : "1px solid rgba(0,0,0,0.07)",
        }}
      >
        <span className="text-zinc-500">TRANSPONDER ACTIVE</span>
        <span style={{ color: darkMode ? "#7CFF6B" : "#111111" }}>
          LIVE TELEMETRY
        </span>
      </div>
    </motion.div>
  );
}
