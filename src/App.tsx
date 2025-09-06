import { BrowserRouter, Routes, Route } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import MusicHub from "@/pages/Music";
import BadActorsPage from "@/pages/BadActors";
import OsteenEvidence from "@/pages/OsteenEvidence";
import AlbumComparison from "@/pages/AlbumComparison";
import BottomTab from "@/components/BottomTab";

export default function App() {
  return (
    <BrowserRouter>
      <SiteHeader />
      <BottomTab />
      <Routes>
        <Route path="/" element={<OsteenEvidence />} />
        <Route path="/evidence" element={<OsteenEvidence />} />
        <Route path="/music" element={<MusicHub />} />
        <Route path="/album/bad-actors" element={<BadActorsPage />} />
        <Route path="/album/comparison" element={<AlbumComparison />} />
      </Routes>
    </BrowserRouter>
  );
}