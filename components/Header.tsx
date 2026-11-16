"use client";

import { useState } from "react";
import { navLinks } from "@/lib/data";

const langs = [
  { id: "ru", code: "RU" },
  { id: "kz", code: "KZ" },
  { id: "en", code: "EN" },
] as const;

export function Header() {
  const [showSoon, setShowSoon] = useState(false);

  return (
    <header className="header">
      <div className="container header-row">
        <a href="#top" className="logo">
          D134SH
        </a>
        <nav className="navlinks" aria-label="Разделы">
          {navLinks.map((l) => (
            <a key={l.href} className="navlink" href={l.href}>
              {l.label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <div role="group" aria-label="Язык сайта" className="langs">
            {langs.map((l) => (
              <button
                key={l.id}
                type="button"
                className="lang"
                aria-pressed={l.id === "ru"}
                onClick={() => setShowSoon(l.id !== "ru")}
              >
                {l.code}
              </button>
            ))}
          </div>
          <a className="btn btn-primary btn-sm" href="#contacts">
            Написать мне
          </a>
        </div>
      </div>
      {showSoon && (
        <div role="status" className="container soon">
          Казахская и английская версии скоро появятся · Қазақша және ағылшынша нұсқасы жақында · KZ &amp; EN coming soon
        </div>
      )}
    </header>
  );
}
