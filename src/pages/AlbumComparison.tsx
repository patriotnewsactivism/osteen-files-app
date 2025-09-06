import React, { useState } from "react";
import WaveformVisualizer from "@/components/WaveformVisualizer";
import { badActorsTracks } from "@/data/badActors";
import { Helmet } from "react-helmet-async";

<Helmet>
  <title>Evidence | Osteen Case</title>
  <meta name="description" content="Browse the Osteen case filings, transcripts, and videos." />
  <meta property="og:title" content="Evidence | Osteen Case" />
  <meta property="og:description" content="Browse the Osteen case filings, transcripts, and videos." />
  <meta property="og:image" content="/images/social-card-evidence.jpg" />
  <link rel="canonical" href="https://osteen.wtpnews.org/evidence" />
</Helmet>

export default function AlbumComparison() {
  const [selectedTrack1, setSelectedTrack1] = useState(badActorsTracks[0]);
  const [selectedTrack2, setSelectedTrack2] = useState(badActorsTracks[1]);

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 dark:text-white">Album Track Comparison</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">Select First Track</label>
          <select 
            value={selectedTrack1.id} 
            onChange={(e) => setSelectedTrack1(badActorsTracks.find(t => t.id === e.target.value) || badActorsTracks[0])}
            className="w-full p-2 border rounded-lg bg-white/70 dark:bg-gray-700/70 backdrop-blur dark:text-white"
          >
            {badActorsTracks.map(track => (
              <option key={track.id} value={track.id}>{track.title}</option>
            ))}
          </select>
        </div>
        
        <div>
          <label className="block text-sm font-medium mb-2 dark:text-gray-300">Select Second Track</label>
          <select 
            value={selectedTrack2.id} 
            onChange={(e) => setSelectedTrack2(badActorsTracks.find(t => t.id === e.target.value) || badActorsTracks[1])}
            className="w-full p-2 border rounded-lg bg-white/70 dark:bg-gray-700/70 backdrop-blur dark:text-white"
          >
            {badActorsTracks.map(track => (
              <option key={track.id} value={track.id}>{track.title}</option>
            ))}
          </select>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <WaveformVisualizer audioSrc={selectedTrack1.src} title={selectedTrack1.title} />
        <WaveformVisualizer audioSrc={selectedTrack2.src} title={selectedTrack2.title} />
      </div>
    </main>
  );
}