import {
  Radar,
  Plane,
  TowerControl,
  CircleDot,
  AlertTriangle,
} from "lucide-react";

import { Link } from "react-router-dom";

export default function Sidebar() {
  return (
    <aside
      className="
        w-[190px]
        h-screen
        border-r
        border-white/10
        bg-black/30
        backdrop-blur-xl
        px-4
        py-2
        flex
        flex-col
        justify-between
      "
    >
      <div className="min-h-0 overflow-y-auto pt-3">
        {/* LOGO */}
        <div className="mb-10">
          <div
            className="
              w-14
              h-14
              rounded-2xl
              bg-[#7CFF6B]/10
              border
              border-[#7CFF6B]/20
              flex
              items-center
              justify-center
              mb-3
            "
          >
            <Radar size={26} className="text-[#7CFF6B]" />
          </div>

          <h1 className="text-2xl font-black">AeroFlow</h1>

          <p className="text-xs text-zinc-500">Tactical ATC Interface</p>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-2">
          <Link
            to="/"
            className="
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-2xl
              hover:bg-white/5
              transition
              text-sm
            "
          >
            <Radar size={18} />
            Airspace
          </Link>

          <Link
            to="/atc"
            className="
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-2xl
              hover:bg-white/5
              transition
              text-sm
            "
          >
            <TowerControl size={18} />
            ATC Control
          </Link>

          <Link
            to="/pilot"
            className="
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-2xl
              hover:bg-white/5
              transition
              text-sm
            "
          >
            <Plane size={18} />
            Pilot Requests
          </Link>

          <Link
            to="/radar"
            className="
              flex
              items-center
              gap-3
              px-3
              py-3
              rounded-2xl
              hover:bg-white/5
              transition
              text-sm
            "
          >
            <CircleDot size={18} />
            Radar Tracking
          </Link>
        </nav>
      </div>

      {/* STATUS */}
      <div
        className="
    flex-shrink-0
    h-[112px]
    bg-[#7CFF6B]/10
    border
    border-[#7CFF6B]/20
    rounded-xl
    p-4
    flex
    flex-col
    justify-center
  "
      >
        <div className="flex items-center gap-2 mb-2">
          <AlertTriangle size={18} className="text-[#FFB547]" />
          <h3 className="font-semibold text-sm">System Status</h3>
        </div>

        <p className="text-xs text-zinc-400 leading-relaxed">
          All radar systems operational.
        </p>
      </div>
    </aside>
  );
}
