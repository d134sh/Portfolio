"use client";

import { works } from "@/lib/data";
import { useVideoModal } from "./VideoModal";

export function WorksGrid() {
  const { open } = useVideoModal();

  return (
    <div className="works-grid">
      {works.map((w) => (
        <button key={w.id} type="button" className={`card wcard ${w.orientation}`} onClick={() => open(w)} aria-label={w.label}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={w.poster} alt="" loading="lazy" />
          <span className="wcard-num mono">{w.num}</span>
          <span aria-hidden="true" className="playdot">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#F3F0EA" strokeWidth="1.6" strokeLinejoin="round">
              <path d="M8 5.5v13l10.5-6.5z" />
            </svg>
          </span>
        </button>
      ))}
    </div>
  );
}
