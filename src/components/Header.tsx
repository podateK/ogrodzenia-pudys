"use client";

import { useState } from "react";
import Link from "next/link";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-slate-900 text-white shadow-md w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-green-600 flex items-center justify-center font-bold text-xl text-white">
              P
            </div>
            <div>
              <span className="block text-lg font-bold tracking-tight uppercase leading-none">
                Ogrodzenia Pudys
              </span>
              <span className="block text-xs text-green-400 font-semibold tracking-wider uppercase mt-1">
                Bramy i Balustrady
              </span>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/" className="hover:text-green-400 transition-colors">
              Strona główna
            </Link>
            <Link href="/oferta" className="hover:text-green-400 transition-colors">
              Oferta
            </Link>
            <Link href="/#uslugi" className="hover:text-green-400 transition-colors">
              Usługi
            </Link>
            <Link href="/#o-nas" className="hover:text-green-400 transition-colors">
              O nas
            </Link>
            <Link href="/#kontakt" className="hover:text-green-400 transition-colors">
              Kontakt
            </Link>
            <Link
              href="/#kontakt"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-2.5 px-5 rounded-lg transition-colors shadow"
            >
              Bezpłatna wycena
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800 focus:outline-none"
            aria-label="Menu"
          >
            <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-slate-900 border-t border-slate-800 px-4 pt-4 pb-6 space-y-3">
          <Link
            href="/"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-green-400"
          >
            Strona główna
          </Link>
          <Link
            href="/oferta"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-green-400"
          >
            Oferta
          </Link>
          <Link
            href="/#uslugi"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-green-400"
          >
            Usługi
          </Link>
          <Link
            href="/#o-nas"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-green-400"
          >
            O nas
          </Link>
          <Link
            href="/#kontakt"
            onClick={() => setIsOpen(false)}
            className="block py-2 text-base font-medium text-slate-200 hover:text-green-400"
          >
            Kontakt
          </Link>
          <Link
            href="/#kontakt"
            onClick={() => setIsOpen(false)}
            className="block text-center bg-green-600 hover:bg-green-700 text-white font-bold py-3 rounded-lg mt-3"
          >
            Bezpłatna wycena
          </Link>
        </div>
      )}
    </header>
  );
}
