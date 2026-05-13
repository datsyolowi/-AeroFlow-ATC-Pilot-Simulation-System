import { motion } from "framer-motion";

export default function AircraftCard({
  callsign,
  altitude,
  speed,
  status,
}) {
  return (
    <motion.div
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        relative
        overflow-hidden
        bg-white/[0.03]
        backdrop-blur-xl
        border
        border-white/10
        rounded-2xl
        p-4
        shadow-[0_0_25px_rgba(0,0,0,0.25)]
      "
    >

      {/* TOP GLOW */}
      <div
        className="
          absolute
          top-0
          left-0
          right-0
          h-px
          bg-gradient-to-r
          from-transparent
          via-[#7CFF6B]/50
          to-transparent
        "
      />

      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top,rgba(124,255,107,0.06),transparent_60%)]
          pointer-events-none
        "
      />

      <div className="relative z-10">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-3">

          <div>

            <p className="text-[10px] tracking-[0.18em] text-zinc-500 mb-1">
              AIRCRAFT
            </p>

            <h3 className="font-bold text-sm tracking-wide">
              {callsign}
            </h3>

          </div>

          <div
            className="
              px-2
              py-1
              rounded-full
              text-[9px]
              bg-[#7CFF6B]/10
              text-[#7CFF6B]
              border
              border-[#7CFF6B]/10
            "
          >
            {status}
          </div>

        </div>

        {/* DATA */}
        <div className="grid grid-cols-2 gap-3">

          <div
            className="
              bg-black/20
              border
              border-white/5
              rounded-xl
              p-2
            "
          >

            <p className="text-[9px] text-zinc-500 mb-1">
              ALTITUDE
            </p>

            <h4 className="text-xs font-semibold">
              {altitude}
            </h4>

          </div>

          <div
            className="
              bg-black/20
              border
              border-white/5
              rounded-xl
              p-2
            "
          >

            <p className="text-[9px] text-zinc-500 mb-1">
              SPEED
            </p>

            <h4 className="text-xs font-semibold">
              {speed}
            </h4>

          </div>

        </div>

      </div>

    </motion.div>
  );
}