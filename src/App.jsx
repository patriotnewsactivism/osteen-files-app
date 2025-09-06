// src/App.tsx
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
      <div className="flex min-h-screen flex-col bg-gray-50">
        <SiteHeader />

        <Routes>
          <Route path="/" element={<OsteenEvidencePage />} />
          <Route path="/evidence" element={<OsteenEvidencePage />} />
          <Route path="/music" element={<MusicHub />} />
          <Route path="/album/bad-actors" element={<BadActorsPage />} />
        </Routes>

        <BottomTab />
      </div>
    </BrowserRouter>
  );
}
