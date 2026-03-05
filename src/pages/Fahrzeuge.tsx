import { Link, useParams } from "react-router-dom";
import { useState } from "react";

const vehicles = [
  {
    slug: "mclaren-720s",
    key: "mclaren",
    title: "McLaren 720S",
    tagline: "Ultraschnell. Unvergleichlich.",
    badge: "ULTRASCHNELL",
    category: "Supersportwagen",
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/61d18f1b-55d7-4299-bbf3-e3c92c8a93c2-1024x683.jpg",
    price: "Ab 599€ / Tag",
    specs: [
      ["Leistung", "720 PS"],
      ["Motor", "V8 Biturbo"],
      ["0-100 km/h", "2,9 Sekunden"],
      ["Höchstgeschwindigkeit", "341 km/h"],
      ["Antrieb", "Hinterradantrieb"],
      ["Getriebe", "7-Gang SSG"],
    ],
    description: "Pure Performance trifft unvergleichliche Eleganz. Der McLaren 720S beeindruckt mit einem V8-Biturbo-Motor und Vollausstattung.",
  },
  {
    slug: "bmw-m3",
    key: "bmw",
    title: "BMW M3 Competition Touring",
    tagline: "Der Wolf im Schafspelz.",
    badge: "DER WOLF IM SCHAFSPELZ",
    category: "Touring",
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/9fd90d7c-2b63-4dd6-96ca-93f9e41789f9-1024x683.jpg",
    price: "Ab 349€ / Tag",
    specs: [
      ["Leistung", "510 PS"],
      ["Motor", "3,0L Reihensechszylinder"],
      ["0-100 km/h", "3,5 Sekunden"],
      ["Antrieb", "Allradantrieb xDrive"],
      ["Getriebe", "8-Gang Automatik"],
    ],
    description: "Beeindruckende Leistung kombiniert mit außergewöhnlicher Präzision im Kombi-Format.",
  },
  {
    slug: "audi-rs3",
    key: "audi",
    title: "Audi RS3 Facelift",
    tagline: "Klein aber oho.",
    badge: "KLEIN ABER OHO",
    category: "Supersportwagen",
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2025/11/PHOTO-2025-11-05-09-05-05-1024x683.jpg",
    price: "Ab 249€ / Tag",
    specs: [
      ["Leistung", "400 PS"],
      ["Motor", "2,5L Fünfzylinder"],
      ["0-100 km/h", "3,8 Sekunden"],
      ["Antrieb", "Quattro Allrad"],
      ["Getriebe", "7-Gang S-Tronic"],
    ],
    description: "Der perfekte Mix aus Alltagstauglichkeit und Supersportler-Performance.",
  },
];

export function FahrzeugeListe() {
  const [filter, setFilter] = useState("Alle");
  const categories = ["Alle", "Supersportwagen", "Touring"];
  const filtered = filter === "Alle" ? vehicles : vehicles.filter((v) => v.category === filter);

  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">UNSERE FAHRZEUGE</h1>
        <div className="mt-8 flex justify-center gap-3 flex-wrap">
          {categories.map((c) => (
            <button
              key={c}
              onClick={() => setFilter(c)}
              className={`px-5 py-2 text-sm font-semibold rounded-sm transition-colors ${
                filter === c ? "bg-accent text-accent-foreground" : "border border-[hsl(0,0%,30%)] text-[hsl(0,0%,60%)] hover:border-accent hover:text-accent"
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-8">
          {filtered.map((v) => (
            <Link key={v.slug} to={`/fahrzeuge/${v.slug}`} className="bg-card rounded-sm overflow-hidden group hover:shadow-xl transition-shadow">
              <div className="relative aspect-video overflow-hidden">
                <img src={v.img} alt={v.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-sm">{v.badge}</span>
              </div>
              <div className="p-6">
                <h3 className="font-display text-3xl text-foreground">{v.title}</h3>
                <p className="text-sm text-accent font-medium mt-1">{v.specs.map(([, val]) => val).slice(0, 3).join(" | ")}</p>
                <p className="font-display text-xl text-foreground mt-2">{v.price}</p>
                <p className="text-sm text-muted-foreground mt-2">{v.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}

export function FahrzeugDetail() {
  const { slug } = useParams();
  const vehicle = vehicles.find((v) => v.slug === slug);

  if (!vehicle) return <div className="pt-[70px] p-8 text-center text-foreground">Fahrzeug nicht gefunden.</div>;

  return (
    <div className="pt-[70px]">
      <section className="relative h-[60vh] flex items-end">
        <img src={vehicle.img} alt={vehicle.title} className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,0%)] to-transparent" />
        <div className="relative z-10 container mx-auto px-4 pb-12">
          <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-sm">{vehicle.badge}</span>
          <h1 className="font-display text-5xl md:text-7xl text-[hsl(0,0%,100%)] mt-4">{vehicle.title}</h1>
          <p className="text-[hsl(0,0%,70%)] text-lg mt-2">{vehicle.tagline}</p>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">Technische Daten</h2>
            <div className="space-y-4">
              {vehicle.specs.map(([label, value]) => (
                <div key={label} className="flex justify-between border-b border-muted pb-3">
                  <span className="text-muted-foreground text-sm">{label}</span>
                  <span className="text-foreground font-medium text-sm">{value}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">Beschreibung</h2>
            <p className="text-muted-foreground">{vehicle.description}</p>
            <p className="font-display text-3xl text-accent mt-8">{vehicle.price}</p>
            <Link
              to={`/buchen?car=${vehicle.key}`}
              className="mt-6 inline-block bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Jetzt buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
