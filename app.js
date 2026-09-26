/* ============ РЕДАКТИРУЙТЕ ТОЛЬКО ЭТОТ БЛОК ============ */
const SITE = {
  name: "Андрей",
  role: "Веб-дизайнер",
  heroPhoto: "images/andrey.jpg",
  about: [
    "Я веб-дизайнер и беру проект целиком: разбираюсь в задачах бизнеса, рисую дизайн и собираю готовый сайт.",
    "Мои сайты выглядят дорого, быстро загружаются и приводят клиентов, а не просто украшают интернет.",
  ],
};

const CONTACTS = {
  telegram: { label: "Telegram", value: "@CoreStudioo", href: "https://t.me/CoreStudioo" },
};

const ADVANTAGES = [
  ["Индивидуальный дизайн", "Никаких шаблонов: каждый сайт рисуется под вашу нишу и аудиторию."],
  ["Адаптивность", "Сайт удобен на телефоне, планшете и компьютере."],
  ["Внимание к деталям", "Отступы, шрифты и анимации проверяю до последней мелочи."],
];

// image — картинка проекта (замените файл в папке images/), link — куда ведёт «Подробнее»
const WORKS = [
  { title: "Clear Home", tag: "Лендинг", image: "images/work-clearhome.jpg", link: "#contact",
    text: "Клининговая компания в Минске: лендинг с расчётом стоимости и онлайн-бронированием." },
  { title: "Vanta Detailing", tag: "Сайт для бизнеса", image: "images/work-vanta.jpg", link: "#contact",
    text: "Тёмный премиальный сайт студии детейлинга с портфолио и записью автомобиля." },
  { title: "Élan Beauty", tag: "Сайт для бизнеса", image: "images/work-elanbeauty.jpg", link: "#contact",
    text: "Сайт персональной beauty-студии: услуги, результаты, отзывы и подарочные сертификаты." },
  { title: "Форма дома", tag: "Лендинг", image: "images/work-formadoma.jpg", link: "#contact",
    text: "Сайт компании по ремонту квартир под ключ в Москве: фиксированная смета и портфолио работ." },
];

const SERVICES = [
  ["Дизайн сайтов", "Уникальный интерфейс, который выделяет вас среди конкурентов."],
  ["Разработка сайтов под ключ", "От первой идеи до готового сайта в интернете."],
  ["Лендинги", "Одна страница, которая объясняет продукт и собирает заявки."],
  ["Сайты для бизнеса", "Многостраничные сайты компаний, студий и сервисов."],
  ["Редизайн существующих сайтов", "Обновляю устаревший сайт, чтобы он снова продавал."],
];

const STEPS = [
  ["Обсуждение задачи", "Узнаю о бизнесе, целях и аудитории, согласуем сроки и стоимость."],
  ["Создание дизайна", "Рисую макеты, показываю и дорабатываю до вашего одобрения."],
  ["Разработка сайта", "Верстаю и настраиваю сайт: быстрый, адаптивный, с анимациями."],
  ["Запуск проекта", "Подключаю домен, проверяю всё и запускаю сайт."],
];
/* ======================================================== */

function el(html) {
  const t = document.createElement("template");
  t.innerHTML = html.trim();
  return t.content.firstElementChild;
}

function renderHeader() {
  const links = [["Обо мне", "#about"], ["Работы", "#works"], ["Услуги", "#services"], ["Процесс", "#process"]];
  return el(`
    <header class="nav fixed inset-x-0 top-0 z-50">
      <div class="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#top" class="font-display text-[15px] font-medium">${SITE.name}</a>
        <nav class="hidden gap-8 text-sm text-muted md:flex">
          ${links.map(([t, h]) => `<a href="${h}" class="transition hover:text-white">${t}</a>`).join("")}
        </nav>
        <a href="#contact" class="rounded-full border border-white/25 px-5 py-2 text-sm transition hover:border-accent hover:bg-accent">Обсудить проект</a>
      </div>
    </header>
  `);
}

function renderHero() {
  return el(`
    <section id="top" class="relative mx-auto grid min-h-screen max-w-6xl items-center gap-14 px-5 pb-20 pt-32 sm:px-8 lg:grid-cols-[1.25fr_.75fr]">
      <div>
        <h1 class="rise text-[clamp(2rem,5.4vw,4.4rem)] leading-[1.08]" style="animation-delay:100ms">Создаю сайты, которые работают на ваш бизнес</h1>
        <p class="rise mt-7 max-w-md text-lg leading-relaxed text-muted" style="animation-delay:300ms">Разрабатываю современные сайты под ключ — от идеи до запуска.</p>
        <div class="rise mt-10 flex flex-wrap gap-4" style="animation-delay:500ms">
          <a href="#works" class="inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_var(--accent)]">Посмотреть работы</a>
          <a href="#contact" class="inline-flex items-center justify-center rounded-full border border-white/25 px-7 py-3.5 text-[15px] font-medium transition duration-300 hover:border-white/70 hover:bg-white/5">Обсудить проект</a>
        </div>
      </div>
      <div class="rise relative mx-auto w-full max-w-sm lg:max-w-none" style="animation-delay:400ms">
        <div class="absolute inset-0 translate-x-4 translate-y-4 rounded-t-[999px] rounded-b-[2rem] border border-accent sm:translate-x-6 sm:translate-y-6"></div>
        <img src="${SITE.heroPhoto}" alt="${SITE.name}" class="relative aspect-[4/5] w-full rounded-t-[999px] rounded-b-[2rem] object-cover">
        <div class="absolute bottom-4 left-4 rounded-2xl bg-black/60 px-5 py-3 backdrop-blur-md">
          <div class="font-display text-base">${SITE.name}</div>
          <div class="text-sm text-muted">${SITE.role}</div>
        </div>
      </div>
    </section>
  `);
}

function renderAbout() {
  return el(`
    <section id="about" class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
      <div class="reveal"><h2 class="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">Дизайн, который вызывает доверие</h2></div>
      ${SITE.about.map((p, i) => `<div class="reveal" style="transition-delay:${100 + i * 100}ms"><p class="mt-6 max-w-xl text-lg leading-relaxed text-muted">${p}</p></div>`).join("")}
      <div class="mt-16 grid gap-8 sm:grid-cols-3">
        ${ADVANTAGES.map(([t, d], i) => `
          <div class="reveal" style="transition-delay:${i * 120}ms">
            <div class="border-t border-line pt-5">
              <h3 class="text-base leading-snug">${t}</h3>
              <p class="mt-3 text-sm leading-relaxed text-muted">${d}</p>
            </div>
          </div>`).join("")}
      </div>
    </section>
  `);
}

function renderWorks() {
  return el(`
    <section id="works" class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
      <div class="reveal"><h2 class="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">Работы, которыми я горжусь</h2></div>
      <div class="mt-14 grid gap-x-8 gap-y-16 md:mt-20 md:grid-cols-2">
        ${WORKS.map((w, i) => `
          <div class="reveal ${i % 2 ? "md:mt-24" : ""}">
            <article class="group">
              <a href="${w.link}" class="block overflow-hidden rounded-2xl border border-line bg-white/5">
                <img src="${w.image}" alt="${w.title}" loading="lazy" class="aspect-[16/10] w-full object-cover object-top transition duration-700 ease-out group-hover:scale-105">
              </a>
              <div class="mt-6 flex items-baseline justify-between gap-4">
                <h3 class="text-xl">${w.title}</h3>
                <span class="text-sm text-soft">${w.tag}</span>
              </div>
              <p class="mt-3 max-w-md leading-relaxed text-muted">${w.text}</p>
              <a href="${w.link}" class="mt-5 inline-block border-b border-white/30 pb-0.5 text-sm transition hover:border-accent hover:text-soft">Подробнее</a>
            </article>
          </div>`).join("")}
      </div>
    </section>
  `);
}

function renderServices() {
  return el(`
    <section id="services" class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
      <div class="reveal"><h2 class="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">Чем я могу быть полезен</h2></div>
      <div class="mt-14 border-t border-line md:mt-20">
        ${SERVICES.map(([t, d], i) => `
          <div class="reveal" style="transition-delay:${i * 60}ms">
            <div class="svc grid gap-2 border-b border-line py-8 md:grid-cols-2 md:items-center md:py-10">
              <h3 class="svc-t text-xl transition duration-500 md:text-2xl">${t}</h3>
              <p class="text-muted md:max-w-sm">${d}</p>
            </div>
          </div>`).join("")}
      </div>
    </section>
  `);
}

function renderProcess() {
  return el(`
    <section id="process" class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
      <div class="reveal"><h2 class="max-w-3xl text-3xl leading-[1.15] sm:text-4xl md:text-5xl">Как мы будем работать</h2></div>
      <div class="mt-14 grid gap-10 sm:grid-cols-2 md:mt-20 lg:grid-cols-4">
        ${STEPS.map(([t, d], i) => `
          <div class="reveal" style="transition-delay:${i * 130}ms">
            <div class="border-t border-line pt-6">
              <div class="font-display text-4xl text-accent">${i + 1}</div>
              <h3 class="mt-6 text-lg leading-snug">${t}</h3>
              <p class="mt-3 text-sm leading-relaxed text-muted">${d}</p>
            </div>
          </div>`).join("")}
      </div>
    </section>
  `);
}

function renderContact() {
  return el(`
    <section id="contact" class="mx-auto max-w-6xl px-5 py-24 sm:px-8 md:py-36">
      <div class="reveal">
        <div class="rounded-[2rem] border border-line bg-white/[.03] p-8 sm:p-14">
          <h2 class="max-w-2xl text-3xl leading-[1.15] sm:text-5xl">Есть идея? Давайте обсудим</h2>
          <p class="mt-6 max-w-lg text-lg text-muted">Расскажите о задаче, и я отвечу в течение дня с идеями и оценкой стоимости.</p>
          <a href="${CONTACTS.telegram.href}" class="mt-10 inline-flex items-center justify-center rounded-full bg-accent px-7 py-3.5 text-[15px] font-medium text-white transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_40px_-12px_var(--accent)]">Написать в Telegram</a>
          <p class="mt-6 text-sm text-muted">Или напишите напрямую: <a href="${CONTACTS.telegram.href}" class="text-soft transition hover:text-white">${CONTACTS.telegram.value}</a></p>
        </div>
      </div>
    </section>
  `);
}

function renderFooter() {
  return el(`<footer class="mx-auto max-w-6xl px-5 pb-10 text-sm text-muted sm:px-8">© ${new Date().getFullYear()} ${SITE.name}</footer>`);
}

function mount() {
  const root = document.getElementById("root");
  root.appendChild(renderHeader());
  const main = document.createElement("main");
  [renderHero, renderAbout, renderWorks, renderServices, renderProcess, renderContact].forEach(fn => main.appendChild(fn()));
  root.appendChild(main);
  root.appendChild(renderFooter());

  const io = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
    });
  }, { threshold: 0.12 });
  document.querySelectorAll(".reveal").forEach((n) => io.observe(n));
}

document.addEventListener("DOMContentLoaded", mount);
