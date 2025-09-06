import React, { useEffect, useMemo, useRef, useState } from "react";
import type { Track } from "../data/badActors";

type Props = {
  /**
   * Ordered list of tracks to play. When a track ends, the next one in the
   * array will automatically play. Looping occurs at the end.
   */
  tracks: Track[];
  /**
   * Optional ID of the track to start with. If undefined, the player will
   * default to the first entry in `tracks`.
   */
  startId?: string;
};

export default function AudioPlayer({ tracks, startId }: Props) {
  // Determine the index of the starting track based on the startId prop. If
  // startId is not provided or not found, fall back to index 0.
  const [index, setIndex] = useState(() => {
    const i = tracks.findIndex((t) => t.id === startId);
    return i >= 0 ? i : 0;
  });

  // Playback state: whether the current audio element is playing.
  const [playing, setPlaying] = useState(false);
  // Current time and total duration of the track, used to render the progress bar.
  const [time, setTime] = useState(0);
  const [dur, setDur] = useState(0);
  // Volume from 0–1.
  const [vol, setVol] = useState(1);
  // Reference to the underlying HTMLAudioElement so we can control it
  // imperatively (play, pause, seek, etc.).
  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Memoize the current track based on the index. If the index is out of
  // bounds (e.g. tracks array is empty), return undefined. The memoization
  // ensures we don’t recompute on every render.
  const current = useMemo(() => tracks[index] ?? tracks[0], [tracks, index]);

  // When the volume state changes, apply it to the audio element.
  useEffect(() => {
    const a = audioRef.current;
    if (a) a.volume = vol;
  }, [vol]);

  // Play or pause the current track. Toggling simply calls play() or pause() on
  // the audio element and updates the `playing` flag.
  const toggle = () => {
    const a = audioRef.current;
    if (!a) return;
    if (a.paused) {
      a.play();
      setPlaying(true);
    } else {
      a.pause();
      setPlaying(false);
    }
  };

  // Seek to a new position based on the range input. Update both the audio
  // element’s currentTime and our internal state.
  const seek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const a = audioRef.current;
    if (!a) return;
    const v = Number(e.target.value);
    a.currentTime = v;
    setTime(v);
  };

  // Advance to the next track, looping around when reaching the end.
  const next = () => setIndex((i) => ((i + 1) % tracks.length));
  // Go back to the previous track, wrapping to the end if at the beginning.
  const prev = () => setIndex((i) => ((i - 1 + tracks.length) % tracks.length));

  // Format seconds into a mm:ss string. Handles NaN and Infinity gracefully.
  const fmt = (s: number) => {
    if (!Number.isFinite(s)) return "0:00";
    const m = Math.floor(s / 60);
    const ss = Math.floor(s % 60).toString().padStart(2, "0");
    return `${m}:${ss}`;
  };

  return (
    <div className="fixed bottom-0 inset-x-0 z-40 bg-white/90 backdrop-blur border-t">
      <audio
        ref={audioRef}
        src={current?.src ?? ""}
        onTimeUpdate={(e) => {
          const t = (e.target as HTMLAudioElement).currentTime;
          setTime(t);
        }}
        onLoadedMetadata={(e) => {
          const d = (e.target as HTMLAudioElement).duration;
          setDur(d);
        }}
        onEnded={next}
        autoPlay={false}
      />
      <div className="max-w-5xl mx-auto px-4 py-3 flex items-center gap-3">
        <button
          onClick={prev}
          aria-label="Previous"
          className="px-2 py-1 rounded border"
        >
          ⏮
        </button>
        <button
          onClick={toggle}
          aria-label="Play/Pause"
          className="px-3 py-1 rounded border"
        >
          {playing ? "⏸" : "▶️"}
        </button>
        <button
          onClick={next}
          aria-label="Next"
          className="px-2 py-1 rounded border"
        >
          ⏭
        </button>
        <div className="min-w-0 flex-1">
          <div className="truncate font-medium">
            {current?.title ?? "—"}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-xs w-10 tabular-nums">
              {fmt(time)}
            </span>
            <input
              type="range"
              min={0}
              max={dur || 0}
              step={1}
              value={Math.min(time, dur || 0)}
              onChange={seek}
              className="w-full"
            />
            <span className="text-xs w-10 tabular-nums text-right">
              {fmt(dur)}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2 w-40">
          <span className="text-xs">🔊</span>
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={vol}
            onChange={(e) => setVol(Number(e.target.value))}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
}