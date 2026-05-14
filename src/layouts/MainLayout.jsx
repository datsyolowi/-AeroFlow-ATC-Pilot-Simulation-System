import Sidebar from "../components/Sidebar";

export default function MainLayout({ children }) {
  return (
    <div
      className="
        h-[100dvh]
        bg-[#050816]
        text-white
        flex
        overflow-hidden
      "
    >
      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <main
        className="
          flex-1
          relative
          overflow-hidden
        "
      >
        {/* RADAR ATMOSPHERE */}
        <div
          className="
            absolute
            top-[-300px]
            left-[20%]
            w-[900px]
            h-[900px]
            rounded-full
            bg-[#7CFF6B]/[0.06]
            blur-[180px]
            pointer-events-none
          "
        />

        {/* SECONDARY GLOW */}
        <div
          className="
            absolute
            bottom-[-250px]
            right-[-150px]
            w-[700px]
            h-[700px]
            rounded-full
            bg-cyan-500/[0.04]
            blur-[160px]
            pointer-events-none
          "
        />

        {/* VIGNETTE */}
        <div
          className="
            absolute
            inset-0
            bg-[radial-gradient(circle_at_center,transparent_45%,rgba(0,0,0,0.45))]
            pointer-events-none
          "
        />

        {/* CONTENT */}
        <div className="relative z-10 h-full">{children}</div>
      </main>
    </div>
  );
}
