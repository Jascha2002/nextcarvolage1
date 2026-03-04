import { Link } from "react-router-dom";

const gutscheinCards = [
  {
    icon: "🏎️",
    title: "Instruktorfahrt — 30 Minuten",
    text: "30 Minuten im McLaren 720S mit professionellem Instruktor Roy. Ideal als Geburtstagsgeschenk.",
    badge: "Bestseller",
    price: "Preis auf Anfrage",
  },
  {
    icon: "⚡",
    title: "Instruktorfahrt — 60 Minuten",
    text: "Die volle Stunde — auch über die Autobahn. Das ultimative Erlebnis als Geschenk.",
    badge: "Empfohlen",
    price: "Preis auf Anfrage",
  },
  {
    icon: "🔑",
    title: "Wunschfahrzeug mieten",
    text: "Individueller Gutschein für die Miete eines Wunschfahrzeugs. Betrag und Fahrzeug frei wählbar.",
    badge: "Individuell",
    price: "Wunschbetrag",
  },
];

const whyPoints = [
  { icon: "🎯", text: "Unvergessliches Erlebnis statt unnötiger Geschenke" },
  { icon: "📱", text: "Schnell und unkompliziert anfragen" },
  { icon: "📅", text: "Terminwahl flexibel nach Absprache" },
  { icon: "🚗", text: "Für jeden Autobegeisterten das perfekte Geschenk" },
];

const occasions = [
  "🎂 Geburtstag",
  "🎓 Abitur",
  "💍 Hochzeit",
  "🏆 Jubiläum",
  "🎄 Weihnachten",
  "👨‍👦 Vatertag",
  "💝 Valentinstag",
];

const giftReviews = [
  {
    name: "Nino Grothmann",
    text: "Mein Vater hat mir und meinem Bruder jeweils eine Fahrt im McLaren 720S geschenkt — ein Geschenk, das wir nie vergessen werden!",
  },
  {
    name: "Jacqueline Weiland",
    text: "Mein Sohn wollte unbedingt mal in einem Sportwagen mitfahren. Dieser Traum wurde an seinem 11. Geburtstag erfüllt — sehr empfehlenswert!",
  },
  {
    name: "Enrico",
    text: "Besten Dank an meine Family für das tolle Geburtstagsgeschenk! Hat alles reibungslos geklappt!",
  },
];

export default function Gutschein() {
  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="bg-background py-20 text-center border-b border-accent">
        <h1 className="font-display text-5xl md:text-7xl text-foreground">
          DAS PERFEKTE GESCHENK
        </h1>
        <p className="text-muted-foreground mt-3 text-lg max-w-2xl mx-auto px-4">
          Schenke ein unvergessliches Erlebnis — einen NextCar Gutschein für die Instruktorfahrt oder Fahrzeugmiete.
        </p>
      </section>

      {/* Gutschein Cards */}
      <section className="container mx-auto px-4 py-20">
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {gutscheinCards.map((card) => (
            <div
              key={card.title}
              className="bg-card rounded-sm border-t-4 border-accent p-8 flex flex-col text-left hover:shadow-xl transition-shadow group"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-display text-5xl text-accent/20 group-hover:text-accent/40 transition-colors">{card.number}</span>
                <span className="bg-accent text-accent-foreground text-xs font-bold px-3 py-1 rounded-full">
                  {card.badge}
                </span>
              </div>
              <h3 className="font-display text-2xl text-foreground mb-3">{card.title}</h3>
              <p className="text-sm text-muted-foreground mb-4 flex-1">{card.text}</p>
              <p className="font-display text-xl text-accent mb-6">{card.price}</p>
              <Link
                to="/kontakt"
                className="w-full bg-accent text-accent-foreground py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity text-center block"
              >
                Jetzt anfragen
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* Why Section */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">
            WARUM EIN NEXTCAR GUTSCHEIN?
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {whyPoints.map((p, i) => (
              <div key={p.title} className="bg-card p-6 rounded-sm border-l-4 border-accent">
                <span className="font-display text-3xl text-accent/20 block mb-2">0{i + 1}</span>
                <h3 className="font-display text-lg text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Occasions */}
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-10">
            PERFEKT FÜR JEDEN ANLASS
          </h2>
          <div className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {occasions.map((o) => (
              <span
                key={o}
                className="bg-accent text-accent-foreground px-5 py-2.5 rounded-full text-sm font-semibold"
              >
                {o}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Gift Reviews */}
      <section className="py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl text-center text-foreground mb-12">
            DAS SAGEN BESCHENKTE
          </h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {giftReviews.map((r) => (
              <div key={r.name} className="bg-card p-6 rounded-sm border-t-4 border-accent">
                <p className="text-accent mb-2">⭐⭐⭐⭐⭐</p>
                <p className="text-foreground italic text-sm">"{r.text}"</p>
                <p className="text-muted-foreground mt-4 font-medium text-sm">— {r.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl mb-4">JETZT GUTSCHEIN ANFRAGEN</h2>
          <p className="mb-8">Wir melden uns innerhalb von 24 Stunden.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:00491603090886"
              className="bg-[hsl(0,0%,100%)] text-[hsl(0,0%,4%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              📞 0160 3090886
            </a>
            <Link
              to="/kontakt"
              className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Gutschein anfragen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
