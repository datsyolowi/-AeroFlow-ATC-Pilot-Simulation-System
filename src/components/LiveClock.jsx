// src/components/LiveClock.jsx

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LiveClock() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const localTime = time.toLocaleTimeString("en-US", {
    hour12: false,
  });

  const utcTime = time.toUTCString().split(" ")[4];

  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.4,
      }}
      className="
        flex
        items-center
        gap-6
        px-4
        py-2
        rounded-2xl
        border
        border-cyan-500/10
        bg-[#08111F]/90
        backdrop-blur-xl
        shadow-[0_0_30px_rgba(0,255,200,0.04)]
      "
    >
      {/* LOCAL */}
      <div>
        <div
          className="
            text-[9px]
            tracking-[0.22em]
            text-zinc-500
            mb-1
          "
        >
          LOCAL
        </div>

        <div
          className="
            text-sm
            font-semibold
            text-white
            font-mono
          "
        >
          {localTime}
        </div>
      </div>

      {/* DIVIDER */}
      <div className="w-px h-10 bg-white/5" />

      {/* UTC */}
      <div>
        <div
          className="
            text-[9px]
            tracking-[0.22em]
            text-cyan-400/70
            mb-1
          "
        >
          UTC / ZULU
        </div>

        <div
          className="
            text-sm
            font-semibold
            text-cyan-400
            font-mono
          "
        >
          {utcTime}Z
        </div>
      </div>
    </motion.div>
  );
}
