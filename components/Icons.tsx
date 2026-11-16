type P = { size?: number };

const base = (size: number) => ({
  width: size,
  height: size,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
});

export const ReelsIcon = ({ size = 32 }: P) => (
  <svg {...base(size)} strokeWidth="1.5">
    <rect x="6" y="2.5" width="12" height="19" rx="2.5" />
    <path d="M10.5 9.5v5l4-2.5z" />
  </svg>
);

export const MicIcon = ({ size = 32 }: P) => (
  <svg {...base(size)} strokeWidth="1.5">
    <rect x="9" y="2.5" width="6" height="11" rx="3" />
    <path d="M5.5 11a6.5 6.5 0 0 0 13 0" />
    <path d="M12 17.5v4" />
    <path d="M8.5 21.5h7" />
  </svg>
);

export const ScreenIcon = ({ size = 32 }: P) => (
  <svg {...base(size)} strokeWidth="1.5">
    <rect x="2.5" y="4.5" width="19" height="12.5" rx="2" />
    <path d="M10.5 8.5v4.5l4-2.25z" />
    <path d="M8 20.5h8" />
  </svg>
);

export const TelegramIcon = ({ size = 26 }: P) => (
  <svg {...base(size)} strokeWidth="1.6">
    <path d="M21.5 3.5 2.8 10.7c-.8.3-.8 1.4 0 1.7l4.7 1.6 1.8 5.6c.2.7 1.1.9 1.6.4l2.6-2.5 4.8 3.5c.6.4 1.4.1 1.6-.6L22.6 4.6c.2-.8-.5-1.4-1.1-1.1z" />
    <path d="m7.5 14 10-7.5-7.7 9" />
  </svg>
);

export const WhatsAppIcon = ({ size = 26 }: P) => (
  <svg {...base(size)} strokeWidth="1.6">
    <path d="M3.5 20.5l1.3-4.2A8.5 8.5 0 1 1 8 19.4z" />
    <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1-1 1c-1-.4-2-1.4-2.4-2.4l1-1-1-2z" />
  </svg>
);

export const InstagramIcon = ({ size = 26 }: P) => (
  <svg {...base(size)} strokeWidth="1.6">
    <rect x="3" y="3" width="18" height="18" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.3" cy="6.7" r="0.6" />
  </svg>
);

export const MailIcon = ({ size = 26 }: P) => (
  <svg {...base(size)} strokeWidth="1.6">
    <rect x="2.5" y="5" width="19" height="14" rx="2" />
    <path d="m3 6.5 9 6.5 9-6.5" />
  </svg>
);
