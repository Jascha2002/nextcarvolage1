import { Link } from "react-router-dom";

const occasions = [
  { icon: "🎂", title: "Geburtstag", text: "Mach diesen Tag unvergesslich mit einem Supersportwagen. Das perfekte Geburtstagsgeschenk für PS-Liebhaber." },
  { icon: "💍", title: "Hochzeit", text: "Anreise in Stil — mit einem exklusiven Sportwagen zum schönsten Tag Ihres Lebens." },
  { icon: "🎓", title: "Abitur / Abschluss", text: "Der verdiente Lohn für jahrelange harte Arbeit. Feiern Sie den Abschluss gebührend." },
  { icon: "💼", title: "Geschäftsreise", text: "Imponiere mit Stil — beim Kundentermin oder auf dem Weg zur Messe." },
  { icon: "🎁", title: "Geschenkidee", text: "Das Erlebnis das bleibt — verschenken Sie unvergessliche Momente." },
  { icon: "🎉", title: "Junggesellenabschied", text: "Der letzte Abend in Style — ein unvergessliches Erlebnis für die ganze Gruppe." },
];

export default function Anlaesse() {
  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">DER PERFEKTE ANLASS</h1>
        <p className="text-[hsl(0,0%,60%)] mt-4 max-w-lg mx-auto">Für jeden besonderen Moment der richtige Wagen.</p>
      </section>
      <section className="container mx-auto px-4 py-16 space-y-8">
        {occasions.map((o) => (
          <div key={o.title} className="bg-card rounded-sm p-8 flex flex-col md:flex-row items-center gap-6 border-l-4 border-accent hover:shadow-xl transition-shadow">
            <span className="text-5xl">{o.icon}</span>
            <div className="flex-1">
              <h2 className="font-display text-3xl text-foreground">{o.title}</h2>
              <p className="text-muted-foreground mt-2">{o.text}</p>
            </div>
            <Link to="/buchen" className="bg-accent text-accent-foreground px-6 py-2.5 font-semibold rounded-sm hover:opacity-90 transition-opacity whitespace-nowrap">
              Jetzt buchen
            </Link>
          </div>
        ))}
      </section>
    </div>
  );
}
