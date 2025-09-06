import React, { useState } from "react";
import AudioPlayer from "../components/AudioPlayer";
import { albumInfo, badActorsTracks } from "../data/badActors";

export default function BadActorsPage() {
  // The ID of the track to start playing when the user clicks a play button.
  const [startId, setStartId] = useState<string | undefined>(undefined);

  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-8 md:py-12">
      <div className="flex items-start gap-6">
        <img
          src={albumInfo.cover}
          alt={`${albumInfo.title} cover`}
          className="w-40 h-40 rounded-xl object-cover border"
          onError={(e) => {
            // Fallback to a gray block if the cover image fails to load.
            (e.target as HTMLImageElement).src = "/public/images/bad-actors-cover.jpg";
          }}
        />
        <div>
          <h1 className="text-3xl md:text-4xl font-bold">{albumInfo.title}</h1>
          <p className="text-gray-700">
            {albumInfo.artist} · {albumInfo.year}
          </p>
          <p className="mt-2 text-gray-600">
            Stream the full album right here. Headphones recommended.
          </p>
        </div>
      </div>
      {/* Official BandLab embed for streaming the full album.
          This iframe pulls in BandLab's own player, allowing visitors to
          stream the music directly. We compute the embed ID from the
          albumInfo.bandlabId or extract it from albumInfo.bandlabUrl. */}
      <div className="mt-6">
        <iframe
          src={`https://www.bandlab.com/embed/collection/?id=${
            albumInfo.bandlabId ?? albumInfo.bandlabUrl.split("/").pop()
          }`}
          width="100%"
          height="720"
          allow="autoplay; encrypted-media; clipboard-write; fullscreen"
          sandbox="allow-scripts allow-same-origin allow-popups"
          title="BandLab Album Embed"
          className="rounded-xl border"
        ></iframe>
      </div>
      <ol className="mt-6 divide-y rounded-xl border bg-white/70 backdrop-blur">
        {badActorsTracks.map((t, i) => (
          <li
            key={t.id}
            className="flex items-center justify-between gap-4 p-3"
          >
            <div className="min-w-0">
              <div className="text-sm text-gray-500">
                {String(i + 1).padStart(2, "0")}
              </div>
              <div className="font-medium truncate">{t.title}</div>
              {t.explicit && (
                <span className="text-[10px] rounded px-1.5 py-0.5 border">
                  Explicit
                </span>
              )}
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
      {/* Sticky player resides at the bottom of the viewport */}
      <AudioPlayer tracks={badActorsTracks} startId={startId} />
      {/* Spacer to avoid content behind the player */}
      <div className="h-20" />
    </main>
  );
}