import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const CARS = {
  mclaren: {
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/61d18f1b-55d7-4299-bbf3-e3c92c8a93c2-1024x683.jpg",
    badge: "ULTRASCHNELL",
    title: "McLaren 720S",
    specs: "720 PS | V8 Biturbo | 0-100 in 2,9s",
    price: "Ab 599€ / Tag",
    text: "Pure Performance trifft unvergleichliche Eleganz. Der 720S mit V8-Biturbo und Vollausstattung.",
    link: "/buchen?car=mclaren",
  },
  bmw: {
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/9fd90d7c-2b63-4dd6-96ca-93f9e41789f9-1024x683.jpg",
    badge: "DER WOLF IM SCHAFSPELZ",
    title: "BMW M3 Competition Touring",
    specs: "510 PS | Reihensechszylinder | 0-100 in 3,5s",
    price: "Ab 349€ / Tag",
    text: "Beeindruckende Leistung kombiniert mit außergewöhnlicher Präzision im Kombi-Format.",
    link: "/buchen?car=bmw",
  },
  audi: {
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2025/11/PHOTO-2025-11-05-09-05-05-1024x683.jpg",
    badge: "KLEIN ABER OHO",
    title: "Audi RS3 Facelift",
    specs: "400 PS | Fünfzylinder | Quattro-Antrieb",
    price: "Ab 249€ / Tag",
    text: "Der perfekte Mix aus Alltagstauglichkeit und Supersportler-Performance.",
    link: "/buchen?car=audi",
  },
  urus: {
    img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/61d18f1b-55d7-4299-bbf3-e3c92c8a93c2-1024x683.jpg",
    badge: "DER SUPER-SUV",
    title: "Lamborghini Urus",
    specs: "650 PS | V8 | 0-100 in 3,6s",
    price: "Auf Anfrage",
    text: "Der wildeste SUV der Welt. Für alle die alles wollen — Luxus und Performance.",
    link: "/kontakt",
    btnText: "Anfragen",
  },
};

const reviews = [
  { name: "Maximilian R.", text: "Absolut traumhaftes Erlebnis mit dem McLaren 720S. Die Abwicklung war professionell und unkompliziert. Kann NextCar jedem empfehlen der echten Fahrspaß sucht!" },
  { name: "Sarah K.", text: "Perfekte Organisation, top gepflegtes Fahrzeug und super freundlicher Service. Das Erlebnis war einfach unvergesslich!" },
  { name: "Thomas B.", text: "Instruktorfahrt als Geburtstagsgeschenk — mein Mann war absolut begeistert. Sehr zu empfehlen, werden definitiv wiederkommen!" },
  { name: "Felix M.", text: "BMW M3 für ein Wochenende — einfach der Hammer. Fahrzeug in perfektem Zustand, Übergabe reibungslos. NextCar macht Träume wahr!" },
];

const occasions = [
  { icon: "🎂", title: "Geburtstag", text: "Mach diesen Tag unvergesslich" },
  { icon: "💍", title: "Hochzeit", text: "Anreise in Stil" },
  { icon: "🎓", title: "Abitur / Abschluss", text: "Der verdiente Lohn" },
  { icon: "💼", title: "Geschäftsreise", text: "Imponiere mit Stil" },
  { icon: "🎁", title: "Geschenkidee", text: "Das Erlebnis das bleibt" },
  { icon: "🏆", title: "Belohnung", text: "Du hast es dir verdient" },
];

function useInView(threshold = 0.15) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, visible };
}

function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const { ref, visible } = useInView();
  return (
    <section ref={ref} id={id} className={`${className} transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
      {children}
    </section>
  );
}

export default function Index() {
  const [reviewIdx, setReviewIdx] = useState(0);

  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${CARS.mclaren.img})` }}
        />
        <div className="absolute inset-0 bg-[hsl(0,0%,0%)] opacity-60" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <span className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6">
            🏎️ Deutschlandweite Auslieferung
          </span>
          <h1 className="font-display text-6xl sm:text-8xl md:text-[100px] leading-none text-[hsl(0,0%,100%)]">
            MIT NEXTCAR
          </h1>
          <h2 className="font-display text-6xl sm:text-8xl md:text-[100px] leading-none text-accent">
            FAHRSPASS PUR ERLEBEN
          </h2>
          <p className="mt-6 text-[hsl(0,0%,80%)] text-lg max-w-xl mx-auto">
            Erleben Sie Supersportwagen der Extraklasse — McLaren, BMW, Audi und mehr. Ab einem Tag. Deutschlandweit geliefert.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buchen" className="bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Jetzt buchen
            </Link>
            <Link to="/fahrzeuge" className="border-2 border-[hsl(0,0%,100%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,0%)] transition-colors">
              Fahrzeuge entdecken
            </Link>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
          <ChevronDown size={32} className="text-[hsl(0,0%,100%)]" />
        </div>
      </section>

      {/* STATS */}
      <section className="bg-accent text-accent-foreground py-6">
        <div className="container mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {["4 Fahrzeuge", "700+ PS", "Ab 1 Tag", "Deutschlandweit"].map((s) => (
            <div key={s} className="font-display text-xl md:text-2xl">{s}</div>
          ))}
        </div>
      </section>

      {/* ANGEBOT */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">UNSER ANGEBOT</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/2.jpg", title: "Kurzzeitmiete", text: "Ab einem Tag. Perfekt für ein unvergessliches Erlebnis.", badge: "Ab 1 Tag" },
              { img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/3.jpg", title: "Langzeitmiete", text: "Bis zu 2 Wochen, damit Sie das Auto richtig kennenlernen können.", badge: "Bis 2 Wochen" },
              { img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/4.jpg", title: "Instruktorfahrt", text: "Eine halbe oder ganze Stunde im Sportwagen. Ideal zum Verschenken.", badge: "Geschenkidee 🎁" },
            ].map((c) => (
              <div key={c.title} className="bg-card rounded-sm overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="aspect-video overflow-hidden">
                  <img src={c.img} alt={c.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs font-semibold bg-accent text-accent-foreground px-3 py-1 rounded-full">{c.badge}</span>
                  <h3 className="font-display text-2xl text-foreground mt-3">{c.title}</h3>
                  <p className="text-sm text-muted-foreground mt-2">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* FAHRZEUGE */}
      <Section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-2">UNSERE FAHRZEUGE</h2>
          <p className="text-center text-muted-foreground mb-12">Handverlesene Supersportwagen für Ihr unvergessliches Erlebnis.</p>
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(CARS).map(([key, car]) => (
              <div key={key} className="bg-card rounded-sm overflow-hidden group hover:shadow-xl transition-shadow">
                <div className="relative aspect-video overflow-hidden">
                  <img src={car.img} alt={car.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-sm">{car.badge}</span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-3xl text-foreground">{car.title}</h3>
                  <p className="text-sm text-accent font-medium mt-1">{car.specs}</p>
                  <p className="font-display text-xl text-foreground mt-2">{car.price}</p>
                  <p className="text-sm text-muted-foreground mt-2">{car.text}</p>
                  <Link
                    to={car.link}
                    className="mt-4 inline-block bg-accent text-accent-foreground px-6 py-2.5 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
                  >
                    {(car as any).btnText || "Jetzt buchen"}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* WARUM WIR */}
      <Section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">WARUM NEXTCAR</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: "🚚", title: "Deutschlandweite Auslieferung", text: "Wir sitzen in Erfurt, im Herzen Deutschlands und liefern in das gesamte Land." },
              { icon: "🔄", title: "Vollständige Flexibilität", text: "Egal wann und wo — Sonderwünsche werden bei uns möglich gemacht." },
              { icon: "📈", title: "Stetig wachsendes Sortiment", text: "Wir erweitern unsere Flotte laufend durch neue spannende Fahrzeuge." },
              { icon: "👑", title: "Exklusive Mitgliedschaftsprogramme", text: "Spezielle Angebote für treue Kunden. Details auf Anfrage." },
            ].map((f) => (
              <div key={f.title} className="bg-card p-6 rounded-sm border-l-4 border-accent">
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="font-display text-xl text-foreground">{f.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{f.text}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* BEWERTUNGEN */}
      <Section className="py-20 bg-secondary" id="bewertungen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">DAS SAGEN UNSERE KUNDEN</h2>
          <p className="text-accent mb-8">⭐⭐⭐⭐⭐ 5.0 auf Google</p>
          <div className="max-w-2xl mx-auto bg-card p-8 rounded-sm shadow-lg min-h-[200px] flex flex-col justify-center">
            <p className="text-accent mb-2">⭐⭐⭐⭐⭐</p>
            <p className="text-foreground italic">"{reviews[reviewIdx].text}"</p>
            <p className="text-muted-foreground mt-4 font-medium">— {reviews[reviewIdx].name}</p>
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {reviews.map((_, i) => (
              <button
                key={i}
                onClick={() => setReviewIdx(i)}
                className={`w-3 h-3 rounded-full transition-colors ${i === reviewIdx ? "bg-accent" : "bg-muted-foreground"}`}
              />
            ))}
          </div>
          <a
            href="https://www.google.com/maps/place/NextCar"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-6 text-accent text-sm font-medium hover:underline"
          >
            Alle Bewertungen auf Google ansehen →
          </a>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">NEXTCAR AUF INSTAGRAM</h2>
          <p className="text-muted-foreground mb-8">@nextcar_exklusiv</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="aspect-square bg-card rounded-sm flex flex-col items-center justify-center border border-muted text-muted-foreground">
                <span className="text-3xl mb-2">📸</span>
                <span className="text-xs">Instagram Foto {i + 1}</span>
              </div>
            ))}
          </div>
          <a
            href="https://www.instagram.com/nextcar_exklusiv/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-8 bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Auf Instagram folgen →
          </a>
        </div>
      </Section>

      {/* ANLÄSSE */}
      <Section className="py-20 bg-secondary">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">DER PERFEKTE ANLASS</h2>
          <p className="text-muted-foreground mb-12">Für jeden besonderen Moment der richtige Wagen.</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {occasions.map((o) => (
              <div key={o.title} className="bg-card p-6 rounded-sm hover:border-accent border border-transparent transition-colors group cursor-pointer">
                <span className="text-3xl">{o.icon}</span>
                <h3 className="font-display text-xl text-foreground mt-2">{o.title}</h3>
                <p className="text-xs text-muted-foreground mt-1">{o.text}</p>
              </div>
            ))}
          </div>
          <Link to="/anlaesse" className="inline-block mt-8 text-accent font-semibold hover:underline">
            Alle Anlässe entdecken →
          </Link>
        </div>
      </Section>

      {/* LIEFERUNG */}
      <Section className="py-20 bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)]">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-4xl md:text-5xl mb-4">WIR KOMMEN ZU DIR</h2>
            <p className="text-[hsl(0,0%,60%)] mb-6">Egal wo in Deutschland — wir liefern das Fahrzeug direkt zu dir.</p>
            <ul className="space-y-3 text-sm">
              {["Lieferung deutschlandweit", "Persönliche Fahrzeugübergabe", "Einweisung vor Ort", "Flexible Übergabezeiten"].map((b) => (
                <li key={b} className="flex items-center gap-2">
                  <span className="text-accent">✓</span> {b}
                </li>
              ))}
            </ul>
            <Link to="/kontakt" className="mt-8 inline-block bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Jetzt anfragen
            </Link>
          </div>
          <div className="flex items-center justify-center">
            <div className="w-64 h-80 border-2 border-accent rounded-sm flex items-center justify-center text-accent font-display text-xl">
              🇩🇪 Erfurt
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl mb-4">BEREIT FÜR DAS ERLEBNIS?</h2>
          <p className="mb-8">Ruf uns an oder buche direkt online.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="tel:00491603090886" className="bg-[hsl(0,0%,100%)] text-[hsl(0,0%,4%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              📞 0160 3090886
            </a>
            <Link to="/buchen" className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Jetzt online buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
