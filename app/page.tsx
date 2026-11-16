import Image from "next/image";
import { Header } from "@/components/Header";
import { ReelStrip } from "@/components/ReelStrip";
import { WorksGrid } from "@/components/WorksGrid";
import { VideoModalProvider } from "@/components/VideoModal";
import {
  InstagramIcon,
  MailIcon,
  MicIcon,
  ReelsIcon,
  ScreenIcon,
  TelegramIcon,
  WhatsAppIcon,
} from "@/components/Icons";
import { contacts } from "@/lib/data";

const steps = [
  { title: "Задача", text: "Узнаю, что вам нужно: какие ролики, в каком формате и для чего." },
  { title: "План и сценарий", text: "Вместе составляем контент-план и пишем сценарии роликов." },
  { title: "Съёмка", text: "Организацию беру на себя. С вами согласуем только время и детали." },
  { title: "Результат", text: "Отдаю готовое видео. Если нужно, вношу до 3 правок." },
];

const contactItems = [
  { kind: "Telegram", ...contacts.telegram, Icon: TelegramIcon, external: true },
  { kind: "WhatsApp", ...contacts.whatsapp, Icon: WhatsAppIcon, external: true },
  { kind: "Instagram", ...contacts.instagram, Icon: InstagramIcon, external: true },
  { kind: "Почта", ...contacts.email, Icon: MailIcon, external: false },
];

export default function Home() {
  return (
    <VideoModalProvider>
      <Header />

      <main>
        {/* HERO */}
        <section id="top" className="container hero">
          <div className="hero-meta mono">
            <span>КОНТЕНТ-МЕЙКЕР · ВИДЕОГРАФ · АЛМАТЫ</span>
            <span className="rec">
              <span aria-hidden="true" className="rec-dot" />
              REC 00:01:34:19
            </span>
          </div>

          <h1 className="hero-title display">Dean</h1>
          <div className="hero-row">
            <p className="hero-lead">
              Снимаю контент разных форматов для ваших соцсетей и бизнеса: от Reels до подкастов и видеоуроков.
            </p>
            <div className="hero-ctas">
              <a className="btn btn-primary btn-lg" href="#contacts">
                Обсудить проект
              </a>
              <a className="btn btn-ghost btn-lg" href="#works">
                Смотреть работы
              </a>
            </div>
          </div>

          <ReelStrip />

          <div className="facts">
            <div className="fact">
              <span className="fact-num display">2,5+</span>
              <span className="fact-label">
                года в профессиональной
                <br />
                съёмке
              </span>
            </div>
            <span aria-hidden="true" className="fact-sep" />
            <div className="fact">
              <span className="fact-num display">Reels</span>
              <span className="fact-label">
                подкасты
                <br />и видеоуроки
              </span>
            </div>
          </div>
        </section>

        {/* WORKS */}
        <section id="works" className="section">
          <div className="container section-inner">
            <div className="eyebrow mono">01 / РАБОТЫ</div>
            <h2 className="h2 display">Избранные проекты</h2>
            <WorksGrid />
          </div>
        </section>

        {/* SERVICES */}
        <section id="services" className="section alt">
          <div className="container section-inner">
            <div className="eyebrow mono">02 / УСЛУГИ</div>
            <h2 className="h2 display">Что я могу снять для вас</h2>
            <div className="services-grid">
              <article className="card service">
                <span style={{ color: "var(--accent)" }}>
                  <ReelsIcon />
                </span>
                <h3 className="display">Reels</h3>
                <p>Короткие вертикальные ролики для Instagram и других соцсетей, в любом формате под вашу задачу.</p>
                <div className="chips">
                  {["Киношные", "Экспертные", "Таргетные", "и другие"].map((c) => (
                    <span key={c} className="chip">
                      {c}
                    </span>
                  ))}
                </div>
              </article>
              <article className="card service">
                <span style={{ color: "var(--accent)" }}>
                  <MicIcon />
                </span>
                <h3 className="display">Подкасты</h3>
                <p>Съёмка и монтаж видеоподкастов: полные выпуски и короткие нарезки для соцсетей.</p>
              </article>
              <article className="card service">
                <span style={{ color: "var(--accent)" }}>
                  <ScreenIcon />
                </span>
                <h3 className="display">Видеоуроки</h3>
                <p>Обучающие видео для YouTube или для вашей образовательной платформы.</p>
              </article>
            </div>

            <div className="tools">
              <span className="tools-label mono">ИНСТРУМЕНТЫ</span>
              <span>Камера Sony</span>
              <span>Adobe Premiere Pro</span>
              <span>DaVinci Resolve</span>
              <span>Adobe After Effects</span>
            </div>
            <p className="price-note">Стоимость обсуждаем индивидуально под вашу задачу</p>
          </div>
        </section>

        {/* ABOUT */}
        <section id="about" className="section">
          <div className="container section-inner about">
            <div className="about-photo">
              <Image
                src="/images/about.jpg"
                alt="Димаш на набережной в Калифорнии"
                fill
                sizes="(max-width: 860px) 100vw, 460px"
              />
            </div>
            <div className="about-body">
              <div className="eyebrow mono">03 / ОБО МНЕ</div>
              <h2 className="h2 display">Привет, я Димаш</h2>
              <p>Мне 20 лет, живу в Алматы. Снимать контент начал ещё давно, а профессионально занимаюсь этим больше 2,5 лет.</p>
              <p>Сейчас заканчиваю 4-й курс в SDU. Этим летом был в США и вернулся с хорошим опытом.</p>

              <dl className="facts-list">
                <div>
                  <dt>ГОРОД</dt>
                  <dd>Алматы</dd>
                </div>
                <div>
                  <dt>ОПЫТ</dt>
                  <dd>2,5+ года</dd>
                </div>
                <div>
                  <dt>УЧЁБА</dt>
                  <dd>SDU, 4-й курс</dd>
                </div>
                <div>
                  <dt>ЗА РУБЕЖОМ</dt>
                  <dd>3+ месяца в США</dd>
                </div>
              </dl>

              <h3 className="offwork small-label">ВНЕ РАБОТЫ</h3>
              <div className="chips">
                {["Веду свой Instagram", "Изучаю новые техники монтажа", "Сериалы", "Видеоигры"].map((c) => (
                  <span key={c} className="chip lg">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* PROCESS */}
        <section id="process" className="section alt">
          <div className="container section-inner">
            <div className="eyebrow mono">04 / КАК МЫ РАБОТАЕМ</div>
            <h2 className="h2 display">Четыре шага до готового видео</h2>
            <ol className="steps">
              {steps.map((s, i) => (
                <li key={s.title}>
                  <div className="step-num mono">ШАГ {String(i + 1).padStart(2, "0")}</div>
                  <h3 className="display">{s.title}</h3>
                  <p>{s.text}</p>
                </li>
              ))}
            </ol>
            <p className="steps-note">Сроки зависят от задачи и количества роликов.</p>
          </div>
        </section>

        {/* CONTACTS */}
        <section id="contacts" className="section">
          <div className="container contacts-inner">
            <div className="eyebrow mono">05 / КОНТАКТЫ</div>
            <h2 className="contacts-title display">
              Давайте снимем
              <br />
              ваш контент
            </h2>
            <p className="contacts-lead">Напишите в любой удобный мессенджер, обсудим задачу.</p>
            <div className="contacts-grid">
              {contactItems.map(({ kind, href, value, Icon, external }) => (
                <a
                  key={kind}
                  className="contact"
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                >
                  <Icon />
                  <span className="contact-text">
                    <span className="contact-kind">{kind}</span>
                    <span className="contact-value">{value}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-row">
          <span>© {new Date().getFullYear()} D134SH</span>
          <span className="mono">АЛМАТЫ · КАЗАХСТАН</span>
        </div>
      </footer>
    </VideoModalProvider>
  );
}
