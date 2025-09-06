import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "./components/SiteHeader";
import BottomTab from "./components/BottomTab";
import OsteenEvidencePage from "./pages/OsteenEvidence";
import MusicHub from "./pages/Music";
import BadActorsPage from "./pages/BadActors";

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <Routes>
        {/* Default route shows the evidence page */}
        <Route path="/" element={<OsteenEvidencePage />} />
        <Route path="/evidence" element={<OsteenEvidencePage />} />
        {/* Music hub and album pages */}
        <Route path="/music" element={<MusicHub />} />
        <Route path="/album/bad-actors" element={<BadActorsPage />} />
      </Routes>
      {/* Bottom tab for mobile navigation */}
      <BottomTab />
    </BrowserRouter>
  );
}