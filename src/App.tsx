import React, { useState, useEffect, useMemo, createContext, useContext } from "react";
import { osteenEvidence } from "./data/osteenEvidence";
import { badActorsTracks, albumInfo, timelineEvents } from "./data/badActors";

type ViewMode = "dashboard" | "evidence" | "music" | "search" | "timeline" | "compare";

// Theme Context
type Theme = "light" | "dark" | "system";

interface ThemeContextType {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

// Theme Provider Component
const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem("theme") as Theme;
      if (saved && ["light", "dark", "system"].includes(saved)) {
        return saved;
      }
    }
    return "system";
  });

  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const root = window.document.documentElement;
    
    const applyTheme = (isDarkMode: boolean) => {
      setIsDark(isDarkMode);
      if (isDarkMode) {
        root.classList.add("dark");
      } else {
        root.classList.remove("dark");
      }
    };

    if (theme === "system") {
      const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
      applyTheme(mediaQuery.matches);
      
      const handleChange = (e: MediaQueryListEvent) => applyTheme(e.matches);
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    } else {
      applyTheme(theme === "dark");
    }
  }, [theme]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      localStorage.setItem("theme", theme);
    }
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme, isDark }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Theme Toggle Component
const ThemeToggle: React.FC<{ className?: string }> = ({ className = "" }) => {
  const { theme, setTheme, isDark } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className={`w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 ${className}`} />
    );
  }

  const cycleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else if (theme === "dark") {
      setTheme("system");
    } else {
      setTheme("light");
    }
  };

  const getIcon = () => {
    switch (theme) {
      case "light": return "☀️";
      case "dark": return "🌙";
      case "system": return "💻";
    }
  };

  return (
    <button
      onClick={cycleTheme}
      className={`relative w-10 h-10 rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95 group ${className}`}
      title={`Current: ${theme} mode`}
    >
      <span className="text-lg transition-transform duration-200 group-hover:scale-110">
        {getIcon()}
      </span>
    </button>
  );
};

// Simple Audio Player Component
const SimpleAudioPlayer = ({ tracks, startId }: { tracks: any[], startId?: string }) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, tracks.findIndex(t => t.id === startId))
  );
  const [isPlaying, setIsPlaying] = useState(false);

  const currentTrack = tracks[currentIndex];

  const formatDuration = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const nextTrack = () => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  };

  const prevTrack = () => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-lg z-50 p-4">
      <div className="max-w-7xl mx-auto flex items-center gap-4">
        <img
          src={albumInfo.cover}
          alt="Album cover"
          className="w-12 h-12 rounded object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23e5e7eb'/><text x='50' y='50' text-anchor='middle' dy='.3em' fill='%236b7280'>🎵</text></svg>";
          }}
        />
        
        <div className="flex-1 min-w-0">
          <div className="font-medium text-gray-900 dark:text-white truncate">
            {currentTrack?.title || "No track selected"}
          </div>
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {currentTrack?.artist} • {currentTrack ? formatDuration(currentTrack.duration) : "0:00"}
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={prevTrack}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ⏮️
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="p-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white"
          >
            {isPlaying ? "⏸️" : "▶️"}
          </button>
          <button
            onClick={nextTrack}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800"
          >
            ⏭️
          </button>
        </div>

        <a
          href={albumInfo.bandlabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-sm font-medium"
        >
          🌐 BandLab
        </a>
      </div>
    </div>
  );
};

// Main App Component
const OsteenEvidenceHub = () => {
  const [currentView, setCurrentView] = useState<ViewMode>("dashboard");
  const [currentTrack, setCurrentTrack] = useState<string | undefined>();
  const [isPlayerVisible, setIsPlayerVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  // Dashboard stats
  const stats = useMemo(() => ({
    totalEvidence: osteenEvidence.length,
    totalTracks: badActorsTracks.length,
    timelineEvents: timelineEvents.length,
    highPriorityEvidence: osteenEvidence.filter(e => e.significance === "high").length,
    totalDuration: badActorsTracks.reduce((acc, track) => acc + track.duration, 0),
    jurisdictions: Array.from(new Set(osteenEvidence.map(e => e.jurisdiction))).length
  }), []);

  // Search functionality
  const filteredEvidence = useMemo(() => {
    if (!searchQuery) return osteenEvidence;
    
    const query = searchQuery.toLowerCase();
    return osteenEvidence.filter(item => 
      item.title.toLowerCase().includes(query) ||
      item.summary.toLowerCase().includes(query) ||
      item.keywords.some(keyword => keyword.toLowerCase().includes(query)) ||
      item.highlights.some(highlight => highlight.toLowerCase().includes(query))
    );
  }, [searchQuery]);

  // Dashboard Component
  const Dashboard = () => (
    <div className="max-w-7xl mx-auto p-6 space-y-8">
      <div className="text-center py-12 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950 rounded-2xl border dark:border-gray-800">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 dark:text-white mb-4">
          Osteen Evidence Hub
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
          Constitutional violations documentation platform with comprehensive evidence repository, 
          legal analysis tools, and musical chronicle of institutional accountability.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <button
            onClick={() => setCurrentView("evidence")}
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
          >
            📄 Explore Evidence
          </button>
          <button
            onClick={() => setCurrentView("music")}
            className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-semibold transition-colors"
          >
            🎵 Listen to Bad Actors
          </button>
          <button
            onClick={() => setCurrentView("timeline")}
            className="px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg font-semibold transition-colors"
          >
            📅 View Timeline
          </button>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">{stats.totalEvidence}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Evidence Items</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stats.totalTracks}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Music Tracks</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stats.timelineEvents}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Timeline Events</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-red-600 dark:text-red-400">{stats.highPriorityEvidence}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">High Priority</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-yellow-600 dark:text-yellow-400">{Math.floor(stats.totalDuration / 60)}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Minutes Music</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl p-4 border dark:border-gray-700 text-center">
          <div className="text-2xl font-bold text-indigo-600 dark:text-indigo-400">{stats.jurisdictions}</div>
          <div className="text-sm text-gray-600 dark:text-gray-400">Jurisdictions</div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-gray-900 to-gray-800 dark:from-gray-800 dark:to-gray-900 rounded-2xl p-8 text-center text-white">
        <h2 className="text-2xl font-bold mb-4">Constitutional Accountability Documentation</h2>
        <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
          This platform documents systematic institutional violations through comprehensive evidence analysis 
          and musical narrative, serving as both forensic documentation and constitutional warning system.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={albumInfo.bandlabUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white text-gray-900 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
          >
            🎵 Listen on BandLab
          </a>
          <button
            onClick={() => setCurrentView("search")}
            className="px-6 py-3 border border-white text-white rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-colors"
          >
            🔍 Search Evidence
          </button>
        </div>
      </div>
    </div>
  );

  // Evidence Page
  const EvidencePage = () => (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Evidence Repository</h2>
      <div className="grid gap-6">
        {osteenEvidence.map(item => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-xl border dark:border-gray-700 p-6">
            <div className="flex justify-between items-start mb-4">
              <h3 className="font-semibold text-lg text-gray-900 dark:text-white">{item.title}</h3>
              <span className={`px-3 py-1 rounded-full text-xs ${
                item.significance === "high" ? "bg-red-100 dark:bg-red-900 text-red-800 dark:text-red-200" :
                item.significance === "medium" ? "bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200" :
                "bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-200"
              }`}>
                {item.significance} priority
              </span>
            </div>
            <div className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              {item.kind} • {item.date} • {item.jurisdiction}
            </div>
            <ul className="space-y-1 mb-4">
              {item.highlights.map((highlight, i) => (
                <li key={i} className="text-sm text-gray-700 dark:text-gray-300 flex items-start gap-2">
                  <span className="text-blue-500 mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-2 mb-4">
              {item.citationTags.map((tag, i) => (
                <span key={i} className="px-2 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded text-xs">
                  {tag}
                </span>
              ))}
            </div>
            {item.docPath && (
              <a
                href={item.docPath}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium"
              >
                📄 View Document
              </a>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  // Music Page
  const MusicPage = () => (
    <div className="max-w-4xl mx-auto p-6">
      <div className="text-center mb-8">
        <img
          src={albumInfo.cover}
          alt="Bad Actors Album Cover"
          className="w-64 h-64 mx-auto rounded-2xl shadow-2xl mb-6"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23e5e7eb'/><text x='50' y='50' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='24'>🎵</text></svg>";
          }}
        />
        <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{albumInfo.title}</h2>
        <p className="text-xl text-gray-600 dark:text-gray-400 mb-4">{albumInfo.artist} • {albumInfo.year}</p>
        <p className="text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-6">
          {albumInfo.description}
        </p>
        <a
          href={albumInfo.bandlabUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-colors"
        >
          🌐 Listen on BandLab
        </a>
      </div>
      
      <div className="space-y-2">
        {badActorsTracks.map((track, index) => (
          <div
            key={track.id}
            className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-4 hover:bg-gray-50 dark:hover:bg-gray-700 cursor-pointer transition-colors"
            onClick={() => {
              setCurrentTrack(track.id);
              setIsPlayerVisible(true);
            }}
          >
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="text-gray-500 dark:text-gray-400 w-8">
                  {(index + 1).toString().padStart(2, '0')}
                </span>
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white">{track.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{track.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Math.floor(track.duration / 60)}:{(track.duration % 60).toString().padStart(2, '0')}
                </span>
                <button className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 text-blue-600 dark:text-blue-400">
                  ▶️
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Search Page
  const SearchPage = () => (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Search Evidence</h2>
      
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search evidence, keywords, or case details..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full p-4 border dark:border-gray-700 rounded-lg bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
        />
      </div>

      <div className="grid gap-4">
        {filteredEvidence.map(item => (
          <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">{item.title}</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
              {item.kind} • {item.date} • {item.jurisdiction}
            </p>
            <p className="text-gray-700 dark:text-gray-300 text-sm">{item.summary}</p>
          </div>
        ))}
      </div>
    </div>
  );

  // Timeline Page
  const TimelinePage = () => (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Case Timeline</h2>
      <div className="space-y-6">
        {timelineEvents.map(event => (
          <div key={event.id} className="bg-white dark:bg-gray-800 rounded-lg border dark:border-gray-700 p-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <span className="text-blue-600 dark:text-blue-400">
                  {event.type === "arrest" ? "🚔" : 
                   event.type === "filing" ? "📄" : 
                   event.type === "hearing" ? "⚖️" : 
                   event.type === "music" ? "🎵" : "📋"}
                </span>
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 dark:text-white">{event.title}</h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  {new Date(event.date).toLocaleDateString()}
                </p>
                <p className="text-gray-700 dark:text-gray-300">{event.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  // Navigation
  const Navigation = () => (
    <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b dark:border-gray-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => setCurrentView("dashboard")}
            className="flex items-center gap-2 font-bold text-xl text-gray-900 dark:text-white"
          >
            <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">O</span>
            </div>
            Osteen Hub
          </button>
          
          <nav className="hidden md:flex items-center space-x-1">
            {[
              { view: "dashboard", label: "🏠 Dashboard" },
              { view: "evidence", label: "📄 Evidence" },
              { view: "music", label: "🎵 Music" },
              { view: "search", label: "🔍 Search" },
              { view: "timeline", label: "📅 Timeline" }
            ].map(({ view, label }) => (
              <button
                key={view}
                onClick={() => setCurrentView(view as ViewMode)}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  currentView === view
                    ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                {label}
              </button>
            ))}
          </nav>

          <ThemeToggle />
        </div>
      </div>
    </header>
  );

  // Render current view
  const renderCurrentView = () => {
    switch (currentView) {
      case "evidence": return <EvidencePage />;
      case "music": return <MusicPage />;
      case "search": return <SearchPage />;
      case "timeline": return <TimelinePage />;
      default: return <Dashboard />;
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-200">
        <Navigation />
        
        <main className="relative">
          <div className="absolute inset-0 opacity-5 dark:opacity-10 pointer-events-none">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#3B82F6_1px,_transparent_1px)] bg-[length:24px_24px]" />
          </div>
          
          <div className="relative min-h-screen">
            {renderCurrentView()}
          </div>
        </main>

        {isPlayerVisible && (
          <SimpleAudioPlayer
            tracks={badActorsTracks}
            startId={currentTrack}
          />
        )}
        
        {isPlayerVisible && <div className="h-20" />}
      </div>
    </ThemeProvider>
  );
};

export default OsteenEvidenceHub;