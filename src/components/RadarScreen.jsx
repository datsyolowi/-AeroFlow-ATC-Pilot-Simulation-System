import { motion } from "framer-motion";

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
        "
      >
        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            w-[120%]
            h-[120%]
          "
        >
          {/* SWEEP LINE */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              origin-left
            "
            style={{
              width: "50%",
              height: "2px",
              background:
                "linear-gradient(to right, rgba(124,255,107,0.95), rgba(124,255,107,0))",
            }}
          />

          {/* SWEEP CONE */}
          <div
            className="
              absolute
              left-1/2
              top-1/2
              origin-left
            "
            style={{
              width: "34%",
              height: "160px",
              clipPath: "polygon(0 0, 100% 50%, 0 100%)",
              background:
                "linear-gradient(to right, rgba(124,255,107,0.18), rgba(124,255,107,0))",
              transform: "translateY(-50%)",
              filter: "blur(2px)",
            }}
          />
        </motion.div>
      </div>

      {/* MOVING AIRCRAFT */}
      {aircrafts.map((aircraft) => (
        <motion.div
          key={aircraft.id}
          onClick={() => setSelectedAircraft(aircraft)}
          animate={{
            x: aircraft.path.x,
            y: aircraft.path.y,
            opacity: [0.5, 1, 0.7, 1],
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
          "
          style={{
            top: aircraft.position.top,
            left: aircraft.position.left,
          }}
        >
          <div className="relative">
            {/* TARGET LOCK RING */}
            {selectedAircraft?.id === aircraft.id && (
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
            )}

            {/* OUTER PULSE */}
            {selectedAircraft?.id === aircraft.id && (
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

            {/* AIRCRAFT DOT */}
            <div
              className={`
                ${aircraft.size}
                rounded-full
                animate-pulse
                ${
                  selectedAircraft?.id === aircraft.id
                    ? "shadow-[0_0_30px_rgba(124,255,107,1)]"
                    : "shadow-[0_0_18px_rgba(124,255,107,0.95)]"
                }
              `}
              style={{
                backgroundColor: aircraft.color,
                transform:
                  selectedAircraft?.id === aircraft.id
                    ? "scale(1.4)"
                    : "scale(1)",
              }}
            />

            {/* AIRCRAFT GLOW */}
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
