import { Link } from "react-router-dom";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const steps = [
  { icon: "📱", title: "Buchung anfragen", text: "Online buchen oder uns anrufen. Wir bestätigen Ihre Anfrage innerhalb von 24 Stunden telefonisch." },
  { icon: "✅", title: "Buchungsbestätigung", text: "Sie erhalten alle Details zur Miete — Fahrzeug, Zeitraum, Preis und alle notwendigen Infos per Telefon." },
  { icon: "🚗", title: "Fahrzeuglieferung", text: "Wir liefern das Fahrzeug direkt zu Ihrer Wunschadresse in Deutschland. Persönliche Übergabe durch unser Team." },
  { icon: "🎓", title: "Persönliche Einweisung", text: "Unser Team erklärt Ihnen alles Wichtige zum Fahrzeug vor Ort — Technik, Besonderheiten, Tipps." },
  { icon: "🏎️", title: "Ihr Erlebnis beginnt", text: "Genießen Sie Ihren Supersportwagen in vollen Zügen — unvergessliche Momente warten auf Sie." },
  { icon: "🔑", title: "Rückgabe & Kaution", text: "Fahrzeug wird gemeinsam begutachtet. Bei einwandfreier Rückgabe erhalten Sie Ihre Kaution sofort zurück." },
];

const miniFaq = [
  { q: "Wie lange dauert die Übergabe?", a: "Ca. 20-30 Minuten für Einweisung und Übergabe." },
  { q: "Kann ich das Fahrzeug selbst abholen?", a: "Ja, Abholung in Erfurt möglich. Oder wir liefern zu Ihnen." },
  { q: "Was muss ich zur Übergabe mitbringen?", a: "Führerschein, Personalausweis, hinterlegte Kaution." },
];

export default function Uebergabe() {
  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">SO FUNKTIONIERT'S</h1>
        <p className="text-[hsl(0,0%,60%)] mt-4">Von der Buchung bis zur Rückgabe — einfach, transparent, unvergesslich.</p>
      </section>

      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <div className="relative">
          <div className="absolute left-[23px] top-0 bottom-0 w-0.5 bg-accent" />
          <div className="space-y-12">
            {steps.map((s, i) => (
              <div key={i} className="relative flex gap-6">
                <div className="w-12 h-12 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display text-xl shrink-0 z-10">
                  {i + 1}
                </div>
                <div className="bg-card p-6 rounded-sm flex-1">
                  <span className="text-2xl">{s.icon}</span>
                  <h3 className="font-display text-2xl text-foreground mt-2">{s.title}</h3>
                  <p className="text-muted-foreground text-sm mt-2">{s.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mini FAQ */}
        <div className="mt-16">
          <h2 className="font-display text-3xl text-foreground mb-6">Häufige Fragen</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {miniFaq.map((f, i) => (
              <AccordionItem key={i} value={`mf-${i}`} className="bg-card rounded-sm border-none px-6">
                <AccordionTrigger className="font-display text-lg text-foreground hover:text-accent hover:no-underline">{f.q}</AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        {/* CTA */}
        <div className="mt-16 text-center bg-accent p-12 rounded-sm">
          <h2 className="font-display text-3xl text-accent-foreground mb-6">BEREIT FÜR DEIN ERLEBNIS?</h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/buchen" className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              Jetzt buchen
            </Link>
            <a href="tel:00491603090886" className="bg-[hsl(0,0%,100%)] text-[hsl(0,0%,4%)] px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
              📞 Anrufen
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
