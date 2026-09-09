import Link from "next/link";

export default function AboutPage() {
  return (
    <div className="w-full flex flex-col items-center bg-[#f4f4f5] text-[#18181b] py-16 md:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs">Tradycja i Rzemiosło</p>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-zinc-900">
            Firma Ogrodzenia Pudys
          </h1>
          <p className="text-zinc-600 text-lg max-w-2xl mx-auto">
            Poznaj naszą historię, wartości oraz podejście do każdego projektu ogrodzeniowego.
          </p>
        </div>

        {/* Story */}
        <div className="bg-white border border-zinc-200 p-8 sm:p-12 rounded-3xl shadow-sm space-y-6">
          <h2 className="text-2xl font-bold text-zinc-900">Pasja przekazywana z pokolenia na pokolenie</h2>
          <p className="text-zinc-700 leading-relaxed">
            Firma <strong className="text-zinc-900">Ogrodzenia Pudys</strong> została założona przez <span className="text-emerald-600 font-bold">Pana Pudysa</span>, którego wieloletnie doświadczenie w ślusarstwie i metalurgii stało się fundamentem naszej działalności w Poznaniu i całej Wielkopolsce.
          </p>
          <p className="text-zinc-700 leading-relaxed">
            Od samego początku naszym celem było dostarczanie produktów, które nie tylko wyznaczają standardy bezpieczeństwa, ale również stanowią elegancką wizytę każdej posesji. Nie akceptujemy kompromisów w kwestii jakości stali, precyzji spawów czy trwałości powłok lakierniczych.
          </p>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Indywidualne podejście</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Każda posesja jest inna. Pan Pudys wraz z zespołem doradców pomaga dobrać optymalne rozwiązanie dopasowane do architektury domu i budżetu.
            </p>
          </div>
          <div className="bg-white border border-zinc-200 p-8 rounded-2xl shadow-sm">
            <h3 className="text-lg font-bold text-zinc-900 mb-2">Własny park maszynowy</h3>
            <p className="text-zinc-600 text-sm leading-relaxed">
              Dysponujemy nowoczesnym zapleczem produkcyjnym, co pozwala nam kontrolować każdy etap wytwarzania ogrodzeń i bram.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-zinc-900 text-white p-10 rounded-3xl space-y-6">
          <h3 className="text-2xl font-bold">Porozmawiaj bezpośrednio z naszym zespołem</h3>
          <p className="text-zinc-400 text-sm max-w-xl mx-auto">
            Chcesz dowiedzieć się więcej o naszej ofercie lub umówić się na bezpłatny pomiar na terenie Poznania?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+48123456789"
              className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-8 rounded-xl transition-colors text-sm"
            >
              Zadzwoń: +48 123 456 789
            </a>
            <Link
              href="/#kontakt"
              className="bg-zinc-800 hover:bg-zinc-700 text-white font-semibold py-3.5 px-8 rounded-xl transition-colors text-sm"
            >
              Napisz wiadomość
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
