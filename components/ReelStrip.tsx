"use client";

import { useEffect, useRef } from "react";
import { works, type Work } from "@/lib/data";
import { useVideoModal } from "./VideoModal";

function Reel({ work, hidden }: { work: Work; hidden?: boolean }) {
  const { open } = useVideoModal();
  const ref = useRef<HTMLVideoElement>(null);

  // React doesn't serialize `muted` to the HTML attribute, so force it before autoplay.
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.defaultMuted = true;
    v.play().catch(() => {});
  }, []);

  return (
    <button
      type="button"
      className={`reel ${work.orientation}`}
      onClick={() => open(work)}
      aria-label={work.label}
      tabIndex={hidden ? -1 : undefined}
      aria-hidden={hidden || undefined}
    >
      <video
        ref={ref}
        src={work.loop}
        poster={work.poster}
        muted
        autoPlay
        loop
        playsInline
        preload="metadata"
        aria-hidden="true"
      />
    </button>
  );
}

export function ReelStrip() {
  return (
    <>
      <div className="strip" role="region" aria-label="Шоурил: лента работ">
        <div className="track">
          {works.map((w) => (
            <Reel key={w.id} work={w} />
          ))}
          {/* duplicated set for a seamless loop */}
          {works.map((w) => (
            <Reel key={`dup-${w.id}`} work={w} hidden />
          ))}
        </div>
        <div aria-hidden="true" className="strip-fade left" />
        <div aria-hidden="true" className="strip-fade right" />
      </div>
      <p className="strip-hint mono">НАВЕДИТЕ, ЧТОБЫ ОСТАНОВИТЬ · НАЖМИТЕ, ЧТОБЫ СМОТРЕТЬ СО ЗВУКОМ</p>
    </>
  );
}
