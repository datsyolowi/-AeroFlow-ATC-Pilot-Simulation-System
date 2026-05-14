import { motion } from "framer-motion";

const logs = [
  "TRACKING AFL245",
  "ALTITUDE STABLE FL320",
  "DAL912 BEGINNING DESCENT",
  "WEATHER CLEAR IN SECTOR B12",
  "RUNWAY 27 READY FOR ARRIVAL",
  "SIGNAL LINK STABLE",
  "NO CONFLICT DETECTED",
];

export default function CommandConsole() {
  return (
    <div
      className="
        relative
        rounded-2xl
        border
        border-[#7CFF6B]/10
        bg-[#08111F]
        overflow-hidden
        shadow-[0_0_30px_rgba(124,255,107,0.04)]
      "
    >
      {/* HEADER */}
      <div
        className="
          flex
          items-center
          justify-between
          px-4
          py-3
          border-b
          border-white/5
        "
      >
        <div className="flex items-center gap-2">
          <div
            className="
              w-2
              h-2
              rounded-full
              bg-[#7CFF6B]
              animate-pulse
            "
          />

          <h2
            className="
              text-sm
              font-semibold
              text-white
            "
          >
            ATC Command Console
          </h2>
        </div>

        <div
          className="
            text-[9px]
            tracking-[0.22em]
            text-[#7CFF6B]/60
            font-mono
          "
        >
          ACTIVE
        </div>
      </div>

      {/* TERMINAL */}
      <div
        className="
          h-[180px]
          overflow-hidden
          px-4
          py-3
          font-mono
          text-[11px]
          space-y-2
        "
      >
        {logs.map((log, index) => (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.15,
            }}
            className="
              flex
              items-center
              gap-2
              text-[#7CFF6B]
            "
          >
            <span className="text-cyan-400">{">"}</span>

            <span className="tracking-wide">{log}</span>
          </motion.div>
        ))}

        {/* BLINKING CURSOR */}
        <motion.div
          animate={{
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
          }}
          className="
            text-[#7CFF6B]
            mt-3
          "
        >
          _
        </motion.div>
      </div>
    </div>
  );
}
