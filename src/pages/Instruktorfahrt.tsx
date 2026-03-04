import { Link } from "react-router-dom";

export default function Instruktorfahrt() {
  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">INSTRUKTORFAHRT</h1>
        <p className="text-[hsl(0,0%,60%)] mt-4 max-w-xl mx-auto">30 oder 60 Minuten im Supersportwagen — mit professioneller Einweisung.</p>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <div className="bg-card p-8 rounded-sm border-l-4 border-accent mb-12">
            <h2 className="font-display text-3xl text-foreground mb-4">Was ist eine Instruktorfahrt?</h2>
            <p className="text-muted-foreground">Sie fahren NICHT selbst — unser professioneller Fahrer nimmt Sie mit auf eine unvergessliche Fahrt. Lehnen Sie sich zurück und genießen Sie pure Performance.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { duration: "30 Minuten", desc: "Perfekt für einen ersten Eindruck. Adrenalin pur auf ausgewählten Strecken." },
              { duration: "60 Minuten", desc: "Das volle Erlebnis. Mehr Zeit, mehr Strecke, mehr Fahrspaß." },
            ].map((opt) => (
              <div key={opt.duration} className="bg-card p-8 rounded-sm text-center border-2 border-transparent hover:border-accent transition-colors">
                <h3 className="font-display text-3xl text-accent">{opt.duration}</h3>
                <p className="text-muted-foreground mt-4">{opt.desc}</p>
              </div>
            ))}
          </div>

          <div className="bg-card p-8 rounded-sm text-center">
            <h2 className="font-display text-3xl text-foreground mb-2">Die perfekte Geschenkidee 🎁</h2>
            <p className="text-muted-foreground mb-6">Ideal für: Geburtstag, Weihnachten, Jubiläum, Abschluss</p>
            <Link to="/buchen" className="bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Jetzt buchen
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
