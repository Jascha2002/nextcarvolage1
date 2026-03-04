import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Welche Voraussetzungen gibt es?", a: "Mindestalter 25 Jahre, gültiger Führerschein Klasse B, mindestens 3 Jahre Fahrpraxis." },
  { q: "Wie funktioniert die Lieferung?", a: "Wir liefern das Fahrzeug deutschlandweit direkt zu Ihrer Wunschadresse. Lieferkosten werden individuell berechnet." },
  { q: "Welche Versicherung ist inbegriffen?", a: "Alle Fahrzeuge sind vollkaskoversichert. Details werden bei der Buchungsbestätigung mitgeteilt." },
  { q: "Wie lange im Voraus muss ich buchen?", a: "Wir empfehlen mindestens 3-7 Tage im Voraus. Kurzfristige Buchungen auf Anfrage möglich." },
  { q: "Kann ich das Fahrzeug selbst fahren?", a: "Ja — bei Kurz- und Langzeitmiete. Bei der Instruktorfahrt fährt unser Profi." },
  { q: "Gibt es eine Kaution?", a: "Ja, eine Kaution wird bei Übergabe hinterlegt. Höhe abhängig vom Fahrzeug. Wird nach Rückgabe vollständig erstattet." },
  { q: "Was passiert bei einem Schaden?", a: "Kontaktieren Sie uns sofort unter 0160 3090886. Wir regeln alles weitere für Sie." },
  { q: "Kann ich als Geschenk buchen?", a: "Ja — Instruktorfahrten eignen sich perfekt als Geschenkidee für jeden Anlass." },
];

export default function FAQ() {
  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">HÄUFIGE FRAGEN</h1>
      </section>
      <section className="container mx-auto px-4 py-16 max-w-3xl">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="bg-card rounded-sm border-none px-6">
              <AccordionTrigger className="font-display text-xl text-foreground hover:text-accent hover:no-underline">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </div>
  );
}
