import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import ATC from "./pages/ATC";
import Radar from "./pages/Radar";
import Pilot from "./pages/Pilot";
import Analytics from "./pages/Analytics";
import Alerts from "./pages/Alerts";
import Settings from "./pages/Settings";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* HOME */}
        <Route path="/" element={<Home />} />

        {/* ATC */}
        <Route path="/atc" element={<ATC />} />

        {/* RADAR */}
        <Route path="/radar" element={<Radar />} />

        {/* PILOT */}
        <Route path="/pilot" element={<Pilot />} />

        {/* ANALYTICS */}
        <Route path="/analytics" element={<Analytics />} />

        {/* ALERTS */}
        <Route path="/alerts" element={<Alerts />} />

        {/* SETTINGS */}
        <Route path="/settings" element={<Settings />} />

        {/* 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}
