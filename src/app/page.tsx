"use client";

import Link from "next/link";
import GallerySection from "@/components/GallerySection";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f4f4f5] text-[#18181b]">
      {/* Top Banner / Announcement */}
      <div className="w-full bg-[#18181b] text-white text-xs sm:text-sm py-2 px-4 text-center font-medium">
        Bezpłatny pomiar i wycena na terenie Poznania i okolic &bull; Zadzwoń: <a href="tel:+48123456789" className="text-emerald-400 font-bold hover:underline">+48 123 456 789</a>
      </div>

      {/* Hero */}
      <section className="w-full bg-[#18181b] text-white py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-6">
              <span>★</span> Ponad 15 lat doświadczenia w branży
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] mb-6">
              Solidne ogrodzenia i bramy. <span className="text-emerald-400">Bez kompromisów.</span>
            </h1>
            <p className="text-base sm:text-lg text-zinc-400 mb-8 max-w-xl leading-relaxed font-normal">
              Produkcja, sprzedaż i profesjonalny montaż ogrodzeń panelowych, nowoczesnych frontów oraz bram wjazdowych w Poznaniu i całej Wielkopolsce.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="#kontakt"
                className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 px-8 rounded-xl transition-all shadow-lg hover:shadow-emerald-600/20 text-center text-sm tracking-wide"
              >
                Zamów bezpłatną wycenę
              </Link>
              <Link
                href="#oferta"
                className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-4 px-8 rounded-xl transition-all border border-zinc-700 text-center text-sm tracking-wide"
              >
                Zobacz produkty
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="bg-zinc-900 border border-zinc-800 p-8 rounded-3xl shadow-2xl relative">
              <h3 className="text-xl font-bold text-white mb-2">Szybkie zapytanie</h3>
              <p className="text-zinc-400 text-sm mb-6">Odpowiadamy w ciągu 2 godzin w dni robocze.</p>
              <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Dziękujemy! Wiadomość została wysłana."); }}>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Twój Telefon</label>
                  <input type="tel" required placeholder="+48 ___ ___ ___" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Rodzaj ogrodzenia</label>
                  <select className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500">
                    <option>Ogrodzenie Grzebieniowe</option>
                    <option>Ogrodzenie Aluminiowe</option>
                    <option>Ogrodzenia Kute</option>
                  </select>
                </div>
                <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 rounded-xl transition-colors text-sm">
                  Wyślij zapytanie
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section className="w-full bg-emerald-600 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          <div>
            <div className="text-3xl font-black">15+</div>
            <div className="text-xs uppercase tracking-wider font-semibold opacity-90 mt-1">Lat na rynku</div>
          </div>
          <div>
            <div className="text-3xl font-black">3500+</div>
            <div className="text-xs uppercase tracking-wider font-semibold opacity-90 mt-1">Zrealizowanych ogrodzeń</div>
          </div>
          <div>
            <div className="text-3xl font-black">5 lat</div>
            <div className="text-xs uppercase tracking-wider font-semibold opacity-90 mt-1">Gwarancji producenta</div>
          </div>
          <div>
            <div className="text-3xl font-black">100%</div>
            <div className="text-xs uppercase tracking-wider font-semibold opacity-90 mt-1">Zadowolonych klientów</div>
          </div>
        </div>
      </section>

      {/* Services / Products */}
      <section id="oferta" className="w-full py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14">
            <div>
              <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">Oferta systemowa</p>
              <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">Co dostarczamy i montujemy</h2>
            </div>
            <p className="text-zinc-600 max-w-md mt-4 md:mt-0 text-sm">
              Wszystkie nasze produkty są ocynkowane ogniowo i malowane proszkowo, co gwarantuje odporność na korozję na dziesięciolecia.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Ogrodzenia panelowe 3D / 2D", desc: "Najpopularniejszy wybór dla domów i firm. Standardowe wysokości od 1.2m do 2.0m, druty o grubości 4mm lub 5mm.", tag: "Najwyższa sprzedaż" },
              { title: "Ogrodzenia frontowe nowoczesne", desc: "Profile aluminiowe i stalowe, żaluzje oraz sztachety metalowe imitujące drewno bez konieczności konserwacji.", tag: "Premium" },
              { title: "Bramy przesuwne i skrzydłowe", desc: "Solidna konstrukcja samonośna z pełnym osprzętem, przygotowana pod montaż automatyki.", tag: "Wieloletnia trwałość" },
              { title: "Automatyka do bram", desc: "Napędy renomowanych marek (Somfy, Nice, Came) z funkcją sterowania smartfonem i fotokomórkami.", tag: "Komfort" },
              { title: "Balustrady balkonowe i tarasowe", desc: "Stal nierdzewna, szkło bezpieczne oraz profile malowane proszkowo pod kolor ogrodzenia.", tag: "Nowoczesny design" },
              { title: "Podmurówki betonowe i akcesoria", desc: "Gotowe płyty podmurówkowe gładkie i z motywem piaskowca, słupki, obejmy i kapinosy.", tag: "Kompleksowo" },
            ].map((item, idx) => (
              <div key={idx} className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col justify-between hover:border-emerald-600 transition-all group shadow-sm hover:shadow-xl">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full">
                      {item.tag}
                    </span>
                    <span className="text-zinc-300 font-mono font-bold">0{idx + 1}</span>
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-emerald-600 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>
                <div className="pt-4 border-t border-zinc-100 flex items-center justify-between">
                  <span className="text-xs font-semibold text-zinc-500 uppercase">Wycena w 24h</span>
                  <Link href="#kontakt" className="text-xs font-bold text-emerald-600 hover:text-emerald-700 flex items-center gap-1">
                    Zapytaj o cenę &rarr;
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <GallerySection />

      {/* Why Us */}
      <section className="w-full py-20 md:py-28 bg-white border-y border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">Dlaczego my</p>
            <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">Standard Pudys w każdym detalu</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
              <div className="w-12 h-12 bg-emerald-600 text-white font-bold rounded-xl flex items-center justify-center text-lg mb-6">01</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Własna ekipa montażowa</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Nie korzystamy z przypadkowych podwykonawców. Nasze ekipy montażowe posiadają wieloletnie doświadczenie i specjalistyczny sprzęt.
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
              <div className="w-12 h-12 bg-emerald-600 text-white font-bold rounded-xl flex items-center justify-center text-lg mb-6">02</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Ocynk i lakierowanie piecowe</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Każdy element stalowy przechodzi rygorystyczny proces zabezpieczenia antykorozyjnego, dzięki czemu ogrodzenie wygląda jak nowe przez lata.
              </p>
            </div>
            <div className="bg-zinc-50 p-8 rounded-2xl border border-zinc-200">
              <div className="w-12 h-12 bg-emerald-600 text-white font-bold rounded-xl flex items-center justify-center text-lg mb-6">03</div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">Jasne warunki współpracy</h3>
              <p className="text-zinc-600 text-sm leading-relaxed">
                Umowa, stała cena bez ukrytych kosztów oraz pisemna gwarancja na materiał i montaż. Działamy w pełni profesjonalnie.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="kontakt" className="w-full py-20 md:py-28 bg-[#18181b] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <p className="text-emerald-400 font-bold uppercase tracking-widest text-xs mb-3">Skontaktuj się z nami</p>
            <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-6">Rozpocznijmy realizację Twojego ogrodzenia</h2>
            <p className="text-zinc-400 mb-8 leading-relaxed text-sm">
              Zadzwoń bezpośrednio do naszego doradcy technicznego lub wypełnij formularz. Przyjedziemy na pomiar i przygotujemy darmowy kosztorys.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <span className="text-2xl">📞</span>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-bold">Infolinia techniczna</div>
                  <a href="tel:+48123456789" className="text-lg font-bold text-white hover:text-emerald-400 transition-colors">+48 123 456 789</a>
                </div>
              </div>
              <div className="flex items-center gap-4 bg-zinc-900 p-4 rounded-xl border border-zinc-800">
                <span className="text-2xl">✉️</span>
                <div>
                  <div className="text-xs text-zinc-500 uppercase font-bold">Adres e-mail</div>
                  <a href="mailto:biuro@ogrodzenia-pudys.pl" className="text-lg font-bold text-white hover:text-emerald-400 transition-colors">biuro@ogrodzenia-pudys.pl</a>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 bg-zinc-900 border border-zinc-800 p-8 sm:p-10 rounded-3xl shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Formularz kontaktowy</h3>
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert("Wiadomość została wysłana pomyślnie!"); }}>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Imię i nazwisko</label>
                  <input type="text" required placeholder="Jan Kowalski" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500" />
                </div>
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Numer telefonu</label>
                  <input type="tel" required placeholder="+48 ___ ___ ___" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500" />
                </div>
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Miejscowość montażu</label>
                <input type="text" placeholder="np. Poznań / Swarzędz" className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-zinc-400 mb-1">Szczegóły / Wymiary (opcjonalnie)</label>
                <textarea rows={3} placeholder="np. szukam ogrodzenia panelowego na ok. 25 metrów bieżących..." className="w-full bg-zinc-800 border border-zinc-700 rounded-xl px-4 py-3 text-white text-sm focus:outline-none focus:border-emerald-500 resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-4 rounded-xl transition-colors text-sm tracking-wide">
                Wyślij zapytanie o wycenę
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
