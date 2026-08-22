"use client";

import { useEffect, useRef } from "react";

type LazyAutoplayVideoProps = {
  src: string;
  poster: string;
};

export function LazyAutoplayVideo({ src, poster }: LazyAutoplayVideoProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;

        video.src = src;
        video.load();
        void video.play().catch(() => {
          // Autoplay can be blocked by browser policy; the poster remains visible.
        });
        observer.disconnect();
      },
      { rootMargin: "320px 0px" },
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, [src]);

  return (
    <video
      ref={videoRef}
      muted
      loop
      playsInline
      preload="none"
      poster={poster}
      aria-hidden="true"
      tabIndex={-1}
    />
  );
}