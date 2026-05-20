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
import { useTheme } from "../context/ThemeContext";

export default function Sidebar() {
  const { nightMode } = useTheme();

  return (
    <aside
      className={`
        w-[190px] h-screen flex flex-col justify-between
        overflow-hidden px-4 py-4 transition-colors duration-300
        ${
          nightMode
            ? "bg-black/30 border-r border-white/10 backdrop-blur-xl"
            : "bg-white border-r border-zinc-200"
        }
      `}
    >
      {/* TOP */}
      <div className="flex-1 pt-2">
        {/* LOGO */}
        <div className="mb-7">
          <div
            className={`
              w-14 h-14 rounded-2xl flex items-center justify-center mb-3
              border transition-colors duration-300
              ${
                nightMode
                  ? "bg-[#7CFF6B]/10 border-[#7CFF6B]/20"
                  : "bg-zinc-100 border-zinc-200"
              }
            `}
          >
            <Radar
              size={26}
              className={nightMode ? "text-[#7CFF6B]" : "text-zinc-700"}
            />
          </div>

          <h1
            className={`text-2xl font-black transition-colors duration-300 ${
              nightMode ? "text-white" : "text-zinc-900"
            }`}
          >
            AeroFlow
          </h1>

          <p className="text-xs text-zinc-500">Tactical ATC Interface</p>
        </div>

        {/* NAVIGATION */}
        <nav className="space-y-1.5">
          {[
            { to: "/", icon: Radar, label: "Airspace" },
            { to: "/atc", icon: TowerControl, label: "ATC Control" },
            { to: "/pilot", icon: Plane, label: "Pilot Requests" },
            { to: "/radar", icon: CircleDot, label: "Radar Tracking" },
            { to: "/analytics", icon: BarChart3, label: "Analytics" },
            { to: "/alerts", icon: ShieldAlert, label: "Alerts" },
            { to: "/settings", icon: Settings, label: "Settings" },
          ].map(({ to, icon: Icon, label }) => (
            <NavLink
              key={to}
              to={to}
              className={({ isActive }) =>
                `flex items-center gap-3 px-3 py-2.5 rounded-2xl transition text-sm
                ${
                  isActive
                    ? nightMode
                      ? "bg-[#7CFF6B]/10 text-white border border-[#7CFF6B]/20"
                      : "bg-zinc-900 text-white border border-zinc-900"
                    : nightMode
                      ? "hover:bg-white/5 text-zinc-400 hover:text-white"
                      : "hover:bg-zinc-100 text-zinc-500 hover:text-zinc-900"
                }`
              }
            >
              <Icon size={18} />
              {label}
            </NavLink>
          ))}
        </nav>
      </div>

      {/* STATUS */}
      <div
        className={`
          flex-shrink-0 rounded-xl px-3 py-3 mt-3 border transition-colors duration-300
          ${
            nightMode
              ? "bg-[#7CFF6B]/10 border-[#7CFF6B]/20"
              : "bg-zinc-50 border-zinc-200"
          }
        `}
      >
        <div className="flex items-center gap-2 mb-1.5">
          <AlertTriangle
            size={14}
            className={nightMode ? "text-[#FFB547]" : "text-zinc-500"}
          />
          <h3
            className={`font-semibold text-[13px] ${
              nightMode ? "text-white" : "text-zinc-900"
            }`}
          >
            System Status
          </h3>
        </div>

        <p className="text-[11px] text-zinc-400 leading-relaxed">
          All radar systems operational.
        </p>
      </div>
    </aside>
  );
}
