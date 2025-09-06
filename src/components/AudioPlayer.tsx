import React, { useEffect, useMemo, useRef, useState } from "react";
import { Track } from "@/data/badActors";

type Props = {
  tracks: Track[];
  startId?: string;
};

export default function AudioPlayer({ tracks, startId }: Props) {
  const [index, setIndex] = useState(
    Math.max(0, tracks.findIndex(t => t.id === startId))
  );
  const [playing, setPlaying] = useState(false);
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  const [vol, setVol] = useState(1);
  const [progress, setProgress] = useState<number[]>([]);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const current = tracks[index] ?? tracks[0];

  const src = useMemo(() => current?.src ?? "", [current]);

  // Generate random progress data for waveform visualization
  useEffect(() => {
    const newProgress = Array(100).fill(0).map(() => Math.random() * 100);
    setProgress(newProgress);
  }, [index]);

  useEffect(() => {
    const a = audioRef.current;
    if (!a) return;
    a.volume = vol;
  }, [vol]);

  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) { a.play(); setPlaying(true); } else { a.pause(); setPlaying(false); }
  };

  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const v = Number(e.target.value);
    a.currentTime = v;
    setTime(v);
  };

  const next = () => setIndex(i => (i + 1) % tracks.length);
  const prev = () => setIndex(i => (i - 1 + tracks.length) % tracks.length);

  const fmt = (s: number) => {
    if (!Number.isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 dark:bg-gray-800/90 backdrop-blur border-t dark:border-gray-700">
      <audio
        ref={audioRef}
        src={src}
        onTimeUpdate={(e) => setTime((e.target as HTMLAudioElement).currentTime)}
        onLoadedMetadata={(e) => setDur((e.target as HTMLAudioElement).duration)}
        onEnded={next}
        autoPlay={false}
      />
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        <button onClick={prev} aria-label="Previous" className="px-2 py-1 rounded border dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">⏮</button>
        <button onClick={toggle} aria-label="Play/Pause" className="px-3 py-1 rounded border dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">{playing ? "⏸" : "▶️"}</button>
        <button onClick={next} aria-label="Next" className="px-2 py-1 rounded border dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700">⏭</button>

        <div className="min-w-0 flex-1">
          <div className="truncate font-medium dark:text-white">{current?.title ?? "—"}</div>
          <div className="flex items-center gap-2">
            <span className="text-xs w-10 tabular-nums dark:text-gray-300">{fmt(time)}</span>
            <input type="range" min={0} max={dur || 0} step={1} value={Math.min(time, dur || 0)} onChange={seek} className="w-full" />
            <span className="text-xs w-10 tabular-nums text-right dark:text-gray-300">{fmt(dur)}</span>
          </div>
          
          {/* Waveform visualization */}
          <div className="mt-2 h-6 flex items-center gap-0.5">
            {progress.map((p, i) => (
              <div 
                key={i} 
                className="flex-1 rounded-sm bg-blue-500 dark:bg-blue-400 transition-all"
                style={{ height: `${Math.max(4, p * 0.6)}%` }}
              />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-2 w-40">
          <span className="text-xs dark:text-gray-300">🔊</span>
          <input type="range" min={0} max={1} step={0.01} value={vol} onChange={(e)=>setVol(Number(e.target.value))} className="w-full" />
        </div>
      </div>
    </div>
  );
}