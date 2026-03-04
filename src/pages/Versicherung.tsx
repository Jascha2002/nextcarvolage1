import { Link } from "react-router-dom";

export default function Versicherung() {
  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">VERSICHERUNG & SICHERHEIT</h1>
        <p className="text-[hsl(0,0%,60%)] mt-4">Transparent und klar — alles was Sie wissen müssen.</p>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-4xl space-y-16">
        {/* Inbegriffen */}
        <div>
          <h2 className="font-display text-3xl text-foreground mb-8">Das ist inbegriffen</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              { title: "Vollkaskoversicherung", text: "Alle Fahrzeuge sind vollkaskoversichert. Sie fahren ohne versteckte Risiken." },
              { title: "Haftpflichtversicherung", text: "Gesetzlich vorgeschriebener Schutz ist selbstverständlich enthalten." },
              { title: "Pannenhilfe", text: "24/7 Pannenhilfe für alle Fahrzeuge während der Mietdauer." },
              { title: "Persönliche Einweisung", text: "Vor der Abfahrt erklären wir Ihnen alles Wichtige zum Fahrzeug." },
            ].map((item) => (
              <div key={item.title} className="bg-card p-6 rounded-sm border-l-4 border-green-500">
                <h3 className="font-display text-xl text-foreground flex items-center gap-2">✓ {item.title}</h3>
                <p className="text-sm text-muted-foreground mt-2">{item.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Kaution */}
        <div>
          <h2 className="font-display text-3xl text-foreground mb-6">Kaution</h2>
          <div className="bg-card p-6 rounded-sm border-l-4 border-accent mb-6">
            <p className="text-muted-foreground">Bei Übergabe des Fahrzeugs wird eine Kaution hinterlegt. Die genaue Höhe ist abhängig vom gewählten Fahrzeug und wird bei der Buchungsbestätigung mitgeteilt. Nach unbeschädigter Rückgabe wird die Kaution vollständig erstattet.</p>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {["McLaren 720S", "BMW M3 Competition", "Audi RS3", "Lamborghini Urus"].map((car) => (
              <div key={car} className="bg-card p-4 rounded-sm text-center">
                <p className="font-display text-lg text-foreground">{car}</p>
                <p className="text-accent text-sm mt-1">Auf Anfrage</p>
              </div>
            ))}
          </div>
        </div>

        {/* Voraussetzungen */}
        <div>
          <h2 className="font-display text-3xl text-foreground mb-6">Voraussetzungen für die Miete</h2>
          <div className="space-y-3">
            {[
              { ok: true, text: "Mindestalter: 25 Jahre" },
              { ok: true, text: "Führerschein Klasse B" },
              { ok: true, text: "Mindestens 3 Jahre Fahrpraxis" },
              { ok: true, text: "Gültiger Personalausweis oder Reisepass" },
              { ok: false, text: "Keine Fahranfänger" },
              { ok: false, text: "Keine Punkte in Flensburg (schwerwiegende)" },
            ].map((r) => (
              <div key={r.text} className="flex items-center gap-3">
                <span className={r.ok ? "text-green-500" : "text-accent"}>
                  {r.ok ? "✓" : "✗"}
                </span>
                <span className="text-foreground text-sm">{r.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Schadensfall */}
        <div>
          <h2 className="font-display text-3xl text-foreground mb-6">Was tun im Schadensfall?</h2>
          <div className="space-y-4">
            {[
              "Ruhe bewahren — niemand wurde verletzt?",
              "NextCar sofort anrufen: 0160 3090886",
              "Polizei rufen bei Fremdverschulden",
              "Fotos vom Schaden machen",
              "Wir kümmern uns um alles weitere",
            ].map((step, i) => (
              <div key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display text-lg shrink-0">{i + 1}</span>
                <p className="text-foreground text-sm pt-1.5">{step}</p>
              </div>
            ))}
          </div>
          <a href="tel:00491603090886" className="mt-8 inline-block bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
            📞 Jetzt anrufen
          </a>
        </div>
      </section>
    </div>
  );
}
