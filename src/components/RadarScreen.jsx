import { motion } from "framer-motion";
import { Plane } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../context/ThemeContext";

const aircrafts = [
  {
    id: 1,
    callsign: "AFL245",
    altitude: "FL320",
    speed: "452 KT",
    heading: "274°",
    destination: "RJTT",
    status: "CRUISING",
    fuel: "82%",
    color: "#7CFF6B",
    rotation: -35,
    path: { x: [0, 30, 60, 30, 0], y: [0, -20, 10, 25, 0] },
    position: { top: "26%", left: "64%" },
    duration: 8,
  },
  {
    id: 2,
    callsign: "BAW672",
    altitude: "FL360",
    speed: "471 KT",
    heading: "198°",
    destination: "EGLL",
    status: "CRUISING",
    fuel: "67%",
    color: "#7CFF6B",
    rotation: 145,
    path: { x: [0, -20, -40, -10, 0], y: [0, 15, 30, 10, 0] },
    position: { top: "67%", left: "35%" },
    duration: 10,
  },
  {
    id: 3,
    callsign: "DAL912",
    altitude: "FL260",
    speed: "430 KT",
    heading: "091°",
    destination: "KJFK",
    status: "DESCENT",
    fuel: "41%",
    color: "#FFB547",
    rotation: 90,
    path: { x: [0, 15, 35, 15, 0], y: [0, -10, -20, -5, 0] },
    position: { top: "70%", left: "72%" },
    duration: 6,
  },
];

export default function RadarScreen({ selectedAircraft, setSelectedAircraft }) {
  const [hoveredAircraft, setHoveredAircraft] = useState(null);
  const { nightMode } = useTheme();
  const darkMode = nightMode;

  return (
    <div
      className="relative w-full h-full rounded-[28px] overflow-hidden"
      style={{
        minHeight: "100%",
        border: darkMode
          ? "1px solid rgba(124,255,107,0.2)"
          : "1px solid rgba(0,0,0,0.08)",
        background: darkMode ? "#071019" : "#f0f2f0",
        boxShadow: darkMode
          ? "0 0 80px rgba(124,255,107,0.06)"
          : "0 0 40px rgba(0,0,0,0.04)",
      }}
    >
      {/* ATMOSPHERIC GLOW */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? "radial-gradient(circle at center, rgba(124,255,107,0.08), transparent 70%)"
            : "radial-gradient(circle at center, rgba(0,0,0,0.03), transparent 70%)",
        }}
      />

      {/* VIGNETTE */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: darkMode
            ? "linear-gradient(to bottom, rgba(0,0,0,0.1), transparent, rgba(0,0,0,0.4))"
            : "linear-gradient(to bottom, rgba(0,0,0,0.02), transparent, rgba(0,0,0,0.06))",
        }}
      />

      {/* RADAR GRID */}
      <div
        className="absolute inset-0"
        style={{
          opacity: darkMode ? 0.08 : 0.12,
          backgroundImage: darkMode
            ? `linear-gradient(to right, #7CFF6B 1px, transparent 1px), linear-gradient(to bottom, #7CFF6B 1px, transparent 1px)`
            : `linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)`,
          backgroundSize: "40px 40px",
        }}
      />

      {/* RADAR CIRCLES */}
      <div className="absolute inset-0 flex items-center justify-center">
        {["92%", "74%", "56%", "38%", "20%"].map((size, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: size,
              height: size,
              border: darkMode
                ? `1px solid rgba(124,255,107,${0.1 + i * 0.05})`
                : `1px solid rgba(0,0,0,${0.06 + i * 0.03})`,
            }}
          />
        ))}
      </div>

      {/* CROSS LINES */}
      <div className="absolute inset-0">
        <div
          className="absolute left-1/2 top-0 bottom-0 w-px"
          style={{
            background: darkMode
              ? "rgba(124,255,107,0.10)"
              : "rgba(0,0,0,0.08)",
          }}
        />
        <div
          className="absolute top-1/2 left-0 right-0 h-px"
          style={{
            background: darkMode
              ? "rgba(124,255,107,0.10)"
              : "rgba(0,0,0,0.08)",
          }}
        />
      </div>

      {/* RADAR SWEEP */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden z-10">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          className="absolute w-[120%] h-[120%]"
        >
          {/* MAIN SWEEP */}
          <div
            className="absolute left-1/2 top-1/2 origin-left"
            style={{
              width: "34%",
              height: "220px",
              clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
              background: darkMode
                ? "linear-gradient(to right, rgba(124,255,107,0.24), rgba(124,255,107,0.02))"
                : "linear-gradient(to right, rgba(0,0,0,0.10), rgba(0,0,0,0.01))",
              transform: "translateY(-50%)",
              filter: "blur(2px)",
            }}
          />
          {/* SWEEP LINE */}
          <div
            className="absolute left-1/2 top-1/2 origin-left rounded-full"
            style={{
              width: "52%",
              height: "3px",
              transform: "translateY(-50%)",
              background: darkMode
                ? "linear-gradient(to right, rgba(124,255,107,1), rgba(124,255,107,0))"
                : "linear-gradient(to right, rgba(0,0,0,0.5), rgba(0,0,0,0))",
              boxShadow: darkMode ? "0 0 25px rgba(124,255,107,0.85)" : "none",
            }}
          />
          {/* SWEEP GLOW */}
          {darkMode && (
            <div
              className="absolute left-1/2 top-1/2 origin-left rounded-full blur-3xl"
              style={{
                width: "320px",
                height: "320px",
                transform: "translate(-10%, -50%)",
                background:
                  "radial-gradient(circle, rgba(124,255,107,0.14), transparent 70%)",
              }}
            />
          )}
        </motion.div>
      </div>

      {/* FLIGHT PATHS */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-10">
        {[
          {
            x1: "64%",
            y1: "26%",
            x2: "78%",
            y2: "18%",
            color: darkMode ? "rgba(124,255,107,0.35)" : "rgba(0,0,0,0.25)",
          },
          {
            x1: "35%",
            y1: "67%",
            x2: "22%",
            y2: "74%",
            color: darkMode ? "rgba(124,255,107,0.35)" : "rgba(0,0,0,0.25)",
          },
          {
            x1: "72%",
            y1: "70%",
            x2: "86%",
            y2: "62%",
            color: darkMode ? "rgba(255,181,71,0.45)" : "rgba(217,119,6,0.35)",
          },
        ].map((line, i) => (
          <motion.line
            key={i}
            x1={line.x1}
            y1={line.y1}
            x2={line.x2}
            y2={line.y2}
            stroke={line.color}
            strokeWidth="1.5"
            strokeDasharray="6 6"
            animate={{ strokeDashoffset: [0, -20] }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          />
        ))}
      </svg>

      {/* AIRCRAFT */}
      {aircrafts.map((aircraft) => (
        <motion.div
          key={aircraft.id}
          onMouseEnter={() => setHoveredAircraft(aircraft)}
          onMouseLeave={() => setHoveredAircraft(null)}
          onClick={() => setSelectedAircraft(aircraft)}
          animate={{
            x: aircraft.path.x,
            y: aircraft.path.y,
            opacity: [0.7, 1, 0.85, 1],
          }}
          transition={{
            duration: aircraft.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute z-30 cursor-pointer group"
          style={{ top: aircraft.position.top, left: aircraft.position.left }}
        >
          <div className="relative">
            {/* TARGET LOCK */}
            {(hoveredAircraft?.id === aircraft.id ||
              selectedAircraft?.id === aircraft.id) && (
              <>
                <motion.div
                  animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                  transition={{
                    rotate: { duration: 6, repeat: Infinity, ease: "linear" },
                    scale: { duration: 2, repeat: Infinity },
                  }}
                  className="absolute -inset-4 rounded-full"
                  style={{
                    border: darkMode
                      ? "1px solid rgba(124,255,107,0.60)"
                      : "1px solid rgba(0,0,0,0.30)",
                  }}
                />
                {darkMode && (
                  <motion.div
                    animate={{ scale: [1, 2], opacity: [0.45, 0] }}
                    transition={{ duration: 1.8, repeat: Infinity }}
                    className="absolute inset-0 rounded-full bg-[#7CFF6B] blur-xl"
                  />
                )}
              </>
            )}

            {/* TRAIL */}
            <div
              className="absolute top-1/2 right-[14px] -translate-y-1/2 h-[2px] w-12 rounded-full opacity-80"
              style={{
                background:
                  aircraft.status === "DESCENT"
                    ? darkMode
                      ? "linear-gradient(to left, rgba(255,181,71,0.9), transparent)"
                      : "linear-gradient(to left, rgba(217,119,6,0.7), transparent)"
                    : darkMode
                      ? "linear-gradient(to left, rgba(124,255,107,0.9), transparent)"
                      : "linear-gradient(to left, rgba(0,0,0,0.4), transparent)",
              }}
            />

            {/* AIRCRAFT ICON */}
            <motion.div
              animate={{ scale: [1, 1.08, 1], opacity: [0.75, 1, 0.85, 1] }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: aircraft.id * 0.3,
              }}
              className="relative"
            >
              {darkMode && (
                <div
                  className="absolute inset-0 blur-xl opacity-80"
                  style={{
                    background:
                      aircraft.status === "DESCENT"
                        ? "rgba(255,181,71,0.45)"
                        : "rgba(124,255,107,0.45)",
                  }}
                />
              )}
              <Plane
                size={20}
                strokeWidth={2.2}
                className="relative z-10"
                style={{
                  color:
                    aircraft.status === "DESCENT"
                      ? "#FFB547"
                      : darkMode
                        ? "#7CFF6B"
                        : "#111111",
                  filter: darkMode
                    ? aircraft.status === "DESCENT"
                      ? "drop-shadow(0 0 10px rgba(255,181,71,0.9))"
                      : "drop-shadow(0 0 10px rgba(124,255,107,0.9))"
                    : "drop-shadow(0 0 4px rgba(0,0,0,0.3))",
                  transform: `rotate(${aircraft.rotation}deg)`,
                }}
              />
            </motion.div>

            {/* MINI HUD */}
            <div
              className="absolute top-[-42px] left-1/2 -translate-x-1/2 whitespace-nowrap px-2 py-1 rounded-lg backdrop-blur-md opacity-0 group-hover:opacity-100 transition pointer-events-none"
              style={{
                background: darkMode
                  ? "rgba(8,17,31,0.95)"
                  : "rgba(255,255,255,0.95)",
                border: darkMode
                  ? "1px solid rgba(124,255,107,0.20)"
                  : "1px solid rgba(0,0,0,0.12)",
                boxShadow: darkMode
                  ? "0 0 20px rgba(124,255,107,0.12)"
                  : "0 4px 12px rgba(0,0,0,0.08)",
              }}
            >
              <div
                className="text-[9px] font-mono"
                style={{ color: darkMode ? "#7CFF6B" : "#111111" }}
              >
                {aircraft.callsign}
              </div>
              <div className="text-[8px] text-zinc-400 font-mono">
                {aircraft.altitude} • {aircraft.speed}
              </div>
            </div>
          </div>
        </motion.div>
      ))}

      {/* ENERGY RINGS */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{ scale: [0.2, 2.8], opacity: [0.35, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
            className="absolute rounded-full"
            style={{
              width: "80px",
              height: "80px",
              border: darkMode
                ? "1px solid rgba(124,255,107,0.20)"
                : "1px solid rgba(0,0,0,0.12)",
            }}
          />
        ))}
      </div>

      {/* CENTER CORE */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-40">
        {darkMode && (
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-[#7CFF6B]/20 blur-2xl animate-pulse" />
        )}
        <div
          className="relative w-5 h-5 rounded-full"
          style={{
            background: darkMode ? "#7CFF6B" : "#111111",
            boxShadow: darkMode
              ? "0 0 25px rgba(124,255,107,0.9)"
              : "0 0 12px rgba(0,0,0,0.25)",
          }}
        />
      </div>

      {/* LIVE DATA */}
      <div
        className="absolute left-6 bottom-6 z-40 space-y-1 text-[9px] tracking-[0.18em] font-mono pointer-events-none"
        style={{
          color: darkMode ? "rgba(124,255,107,0.55)" : "rgba(0,0,0,0.65)",
        }}
      >
        {[
          {
            text: "SIGNAL STRENGTH: 98.2%",
            anim: { opacity: darkMode ? [0.3, 1, 0.3] : [0.6, 1, 0.6] },
            dur: 2,
          },
          {
            text: "SCAN RATE: 4.2GHz",
            anim: { opacity: darkMode ? [1, 0.4, 1] : [1, 0.65, 1] },
            dur: 1.5,
          },
          {
            text: "SECTOR: ALPHA-07",
            anim: { opacity: darkMode ? [0.5, 1, 0.5] : [0.65, 1, 0.65] },
            dur: 2.4,
          },
          {
            text: "TRACKING: 3 AIRCRAFT",
            anim: { opacity: darkMode ? [1, 0.5, 1] : [1, 0.65, 1] },
            dur: 3,
          },
        ].map((item) => (
          <motion.div
            key={item.text}
            animate={item.anim}
            transition={{ duration: item.dur, repeat: Infinity }}
          >
            {item.text}
          </motion.div>
        ))}
      </div>

      {/* RADAR CONTROLS */}
      <div className="absolute top-4 right-4 z-50 flex flex-col gap-2">
        {["+", "−"].map((label) => (
          <button
            key={label}
            className="w-9 h-9 rounded-xl text-lg font-semibold transition-all duration-200 hover:scale-105 backdrop-blur-xl"
            style={{
              border: darkMode
                ? "1px solid rgba(124,255,107,0.20)"
                : "1px solid rgba(0,0,0,0.10)",
              background: darkMode
                ? "rgba(8,17,31,0.90)"
                : "rgba(255,255,255,0.85)",
              color: darkMode ? "#7CFF6B" : "#111111",
              boxShadow: darkMode
                ? "0 0 20px rgba(124,255,107,0.08)"
                : "0 2px 8px rgba(0,0,0,0.06)",
            }}
          >
            {label}
          </button>
        ))}
      </div>

      {/* LABELS */}
      <div
        className="absolute top-4 left-4 text-[10px] tracking-[0.2em] z-40"
        style={{
          color: darkMode ? "rgba(124,255,107,0.70)" : "rgba(0,0,0,0.55)",
        }}
      >
        AIRSPACE RADAR
      </div>
      <div
        className="absolute bottom-4 right-4 text-[10px] tracking-[0.2em] z-40"
        style={{
          color: darkMode ? "rgba(124,255,107,0.70)" : "rgba(0,0,0,0.55)",
        }}
      >
        LIVE TRACKING ACTIVE
      </div>
    </div>
  );
}
