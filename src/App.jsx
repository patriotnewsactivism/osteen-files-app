import { useEffect, useMemo, useRef, useState } from 'react';
import { osteenEvidence } from './data/osteenEvidence';
import { albumInfo, badActorsTracks } from './data/badActors';

function Header({ nowPlaying, onToggle }) {
  return (
    <header className="sticky top-0 z-20 border-b bg-white/80 backdrop-blur">
      <div className="container py-4 flex items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-xl bg-slate-900"></div>
          <h1 className="h1">Osteen Evidence Hub</h1>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a className="hover:underline" href="#evidence">Evidence</a>
          <a className="hover:underline" href="#audio">Audio</a>
          <button className="btn btn-quiet" onClick={onToggle}>
            {nowPlaying ? `Now Playing: ${nowPlaying.title}` : 'Player'}
          </button>
        </nav>
      </div>
    </header>
  );
}

function EvidenceCard({ item }) {
  return (
    <article id={item.id} className="card group">
      <div className="flex items-start justify-between gap-3">
        <div>
          <div className="text-xs text-slate-500">
            {item.date}{item.kind ? ` · ${item.kind}` : ''}
          </div>
          <h3 className="mt-1 text-lg font-semibold leading-snug">
            {item.title}
          </h3>
        </div>
      </div>

      {item.highlights?.length > 0 && (
        <ul className="mt-3 list-disc pl-5 text-sm text-slate-700 space-y-1">
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}

      {item.citationTags?.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
          {item.citationTags.map((c, i) => (
            <span key={i} className="chip">{c}</span>
          ))}
        </div>
      )}

      {(item.externalLinks?.length > 0 || item.docPath) && (
        <>
          <div className="divider" />
          <div className="flex flex-wrap items-center gap-2">
            {item.docPath && (
              <a
                className="btn btn-primary"
                href={item.docPath}
                target="_blank"
                rel="noreferrer"
              >
                Preview PDF
              </a>
            )}
            {item.externalLinks?.map((l, i) => (
              <a
                key={i}
                className="btn btn-quiet"
                href={l.url}
                target="_blank"
                rel="noreferrer"
                title={l.url}
              >
                {l.label} ↗
              </a>
            ))}
          </div>
        </>
      )}
    </article>
  );
}

function EvidenceGrid({ items }) {
  const sorted = useMemo(
    () => [...items].sort((a, b) => (a.date || '').localeCompare(b.date || '')).reverse(),
    [items]
  );

  return (
    <section id="evidence" className="container py-8">
      <h2 className="h2 mb-4">Evidence</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map(it => <EvidenceCard key={it.id} item={it} />)}
      </div>
    </section>
  );
}

function GlobalPlayer({ tracks, visible, onClose, onNow }) {
  const audioRef = useRef(null);
  const [index, setIndex] = useState(0);
  const track = tracks[index];

  useEffect(() => { onNow?.(track || null); }, [index, track, onNow]);

  useEffect(() => {
    const handler = (e) => {
      const i = e?.detail;
      if (typeof i === 'number' && i >= 0 && i < tracks.length) setIndex(i);
    };
    window.addEventListener('setTrackIndex', handler);
    return () => window.removeEventListener('setTrackIndex', handler);
  }, [tracks.length]);

  const next = () => setIndex(i => (i + 1) % tracks.length);
  const prev = () => setIndex(i => (i - 1 + tracks.length) % tracks.length);

  if (!visible) return null;

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(980px,94vw)] overflow-hidden rounded-2xl border bg-white shadow-xl">
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-xs text-slate-500">Now Playing</div>
          <div className="truncate font-medium">{track?.title}</div>
          <div className="truncate text-xs text-slate-500">{albumInfo?.artist ?? 'Outlawed Productions'}</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-quiet" onClick={prev}>Prev</button>
          <button
            className="btn btn-primary"
            onClick={() => {
              const el = audioRef.current;
              if (!el) return;
              if (el.paused) el.play(); else el.pause();
            }}
          >
            Play/Pause
          </button>
          <button className="btn btn-quiet" onClick={next}>Next</button>
          <button className="btn btn-quiet" onClick={onClose}>Close</button>
        </div>
      </div>
      <audio
        ref={audioRef}
        src={track?.src}
        controls
        className="w-full [&::-webkit-media-controls-enclosure]:rounded-none"
        onEnded={next}
      />
    </div>
  );
}

export default function App() {
  const [playerOpen, setPlayerOpen] = useState(true);
  const [nowPlaying, setNowPlaying] = useState(null);

  return (
    <div className="min-h-screen">
      <Header nowPlaying={nowPlaying} onToggle={() => setPlayerOpen(v => !v)} />

      <main className="pb-36">
        <section className="container pt-8">
          <div className="card">
            <h2 className="h2 mb-2">Status</h2>
            <p className="muted">
              Build healthy. Loading <code>src/data/osteenEvidence.js</code> and <code>src/data/badActors.js</code>.
            </p>
          </div>
        </section>

        <EvidenceGrid items={osteenEvidence} />

        <section id="audio" className="container py-8">
          <h2 className="h2 mb-4">Album / Audio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badActorsTracks.map((t, i) => (
              <div key={t.id} className="card">
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-slate-500">{albumInfo?.artist ?? 'Outlawed Productions'}</div>
                <button
                  className="btn btn-quiet mt-4"
                  onClick={() => {
                    setPlayerOpen(true);
                    window.dispatchEvent(new CustomEvent('setTrackIndex', { detail: i }));
                  }}
                >
                  Play
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <GlobalPlayer
        tracks={badActorsTracks}
        visible={playerOpen}
        onClose={() => setPlayerOpen(false)}
        onNow={setNowPlaying}
      />
    </div>
  );
}
