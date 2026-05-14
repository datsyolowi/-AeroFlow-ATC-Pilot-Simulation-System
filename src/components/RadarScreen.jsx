import { motion } from "framer-motion";
import { useState } from "react";

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
    size: "w-3 h-3",
    path: {
      x: [0, 30, 60, 30, 0],
      y: [0, -20, 10, 25, 0],
    },
    position: {
      top: "26%",
      left: "64%",
    },
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
    size: "w-3 h-3",
    path: {
      x: [0, -20, -40, -10, 0],
      y: [0, 15, 30, 10, 0],
    },
    position: {
      top: "67%",
      left: "35%",
    },
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
    size: "w-3 h-3",
    path: {
      x: [0, 15, 35, 15, 0],
      y: [0, -10, -20, -5, 0],
    },
    position: {
      top: "70%",
      left: "72%",
    },
    duration: 6,
  },
];

export default function RadarScreen({ selectedAircraft, setSelectedAircraft }) {
  const [hoveredAircraft, setHoveredAircraft] = useState(null);

  return (
    <div
      className="
        relative
        h-[48vh]
        min-h-[220px]
        max-h-[460px]
        rounded-[28px]
        overflow-hidden
        border
        border-[#7CFF6B]/20
        bg-[#071019]
        shadow-[0_0_80px_rgba(124,255,107,0.06)]
      "
    >
      {/* ATMOSPHERIC GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_center,rgba(124,255,107,0.08),transparent_70%)]
        "
      />

      {/* VIGNETTE */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-b
          from-black/10
          via-transparent
          to-black/40
        "
      />

      {/* RADAR GRID */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.08]
        "
        style={{
          backgroundImage: `
            linear-gradient(to right, #7CFF6B 1px, transparent 1px),
            linear-gradient(to bottom, #7CFF6B 1px, transparent 1px)
          `,
          backgroundSize: "40px 40px",
        }}
      />

      {/* RADAR CIRCLES */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[92%] h-[92%] rounded-full border border-[#7CFF6B]/10 absolute" />
        <div className="w-[74%] h-[74%] rounded-full border border-[#7CFF6B]/15 absolute" />
        <div className="w-[56%] h-[56%] rounded-full border border-[#7CFF6B]/20 absolute" />
        <div className="w-[38%] h-[38%] rounded-full border border-[#7CFF6B]/25 absolute" />
        <div className="w-[20%] h-[20%] rounded-full border border-[#7CFF6B]/30 absolute" />
      </div>

      {/* CROSS LINES */}
      <div className="absolute inset-0">
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-[#7CFF6B]/10" />
        <div className="absolute top-1/2 left-0 right-0 h-px bg-[#7CFF6B]/10" />
      </div>

      {/* RADAR SWEEP */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          overflow-hidden
          z-10
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            w-[120%]
            h-[120%]
          "
        >
          {/* MAIN SWEEP */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              origin-left
            "
            style={{
              width: "34%",
              height: "220px",
              clipPath: "polygon(0 50%, 100% 0, 100% 100%)",
              background:
                "linear-gradient(to right, rgba(124,255,107,0.24), rgba(124,255,107,0.02))",
              transform: "translateY(-50%)",
              filter: "blur(2px)",
            }}
          />

          {/* SWEEP LINE */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              origin-left
              rounded-full
            "
            style={{
              width: "52%",
              height: "3px",
              transform: "translateY(-50%)",
              background:
                "linear-gradient(to right, rgba(124,255,107,1), rgba(124,255,107,0))",
              boxShadow: "0 0 25px rgba(124,255,107,0.85)",
            }}
          />

          {/* SWEEP GLOW */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              origin-left
              rounded-full
              blur-3xl
            "
            style={{
              width: "320px",
              height: "320px",
              transform: "translate(-10%, -50%)",
              background:
                "radial-gradient(circle, rgba(124,255,107,0.14), transparent 70%)",
            }}
          />
        </motion.div>
      </div>

      {/* FLIGHT PATHS */}
      <svg
        className="
          absolute
          inset-0
          w-full
          h-full
          pointer-events-none
          z-10
        "
      >
        <motion.line
          x1="64%"
          y1="26%"
          x2="78%"
          y2="18%"
          stroke="rgba(124,255,107,0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{
            strokeDashoffset: [0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.line
          x1="35%"
          y1="67%"
          x2="22%"
          y2="74%"
          stroke="rgba(124,255,107,0.35)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{
            strokeDashoffset: [0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.line
          x1="72%"
          y1="70%"
          x2="86%"
          y2="62%"
          stroke="rgba(255,181,71,0.45)"
          strokeWidth="1.5"
          strokeDasharray="6 6"
          animate={{
            strokeDashoffset: [0, -20],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear",
          }}
        />
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
            opacity: [0.6, 1, 0.8, 1],
            scale: [1, 1.15, 1],
          }}
          transition={{
            duration: aircraft.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            absolute
            z-30
            cursor-pointer
            group
          "
          style={{
            top: aircraft.position.top,
            left: aircraft.position.left,
          }}
        >
          <div className="relative">
            {/* TARGET LOCK */}
            {hoveredAircraft?.id === aircraft.id && (
              <>
                <motion.div
                  animate={{
                    rotate: 360,
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    rotate: {
                      duration: 6,
                      repeat: Infinity,
                      ease: "linear",
                    },
                    scale: {
                      duration: 2,
                      repeat: Infinity,
                    },
                  }}
                  className="
                    absolute
                    -inset-3
                    rounded-full
                    border
                    border-[#7CFF6B]/60
                  "
                />

                <motion.div
                  animate={{
                    scale: [1, 1.8],
                    opacity: [0.5, 0],
                  }}
                  transition={{
                    duration: 1.8,
                    repeat: Infinity,
                  }}
                  className="
                    absolute
                    inset-0
                    rounded-full
                    bg-[#7CFF6B]
                    blur-md
                  "
                />
              </>
            )}

            {/* TRAIL */}
            <div
              className="
                absolute
                top-1/2
                right-full
                -translate-y-1/2
                h-[2px]
                w-10
                rounded-full
                opacity-70
              "
              style={{
                background:
                  aircraft.status === "DESCENT"
                    ? "linear-gradient(to left, rgba(255,181,71,0.8), transparent)"
                    : "linear-gradient(to left, rgba(124,255,107,0.8), transparent)",
              }}
            />

            {/* DOT */}
            <motion.div
              animate={{
                opacity: [0.7, 1, 0.8, 1],
                scale: [1, 1.15, 1],
              }}
              transition={{
                duration: 1.8,
                repeat: Infinity,
                ease: "easeInOut",
                delay: aircraft.id * 0.3,
              }}
              className={`
                ${aircraft.size}
                rounded-full
              `}
              style={{
                backgroundColor: aircraft.color,
                boxShadow:
                  aircraft.status === "DESCENT"
                    ? "0 0 24px rgba(255,181,71,0.9)"
                    : "0 0 24px rgba(124,255,107,0.9)",
              }}
            />

            {/* MINI HUD */}
            <div
              className="
                absolute
                top-[-42px]
                left-1/2
                -translate-x-1/2
                whitespace-nowrap
                px-2
                py-1
                rounded-lg
                bg-[#08111F]/95
                border
                border-[#7CFF6B]/20
                backdrop-blur-md
                opacity-0
                group-hover:opacity-100
                transition
                pointer-events-none
                shadow-[0_0_20px_rgba(124,255,107,0.12)]
              "
            >
              <div className="text-[9px] font-mono text-[#7CFF6B]">
                {aircraft.callsign}
              </div>

              <div className="text-[8px] text-zinc-400 font-mono">
                {aircraft.altitude} • {aircraft.speed}
              </div>
            </div>

            {/* GLOW */}
            <div
              className="
                absolute
                inset-0
                rounded-full
                blur-md
                opacity-70
              "
              style={{
                backgroundColor:
                  aircraft.status === "DESCENT" ? "#FFB547" : aircraft.color,
              }}
            />
          </div>
        </motion.div>
      ))}

      {/* ENERGY RINGS */}
      <div
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          pointer-events-none
          z-20
        "
      >
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            animate={{
              scale: [0.2, 2.8],
              opacity: [0.35, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              delay: i * 1.2,
              ease: "linear",
            }}
            className="
              absolute
              rounded-full
              border
              border-[#7CFF6B]/20
            "
            style={{
              width: "80px",
              height: "80px",
            }}
          />
        ))}
      </div>

      {/* CENTER CORE */}
      <div
        className="
          absolute
          left-1/2
          top-1/2
          -translate-x-1/2
          -translate-y-1/2
          z-40
        "
      >
        <div
          className="
            absolute
            left-1/2
            top-1/2
            -translate-x-1/2
            -translate-y-1/2
            w-16
            h-16
            rounded-full
            bg-[#7CFF6B]/20
            blur-2xl
            animate-pulse
          "
        />

        <div
          className="
            relative
            w-5
            h-5
            rounded-full
            bg-[#7CFF6B]
            shadow-[0_0_25px_rgba(124,255,107,0.9)]
          "
        />
      </div>

      {/* LIVE DATA */}
      <div
        className="
          absolute
          left-6
          bottom-6
          z-40
          space-y-1
          text-[9px]
          tracking-[0.18em]
          text-[#7CFF6B]/55
          font-mono
          pointer-events-none
        "
      >
        <motion.div
          animate={{ opacity: [0.3, 1, 0.3] }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
        >
          SIGNAL STRENGTH: 98.2%
        </motion.div>

        <motion.div
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
          }}
        >
          SCAN RATE: 4.2GHz
        </motion.div>

        <motion.div
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{
            duration: 2.4,
            repeat: Infinity,
          }}
        >
          SECTOR: ALPHA-07
        </motion.div>

        <motion.div
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{
            duration: 3,
            repeat: Infinity,
          }}
        >
          TRACKING: 3 AIRCRAFT
        </motion.div>
      </div>

      {/* RADAR CONTROLS */}
      <div
        className="
          absolute
          top-4
          right-4
          z-50
          flex
          flex-col
          gap-2
        "
      >
        <button
          className="
            w-9
            h-9
            rounded-xl
            border
            border-[#7CFF6B]/20
            bg-[#08111F]/90
            backdrop-blur-xl
            text-[#7CFF6B]
            text-lg
            font-semibold
            hover:bg-[#7CFF6B]/10
            hover:scale-105
            transition-all
            duration-200
            shadow-[0_0_20px_rgba(124,255,107,0.08)]
          "
        >
          +
        </button>

        <button
          className="
            w-9
            h-9
            rounded-xl
            border
            border-[#7CFF6B]/20
            bg-[#08111F]/90
            backdrop-blur-xl
            text-[#7CFF6B]
            text-lg
            font-semibold
            hover:bg-[#7CFF6B]/10
            hover:scale-105
            transition-all
            duration-200
            shadow-[0_0_20px_rgba(124,255,107,0.08)]
          "
        >
          −
        </button>
      </div>

      {/* LABELS */}
      <div
        className="
          absolute
          top-4
          left-4
          text-[10px]
          tracking-[0.2em]
          text-[#7CFF6B]/70
          z-40
        "
      >
        AIRSPACE RADAR
      </div>

      <div
        className="
          absolute
          bottom-4
          right-4
          text-[10px]
          tracking-[0.2em]
          text-[#7CFF6B]/70
          z-40
        "
      >
        LIVE TRACKING ACTIVE
      </div>
    </div>
  );
}
