import Link from "next/link";

const products = [
  {
    id: "panelowe",
    title: "Ogrodzenia panelowe",
    description: "Ogrodzenia panelowe 3D i 2D w roznych wysokosciach i kolorach RAL",
    features: [
      "Panele zgrzewane i ciete",
      "Słupki stalowe i betonowe",
      "Podmurówki betonowe",
      "Montaż i transport",
    ],
    image: "M3 21V3h18v18H3Zm3-3V6h12v12H6Z",
  },
  {
    id: "profilowe",
    title: "Ogrodzenia frontowe",
    description: "Profilowe i lamelowe - nowoczesny design dla Twojej posesji",
    features: [
      "Profilowe i lamelowe",
      "Wysokie i niskie",
      "Kolory RAL",
      "Montaż i transport",
    ],
    image: "M3 21V9l9-6 9v12H3Zm3-3h12V10l-6-4-6 4v8Z",
  },
  {
    id: "bramy",
    title: "Bramy i furtki",
    description: "Przesuwne, skrzydlowe, dwuskrzydlowe i furtki wejsciowe",
    features: [
      "Bramy przesuwne i skrzydlowe",
      "Automatyka do bram",
      "Furtki wejsciowe",
      "Montaż i transport",
    ],
    image: "M3 21V3h8v18H3Zm10 0V3h8v18h-8Z",
  },
  {
    id: "automatyka",
    title: "Automatyka do bram",
    description: "Napedy do bram przeswnych i skrzydlowych producentow",
    features: [
      "Napedy do bram",
      "Sterowniki i piloty",
      "Automatyka do furtki",
      "Montaż i transport",
    ],
    image: "M4 4h16v16H4Zm2 2v12h12V6Zm3 3h6v6H9Z",
  },
  {
    id: "balustrady",
    title: "Balustrady",
    description: "Balustrady metalowe, stalowe i ze stali nierdzewnej",
    features: [
      "Balustrady metalowe",
      "Balustrady stalowe",
      "Balustrady nierdzewne",
      "Montaż i transport",
    ],
    image: "M4 21V5a2 2 0 012-2h12a2 2 0 012 2v16M4 14h16M9 21V14M15 21V14",
  },
];

export default function Oferta() {
  return (
    <div>
      <section className="bg-bg-alt py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3 text-center">
            Kompleksowa oferta
          </p>
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center text-primary">
            Nasze produkty
          </h1>
          <p className="text-text-muted text-center max-w-2xl mx-auto">
            Profesjonalne ogrodzenia, bramy i balustrady dla domu i firmy. Sprawdzone rozwiazania z wieloletnim doświadczeniem.
          </p>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="space-y-16">
            {products.map((product) => (
              <div key={product.id} id={product.id} className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                <div className="bg-white p-6 rounded-xl border border-border">
                  <div className="h-64 bg-bg-alt rounded-lg flex items-center justify-center mb-6">
                    <svg className="w-20 h-20 text-accent/20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={product.image} />
                    </svg>
                  </div>
                  <h2 className="text-2xl font-bold text-primary mb-3">
                    {product.title}
                  </h2>
                  <p className="text-text-muted mb-4 leading-relaxed">
                    {product.description}
                  </p>
                  <ul className="space-y-2">
                    {product.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-text-muted">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-white p-6 rounded-xl border border-border">
                  <h3 className="text-xl font-bold text-primary mb-4">
                    Specyfikacja techniczna
                  </h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Wysokość</h4>
                      <p className="text-text-muted">1.2m - 2.5m (standardowo 1.5m)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Materiał</h4>
                      <p className="text-text-muted">Stal nierdzewna lub stalowa (zależnie od modelu)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Kolory</h4>
                      <p className="text-text-muted">Pełna paleta kolorów RAL (standardowo RAL 6005)</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-primary mb-2">Gwarancja</h4>
                      <p className="text-text-muted">5 lat na produkty, 2 lata na montaż</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-bg-alt">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4 text-primary">
            Potrzebujesz wyceny?
          </h2>
          <p className="text-text-muted mb-6">
            Skontaktuj się z nami, a przygotujemy ofertę dopasowaną do Twoich potrzeb.
          </p>
          <Link
            href="/kontakt"
            className="bg-accent hover:bg-accent-hover text-white py-3 px-8 rounded-lg font-bold inline-block transition-all shadow hover:shadow-md"
          >
            Napisz do nas
          </Link>
        </div>
      </section>
    </div>
  );
}
