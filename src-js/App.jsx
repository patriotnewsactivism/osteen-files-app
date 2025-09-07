// src-js/App.jsx
import { Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader.js";
import BottomTab from "./components/BottomTab.js";

import Home from "./pages/Home";
import Music from "./pages/Music.js";
import BadActors from "./pages/BadActors.js";
import Evidence from "./pages/OsteenEvidence.js";

export default function App() {
  return (
    <div className="flex min-h-screen flex-col bg-gray-50">
      <SiteHeader />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/music" element={<Music />} />
        <Route path="/album/bad-actors" element={<BadActors />} />
        <Route path="/evidence" element={<Evidence />} />
        {/* add more routes here as needed */}
      </Routes>
      <BottomTab />
    </div>
  );
}
