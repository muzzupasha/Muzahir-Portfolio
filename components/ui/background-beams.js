"use client";
import React, { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const BackgroundBeams = ({ className }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resizeCanvas);
    resizeCanvas();

    // Beam definition
    const beams = [];
    const beamCount = 8;
    for (let i = 0; i < beamCount; i++) {
      beams.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        length: 150 + Math.random() * 250,
        speed: 0.3 + Math.random() * 0.8,
        angle: Math.PI / 4 + (Math.random() - 0.5) * 0.1, // around 45 degrees
        width: 1 + Math.random() * 2,
        color: Math.random() > 0.5 ? "rgba(59, 130, 246, 0.12)" : "rgba(16, 185, 129, 0.12)", // blue or emerald
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      beams.forEach((beam) => {
        beam.x += Math.cos(beam.angle) * beam.speed;
        beam.y += Math.sin(beam.angle) * beam.speed;

        // Wrap around bounds
        if (beam.x > canvas.width + 100 || beam.y > canvas.height + 100) {
          if (Math.random() > 0.5) {
            beam.x = -100;
            beam.y = Math.random() * canvas.height;
          } else {
            beam.x = Math.random() * canvas.width;
            beam.y = -100;
          }
          beam.length = 150 + Math.random() * 250;
          beam.speed = 0.3 + Math.random() * 0.8;
        }

        const grad = ctx.createLinearGradient(
          beam.x,
          beam.y,
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        );
        
        grad.addColorStop(0, "transparent");
        grad.addColorStop(0.5, beam.color);
        grad.addColorStop(1, "transparent");

        ctx.strokeStyle = grad;
        ctx.lineWidth = beam.width;
        ctx.beginPath();
        ctx.moveTo(beam.x, beam.y);
        ctx.lineTo(
          beam.x + Math.cos(beam.angle) * beam.length,
          beam.y + Math.sin(beam.angle) * beam.length
        );
        ctx.stroke();
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={cn(
        "pointer-events-none absolute inset-0 z-0 h-full w-full opacity-60 dark:opacity-40",
        className
      )}
    />
  );
};
