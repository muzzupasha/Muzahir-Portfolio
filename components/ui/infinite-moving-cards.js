"use client";
import React, { useEffect, useState, useRef } from "react";
import { cn } from "@/lib/utils";

export const InfiniteMovingCards = ({
  items,
  direction = "left",
  speed = "normal",
  pauseOnHover = true,
  className,
}) => {
  const containerRef = useRef(null);
  const scrollerRef = useRef(null);
  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Avoid double-appending if layout runs twice
      if (scrollerRef.current.children.length === items.length) {
        scrollerContent.forEach((item) => {
          const duplicatedItem = item.cloneNode(true);
          if (scrollerRef.current) {
            scrollerRef.current.appendChild(duplicatedItem);
          }
        });
      }

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn(
        "scroller relative z-20 max-w-7xl overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_15%,white_85%,transparent)]",
        className
      )}
    >
      <ul
        ref={scrollerRef}
        className={cn(
          "flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
          start && "animate-marquee",
          pauseOnHover && "hover:[animation-play-state:paused]"
        )}
        style={{
          animationDirection: "var(--animation-direction)",
          animationDuration: "var(--animation-duration)",
        }}
      >
        {items.map((item, idx) => (
          <li
            className="w-[300px] md:w-[400px] max-w-full relative rounded-2xl border border-border/80 px-6 py-5 flex-shrink-0 bg-card/50 backdrop-blur-sm shadow-sm flex flex-col justify-between"
            key={idx}
          >
            <div>
              {/* Quote marks icon */}
              <svg
                className="text-primary/20 h-8 w-8 mb-3"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.988zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="relative z-20 text-sm leading-[1.6] text-muted-foreground font-normal">
                {item.quote}
              </p>
            </div>
            <div className="relative z-20 mt-6 flex flex-row items-center border-t border-border/60 pt-4">
              <span className="flex flex-col gap-0.5">
                <span className="text-sm leading-[1.6] text-foreground font-semibold">
                  {item.name}
                </span>
                <span className="text-xs leading-[1.6] text-primary/80 font-medium">
                  {item.title}
                </span>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};
