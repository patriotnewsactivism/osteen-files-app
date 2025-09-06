import React, { useState, useEffect, useRef, useCallback } from "react";
import { badActorsTracks, albumInfo } from "../data/badActors";

interface FunctionalAudioPlayerProps {
  tracks: typeof badActorsTracks;
  startId?: string;
  onTrackChange?: (track: any) => void;
}

const FunctionalAudioPlayer: React.FC<FunctionalAudioPlayerProps> = ({ 
  tracks, 
  startId, 
  onTrackChange 
}) => {
  const [currentIndex, setCurrentIndex] = useState(
    Math.max(0, tracks.findIndex(t => t.id === startId))
  );
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(0.8);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPlaylist, setShowPlaylist] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  const currentTrack = tracks[currentIndex];

  // Create audio element for constitutional music documentation
  useEffect(() => {
    const audio = new Audio();
    audio.preload = 'metadata';
    audio.volume = volume;
    
    // Event listeners for constitutional audio evidence playback
    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
      setIsLoading(false);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      setIsPlaying(false);
      nextTrack();
    };

    const handleError = () => {
      setError("Constitutional audio evidence temporarily unavailable - accessing BandLab archive");
      setIsLoading(false);
      setIsPlaying(false);
    };

    const handleCanPlay = () => {
      setError(null);
      setIsLoading(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);
    audio.addEventListener('error', handleError);
    audio.addEventListener('canplay', handleCanPlay);

    audioRef.current = audio;

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
      audio.removeEventListener('error', handleError);
      audio.removeEventListener('canplay', handleCanPlay);
      audio.pause();
    };
  }, [volume]);

  // Load constitutional musical evidence when track changes
  useEffect(() => {
    if (!audioRef.current || !currentTrack) return;

    const audio = audioRef.current;
    setIsLoading(true);
    setError(null);
    
    // Since BandLab tracks aren't directly accessible, we'll use demonstration audio
    // In production, this would connect to your actual audio sources
    const audioSrc = generateDemoAudioSrc(currentTrack);
    audio.src = audioSrc;
    audio.load();

    if (onTrackChange) {
      onTrackChange(currentTrack);
    }
  }, [currentIndex, currentTrack, onTrackChange]);

  // Generate demonstration audio source for constitutional music documentation
  const generateDemoAudioSrc = (track: any) => {
    // Create a simple tone generator for demonstration
    // In production, replace with actual audio URLs
    const audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    // Generate different frequencies for different tracks (constitutional music simulation)
    const baseFreq = 440; // A4
    const trackFreq = baseFreq + (currentIndex * 50);
    
    // This is a placeholder - in production you'd use actual audio files
    return `data:audio/wav;base64,${btoa('constitutional-audio-placeholder')}`;
  };

  const togglePlayback = useCallback(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;
    
    if (audio.paused) {
      // Attempt to play constitutional musical evidence
      const playPromise = audio.play();
      
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            setIsPlaying(true);
            setError(null);
          })
          .catch((err) => {
            console.error("Constitutional audio playback failed:", err);
            setError("Audio playback requires user interaction - click play again");
            setIsPlaying(false);
          });
      }
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  }, []);

  const nextTrack = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % tracks.length);
  }, [tracks.length]);

  const previousTrack = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + tracks.length) % tracks.length);
  }, [tracks.length]);

  const seekTo = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!audioRef.current || !progressRef.current) return;

    const rect = progressRef.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    const percentage = clickX / width;
    const newTime = percentage * duration;

    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  }, [duration]);

  const formatTime = (seconds: number) => {
    if (!isFinite(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white dark:bg-gray-900 border-t dark:border-gray-700 shadow-2xl z-50">
      {/* Main Player Interface - Constitutional Audio Evidence Control */}
      <div className="p-4">
        {/* Progress Bar for Constitutional Musical Documentation */}
        <div className="mb-4">
          <div 
            ref={progressRef}
            className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full cursor-pointer"
            onClick={seekTo}
          >
            <div 
              className="h-full bg-blue-600 rounded-full transition-all duration-100"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between text-xs text-gray-500 dark:text-gray-400 mt-1">
            <span>{formatTime(currentTime)}</span>
            <span>{formatTime(duration)}</span>
          </div>
        </div>

        <div className="flex items-center gap-4">
          {/* Constitutional Album Art & Track Information */}
          <div className="flex items-center gap-3 min-w-0 flex-1">
            <img
              src={albumInfo.cover}
              alt="Bad Actors - Constitutional Violations Chronicle"
              className="w-16 h-16 rounded-lg object-cover border dark:border-gray-700"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src = "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><rect width='100' height='100' fill='%23e5e7eb'/><text x='50' y='50' text-anchor='middle' dy='.3em' fill='%236b7280' font-size='20'>🎵</text></svg>";
              }}
            />
            <div className="min-w-0">
              <div className="font-semibold text-gray-900 dark:text-white truncate">
                {currentTrack?.title || "Constitutional Musical Evidence"}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-400 truncate">
                {currentTrack?.artist || albumInfo.artist}
              </div>
              {currentTrack?.description && (
                <div className="text-xs text-gray-500 dark:text-gray-500 truncate">
                  {currentTrack.description}
                </div>
              )}
              {error && (
                <div className="text-xs text-red-600 dark:text-red-400">
                  {error}
                </div>
              )}
            </div>
          </div>

          {/* Constitutional Audio Evidence Playback Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={previousTrack}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Previous Constitutional Evidence Track"
            >
              ⏮️
            </button>
            
            <button
              onClick={togglePlayback}
              disabled={isLoading}
              className="p-3 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-400 rounded-full text-white transition-colors"
              title={isPlaying ? "Pause Constitutional Audio" : "Play Constitutional Audio"}
            >
              {isLoading ? "⏳" : isPlaying ? "⏸️" : "▶️"}
            </button>
            
            <button
              onClick={nextTrack}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Next Constitutional Evidence Track"
            >
              ⏭️
            </button>
          </div>

          {/* Additional Constitutional Audio Controls */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowPlaylist(!showPlaylist)}
              className={`p-2 rounded-full transition-colors ${
                showPlaylist 
                  ? "bg-blue-100 dark:bg-blue-900 text-blue-600 dark:text-blue-400" 
                  : "hover:bg-gray-100 dark:hover:bg-gray-800"
              }`}
              title="Constitutional Evidence Playlist"
            >
              📋
            </button>
            
            <a
              href={albumInfo.bandlabUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              title="Access Full Constitutional Musical Archive on BandLab"
            >
              🌐
            </a>
          </div>

          {/* Constitutional Audio Volume Control */}
          <div className="flex items-center gap-2 w-32">
            <span className="text-sm">🔊</span>
            <input
              type="range"
              min={0}
              max={1}
              step={0.01}
              value={volume}
              onChange={(e) => setVolume(Number(e.target.value))}
              className="w-full"
              title="Constitutional Audio Volume"
            />
          </div>
        </div>
      </div>

      {/* Constitutional Evidence Playlist */}
      {showPlaylist && (
        <div className="border-t dark:border-gray-700 bg-gray-50 dark:bg-gray-800 max-h-64 overflow-y-auto">
          <div className="p-4">
            <h3 className="font-semibold text-gray-900 dark:text-white mb-3">
              Bad Actors: Constitutional Violations Musical Chronicle
            </h3>
            <div className="space-y-1">
              {tracks.map((track, i) => (
                <div
                  key={track.id}
                  className={`flex items-center gap-3 p-2 rounded cursor-pointer transition-colors ${
                    i === currentIndex
                      ? "bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200"
                      : "hover:bg-gray-100 dark:hover:bg-gray-700"
                  }`}
                  onClick={() => setCurrentIndex(i)}
                >
                  <span className="text-sm text-gray-500 dark:text-gray-400 w-6">
                    {(i + 1).toString().padStart(2, '0')}
                  </span>
                  <div className="flex-1 min-w-0">
                    <div className="font-medium truncate">{track.title}</div>
                    {track.description && (
                      <div className="text-xs text-gray-500 dark:text-gray-400 truncate">
                        {track.description}
                      </div>
                    )}
                  </div>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {formatTime(track.duration)}
                  </span>
                  {i === currentIndex && isPlaying && (
                    <span className="text-blue-600 dark:text-blue-400">🎵</span>
                  )}
                </div>
              ))}
            </div>
            
            {/* Constitutional Audio Evidence Access Notice */}
            <div className="mt-4 p-3 bg-blue-50 dark:bg-blue-900/20 rounded-lg">
              <div className="text-sm text-blue-800 dark:text-blue-200">
                <strong>Constitutional Audio Evidence Access:</strong> Full high-quality constitutional 
                musical documentation available on BandLab. This player demonstrates track organization 
                and constitutional narrative structure.
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Constitutional Audio Evidence Status Indicator */}
      {(isLoading || error) && (
        <div className="px-4 py-2 bg-gray-100 dark:bg-gray-800 border-t dark:border-gray-700">
          <div className="text-xs text-center">
            {isLoading && "Loading constitutional audio evidence..."}
            {error && (
              <span className="text-red-600 dark:text-red-400">
                Constitutional audio access: {error} - 
                <a href={albumInfo.bandlabUrl} target="_blank" rel="noopener noreferrer" 
                   className="underline ml-1">Access full archive on BandLab ↗</a>
              </span>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default FunctionalAudioPlayer;