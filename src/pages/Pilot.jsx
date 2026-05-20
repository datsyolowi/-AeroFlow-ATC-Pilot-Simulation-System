import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
import { useTheme } from "../context/ThemeContext";
import {
  Plane,
  Fuel,
  CloudRain,
  AlertTriangle,
  Radio,
  MapPinned,
} from "lucide-react";

const requests = [
  {
    callsign: "AFL245",
    request: "Altitude change request",
    urgency: "NORMAL",
    fuel: "78%",
    eta: "14 mins",
  },
  {
    callsign: "DAL912",
    request: "Emergency landing priority",
    urgency: "HIGH",
    fuel: "12%",
    eta: "6 mins",
  },
  {
    callsign: "BAW672",
    request: "Weather deviation approval",
    urgency: "MEDIUM",
    fuel: "64%",
    eta: "18 mins",
  },
  {
    callsign: "QTR721",
    request: "Holding pattern clearance",
    urgency: "LOW",
    fuel: "83%",
    eta: "27 mins",
  },
];

const communications = [
  "AFL245 altitude increase approved",
  "DAL912 assigned emergency runway",
  "Weather turbulence advisory transmitted",
  "QTR721 holding pattern confirmed",
  "Bravo sector rerouting activated",
  "CPA880 taxi sequence delayed",
];

export default function Pilot() {
  const { nightMode } = useTheme();
  const dark = nightMode;

  const card = dark
    ? "bg-[#0B1220] border border-white/10 text-white"
    : "bg-white border border-zinc-200 text-zinc-900";

  const inner = dark
    ? "border border-white/5 rounded-2xl bg-black/20"
    : "border border-zinc-100 rounded-2xl bg-zinc-50";

  const urgencyColor = (u) => {
    if (u === "HIGH") return dark ? "text-red-400" : "text-red-600";
    if (u === "MEDIUM") return dark ? "text-[#FFB547]" : "text-amber-600";
    return dark ? "text-[#7CFF6B]" : "text-zinc-500";
  };

  return (
    <MainLayout>
      <div
        className={`w-full h-[100dvh] overflow-hidden px-5 py-5 flex flex-col transition-colors duration-300 ${
          dark ? "bg-[#050816]" : "bg-[#f5f5f7]"
        }`}
      >
        {/* TOP BAR */}
        <div className="flex items-center justify-between mb-5 flex-shrink-0">
          <div>
            <p
              className={`text-[10px] tracking-[0.32em] mb-1.5 font-semibold ${
                dark ? "text-[#7CFF6B]" : "text-zinc-400"
              }`}
            >
              PILOT COMMUNICATIONS
            </p>
            <h1
              className={`text-2xl font-black ${dark ? "text-white" : "text-zinc-900"}`}
            >
              Pilot Request Center
            </h1>
            <div className="flex items-center gap-3 text-[10px] tracking-[0.18em] text-zinc-500 mt-1.5 font-mono">
              <span>Live Aircraft Coordination</span>
              <span className={dark ? "text-zinc-700" : "text-zinc-300"}>
                •
              </span>
              <span className={dark ? "text-cyan-400" : "text-zinc-500"}>
                Multi-Channel Requests
              </span>
            </div>
          </div>

          <div
            className={`px-4 py-2.5 rounded-xl border ${
              dark
                ? "border-[#7CFF6B]/20 bg-[#7CFF6B]/10"
                : "border-zinc-200 bg-white"
            }`}
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className={`w-2 h-2 rounded-full ${dark ? "bg-[#7CFF6B]" : "bg-zinc-900"}`}
              />
              <span
                className={`text-xs font-semibold ${dark ? "text-[#7CFF6B]" : "text-zinc-900"}`}
              >
                CHANNELS ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div className="grid grid-cols-12 gap-4 flex-1 min-h-0">
          {/* LEFT — Aircraft Queue */}
          <div className="col-span-4 min-h-0 flex flex-col">
            <div
              className={`${card} flex-1 min-h-0 rounded-3xl p-5 flex flex-col`}
            >
              <div className="mb-4 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                  INCOMING REQUESTS
                </p>
                <h2 className="text-lg font-black">Aircraft Queue</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 min-h-0">
                {requests.map((request, index) => (
                  <motion.div
                    key={request.callsign}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={inner}
                  >
                    <div className="p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2.5">
                          <div
                            className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 ${
                              dark ? "bg-cyan-500/10" : "bg-zinc-100"
                            }`}
                          >
                            <Plane
                              size={15}
                              className={
                                dark ? "text-cyan-400" : "text-zinc-600"
                              }
                            />
                          </div>
                          <div>
                            <h3 className="font-bold text-xs">
                              {request.callsign}
                            </h3>
                            <p className="text-[10px] text-zinc-500 mt-0.5">
                              ETA {request.eta}
                            </p>
                          </div>
                        </div>
                        <span
                          className={`text-[10px] font-semibold ${urgencyColor(request.urgency)}`}
                        >
                          {request.urgency}
                        </span>
                      </div>

                      <p
                        className={`text-xs leading-relaxed mb-3 ${dark ? "text-zinc-300" : "text-zinc-600"}`}
                      >
                        {request.request}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                          <Fuel size={12} />
                          <span>{request.fuel}</span>
                        </div>
                        <div className="flex gap-2">
                          <button
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-semibold transition border ${
                              dark
                                ? "bg-[#7CFF6B]/10 border-[#7CFF6B]/20 text-[#7CFF6B] hover:bg-[#7CFF6B]/20"
                                : "bg-zinc-900 border-zinc-900 text-white hover:bg-zinc-700"
                            }`}
                          >
                            APPROVE
                          </button>
                          <button
                            className={`px-3 py-1.5 rounded-xl text-[10px] font-semibold transition border ${
                              dark
                                ? "bg-red-500/10 border-red-500/20 text-red-400 hover:bg-red-500/20"
                                : "bg-red-50 border-red-200 text-red-600 hover:bg-red-100"
                            }`}
                          >
                            DENY
                          </button>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Flight Intelligence */}
          <div className="col-span-5 min-h-0 flex flex-col gap-4">
            <div
              className={`${card} flex-1 min-h-0 rounded-3xl p-5 flex flex-col`}
            >
              <div className="flex items-center justify-between mb-5 flex-shrink-0">
                <div>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                    FLIGHT INTELLIGENCE
                  </p>
                  <h2 className="text-xl font-black">DAL912</h2>
                </div>
                <div
                  className={`px-3 py-2 rounded-xl text-xs font-semibold border ${
                    dark
                      ? "bg-red-500/10 border-red-500/20 text-red-400"
                      : "bg-red-50 border-red-200 text-red-600"
                  }`}
                >
                  HIGH PRIORITY
                </div>
              </div>

              {/* INFO GRID */}
              <div className="grid grid-cols-2 gap-2.5 mb-4 flex-shrink-0">
                {[
                  {
                    icon: MapPinned,
                    darkColor: "text-cyan-400",
                    lightColor: "text-zinc-500",
                    label: "ROUTE",
                    value: "KJFK → RJTT",
                  },
                  {
                    icon: Fuel,
                    darkColor: "text-[#FFB547]",
                    lightColor: "text-amber-600",
                    label: "FUEL",
                    value: "12% Remaining",
                  },
                  {
                    icon: CloudRain,
                    darkColor: "text-cyan-400",
                    lightColor: "text-zinc-500",
                    label: "WEATHER",
                    value: "Heavy Turbulence",
                  },
                  {
                    icon: AlertTriangle,
                    darkColor: "text-red-400",
                    lightColor: "text-red-600",
                    label: "STATUS",
                    value: "Emergency Advisory",
                  },
                ].map((item) => (
                  <div key={item.label} className={`${inner} p-3.5`}>
                    <div className="flex items-center gap-2 mb-2">
                      <item.icon
                        size={14}
                        className={dark ? item.darkColor : item.lightColor}
                      />
                      <span className="text-[10px] text-zinc-500">
                        {item.label}
                      </span>
                    </div>
                    <h3 className="font-bold text-xs">{item.value}</h3>
                  </div>
                ))}
              </div>

              {/* ATC RECOMMENDATION */}
              <div
                className={`flex-1 min-h-0 rounded-3xl p-4 overflow-y-auto border ${
                  dark
                    ? "border-cyan-500/10 bg-black/20"
                    : "border-zinc-100 bg-zinc-50"
                }`}
              >
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-3">
                  ATC RECOMMENDATION
                </p>
                <div
                  className={`space-y-3 text-xs leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}
                >
                  <p>
                    Immediate runway allocation recommended for DAL912 due to
                    critically low reserve fuel.
                  </p>
                  <p>
                    Weather deviation corridor approved through Bravo sector to
                    avoid turbulence.
                  </p>
                  <p>
                    Emergency response units notified and runway 24L prepared
                    for priority landing sequence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT — ATC Feed */}
          <div className="col-span-3 min-h-0 flex flex-col">
            <div
              className={`${card} flex-1 min-h-0 rounded-3xl p-5 flex flex-col`}
            >
              <div className="mb-4 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1.5">
                  LIVE COMMUNICATIONS
                </p>
                <h2 className="text-lg font-black">ATC Feed</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2.5 pr-1 min-h-0">
                {communications.map((message, index) => (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className={`${inner} p-4`}
                  >
                    <div className="flex items-start gap-2.5">
                      <div
                        className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 ${
                          dark ? "bg-cyan-500/10" : "bg-zinc-100"
                        }`}
                      >
                        <Radio
                          size={13}
                          className={dark ? "text-cyan-400" : "text-zinc-600"}
                        />
                      </div>
                      <div>
                        <p
                          className={`text-xs leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}
                        >
                          {message}
                        </p>
                        <p className="text-[10px] text-zinc-500 mt-1">
                          JUST NOW
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
}
