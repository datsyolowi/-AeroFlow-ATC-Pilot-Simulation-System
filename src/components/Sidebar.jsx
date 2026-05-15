import {
  Radar,
  Plane,
  TowerControl,
  CircleDot,
  AlertTriangle,
  BarChart3,
  ShieldAlert,
  Settings,
} from "lucide-react";

import { NavLink } from "react-router-dom";

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
      py-4
      flex
      flex-col
      justify-between
      overflow-hidden
    "
    >
      {/* TOP */}
      <div className="flex-1 pt-2">
        {/* LOGO */}
        <div className="mb-7">
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
        <nav className="space-y-1.5">
          {/* DASHBOARD */}
          <NavLink
            to="/"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <Radar size={18} />
            Airspace
          </NavLink>

          {/* ATC */}
          <NavLink
            to="/atc"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <TowerControl size={18} />
            ATC Control
          </NavLink>

          {/* PILOT */}
          <NavLink
            to="/pilot"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <Plane size={18} />
            Pilot Requests
          </NavLink>

          {/* RADAR */}
          <NavLink
            to="/radar"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <CircleDot size={18} />
            Radar Tracking
          </NavLink>

          {/* ANALYTICS */}
          <NavLink
            to="/analytics"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <BarChart3 size={18} />
            Analytics
          </NavLink>

          {/* ALERTS */}
          <NavLink
            to="/alerts"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <ShieldAlert size={18} />
            Alerts
          </NavLink>

          {/* SETTINGS */}
          <NavLink
            to="/settings"
            className={({ isActive }) =>
              `
                flex
                items-center
                gap-3
                px-3
                py-2.5
                rounded-2xl
                transition
                text-sm
                ${
                  isActive
                    ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                    : "hover:bg-white/5 text-zinc-400 hover:text-white"
                }
              `
            }
          >
            <Settings size={18} />
            Settings
          </NavLink>
        </nav>
      </div>

      {/* STATUS */}
      <div
        className="
        flex-shrink-0
        bg-[#7CFF6B]/10
        border
        border-[#7CFF6B]/20
        rounded-xl
        px-3
        py-3
        mt-3
      "
      >
        <div className="flex items-center gap-2 mb-1.5">
          <AlertTriangle size={14} className="text-[#FFB547]" />

          <h3 className="font-semibold text-[13px]">System Status</h3>
        </div>

        <p
          className="
          text-[11px]
          text-zinc-400
          leading-relaxed
        "
        >
          All radar systems operational.
        </p>
      </div>
    </aside>
  );
}
