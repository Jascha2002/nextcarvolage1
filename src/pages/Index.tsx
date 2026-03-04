import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import insta1 from "@/assets/instagram/insta-1.jpg";
import insta2 from "@/assets/instagram/insta-2.jpg";
import insta3 from "@/assets/instagram/insta-3.jpg";
import insta4 from "@/assets/instagram/insta-4.jpg";
import insta5 from "@/assets/instagram/insta-5.jpg";
import insta6 from "@/assets/instagram/insta-6.jpg";

const instaImages = [insta1, insta2, insta3, insta4, insta5, insta6];

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
  { name: "Alex Alex", date: "vor 5 Monaten", text: "Volle Punktzahl! Mein Sohn und ich haben heute den McLaren 720s testen dürfen. Roy ist super nett und hat 2 Runden mit meinem Junior gedreht. Ich kann jedem nur empfehlen, eine volle Stunde zu buchen. Am besten direkt bei Next Car — dort ist es günstiger als bei MyDay oder Schweizer! Der McLaren toppt alles." },
  { name: "Nils", date: "vor 5 Monaten", text: "Ein wirklich erstklassiges Erlebnis! Der Instrukteur war super und man konnte sich sehr gut unterhalten. Dazu gab es genügend Infos zum Auto. Kann man einfach nur weiterempfehlen. Fahrspaß pur!" },
  { name: "Witus", date: "vor 7 Monaten", text: "Ein Traum auf vier Rädern – McLaren 720S! Die Fahrt war absolut überwältigend! Die Beschleunigung, das Design, der Sound – einfach pure Gänsehaut. Alles war top organisiert. 100% Weiterempfehlung!" },
  { name: "Nino Grothmann", date: "vor 9 Monaten", text: "Ein unvergessliches Erlebnis! Mein Vater hat mir und meinem Bruder jeweils eine Fahrt im McLaren 720S geschenkt. Die Beschleunigung, das Fahrgefühl, der Sound – einfach atemberaubend!" },
  { name: "Enrico", date: "vor 9 Monaten", text: "Zu den entstandenen Fotos meinte ein Freund nur: da geht das Grinsen von einem Ohr zum nächsten. Besten Dank an das NextCar Team für den unvergesslichen Kurz-Trip mit dem McLaren 720S." },
  { name: "Erik Schaal", date: "vor 5 Monaten", text: "Ich bin begeistert, es hat alles super geklappt, super angenehmer Beifahrer! Der McLaren ist natürlich ne Klasse für sich — ich fahre selbst ne Corvette aber das hier übertrifft es." },
  { name: "Henrik Tausche", date: "vor 9 Monaten", text: "Heute dachte ich mir, befrei doch mal 720 Pferde! Bei schönstem Wetter gab es den ein oder anderen Galopp rund um Erfurt. Roy unterstützte mich super. Klare Empfehlung, Daumen hoch!" },
  { name: "Simon Seipel", date: "vor 5 Monaten", text: "Es war ein Erlebnis, welches ich so schnell nicht vergessen werde! Abgesehen von der geballten Power des McLaren 720S war der Beifahrer super. Ich kann es nur jedem empfehlen!" },
  { name: "Norman Kutzschke", date: "vor einem Jahr", text: "Einmal McLaren selber fahren — dieser Traum ging für mich in Erfüllung. Es war wirklich ein tolles Erlebnis. Sehr professionelle Betreuung und alles sehr fair. Gern wieder!" },
  { name: "Moritz Hunger", date: "vor einem Jahr", text: "Ich durfte meinen lang ersehnten Traum erfüllen und den BMW M3 fahren! Die Betreuung von Robert während der Fahrt war einfach spitze! Man merkt dem Personal an dass der Spaß des Kunden absolut an erster Stelle steht." },
  { name: "Julian Gerth", date: "vor 7 Monaten", text: "Ich durfte den McLaren 720S fahren — ich war noch nie sprachlos als ich ein Auto bewegt habe, hier schon. Unglaublicher Sound, atemberaubende Beschleunigung. Danke an Roy!" },
  { name: "Benito König", date: "vor 10 Monaten", text: "Ein wirklich tolles Erlebnis und ein unvergesslicher Tag mit dem McLaren 720S. Es war alles perfekt geplant von Anfang bis Ende. Ich kann es jedem nur weiterempfehlen." },
  { name: "Evgenia Airich", date: "vor 6 Monaten", text: "Wir haben bei NextCar einen BMW M3 für einen Tag gemietet — beste Entscheidung! Alles unkompliziert. Man merkt die Geschwindigkeit nur weil die anderen im Rückspiegel schnell klein werden." },
  { name: "Steffen Löffler", date: "vor 6 Monaten", text: "Ich hatte heute einen unvergesslichen Tag mit dem M3 Touring! Perfekte Kommunikation, unkomplizierte Abwicklung und super nette Leute! Ich kann NextCar Exklusiv nur empfehlen!" },
  { name: "David Trautmann", date: "vor einem Jahr", text: "Ich habe mir mit NextCar einen Traum erfüllt. Alles ging sehr seriös und reibungslos vonstatten. Ich kann es absolut nur empfehlen und würde gern noch mehr Sterne geben." },
  { name: "Katja Preßler", date: "vor einem Jahr", text: "Vielen Dank für die tolle Möglichkeit! Einfach Fahrspaß pur — immer wieder mit euch. Top Betreuung und Einweisung. Der RS3 hat einfach nur Spaß gemacht. Das nächste Mal der McLaren!" },
  { name: "Pro-Com GmbH", date: "vor 5 Monaten", text: "Es war ein unvergessliches Erlebnis. Roy hat alle unsere Wünsche erfüllt. Mein Ziel war die 340 zu erreichen — dieser Wunsch wurde mir ermöglicht. Ihr seid ein Traum!" },
  { name: "Daniel", date: "vor 8 Monaten", text: "Den 14.06.25 bei schönstem Wetter werde ich nicht mehr vergessen — die eigene Fahrt im McLaren 720S war der absolute Hammer! Das von Roy gemachte Video treibt mir nach wie vor das breite Grinsen ins Gesicht." },
  { name: "Johannes Bretzel", date: "vor 9 Monaten", text: "Ein unglaubliches Erlebnis mit dem McLaren 720S! Ich buche auf jeden Fall wieder — dann direkt über NextCar statt über Drittanbieter. Absolute Empfehlung!" },
  { name: "Katja Böhme", date: "vor einem Jahr", text: "Ich durfte in 3 der Autos mitfahren — Audi RS3, BMW M3 und McLaren 720S. Als Frau die sich eigentlich wenig für Autos interessiert war das der Wahnsinn. Ich bin mit Freudentränen ausgestiegen!" },
  { name: "Marina Kreutzer", date: "vor einem Jahr", text: "Von der ersten Anfrage bis zur Rückgabe alles unfassbar unkompliziert. Wir haben den M3 ausgeliehen für einen Tag. Fairer Preis, tolle Kommunikation — gern wieder!" },
  { name: "Lucas Kraus", date: "vor einem Jahr", text: "Vielen Dank an das super nette Team von NextCar! Durfte heute den McLaren 720S fahren — es war der Hammer. Die Einweisung war sehr professionell. Würde ich jederzeit wieder machen!" },
  { name: "Jacqueline Weiland", date: "vor einem Jahr", text: "Mein Sohn wollte unbedingt mal in einem Sportwagen mitfahren. Dieser Traum wurde an seinem 11. Geburtstag erfüllt. Sehr netter Kontakt und super Umgang mit meinem Sohn." },
  { name: "Ramona Lindner", date: "vor einem Jahr", text: "Endlich habe ich meinen Traumwagen fahren dürfen. Habe den M3 für ein Wochenende gemietet — es war der Wahnsinn, unbeschreibliches Auto. Tolles Team, super Abwicklung!" },
  { name: "Lea Tesch", date: "vor 8 Monaten", text: "Es war ein tolles Erlebnis das auf jeden Fall in Erinnerung bleibt — jederzeit wieder! Roy hat während der Fahrt Bilder und Videos gemacht und war super locker drauf." },
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
  
  
  // Hero video animation phases
  const videoRef = useRef<HTMLVideoElement>(null);
  const [heroPhase, setHeroPhase] = useState<'video' | 'black' | 'headline' | 'elements' | 'reveal' | 'done'>('video');
  const [videoCanPlay, setVideoCanPlay] = useState(false);
  const [videoFailed, setVideoFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleCanPlay = () => setVideoCanPlay(true);
    const handleError = () => setVideoFailed(true);
    const handleEnded = () => {
      // Phase 2: fade to black
      setHeroPhase('black');
      setTimeout(() => {
        // Phase 3: headline appears
        setHeroPhase('headline');
        setTimeout(() => {
          // Phase 4: remaining elements
          setHeroPhase('elements');
          setTimeout(() => {
            // Phase 5: reveal background
            setHeroPhase('reveal');
            setTimeout(() => setHeroPhase('done'), 1500);
          }, 1300); // 0.8s animation + 0.5s wait
        }, 800);
      }, 500);
    };

    video.addEventListener('canplay', handleCanPlay);
    video.addEventListener('error', handleError);
    video.addEventListener('ended', handleEnded);

    // Try autoplay
    video.play().catch(() => setVideoFailed(true));

    return () => {
      video.removeEventListener('canplay', handleCanPlay);
      video.removeEventListener('error', handleError);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  // If video fails (e.g. mobile), skip to done
  useEffect(() => {
    if (videoFailed) setHeroPhase('done');
  }, [videoFailed]);

  const showHeadline = heroPhase === 'headline' || heroPhase === 'elements' || heroPhase === 'reveal' || heroPhase === 'done';
  const showElements = heroPhase === 'elements' || heroPhase === 'reveal' || heroPhase === 'done';
  const showBgImage = heroPhase === 'reveal' || heroPhase === 'done';
  const isBlackBg = heroPhase === 'black' || heroPhase === 'headline' || heroPhase === 'elements';
  const showVideo = heroPhase === 'video';
  const isDone = heroPhase === 'done';


  return (
    <div>
      {/* HERO */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-[hsl(0,0%,0%)]">
        {/* Video */}
        <video
          ref={videoRef}
          src="/hero-video.mp4"
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
          style={{ opacity: showVideo ? 1 : 0 }}
        />

        {/* Background image - fades in during Phase 5 */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${CARS.mclaren.img})`,
            opacity: showBgImage ? 1 : 0,
            transition: isDone ? 'none' : 'opacity 1.5s ease-in-out',
          }}
        />

        {/* Dark overlay for video and final state */}
        <div
          className="absolute inset-0 transition-opacity duration-500"
          style={{
            backgroundColor: 'hsl(0,0%,0%)',
            opacity: showVideo ? 0.55 : isBlackBg ? 1 : showBgImage ? 0.6 : 1,
          }}
        />

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-4xl">
          {/* Badge */}
          <span
            className="inline-block bg-accent text-accent-foreground text-xs font-semibold px-4 py-1.5 rounded-full mb-6 transition-all duration-[800ms] ease-out"
            style={{
              opacity: showElements ? 1 : 0,
              transform: showElements ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            🏎️ Deutschlandweite Auslieferung
          </span>

          {/* Headlines */}
          <h1
            className="font-display text-6xl sm:text-8xl md:text-[100px] leading-none text-[hsl(0,0%,100%)] transition-all duration-[800ms] ease-out"
            style={{
              opacity: showHeadline ? 1 : 0,
              transform: showHeadline ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            MIT NEXTCAR
          </h1>
          <h2
            className="font-display text-6xl sm:text-8xl md:text-[100px] leading-none text-accent transition-all duration-[800ms] ease-out"
            style={{
              opacity: showHeadline ? 1 : 0,
              transform: showHeadline ? 'translateY(0)' : 'translateY(20px)',
              transitionDelay: showHeadline && !showElements ? '0.1s' : '0s',
            }}
          >
            FAHRSPASS PUR ERLEBEN
          </h2>

          {/* Subtext */}
          <p
            className="mt-6 text-[hsl(0,0%,80%)] text-lg max-w-xl mx-auto transition-all duration-[800ms] ease-out"
            style={{
              opacity: showElements ? 1 : 0,
              transform: showElements ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            Erleben Sie Supersportwagen der Extraklasse — McLaren, BMW, Audi und mehr. Ab einem Tag. Deutschlandweit geliefert.
          </p>

          {/* Buttons */}
          <div
            className="mt-8 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-[800ms] ease-out"
            style={{
              opacity: showElements ? 1 : 0,
              transform: showElements ? 'translateY(0)' : 'translateY(20px)',
            }}
          >
            <Link to="/buchen" className="bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Jetzt buchen
            </Link>
            <Link to="/fahrzeuge" className="border-2 border-[hsl(0,0%,100%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,0%)] transition-colors">
              Fahrzeuge entdecken
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow transition-all duration-[800ms] ease-out"
          style={{
            opacity: showElements ? 1 : 0,
            transform: `translateX(-50%) ${showElements ? 'translateY(0)' : 'translateY(20px)'}`,
          }}
        >
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

      {/* BEWERTUNGEN TEASER */}
      <Section className="py-20 bg-secondary" id="bewertungen">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">DAS SAGEN UNSERE KUNDEN</h2>
          <div className="flex items-center justify-center gap-3 mb-2">
            <span className="text-accent text-xl">⭐⭐⭐⭐⭐</span>
            <span className="font-display text-3xl text-foreground">5.0</span>
            <span className="text-muted-foreground">— 35+ Bewertungen auf Google</span>
          </div>
          <span className="inline-block bg-accent text-accent-foreground text-xs font-bold px-4 py-1.5 rounded-full mb-8">
            Top bewertet auf Google
          </span>

          {/* Show 3 featured reviews */}
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto mb-8">
            {reviews.slice(0, 3).map((r, i) => (
              <div key={i} className="bg-card p-6 rounded-sm border-t-4 border-accent shadow-lg text-left">
                <p className="text-accent mb-1 text-sm">⭐⭐⭐⭐⭐</p>
                <p className="text-foreground italic text-sm line-clamp-4">"{r.text}"</p>
                <div className="mt-4 pt-3 border-t border-muted">
                  <p className="text-foreground font-semibold text-sm">{r.name}</p>
                  <p className="text-muted-foreground text-xs">{r.date}</p>
                </div>
              </div>
            ))}
          </div>

          <Link
            to="/bewertungen"
            className="inline-block bg-accent text-accent-foreground px-6 py-2.5 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Alle {reviews.length} Bewertungen lesen →
          </Link>
        </div>
      </Section>

      {/* GUTSCHEIN TEASER */}
      <Section className="py-20 bg-[hsl(0,0%,4%)] relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-accent/5" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-display text-4xl md:text-5xl text-[hsl(0,0%,100%)] mb-4">VERSCHENKE EIN ERLEBNIS</h2>
              <p className="text-[hsl(0,0%,60%)] mb-6">
                Ein NextCar Gutschein ist das perfekte Geschenk für jeden Anlass — Geburtstag, Abitur, Weihnachten oder einfach so.
              </p>
              <div className="flex flex-wrap gap-2 mb-8">
                {["🎂 Geburtstag", "🎓 Abitur", "🎄 Weihnachten", "💍 Hochzeit", "👨‍👦 Vatertag"].map((o) => (
                  <span key={o} className="bg-[hsl(0,0%,12%)] text-[hsl(0,0%,80%)] px-4 py-1.5 rounded-full text-sm">{o}</span>
                ))}
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Link to="/gutschein/kaufen" className="bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity text-center">
                  Gutschein kaufen
                </Link>
                <Link to="/gutschein/einloesen" className="border-2 border-[hsl(0,0%,100%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:bg-[hsl(0,0%,100%)] hover:text-[hsl(0,0%,0%)] transition-colors text-center">
                  Gutschein einlösen
                </Link>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="bg-[hsl(0,0%,6%)] border border-[hsl(0,0%,20%)] rounded-sm p-8 max-w-xs w-full text-center relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[hsl(40,80%,50%)] to-accent" />
                <p className="font-display text-4xl text-[hsl(0,0%,100%)] tracking-wider mb-2">GUTSCHEIN</p>
                <div className="w-12 h-0.5 bg-accent mx-auto my-4" />
                <p className="text-[hsl(0,0%,50%)] text-xs font-mono mb-2">NXT-XXXX-XXXX</p>
                <p className="text-accent text-sm italic">Unvergessliches Erlebnis</p>
                <p className="text-[hsl(0,0%,30%)] text-xs mt-4">nextcar-exklusiv.de</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* INSTAGRAM */}
      <Section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-2">NEXTCAR AUF INSTAGRAM</h2>
          <p className="text-muted-foreground mb-8">@nextcar_exklusiv</p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {instaImages.map((img, i) => (
              <a key={i} href="https://www.instagram.com/nextcar_exklusiv/" target="_blank" rel="noopener noreferrer" className="aspect-square rounded-sm overflow-hidden group">
                <img src={img} alt={`NextCar Instagram ${i + 1}`} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </a>
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
