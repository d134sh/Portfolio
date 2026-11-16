"use client";

import { createContext, useCallback, useContext, useEffect, useRef, useState } from "react";
import type { Work } from "@/lib/data";

type Ctx = { open: (work: Work) => void };

const VideoModalContext = createContext<Ctx | null>(null);

export function useVideoModal() {
  const ctx = useContext(VideoModalContext);
  if (!ctx) throw new Error("useVideoModal must be used inside <VideoModalProvider>");
  return ctx;
}

export function VideoModalProvider({ children }: { children: React.ReactNode }) {
  const [current, setCurrent] = useState<Work | null>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const returnFocusRef = useRef<HTMLElement | null>(null);

  const open = useCallback((work: Work) => {
    returnFocusRef.current = document.activeElement as HTMLElement | null;
    setCurrent(work);
  }, []);

  const close = useCallback(() => {
    setCurrent(null);
    returnFocusRef.current?.focus();
  }, []);

  useEffect(() => {
    if (!current) return;
    closeRef.current?.focus();
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [current, close]);

  return (
    <VideoModalContext.Provider value={{ open }}>
      {children}
      {current && (
        <div className="modal" role="dialog" aria-modal="true" aria-label={current.label}>
          <button type="button" className="modal-backdrop" onClick={close} aria-label="Закрыть" tabIndex={-1} />
          <video key={current.id} src={current.full} poster={current.poster} controls autoPlay playsInline />
          <button ref={closeRef} type="button" className="modal-close" onClick={close} aria-label="Закрыть видео">
            <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          </button>
        </div>
      )}
    </VideoModalContext.Provider>
  );
}
