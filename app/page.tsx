"use client";

import { FormEvent, useState } from "react";

const offers = [
  { city: "Стамбул", country: "Турция", code: "IST", price: "найти билеты", color: "sunset" },
  { city: "Дубай", country: "ОАЭ", code: "DXB", price: "найти билеты", color: "desert" },
  { city: "Алматы", country: "Казахстан", code: "ALA", price: "найти билеты", color: "mountain" },
];

export default function Home() {
  const [from, setFrom] = useState("Душанбе");
  const [to, setTo] = useState("Уфа");
  const [departure, setDeparture] = useState("");
  const [returnDate, setReturnDate] = useState("");
  const [passengers, setPassengers] = useState("1");

  function sendRequest(event: FormEvent) {
    event.preventDefault();
    const message = `Здравствуйте! Хочу заказать авиабилет.\nМаршрут: ${from} → ${to}\nДата вылета: ${departure || "уточнить"}\nОбратно: ${returnDate || "не нужно"}\nПассажиры: ${passengers}`;
    window.open(`https://wa.me/992935551997?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

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
          <p className="hero-copy">Выберите направление и даты. Заявка сразу поступит нашему менеджеру в WhatsApp.</p>

          <form className="partner-search request-form" id="search" aria-label="Заявка на авиабилет" onSubmit={sendRequest}>
            <div className="partner-search-title"><b>Оставьте заявку на авиабилет</b><span>Ответим в WhatsApp</span></div>
            <div className="request-fields">
              <label><span>ОТКУДА</span><input value={from} onChange={e => setFrom(e.target.value)} required /></label>
              <label><span>КУДА</span><input value={to} onChange={e => setTo(e.target.value)} required /></label>
              <label><span>ТУДА</span><input type="date" value={departure} onChange={e => setDeparture(e.target.value)} required /></label>
              <label><span>ОБРАТНО</span><input type="date" value={returnDate} onChange={e => setReturnDate(e.target.value)} /></label>
              <label><span>ПАССАЖИРЫ</span><select value={passengers} onChange={e => setPassengers(e.target.value)}><option value="1">1 пассажир</option><option value="2">2 пассажира</option><option value="3">3 пассажира</option><option value="4">4 пассажира</option></select></label>
              <button type="submit">Отправить в WhatsApp ↗</button>
            </div>
            <div className="messenger-choice"><span>Или напишите нам:</span><a href="https://wa.me/992935551997" target="_blank" rel="noreferrer">WhatsApp</a><a href="tg://resolve?phone=992935551997">Telegram</a></div>
          </form>
          <div className="trust"><span>✓ Заявка напрямую менеджеру</span><span>◷ Ответим быстро</span><span>◇ Поможем подобрать билет</span></div>
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
        <div className="benefit"><span>01</span><h3>Персональный подбор</h3><p>Менеджер проверит доступные рейсы и предложит подходящие варианты.</p></div>
        <div className="benefit"><span>02</span><h3>Удобное сравнение</h3><p>Сравните время вылета, пересадки и стоимость перед переходом к покупке.</p></div>
        <div className="benefit"><span>03</span><h3>Мы рядом</h3><p>Если нужна помощь с поиском, напишите нам в WhatsApp или Telegram.</p></div>
      </div></section>

      <footer className="wrap" id="help"><a className="brand dark" href="#"><span className="brand-mark">P</span><span className="brand-name">PARVOZ</span></a><p>Ваш короткий путь к новым местам.</p><div className="contact-links"><a href="tel:+992935551997">☎ +992 935 55 19 97</a><a className="whatsapp" href="https://wa.me/992935551997" target="_blank" rel="noreferrer">WhatsApp</a><a className="telegram" href="tg://resolve?phone=992935551997">Telegram</a><span>© 2026 Parvoz</span></div></footer>
    </main>
  );
}

