import { motion } from "framer-motion";
import { Plane, Fuel, Radio, Navigation } from "lucide-react";

export default function AircraftCard({ callsign, altitude, speed, status }) {
  const isDescent = status === "DESCENT";

  return (
    <motion.div
      whileHover={{
        scale: 1.01,
      }}
      transition={{
        duration: 0.2,
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-[linear-gradient(135deg,rgba(124,255,107,0.06),rgba(11,18,32,0.95),rgba(0,0,0,0.96))]
        p-3
        shadow-[0_0_40px_rgba(124,255,107,0.04)]
      "
    >
      {/* BACKGROUND GLOW */}
      <div
        className="
          absolute
          inset-0
          bg-[radial-gradient(circle_at_top_left,rgba(124,255,107,0.08),transparent_40%)]
          pointer-events-none
        "
      />

      {/* HEADER */}
      <div className="flex items-start justify-between mb-3">
        <div>
          <p
            className="
              text-[9px]
              tracking-[0.22em]
              text-zinc-500
              mb-1
            "
          >
            AIRCRAFT
          </p>

          <div className="flex items-center gap-2">
            <Plane
              size={14}
              className="
                text-[#7CFF6B]
              "
            />

            <h2 className="text-xl font-black">{callsign}</h2>
          </div>
        </div>

        {/* STATUS */}
        <div
          className={`
            px-2.5
            py-1
            rounded-full
            text-[9px]
            font-semibold
            tracking-wide
            ${
              isDescent
                ? "bg-[#FFB547]/15 text-[#FFB547]"
                : "bg-[#7CFF6B]/15 text-[#7CFF6B]"
            }
          `}
        >
          {status}
        </div>
      </div>

      {/* TELEMETRY GRID */}
      <div className="grid grid-cols-2 gap-2 mb-3">
        {/* ALTITUDE */}
        <div
          className="
            rounded-xl
            border
            border-white/5
            bg-black/20
            p-2
          "
        >
          <p className="text-[9px] text-zinc-500 mb-1">ALTITUDE</p>

          <h3 className="text-lg font-bold">{altitude}</h3>
        </div>

        {/* SPEED */}
        <div
          className="
            rounded-xl
            border
            border-white/5
            bg-black/20
            p-2
          "
        >
          <p className="text-[9px] text-zinc-500 mb-1">SPEED</p>

          <h3 className="text-lg font-bold">{speed}</h3>
        </div>
      </div>

      {/* LOWER DATA */}
      <div className="space-y-2">
        {/* SIGNAL */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Radio size={12} className="text-[#7CFF6B]" />

            <span className="text-[10px] text-zinc-400">SIGNAL</span>
          </div>

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

            <span className="text-[10px] font-semibold text-[#7CFF6B]">
              STABLE
            </span>
          </div>
        </div>

        {/* HEADING */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Navigation size={12} className="text-cyan-400" />

            <span className="text-[10px] text-zinc-400">HEADING</span>
          </div>

          <span className="text-[10px] font-semibold">274°</span>
        </div>

        {/* FUEL */}
        <div>
          <div className="flex items-center justify-between mb-1.5">
            <div className="flex items-center gap-2">
              <Fuel
                size={12}
                className="
                  text-[#FFB547]
                "
              />

              <span className="text-[10px] text-zinc-400">FUEL</span>
            </div>

            <span className="text-[10px] font-semibold">82%</span>
          </div>

          {/* FUEL BAR */}
          <div
            className="
              h-1.5
              rounded-full
              bg-white/5
              overflow-hidden
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: "82%",
              }}
              transition={{
                duration: 1.2,
              }}
              className="
                h-full
                rounded-full
                bg-gradient-to-r
                from-[#7CFF6B]
                to-cyan-400
              "
            />
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div
        className="
          mt-2
          pt-2
          border-t
          border-white/5
          flex
          items-center
          justify-between
          text-[9px]
          tracking-wide
        "
      >
        <span className="text-zinc-500">TRANSPONDER ACTIVE</span>

        <span className="text-[#7CFF6B]">LIVE TELEMETRY</span>
      </div>
    </motion.div>
  );
}
