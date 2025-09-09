import { useEffect, useMemo, useRef, useState } from 'react';
import { osteenEvidence } from './data/osteenEvidence';
import { albumInfo, badActorsTracks } from './data/badActors';

function Header({ nowPlaying, onToggle }) {
  return (
    <header className="border-b bg-white sticky top-0 z-10">
      <div className="mx-auto max-w-6xl px-4 py-4 flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold tracking-tight">Osteen Evidence Hub</h1>
        <nav className="flex items-center gap-6 text-sm">
          <a className="hover:underline" href="#evidence">Evidence</a>
          <a className="hover:underline" href="#audio">Audio</a>
          <button className="rounded-xl border px-3 py-2 hover:bg-slate-50" onClick={onToggle}>
            {nowPlaying ? `Now Playing: ${nowPlaying.title}` : 'Player'}
          </button>
        </nav>
      </div>
    </header>
  );
}

function EvidenceCard({ item, registry }) {
  return (
    <article id={item.id} className="rounded-2xl border bg-white p-5 shadow-sm">
      <div className="text-xs text-slate-500">{item.date}{item.kind ? ` · ${item.kind}` : ''}</div>
      <h3 className="mt-1 text-lg font-medium">{item.title}</h3>

      {item.highlights?.length > 0 && (
        <ul className="mt-2 list-disc pl-5 text-sm text-slate-700">
          {item.highlights.map((h, i) => <li key={i}>{h}</li>)}
        </ul>
      )}

      {item.citationTags?.length > 0 && (
        <div className="mt-3 flex flex-wrap gap-2">
          {item.citationTags.map((c, i) => (
            <span key={i} className="text-xs rounded-full border px-2 py-0.5">{c}</span>
          ))}
        </div>
      )}

      {item.externalLinks?.length > 0 && (
        <div className="mt-4 flex flex-col gap-1">
          {item.externalLinks.map((l, i) => (
            <a key={i} className="text-sm underline" href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
          ))}
        </div>
      )}

      {item.docPath && (
        <a
          className="mt-4 inline-block rounded-xl border px-3 py-2 text-sm hover:bg-slate-50"
          href={item.docPath}
          target="_blank"
          rel="noreferrer"
        >
          Preview PDF
        </a>
      )}
    </article>
  );
}

function EvidenceGrid({ items }) {
  const registry = useMemo(
    () => Object.fromEntries(items.map(it => [it.id, { title: it.title }])),
    [items]
  );
  const sorted = useMemo(
    () => [...items].sort((a, b) => (a.date || '').localeCompare(b.date || '')).reverse(),
    [items]
  );
  return (
    <section id="evidence" className="mx-auto max-w-6xl px-4 py-8">
      <h2 className="text-xl font-semibold mb-3">Evidence</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {sorted.map(it => <EvidenceCard key={it.id} item={it} registry={registry} />)}
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
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 w-[min(960px,92vw)] rounded-2xl border bg-white shadow-lg">
      <div className="px-4 py-3 flex items-center justify-between gap-3">
        <div className="min-w-0">
          <div className="text-sm text-slate-500">Now Playing</div>
          <div className="truncate font-medium">{track?.title}</div>
          <div className="truncate text-xs text-slate-500">{albumInfo?.artist ?? 'Outlawed Productions'}</div>
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-lg border px-2 py-1" onClick={prev}>Prev</button>
          <button
            className="rounded-lg border px-3 py-1"
            onClick={() => {
              const el = audioRef.current;
              if (!el) return;
              if (el.paused) el.play(); else el.pause();
            }}
          >
            Play/Pause
          </button>
          <button className="rounded-lg border px-2 py-1" onClick={next}>Next</button>
          <button className="rounded-lg border px-2 py-1" onClick={onClose}>Close</button>
        </div>
      </div>
      <audio ref={audioRef} src={track?.src} controls className="w-full rounded-b-2xl" onEnded={next} />
    </div>
  );
}

export default function App() {
  const [playerOpen, setPlayerOpen] = useState(true);
  const [nowPlaying, setNowPlaying] = useState(null);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <Header nowPlaying={nowPlaying} onToggle={() => setPlayerOpen(v => !v)} />

      <main className="pb-28">
        <section className="mx-auto max-w-6xl px-4 pt-8">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-2">Status</h2>
            <p className="text-sm text-slate-600">
              Build healthy. Loading <code>src/data/osteenEvidence.js</code> and <code>src/data/badActors.js</code>.
            </p>
          </div>
        </section>

        <EvidenceGrid items={osteenEvidence} />

        <section id="audio" className="mx-auto max-w-6xl px-4 py-8">
          <h2 className="text-xl font-semibold mb-3">Album / Audio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {badActorsTracks.map((t, i) => (
              <div key={t.id} className="rounded-2xl border bg-white p-5 shadow-sm">
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-slate-500">{albumInfo?.artist ?? 'Outlawed Productions'}</div>
                <button
                  className="mt-4 rounded-xl border px-3 py-2 text-sm hover:bg-slate-50"
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
