import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home from "./pages/Home";
import ATC from "./pages/ATC";
import Pilot from "./pages/Pilot";
import Radar from "./pages/Radar";
import NotFound from "./pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/atc" element={<ATC />} />

        <Route path="/pilot" element={<Pilot />} />

        <Route path="/radar" element={<Radar />} />

        <Route path="*" element={<NotFound />} />

      </Routes>

    </BrowserRouter>
  );
}