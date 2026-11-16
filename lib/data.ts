export type Orientation = "v" | "h";

export type Work = {
  id: number;
  num: string;
  orientation: Orientation;
  loop: string;
  poster: string;
  full: string;
  label: string;
};

const orientations: Orientation[] = ["h", "v", "v", "h", "v", "v", "h", "v"];

export const works: Work[] = orientations.map((orientation, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: i,
    num,
    orientation,
    loop: `/works/${num}-loop.mp4`,
    poster: `/works/${num}-poster.jpg`,
    full: `/works/${num}-full.mp4`,
    label: `Работа ${i + 1}: смотреть со звуком`,
  };
});

export const navLinks = [
  { href: "#works", label: "Работы" },
  { href: "#services", label: "Услуги" },
  { href: "#about", label: "Обо мне" },
  { href: "#process", label: "Как работаем" },
  { href: "#contacts", label: "Контакты" },
];

export const contacts = {
  telegram: { href: "https://t.me/d134sh", value: "@d134sh" },
  whatsapp: { href: "https://wa.me/77071264746", value: "+7 707 126 47 46" },
  instagram: { href: "https://instagram.com/d134sh", value: "@d134sh" },
  email: { href: "mailto:mrdimonkz06@gmail.com", value: "mrdimonkz06@gmail.com" },
};
