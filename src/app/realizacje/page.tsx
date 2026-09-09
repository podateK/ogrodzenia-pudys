import Link from "next/link";

const realizations = [
  { category: "Ogrodzenia panelowe", title: "Ogrodzenie panelowe 3D - Warszawa", desc: "Panelowe 3D, wysokosc 1.5m, kolor antracyt RAL 7016", image: "M3 21V3h18v18H3Zm3-3V6h12v12H6Z" },
  { category: "Bramy", title: "Brama przesuwna z automatyka - Poznan", desc: "Brama przesuwna aluminiowa, automatyka Came, pilot", image: "M3 21V3h8v18H3Zm10 0V3h8v18h-8Z" },
  { category: "Balustrady", title: "Balustrada stalowa - Poznan", desc: "Balustrada stalowa kuta, malowanie proszkowe, kolor czarny", image: "M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16M4 14h16M9 21V14M15 21V14" },
  { category: "Ogrodzenia frontowe", title: "Ogrodzenie frontowe lamelowe - Wroclaw", desc: "Ogrodzenie frontowe aluminiowe, lamelowe, kolor bialy RAL 9010", image: "M3 21V9l9-6 9v12H3Zm3-3h12V10l-6-4-6 4v8Z" },
  { category: "Bramy", title: "Brama skrzydlowa dwuskrzydlowa - Krakow", desc: "Brama skrzydlowa stalowa, automatyka Nice, fotokomorki", image: "M3 21V3h8v18H3Zm10 0V3h8v18h-8Z" },
  { category: "Podmurówki", title: "Podmurówka betonowa - Warszawa", desc: "Podmurówka prefabrykowana pod ogrodzenie panelowe", image: "M3 21V18h18v3H3Zm0-5h18V9H3v7Zm0-9h18V4H3v3Z" },
];

const categories = ["Wszystkie", "Ogrodzenia panelowe", "Ogrodzenia frontowe", "Bramy", "Balustrady", "Podmurówki"];

export default function Realizacje() {
  return (
    <div>
      <section className="bg-bg-alt py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            Nasze prace
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Galeria realizacji
          </h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto mb-8">
            Przegląd naszych ostatnich projektów. Każda realizacja to indywidualne podejście i najwyższa jakość wykonania.
          </p>
          
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {categories.map((cat) => (
              <button
                key={cat}
                className="px-4 py-2 text-sm font-medium rounded-full border border-border bg-white hover:border-accent hover:text-accent hover:bg-bg-alt transition-colors"
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {realizations.map((item, i) => (
              <div key={i} className="group bg-white rounded-xl overflow-hidden border border-border">
                <div className="h-56 bg-gradient-to-br from-primary-light to-primary flex items-center justify-center">
                  <svg className="w-20 h-20 text-white/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.image} />
                  </svg>
                </div>
                <div className="p-5">
                  <span className="inline-block text-xs font-semibold text-accent bg-bg-alt px-2 py-1 rounded mb-2">
                    {item.category}
                  </span>
                  <h3 className="font-bold text-primary mb-2">{item.title}</h3>
                  <p className="text-text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-alt">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Masz swoje wizje?
          </h2>
          <p className="text-text-muted mb-6">
            Zrealizujemy Twoje pomysły. Skontaktuj się z nami i omówimy szczegóły.
          </p>
          <Link
            href="/kontakt"
            className="bg-accent hover:bg-accent-hover text-white py-3 px-8 rounded-lg font-bold inline-block transition-all shadow hover:shadow-md"
          >
            Zamow wycene
          </Link>
        </div>
      </section>
    </div>
  );
}