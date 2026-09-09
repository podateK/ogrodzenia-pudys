import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-white border-t border-zinc-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-9 h-9 bg-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">P</span>
              </div>
              <div className="leading-tight">
                <span className="block font-bold text-base uppercase">Ogrodzenia Pudys</span>
                <span className="block text-emerald-400 text-[10px] tracking-widest uppercase">
                  Bramy i Balustrady
                </span>
              </div>
            </div>
            <p className="text-zinc-400 text-sm leading-relaxed">
              Produkcja, sprzedaż i montaż ogrodzeń, bram, balustrad
              i furtar. Kompleksowa obsługa od pomiaru po montaż.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">
              Kontakt
            </h4>
            <address className="not-italic space-y-2 text-sm text-zinc-400">
              <p>
                <a href="tel:+48123456789" className="hover:text-emerald-400 transition-colors">
                  +48 123 456 789
                </a>
              </p>
              <p>
                <a href="mailto:biuro@ogrodzenia-pudys.pl" className="hover:text-emerald-400 transition-colors">
                  biuro@ogrodzenia-pudys.pl
                </a>
              </p>
              <p>Poznań i okolice</p>
            </address>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">
              Oferta
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/oferta", label: "Ogrodzenia panelowe" },
                { href: "/oferta", label: "Ogrodzenia frontowe" },
                { href: "/oferta", label: "Bramy i furtki" },
                { href: "/oferta", label: "Automatyka do bram" },
                { href: "/oferta", label: "Balustrady" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-widest">
              Firma
            </h4>
            <ul className="space-y-2">
              {[
                { href: "/o-nas", label: "O nas" },
                { href: "/realizacje", label: "Realizacje" },
                { href: "/kontakt", label: "Kontakt" },
                { href: "#", label: "Polityka prywatności" },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-zinc-400 hover:text-emerald-400 transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            &copy; {new Date().getFullYear()} Ogrodzenia Pudys. Wszelkie prawa zastrzeżone.
          </p>
          <a
            href="#"
            className="text-zinc-500 hover:text-emerald-400 transition-colors text-sm flex items-center gap-1"
            aria-label="Powrót na górę strony"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
            Powrót na górę
          </a>
        </div>
      </div>
    </footer>
  );
}
