# D134SH — портфолио

Next.js (App Router) + TypeScript. Одностраничный сайт: шоурил, работы, услуги, обо мне, процесс, контакты.

## Локально

```bash
npm install
npm run dev      # http://localhost:3000
npm run build && npm start   # прод-сборка
```

Нужен Node.js 20.9+.

## Деплой на Vercel

1. Залей папку в GitHub-репозиторий.
2. На vercel.com → **Add New → Project** → выбери репозиторий.
3. Framework определится как Next.js автоматически, ничего не меняй → **Deploy**.

Или через CLI: `npx vercel` (превью) и `npx vercel --prod`.

## Где что менять

- Тексты секций — `app/page.tsx`
- Контакты, пункты меню, список работ — `lib/data.ts`
- Цвета (акцент `--accent`), отступы — `app/globals.css`
- Видео и постеры — `public/works/NN-loop.mp4` (лента), `NN-poster.jpg`, `NN-full.mp4` (со звуком в модалке).
  Чтобы добавить работу: положи три файла с новым номером и добавь ориентацию (`"v"` / `"h"`) в массив `orientations` в `lib/data.ts`.
- Фото «Обо мне» — `public/images/about.jpg`
