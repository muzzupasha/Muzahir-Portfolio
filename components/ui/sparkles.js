"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const SparklesCore = ({
  id,
  className,
  background,
  minSize = 0.6,
  maxSize = 1.5,
  particleDensity = 100,
  particleColor = "#ffffff",
  speed = 1,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      if (!canvas) return;
      const rect = canvas.parentElement ? canvas.parentElement.getBoundingClientRect() : null;
      canvas.width = rect ? rect.width : window.innerWidth;
      canvas.height = rect ? rect.height : window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    const particles = [];
    const count = Math.floor(((canvas.width * canvas.height) / 10000) * (particleDensity / 100));

    for (let i = 0; i < count; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * (maxSize - minSize) + minSize,
        speedX: (Math.random() - 0.5) * speed * 0.4,
        speedY: (Math.random() - 0.5) * speed * 0.4,
        opacity: Math.random(),
        fadeSpeed: 0.005 + Math.random() * 0.01,
        direction: Math.random() > 0.5 ? 1 : -1,
      });
    }

    const draw = () => {
      if (!canvas || !ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach((p) => {
        p.x += p.speedX;
        p.y += p.speedY;

        // Wrap around boundaries
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Twinkle effect (fade in and out)
        p.opacity += p.fadeSpeed * p.direction;
        if (p.opacity >= 0.8) {
          p.direction = -1;
        } else if (p.opacity <= 0.1) {
          p.direction = 1;
        }

        ctx.fillStyle = p.opacity > 0 ? particleColor : "transparent";
        ctx.globalAlpha = Math.max(0, Math.min(1, p.opacity));
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [minSize, maxSize, particleDensity, particleColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      id={id}
      className={cn("pointer-events-none absolute inset-0 z-0 h-full w-full", className)}
      style={{
        background: background || "transparent",
      }}
    />
  );
};
