import MainLayout from "../layouts/MainLayout";
import { motion } from "framer-motion";
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
  return (
    <MainLayout>
      <div
        className="
          w-full
          h-[100dvh]
          overflow-hidden
          p-2
          flex
          flex-col
        "
      >
        {/* TOP BAR */}
        <div
          className="
            flex
            items-center
            justify-between
            mb-2
            flex-shrink-0
          "
        >
          <div>
            <p
              className="
                text-[#7CFF6B]
                text-[10px]
                tracking-[0.28em]
                mb-1
              "
            >
              PILOT COMMUNICATIONS
            </p>

            <h1 className="text-lg font-black">Pilot Request Center</h1>

            <div
              className="
                text-[10px]
                tracking-[0.18em]
                text-zinc-500
                mt-1
                font-mono
              "
            >
              <div className="flex items-center gap-3">
                <span>Live Aircraft Coordination</span>
                <span className="text-zinc-700">•</span>
                <span className="text-cyan-400">Multi-Channel Requests</span>
              </div>
            </div>
          </div>

          <div
            className="
              px-3
              py-2
              rounded-xl
              border
              border-[#7CFF6B]/20
              bg-[#7CFF6B]/10
            "
          >
            <div className="flex items-center gap-2">
              <motion.div
                animate={{ opacity: [0.3, 1, 0.3] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="w-2 h-2 rounded-full bg-[#7CFF6B]"
              />
              <span className="text-xs font-semibold text-[#7CFF6B]">
                CHANNELS ACTIVE
              </span>
            </div>
          </div>
        </div>

        {/* MAIN GRID */}
        <div
          className="
            grid
            grid-cols-12
            gap-3
            flex-1
            min-h-0
          "
        >
          {/* LEFT — Aircraft Queue */}
          <div
            className="
              col-span-4
              min-h-0
              flex
              flex-col
            "
          >
            <div
              className="
                flex-1
                min-h-0
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  INCOMING REQUESTS
                </p>
                <h2 className="text-lg font-black">Aircraft Queue</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-0">
                {requests.map((request, index) => (
                  <motion.div
                    key={request.callsign}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="
                      border border-white/5 rounded-2xl p-3 bg-black/20
                    "
                  >
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-center gap-2">
                        <div
                          className="
                            w-9 h-9 rounded-xl bg-cyan-500/10
                            flex items-center justify-center flex-shrink-0
                          "
                        >
                          <Plane size={15} className="text-cyan-400" />
                        </div>
                        <div>
                          <h3 className="font-bold text-xs">
                            {request.callsign}
                          </h3>
                          <p className="text-[10px] text-zinc-500">
                            ETA {request.eta}
                          </p>
                        </div>
                      </div>
                      <span
                        className={`text-[10px] ${
                          request.urgency === "HIGH"
                            ? "text-red-400"
                            : request.urgency === "MEDIUM"
                              ? "text-[#FFB547]"
                              : "text-[#7CFF6B]"
                        }`}
                      >
                        {request.urgency}
                      </span>
                    </div>

                    <p className="text-xs text-zinc-300 leading-relaxed mb-3">
                      {request.request}
                    </p>

                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-1.5 text-[10px] text-zinc-500">
                        <Fuel size={12} />
                        <span>{request.fuel}</span>
                      </div>
                      <div className="flex gap-2">
                        <button
                          className="
                            px-3 py-1.5 rounded-xl bg-[#7CFF6B]/10
                            border border-[#7CFF6B]/20 text-[#7CFF6B]
                            text-[10px] font-semibold hover:bg-[#7CFF6B]/20 transition
                          "
                        >
                          APPROVE
                        </button>
                        <button
                          className="
                            px-3 py-1.5 rounded-xl bg-red-500/10
                            border border-red-500/20 text-red-400
                            text-[10px] font-semibold hover:bg-red-500/20 transition
                          "
                        >
                          DENY
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* CENTER — Flight Intelligence */}
          <div
            className="
              col-span-5
              min-h-0
              flex
              flex-col
              gap-3
            "
          >
            <div
              className="
                flex-1
                min-h-0
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="flex items-center justify-between mb-4 flex-shrink-0">
                <div>
                  <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                    FLIGHT INTELLIGENCE
                  </p>
                  <h2 className="text-xl font-black">DAL912</h2>
                </div>
                <div
                  className="
                    px-3 py-2 rounded-xl bg-red-500/10
                    border border-red-500/20 text-red-400 text-xs font-semibold
                  "
                >
                  HIGH PRIORITY
                </div>
              </div>

              {/* GRID */}
              <div className="grid grid-cols-2 gap-2 mb-3 flex-shrink-0">
                {[
                  {
                    icon: MapPinned,
                    color: "text-cyan-400",
                    label: "ROUTE",
                    value: "KJFK → RJTT",
                  },
                  {
                    icon: Fuel,
                    color: "text-[#FFB547]",
                    label: "FUEL",
                    value: "12% Remaining",
                  },
                  {
                    icon: CloudRain,
                    color: "text-cyan-400",
                    label: "WEATHER",
                    value: "Heavy Turbulence",
                  },
                  {
                    icon: AlertTriangle,
                    color: "text-red-400",
                    label: "STATUS",
                    value: "Emergency Advisory",
                  },
                ].map((item) => (
                  <div
                    key={item.label}
                    className="border border-white/5 rounded-2xl p-3"
                  >
                    <div className="flex items-center gap-2 mb-1.5">
                      <item.icon size={14} className={item.color} />
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
                className="
                  flex-1
                  min-h-0
                  border border-cyan-500/10 rounded-3xl
                  bg-black/20 p-4 overflow-y-auto
                "
              >
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-3">
                  ATC RECOMMENDATION
                </p>
                <div className="space-y-3 text-xs leading-relaxed text-zinc-300">
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
          <div
            className="
              col-span-3
              min-h-0
              flex
              flex-col
            "
          >
            <div
              className="
                flex-1
                min-h-0
                bg-[#0B1220]
                border
                border-white/10
                rounded-3xl
                p-4
                flex
                flex-col
              "
            >
              <div className="mb-3 flex-shrink-0">
                <p className="text-zinc-500 text-[10px] tracking-[0.2em] mb-1">
                  LIVE COMMUNICATIONS
                </p>
                <h2 className="text-lg font-black">ATC Feed</h2>
              </div>

              <div className="flex-1 overflow-y-auto space-y-2 pr-1 min-h-0">
                {communications.map((message, index) => (
                  <motion.div
                    key={message}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.08 }}
                    className="border border-white/5 rounded-2xl p-3"
                  >
                    <div className="flex items-start gap-2">
                      <div
                        className="
                          w-8 h-8 rounded-xl bg-cyan-500/10
                          flex items-center justify-center flex-shrink-0
                        "
                      >
                        <Radio size={13} className="text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-xs text-zinc-300 leading-relaxed">
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
