import { Link } from "react-router-dom";
import { useState } from "react";
import { Star } from "lucide-react";

const reviews = [
  { name: "Alex Alex", date: "vor 5 Monaten", text: "Volle Punktzahl! Mein Sohn und ich haben heute den McLaren 720s testen dürfen. Roy ist super nett und hat 2 Runden mit meinem Junior gedreht. Ich kann jedem nur empfehlen, eine volle Stunde zu buchen. Am besten direkt bei Next Car — dort ist es günstiger als bei MyDay oder Schweizer! Der McLaren toppt alles.", car: "McLaren 720S" },
  { name: "Nils", date: "vor 5 Monaten", text: "Ein wirklich erstklassiges Erlebnis! Der Instrukteur war super und man konnte sich sehr gut unterhalten. Dazu gab es genügend Infos zum Auto. Kann man einfach nur weiterempfehlen. Fahrspaß pur!", car: "McLaren 720S" },
  { name: "Witus", date: "vor 7 Monaten", text: "Ein Traum auf vier Rädern – McLaren 720S! Die Fahrt war absolut überwältigend! Die Beschleunigung, das Design, der Sound – einfach pure Gänsehaut. Alles war top organisiert. 100% Weiterempfehlung!", car: "McLaren 720S" },
  { name: "Nino Grothmann", date: "vor 9 Monaten", text: "Ein unvergessliches Erlebnis! Mein Vater hat mir und meinem Bruder jeweils eine Fahrt im McLaren 720S geschenkt. Die Beschleunigung, das Fahrgefühl, der Sound – einfach atemberaubend!", car: "McLaren 720S" },
  { name: "Enrico", date: "vor 9 Monaten", text: "Zu den entstandenen Fotos meinte ein Freund nur: da geht das Grinsen von einem Ohr zum nächsten. Besten Dank an das NextCar Team für den unvergesslichen Kurz-Trip mit dem McLaren 720S.", car: "McLaren 720S" },
  { name: "Erik Schaal", date: "vor 5 Monaten", text: "Ich bin begeistert, es hat alles super geklappt, super angenehmer Beifahrer! Der McLaren ist natürlich ne Klasse für sich — ich fahre selbst ne Corvette aber das hier übertrifft es.", car: "McLaren 720S" },
  { name: "Henrik Tausche", date: "vor 9 Monaten", text: "Heute dachte ich mir, befrei doch mal 720 Pferde! Bei schönstem Wetter gab es den ein oder anderen Galopp rund um Erfurt. Roy unterstützte mich super. Klare Empfehlung, Daumen hoch!", car: "McLaren 720S" },
  { name: "Simon Seipel", date: "vor 5 Monaten", text: "Es war ein Erlebnis, welches ich so schnell nicht vergessen werde! Abgesehen von der geballten Power des McLaren 720S war der Beifahrer super. Ich kann es nur jedem empfehlen!", car: "McLaren 720S" },
  { name: "Norman Kutzschke", date: "vor einem Jahr", text: "Einmal McLaren selber fahren — dieser Traum ging für mich in Erfüllung. Es war wirklich ein tolles Erlebnis. Sehr professionelle Betreuung und alles sehr fair. Gern wieder!", car: "McLaren 720S" },
  { name: "Moritz Hunger", date: "vor einem Jahr", text: "Ich durfte meinen lang ersehnten Traum erfüllen und den BMW M3 fahren! Die Betreuung von Robert während der Fahrt war einfach spitze! Man merkt dem Personal an dass der Spaß des Kunden absolut an erster Stelle steht.", car: "BMW M3" },
  { name: "Julian Gerth", date: "vor 7 Monaten", text: "Ich durfte den McLaren 720S fahren — ich war noch nie sprachlos als ich ein Auto bewegt habe, hier schon. Unglaublicher Sound, atemberaubende Beschleunigung. Danke an Roy!", car: "McLaren 720S" },
  { name: "Benito König", date: "vor 10 Monaten", text: "Ein wirklich tolles Erlebnis und ein unvergesslicher Tag mit dem McLaren 720S. Es war alles perfekt geplant von Anfang bis Ende. Ich kann es jedem nur weiterempfehlen.", car: "McLaren 720S" },
  { name: "Evgenia Airich", date: "vor 6 Monaten", text: "Wir haben bei NextCar einen BMW M3 für einen Tag gemietet — beste Entscheidung! Alles unkompliziert. Man merkt die Geschwindigkeit nur weil die anderen im Rückspiegel schnell klein werden.", car: "BMW M3" },
  { name: "Steffen Löffler", date: "vor 6 Monaten", text: "Ich hatte heute einen unvergesslichen Tag mit dem M3 Touring! Perfekte Kommunikation, unkomplizierte Abwicklung und super nette Leute! Ich kann NextCar Exklusiv nur empfehlen!", car: "BMW M3" },
  { name: "David Trautmann", date: "vor einem Jahr", text: "Ich habe mir mit NextCar einen Traum erfüllt. Alles ging sehr seriös und reibungslos vonstatten. Ich kann es absolut nur empfehlen und würde gern noch mehr Sterne geben.", car: "McLaren 720S" },
  { name: "Katja Preßler", date: "vor einem Jahr", text: "Vielen Dank für die tolle Möglichkeit! Einfach Fahrspaß pur — immer wieder mit euch. Top Betreuung und Einweisung. Der RS3 hat einfach nur Spaß gemacht. Das nächste Mal der McLaren!", car: "Audi RS3" },
  { name: "Pro-Com GmbH", date: "vor 5 Monaten", text: "Es war ein unvergessliches Erlebnis. Roy hat alle unsere Wünsche erfüllt. Mein Ziel war die 340 zu erreichen — dieser Wunsch wurde mir ermöglicht. Ihr seid ein Traum!", car: "McLaren 720S" },
  { name: "Daniel", date: "vor 8 Monaten", text: "Den 14.06.25 bei schönstem Wetter werde ich nicht mehr vergessen — die eigene Fahrt im McLaren 720S war der absolute Hammer! Das von Roy gemachte Video treibt mir nach wie vor das breite Grinsen ins Gesicht.", car: "McLaren 720S" },
  { name: "Johannes Bretzel", date: "vor 9 Monaten", text: "Ein unglaubliches Erlebnis mit dem McLaren 720S! Ich buche auf jeden Fall wieder — dann direkt über NextCar statt über Drittanbieter. Absolute Empfehlung!", car: "McLaren 720S" },
  { name: "Katja Böhme", date: "vor einem Jahr", text: "Ich durfte in 3 der Autos mitfahren — Audi RS3, BMW M3 und McLaren 720S. Als Frau die sich eigentlich wenig für Autos interessiert war das der Wahnsinn. Ich bin mit Freudentränen ausgestiegen!", car: "Alle Fahrzeuge" },
  { name: "Marina Kreutzer", date: "vor einem Jahr", text: "Von der ersten Anfrage bis zur Rückgabe alles unfassbar unkompliziert. Wir haben den M3 ausgeliehen für einen Tag. Fairer Preis, tolle Kommunikation — gern wieder!", car: "BMW M3" },
  { name: "Lucas Kraus", date: "vor einem Jahr", text: "Vielen Dank an das super nette Team von NextCar! Durfte heute den McLaren 720S fahren — es war der Hammer. Die Einweisung war sehr professionell. Würde ich jederzeit wieder machen!", car: "McLaren 720S" },
  { name: "Jacqueline Weiland", date: "vor einem Jahr", text: "Mein Sohn wollte unbedingt mal in einem Sportwagen mitfahren. Dieser Traum wurde an seinem 11. Geburtstag erfüllt. Sehr netter Kontakt und super Umgang mit meinem Sohn.", car: "McLaren 720S" },
  { name: "Ramona Lindner", date: "vor einem Jahr", text: "Endlich habe ich meinen Traumwagen fahren dürfen. Habe den M3 für ein Wochenende gemietet — es war der Wahnsinn, unbeschreibliches Auto. Tolles Team, super Abwicklung!", car: "BMW M3" },
  { name: "Lea Tesch", date: "vor 8 Monaten", text: "Es war ein tolles Erlebnis das auf jeden Fall in Erinnerung bleibt — jederzeit wieder! Roy hat während der Fahrt Bilder und Videos gemacht und war super locker drauf.", car: "McLaren 720S" },
];

const allCars = ["Alle", "McLaren 720S", "BMW M3", "Audi RS3", "Alle Fahrzeuge"];

const stats = [
  { value: "5.0", label: "Google Bewertung" },
  { value: "35+", label: "Bewertungen" },
  { value: "100%", label: "Weiterempfehlung" },
  { value: "0", label: "Beschwerden" },
];

export default function Bewertungen() {
  const [filter, setFilter] = useState("Alle");

  const filtered = filter === "Alle" 
    ? reviews 
    : reviews.filter(r => r.car === filter);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="py-20 bg-secondary text-center">
        <div className="container mx-auto px-4">
          <h1 className="font-display text-5xl md:text-7xl text-foreground mb-4">KUNDENBEWERTUNGEN</h1>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            Echte Erfahrungen unserer Kunden — jede einzelne Bewertung stammt von Google und ist zu 100% authentisch.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto mb-8">
            {stats.map(s => (
              <div key={s.label} className="bg-card p-4 rounded-sm border-t-2 border-accent">
                <p className="font-display text-4xl text-accent">{s.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{s.label}</p>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={24} className="fill-accent text-accent" />
            ))}
          </div>
          <p className="text-muted-foreground text-sm">Durchschnitt aus 35+ Google-Bewertungen</p>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 border-b border-border sticky top-[70px] bg-background z-30">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap gap-2 justify-center">
            {allCars.filter(c => c !== "Alle Fahrzeuge").map(car => (
              <button
                key={car}
                onClick={() => setFilter(car)}
                className={`px-4 py-2 rounded-sm text-sm font-medium transition-colors ${
                  filter === car
                    ? "bg-accent text-accent-foreground"
                    : "bg-card text-foreground hover:bg-accent/10"
                }`}
              >
                {car === "Alle" ? "Alle Fahrzeuge" : car}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <p className="text-muted-foreground text-sm mb-8 text-center">
            {filtered.length} Bewertung{filtered.length !== 1 ? "en" : ""} {filter !== "Alle" ? `für ${filter}` : "insgesamt"}
          </p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filtered.map((r, i) => (
              <div
                key={i}
                className="bg-card p-6 rounded-sm border border-border hover:border-accent transition-colors group"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} className="fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground text-sm leading-relaxed italic mb-4">"{r.text}"</p>
                <div className="flex items-center justify-between pt-3 border-t border-border">
                  <div>
                    <p className="text-foreground font-semibold text-sm">{r.name}</p>
                    <p className="text-muted-foreground text-xs">{r.date}</p>
                  </div>
                  <span className="text-xs bg-secondary text-muted-foreground px-2 py-1 rounded-sm">{r.car}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Google CTA */}
      <section className="py-16 bg-accent text-accent-foreground text-center">
        <div className="container mx-auto px-4">
          <h2 className="font-display text-4xl md:text-5xl mb-4">ÜBERZEUGE DICH SELBST</h2>
          <p className="mb-8 max-w-lg mx-auto">Lies alle Bewertungen direkt auf Google — oder erlebe es selbst.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="https://www.google.com/maps/place/NextCar+Exklusiv/"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[hsl(0,0%,100%)] text-[hsl(0,0%,4%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Alle Google Bewertungen →
            </a>
            <Link
              to="/buchen"
              className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
            >
              Jetzt buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
