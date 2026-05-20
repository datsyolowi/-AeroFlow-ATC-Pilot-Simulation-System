import Sidebar from "../components/Sidebar";
import { useTheme } from "../context/ThemeContext";

export default function MainLayout({ children }) {
  const { nightMode } = useTheme();

  return (
    <div
      className={`h-[100dvh] flex overflow-hidden transition-colors duration-300 ${
        nightMode ? "bg-[#050816] text-white" : "bg-[#fafafa] text-zinc-900"
      }`}
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main className="flex-1 relative overflow-hidden">
        {/* RADAR ATMOSPHERE */}
        <div
          className={`absolute top-[-300px] left-[20%] w-[900px] h-[900px] rounded-full blur-[180px] pointer-events-none transition-all duration-300 ${
            nightMode ? "bg-[#7CFF6B]/[0.06]" : "bg-zinc-300/[0.5]"
          }`}
        />

        {/* SECONDARY GLOW */}
        <div
          className={`absolute bottom-[-250px] right-[-150px] w-[700px] h-[700px] rounded-full blur-[160px] pointer-events-none transition-all duration-300 ${
            nightMode ? "bg-cyan-500/[0.04]" : "bg-zinc-200/[0.8]"
          }`}
        />

        {/* VIGNETTE */}
        <div
          className={`absolute inset-0 pointer-events-none transition-all duration-300 ${
            nightMode
              ? "bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45))]"
              : "bg-[radial-gradient(circle_at_center,transparent_55%,rgba(0,0,0,0.04))]"
          }`}
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full">{children}</div>
      </main>
    </div>
  );
}
