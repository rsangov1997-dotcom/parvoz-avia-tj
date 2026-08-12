"use client";

import { useEffect, useRef } from "react";

const widgetUrl = "https://tpembd.com/content?currency=rub&trs=561562&shmarker=763716&show_hotels=true&powered_by=true&locale=ru&searchUrl=www.aviasales.ru%2Fsearch&primary_override=%2332a8dd&color_button=%2332a8dd&color_icons=%2332a8dd&dark=%23262626&light=%23FFFFFF&secondary=%23FFFFFF&special=%23C4C4C4&color_focused=%2332a8dd&border_radius=0&plain=false&promo_id=7879&campaign_id=100";

const offers = [
  { city: "Стамбул", country: "Турция", code: "IST", price: "найти билеты", color: "sunset" },
  { city: "Дубай", country: "ОАЭ", code: "DXB", price: "найти билеты", color: "desert" },
  { city: "Алматы", country: "Казахстан", code: "ALA", price: "найти билеты", color: "mountain" },
];

export default function Home() {
  const widget = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const host = widget.current;
    if (!host) return;
    host.replaceChildren();
    const script = document.createElement("script");
    script.async = true;
    script.src = widgetUrl;
    script.charset = "utf-8";
    host.appendChild(script);
    return () => host.replaceChildren();
  }, []);

  return (
    <main>
      <section className="hero">
        <nav className="nav wrap" aria-label="Главная навигация">
          <a className="brand" href="#"><span className="brand-mark">P</span><span className="brand-name">PARVOZ</span></a>
          <div className="nav-links"><a href="#search">Поиск билетов</a><a href="#offers">Направления</a><a href="#help">Помощь</a></div>
          <span className="language">RU</span>
        </nav>

        <div className="hero-content wrap">
          <div className="eyebrow">ПОИСК РЕАЛЬНЫХ АВИАБИЛЕТОВ</div>
          <h1>Летите туда,<br />где вас <em>ждут</em></h1>
          <p className="hero-copy">Сравните предложения авиакомпаний и агентств. После выбора рейса покупка билета продолжится на сайте партнёра.</p>

          <section className="partner-search" id="search" aria-label="Поиск авиабилетов">
            <div className="partner-search-title"><b>Найдите дешёвые авиабилеты</b><span>Форма поиска Aviasales</span></div>
            <div className="aviasales-widget" ref={widget}><span className="widget-loading">Загружаем поиск рейсов…</span></div>
          </section>
          <div className="trust"><span>✓ Реальные предложения</span><span>◷ Поиск 24/7</span><span>◇ Безопасный переход к покупке</span></div>
        </div>
      </section>

      <section className="offers wrap" id="offers">
        <div className="section-heading"><div><span className="kicker">ПОПУЛЯРНЫЕ НАПРАВЛЕНИЯ</span><h2>Куда полетим?</h2></div><p>Начните поиск в форме выше<br />и сравните доступные рейсы</p></div>
        <div className="offer-grid">{offers.map((offer, i) => <a className={`offer ${offer.color}`} key={offer.city} href="#search">
          <span className="offer-number">0{i + 1}</span><span className="offer-code">{offer.code}</span><span className="offer-art" aria-hidden="true" />
          <span className="offer-info"><span><strong>{offer.city}</strong><small>{offer.country}</small></span><b>{offer.price}</b></span>
        </a>)}</div>
      </section>

      <section className="benefits" id="benefits"><div className="wrap benefit-grid">
        <div><span className="kicker light">ПОЧЕМУ PARVOZ</span><h2>Просто найти.<br />Легко улететь.</h2></div>
        <div className="benefit"><span>01</span><h3>Актуальный поиск</h3><p>Форма Aviasales ищет доступные предложения авиакомпаний и агентств.</p></div>
        <div className="benefit"><span>02</span><h3>Удобное сравнение</h3><p>Сравните время вылета, пересадки и стоимость перед переходом к покупке.</p></div>
        <div className="benefit"><span>03</span><h3>Мы рядом</h3><p>Если нужна помощь с поиском, напишите нам в WhatsApp или Telegram.</p></div>
      </div></section>

      <footer className="wrap" id="help"><a className="brand dark" href="#"><span className="brand-mark">P</span><span className="brand-name">PARVOZ</span></a><p>Ваш короткий путь к новым местам.</p><div className="contact-links"><a href="tel:+992935551997">☎ +992 935 55 19 97</a><a className="whatsapp" href="https://wa.me/992935551997" target="_blank" rel="noreferrer">WhatsApp</a><a className="telegram" href="tg://resolve?phone=992935551997">Telegram</a><span>© 2026 Parvoz</span></div></footer>
    </main>
  );
}
