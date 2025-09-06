import React, { useState } from "react";
import AudioPlayer from "@/components/AudioPlayer";
import { albumInfo, badActorsTracks } from "@/data/badActors";

export default function BadActorsPage() {
  const [startId, setStartId] = useState<string | undefined>(undefined);

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex items-start gap-6">
        <img
          src={albumInfo.cover}
          alt={`${albumInfo.title} cover`}
          className="w-40 h-40 rounded-xl object-cover border"
          onError={(e)=>{ (e.target as HTMLImageElement).src = "https://www.bandlab.com/images/album-placeholder.png"; }}
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{albumInfo.title}</h1>
          <p className="text-gray-700">{albumInfo.artist} · {albumInfo.year}</p>
          <p className="mt-2 text-gray-600">Stream the full album right here. Headphones recommended.</p>
        </div>
      </div>

      <ol className="mt-6 divide-y rounded-xl border bg-white/70 backdrop-blur">
        {badActorsTracks.map((t, i) => (
          <li key={t.id} className="flex items-center justify-between gap-4 p-3">
            <div className="min-w-0">
              <div className="text-sm text-gray-500">{String(i + 1).padStart(2, "0")}</div>
              <div className="font-medium truncate">{t.title}</div>
              <div className="text-sm text-gray-500">{Math.floor((t.duration || 0) / 60)}:{String((t.duration || 0) % 60).padStart(2, "0")}</div>
              {t.explicit && <span className="text-[10px] rounded px-1.5 py-0.5 border">Explicit</span>}
            </div>
            <button
              className="shrink-0 px-3 py-1.5 rounded-lg border hover:bg-gray-50"
              onClick={() => setStartId(t.id)}
              aria-label={`Play ${t.title}`}
            >
              ▶️ Play
            </button>
          </li>
        ))}
      </ol>

      {/* Sticky player lives at bottom of the screen */}
      <AudioPlayer tracks={badActorsTracks} startId={startId} />
      <div className="h-20" /> {/* spacer so content isn't hidden behind the player */}
    </main>
  );
}