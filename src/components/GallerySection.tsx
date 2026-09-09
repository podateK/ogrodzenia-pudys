"use client";

import { useState } from "react";

const galleryItems = [
  { 
    id: 1, 
    title: "Ogrodzenie panelowe 3D - Antracyt RAL 7016", 
    category: "panele", 
    desc: "Montaż dla klienta indywidualnego w Poznaniu",
    image: "https://images.unsplash.com/photo-1558442080-86927361665e?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 2, 
    title: "Brama przesuwna automatyczna", 
    category: "bramy", 
    desc: "Zintegrowana z napędem Somfy, szerokość 5m",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 3, 
    title: "Balustrada balkonowa nierdzewna", 
    category: "balustrady", 
    desc: "Stal szczotkowana z wypełnieniem szklanym",
    image: "https://images.unsplash.com/photo-1590381105924-c72589b9ef3f?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 4, 
    title: "Ogrodzenie frontowe nowoczesne", 
    category: "frontowe", 
    desc: "Profile poziome żaluzjowe w kolorze czarnym",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 5, 
    title: "Furtka wejściowa z domofonem", 
    category: "bramy", 
    desc: "Dopasowana wzorem do ogrodzenia panelowego",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80"
  },
  { 
    id: 6, 
    title: "Ogrodzenie przemysłowe panelowe", 
    category: "panele", 
    desc: "Zabezpieczenie terenu firmy, wysokość 2.4m",
    image: "https://images.unsplash.com/photo-1541888946425-d0fbb18fcd53?auto=format&fit=crop&w=800&q=80"
  },
];

export default function GallerySection() {
  const [activeTab, setActiveTab] = useState("wszystkie");

  const filtered = activeTab === "wszystkie" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section id="galeria" className="w-full py-20 md:py-28 bg-[#f4f4f5] flex flex-col items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="text-emerald-600 font-bold uppercase tracking-widest text-xs mb-3">Nasze Realizacje</p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-zinc-900">Galeria wykonanych prac</h2>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {[
            { id: "wszystkie", label: "Wszystkie" },
            { id: "panele", label: "Ogrodzenia panelowe" },
            { id: "frontowe", label: "Frontowe" },
            { id: "bramy", label: "Bramy i furtki" },
            { id: "balustrady", label: "Balustrady" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-xl font-semibold text-sm transition-all ${
                activeTab === tab.id
                  ? "bg-zinc-900 text-white shadow-md"
                  : "bg-white text-zinc-700 hover:bg-zinc-200 border border-zinc-200"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map((item) => (
            <div key={item.id} className="bg-white rounded-2xl overflow-hidden border border-zinc-200 shadow-sm hover:shadow-2xl transition-all group">
              <div className="h-64 bg-zinc-900 relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4">
                  <span className="text-xs font-bold uppercase tracking-wider bg-zinc-900/80 backdrop-blur-md text-emerald-400 px-3 py-1.5 rounded-full border border-white/10">
                    {item.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-zinc-900 mb-2">{item.title}</h3>
                <p className="text-zinc-600 text-sm leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
