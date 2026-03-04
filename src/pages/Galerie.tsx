import { useState } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import insta1 from "@/assets/instagram/insta-1.jpg";
import insta2 from "@/assets/instagram/insta-2.jpg";
import insta3 from "@/assets/instagram/insta-3.jpg";
import insta4 from "@/assets/instagram/insta-4.jpg";
import insta5 from "@/assets/instagram/insta-5.jpg";
import insta6 from "@/assets/instagram/insta-6.jpg";
import bmw1 from "@/assets/gallery/bmw-1.jpg";
import bmw2 from "@/assets/gallery/bmw-2.jpg";
import bmw3 from "@/assets/gallery/bmw-3.jpg";
import bmw4 from "@/assets/gallery/bmw-4.jpg";
import rs31 from "@/assets/gallery/rs3-1.jpg";
import rs32 from "@/assets/gallery/rs3-2.jpg";
import rs33 from "@/assets/gallery/rs3-3.jpg";
import rs34 from "@/assets/gallery/rs3-4.jpg";
import rs35 from "@/assets/gallery/rs3-5.jpg";
import rs36 from "@/assets/gallery/rs3-6.jpg";
import rs37 from "@/assets/gallery/rs3-7.jpg";
import rs38 from "@/assets/gallery/rs3-8.jpg";
import rs39 from "@/assets/gallery/rs3-9.jpg";
import rs310 from "@/assets/gallery/rs3-10.jpg";
import rs311 from "@/assets/gallery/rs3-11.jpg";
import rs312 from "@/assets/gallery/rs3-12.jpg";

type Category = "alle" | "mclaren" | "bmw" | "rs3";

interface GalleryImage {
  src: string;
  alt: string;
  category: Category[];
  tall?: boolean;
}

const images: GalleryImage[] = [
  // McLaren 720S
  { src: insta1, alt: "McLaren 720S", category: ["mclaren"], tall: true },
  { src: insta2, alt: "McLaren 720S Detail", category: ["mclaren"], tall: false },
  { src: insta3, alt: "McLaren 720S Fahrt", category: ["mclaren"], tall: false },
  { src: insta4, alt: "McLaren 720S Erlebnis", category: ["mclaren"], tall: true },
  { src: insta5, alt: "McLaren 720S Perspektive", category: ["mclaren"], tall: false },
  { src: insta6, alt: "McLaren 720S Moment", category: ["mclaren"], tall: true },
  // BMW M3
  { src: bmw1, alt: "BMW M3 Competition", category: ["bmw"], tall: false },
  { src: bmw2, alt: "BMW M3 Seite", category: ["bmw"], tall: true },
  { src: bmw3, alt: "BMW M3 Detail", category: ["bmw"], tall: false },
  { src: bmw4, alt: "BMW M3 Front", category: ["bmw"], tall: true },
  // Audi RS3
  { src: rs31, alt: "Audi RS3", category: ["rs3"], tall: true },
  { src: rs32, alt: "Audi RS3 Front", category: ["rs3"], tall: false },
  { src: rs33, alt: "Audi RS3 Seite", category: ["rs3"], tall: true },
  { src: rs34, alt: "Audi RS3 Heck", category: ["rs3"], tall: false },
  { src: rs35, alt: "Audi RS3 Detail", category: ["rs3"], tall: false },
  { src: rs36, alt: "Audi RS3 Perspektive", category: ["rs3"], tall: true },
  { src: rs37, alt: "Audi RS3 Interieur", category: ["rs3"], tall: false },
  { src: rs38, alt: "Audi RS3 Rad", category: ["rs3"], tall: false },
  { src: rs39, alt: "Audi RS3 Spiegel", category: ["rs3"], tall: false },
  { src: rs310, alt: "Audi RS3 Auspuff", category: ["rs3"], tall: true },
  { src: rs311, alt: "Audi RS3 Logo", category: ["rs3"], tall: false },
  { src: rs312, alt: "Audi RS3 Scheinwerfer", category: ["rs3"], tall: false },
];

const filters: { label: string; value: Category }[] = [
  { label: "Alle", value: "alle" },
  { label: "McLaren 720S", value: "mclaren" },
  { label: "BMW M3", value: "bmw" },
  { label: "Audi RS3", value: "rs3" },
];

export default function Galerie() {
  const [active, setActive] = useState<Category>("alle");
  const [lightbox, setLightbox] = useState<number | null>(null);

  const filtered = active === "alle" ? images : images.filter((img) => img.category.includes(active));

  const openLightbox = (idx: number) => setLightbox(idx);
  const closeLightbox = () => setLightbox(null);

  const navigateLightbox = (dir: number) => {
    if (lightbox === null) return;
    const next = lightbox + dir;
    if (next >= 0 && next < filtered.length) setLightbox(next);
  };

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="bg-background py-20 text-center border-b border-accent">
        <h1 className="font-display text-5xl md:text-7xl text-foreground">NEXTCAR GALERIE</h1>
        <p className="text-muted-foreground mt-3 text-lg">Echte Momente. Echte Erlebnisse.</p>
      </section>

      {/* Filters */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-3">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 text-sm font-semibold rounded-sm transition-colors ${
                active === f.value
                  ? "bg-accent text-accent-foreground"
                  : "bg-card text-foreground hover:bg-accent/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Masonry Grid */}
      <div className="container mx-auto px-4 pb-20">
        <div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filtered.map((img, i) => (
            <div
              key={`${img.src}-${i}`}
              className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-sm"
              onClick={() => openLightbox(i)}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/30 transition-colors duration-300" />
            </div>
          ))}
        </div>
      </div>

      {/* Instagram CTA */}
      <section className="py-16 bg-card text-center">
        <p className="text-muted-foreground mb-4">Folge uns auf Instagram für mehr Eindrücke</p>
        <a
          href="https://www.instagram.com/nextcar_exklusiv/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
        >
          @nextcar_exklusiv
        </a>
      </section>

      {/* Lightbox */}
      {lightbox !== null && (
        <div
          className="fixed inset-0 z-[100] bg-[hsl(0,0%,0%)]/95 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-[hsl(0,0%,100%)] hover:text-accent transition-colors z-10"
          >
            <X size={32} />
          </button>
          {lightbox > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(-1); }}
              className="absolute left-4 md:left-8 text-[hsl(0,0%,100%)] hover:text-accent transition-colors z-10"
            >
              <ChevronLeft size={40} />
            </button>
          )}
          {lightbox < filtered.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); navigateLightbox(1); }}
              className="absolute right-4 md:right-8 text-[hsl(0,0%,100%)] hover:text-accent transition-colors z-10"
            >
              <ChevronRight size={40} />
            </button>
          )}
          <img
            src={filtered[lightbox].src}
            alt={filtered[lightbox].alt}
            className="max-h-[85vh] max-w-[90vw] object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </div>
  );
}
