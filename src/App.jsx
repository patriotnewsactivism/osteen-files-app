import { useEffect, useState } from 'react';
import { osteenEvidence } from './data/osteenEvidence';
import { albumInfo, badActorsTracks } from './data/badActors';
import { EvidenceGrid } from './components/EvidenceGrid';
import { GlobalPlayer } from './components/GlobalPlayer';
import { Header } from './components/Header';
import { DarkModeToggle } from './components/DarkModeToggle';

export default function App() {
  const [playerOpen, setPlayerOpen] = useState(true);
  const [nowPlaying, setNowPlaying] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDarkMode]);

  return (
    <div className="min-h-screen">
      <Header nowPlaying={nowPlaying} onToggle={() => setPlayerOpen((v) => !v)} />

      <main className="pb-36">
        <section className="container pt-8">
          <div className="card p-6">
            <div className="flex justify-between items-center">
              <h2 className="h2 mb-2">Status</h2>
              <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />
            </div>
            <p className="muted">
              Build healthy. Loading <code>src/data/osteenEvidence.js</code> and{' '}
              <code>src/data/badActors.js</code>.
            </p>
          </div>
        </section>

        <EvidenceGrid items={osteenEvidence} />

        <section id="audio" className="container py-8">
          <h2 className="h2 mb-4">Album / Audio</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {badActorsTracks.map((t, i) => (
              <div key={t.id} className="card p-6">
                <div className="font-medium">{t.title}</div>
                <div className="text-xs text-slate-500">
                  {albumInfo?.artist ?? 'Outlawed Productions'}
                </div>
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