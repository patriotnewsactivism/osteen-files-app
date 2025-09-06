import React, { useEffect, useRef } from "react";

interface WaveformVisualizerProps {
  audioSrc: string;
  title: string;
}

export default function WaveformVisualizer({ audioSrc, title }: WaveformVisualizerProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const animationRef = useRef<number>(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    
    const audio = audioRef.current;
    if (!audio) return;
    
    // In a real implementation, this would use the Web Audio API to generate actual waveforms
    // For now, we'll create a visually appealing placeholder
    
    const drawWaveform = () => {
      if (!ctx || !canvas) return;
      
      const width = canvas.width;
      const height = canvas.height;
      
      // Clear canvas
      ctx.clearRect(0, 0, width, height);
      
      // Draw waveform background
      ctx.fillStyle = "rgba(59, 130, 246, 0.1)";
      ctx.fillRect(0, 0, width, height);
      
      // Draw waveform
      ctx.beginPath();
      ctx.moveTo(0, height / 2);
      
      // Generate a waveform pattern
      for (let i = 0; i < width; i++) {
        const amplitude = Math.sin(i / 10) * (height / 4) + Math.sin(i / 5) * (height / 8);
        ctx.lineTo(i, height / 2 + amplitude);
      }
      
      ctx.strokeStyle = "rgb(59, 130, 246)";
      ctx.lineWidth = 2;
      ctx.stroke();
      
      // Continue animation
      animationRef.current = requestAnimationFrame(drawWaveform);
    };
    
    // Initial draw
    drawWaveform();
    
    // Cleanup
    return () => {
      cancelAnimationFrame(animationRef.current);
    };
  }, [audioSrc]);

  return (
    <div className="mt-4">
      <h3 className="text-lg font-semibold mb-2">{title}</h3>
      <div className="relative">
        <canvas 
          ref={canvasRef} 
          className="w-full h-32 bg-white/50 dark:bg-gray-700/50 rounded-lg border"
          style={{ height: "128px" }}
        />
        <audio 
          ref={audioRef} 
          src={audioSrc} 
          className="absolute bottom-2 left-2 right-2"
          controls
        />
      </div>
    </div>
  );
}