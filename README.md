# Ogrodzenia Pudys - Strona Firmowa

Profesjonalna strona internetowa firmy **Ogrodzenia Pudys** - producenta i montera ogrodzeń, bram oraz balustrad.

## Technologie

- **Next.js 16** (App Router, React 19)
- **TypeScript**
- **Tailwind CSS v4**
- **Inter** (czcionka Google Fonts)

## Wymagania

- **Node.js** w wersji 18.18 lub nowszej
- **npm** (dostepny z Node.js)

Sprawdz wersje:
```bash
node -v
npm -v
```

## Instalacja od zera

1. **Klonuj repozytorium:**
```bash
git clone https://github.com/TWOJ_USERNAME/ogrodzenia-pudys.git
cd ogrodzenia-pudys
```

2. **Zainstaluj zaleznosci:**
```bash
npm install
```

3. **Uruchom serwer deweloperski:**
```bash
npm run dev
```

4. **Otwórz przegladarke:**
```
http://localhost:3000
```

## Dostepne komendy

| Komenda | Opis |
|---------|------|
| `npm run dev` | Serwer deweloperski (hot reload) |
| `npm run build` | Budowa produkcyjna |
| `npm start` | Uruchomienie wersji produkcyjnej |
| `npm run lint` | Sprawdzenie kodu (ESLint) |

## Struktura projektu

```
src/
  app/
    globals.css          # Style globalne, zmienne CSS, konfiguracja Tailwind
    layout.tsx           # Glowny layout (nawigacja + stopka)
    page.tsx             # Strona glowna (hero, oferta, galeria, formularz)
    oferta/
      page.tsx           # Podstrona z pelna oferta produktowa
    realizacje/
      page.tsx           # Podstrona z galeria realizacji
    o-nas/
      page.tsx           # Podstrona "O nas" - historia firmy
    kontakt/
      page.tsx           # Podstrona kontaktowa
  components/
    Header.tsx           # Nawigacja glowna (sticky, mobile menu)
    Footer.tsx           # Stopka z danymi kontaktowymi
    GallerySection.tsx   # Interaktywna galeria ze filtrowaniem
```

## Konfiguracja

### Zmiana danych kontaktowych

Dane kontaktowe znajdziesz w nastepujacych plikach:
- `src/components/Header.tsx` - pasek gornerzy z numerem telefonu
- `src/components/Footer.tsx` - pelne dane w stopce
- `src/app/page.tsx` - sekcja kontaktowa i formularz

### Zmiana kolorów

Paleta kolorów jest zdefiniowana w `src/app/globals.css`:
- `--color-primary` - kolor glowny (ciemny szary)
- `--color-accent` - kolor akcentu (zielony)
- Wartosci Tailwind uzywaja bezposrednich klas (np. `bg-emerald-600`, `bg-zinc-900`)

### Dodanie wlasnych zdjec

Galeria uzywa zdjec z Unsplash. Aby uzyc wlasnych:
1. Wrzuc zdjecia do `public/images/gallery/`
2. Zaktualizuj tablice `galleryItems` w `src/components/GallerySection.tsx`
3. Zmien pole `image` na sciezke do zdjecia (np. `/images/gallery/zdjecie1.jpg`)

## Wdrozenie na produkcje

```bash
npm run build
npm start
```

Lub wdrozenie na Vercel:
```bash
npm i -g vercel
vercel
```

## Licencja

Projekt przygotowany na potrzeby firmy Ogrodzenia Pudys.
