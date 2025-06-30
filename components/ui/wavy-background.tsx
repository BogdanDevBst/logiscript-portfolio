"use client";
import { cn } from "@/lib/utils";
import React, {
  useCallback,
  useEffect,
  useRef,
  useState,
  useMemo,
} from "react";
import { createNoise3D } from "simplex-noise";

interface WavyBackgroundProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  colors?: string[];
  waveWidth?: number;
  backgroundFill?: string;
  blur?: number;
  speed?: "slow" | "fast";
  waveOpacity?: number;
  [key: string]: unknown;
}

export const WavyBackground = ({
  children,
  className,
  containerClassName,
  colors,
  waveWidth,
  backgroundFill,
  blur = 0,
  speed = "fast",
  waveOpacity = 0.5,
  ...props
}: WavyBackgroundProps) => {
  const noise = createNoise3D();
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationIdRef = useRef<number | undefined>(undefined);
  const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
  const canvasStateRef = useRef<{
    w: number;
    h: number;
    nt: number;
  }>({ w: 0, h: 0, nt: 0 });

  const getSpeed = useCallback(() => {
    switch (speed) {
      case "slow":
        return 0.001;
      case "fast":
        return 0.002;
      default:
        return 0.001;
    }
  }, [speed]);

  const waveColors = useMemo(
    () => colors ?? ["#38bdf8", "#818cf8", "#c084fc", "#e879f9", "#22d3ee"],
    [colors]
  );

  const drawWave = useCallback(
    (n: number) => {
      const ctx = ctxRef.current;
      if (!ctx) return;

      canvasStateRef.current.nt += getSpeed();
      for (let i = 0; i < n; i++) {
        ctx.beginPath();
        ctx.lineWidth = waveWidth || 50;
        ctx.strokeStyle = waveColors[i % waveColors.length];
        for (let x = 0; x < canvasStateRef.current.w; x += 5) {
          const y = noise(x / 800, 0.3 * i, canvasStateRef.current.nt) * 100;
          ctx.lineTo(x, y + canvasStateRef.current.h * 0.5);
        }
        ctx.stroke();
        ctx.closePath();
      }
    },
    [waveColors, waveWidth, noise, getSpeed]
  );

  const render = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx) return;

    ctx.fillStyle = backgroundFill || "black";
    ctx.globalAlpha = waveOpacity || 0.5;
    ctx.fillRect(0, 0, canvasStateRef.current.w, canvasStateRef.current.h);
    drawWave(5);
    animationIdRef.current = requestAnimationFrame(render);
  }, [drawWave, backgroundFill, waveOpacity]);

  const init = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctxRef.current = ctx;
    canvasStateRef.current.w = ctx.canvas.width = window.innerWidth;
    canvasStateRef.current.h = ctx.canvas.height = window.innerHeight;
    ctx.filter = `blur(${blur}px)`;
    canvasStateRef.current.nt = 0;

    window.onresize = function () {
      if (!ctxRef.current) return;
      canvasStateRef.current.w = ctxRef.current.canvas.width =
        window.innerWidth;
      canvasStateRef.current.h = ctxRef.current.canvas.height =
        window.innerHeight;
      ctxRef.current.filter = `blur(${blur}px)`;
    };
    render();
  }, [blur, render]);

  useEffect(() => {
    init();
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const [isSafari, setIsSafari] = useState(false);
  useEffect(() => {
    setIsSafari(
      typeof window !== "undefined" &&
        navigator.userAgent.includes("Safari") &&
        !navigator.userAgent.includes("Chrome")
    );
  }, []);

  return (
    <div
      className={cn(
        "h-screen flex flex-col items-center justify-center",
        containerClassName
      )}
    >
      <canvas
        className="absolute inset-0 z-0 w-full h-full"
        ref={canvasRef}
        id="canvas"
        style={{
          ...(isSafari ? { filter: `blur(${blur}px)` } : {}),
        }}
      ></canvas>
      <div className={cn("relative z-10", className)} {...props}>
        {children}
      </div>
    </div>
  );
};
