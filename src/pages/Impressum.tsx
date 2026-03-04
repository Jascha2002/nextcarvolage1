export default function Impressum() {
  return (
    <div className="pt-[70px] min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-4xl text-foreground mb-8">IMPRESSUM</h1>
        <div className="prose prose-sm text-muted-foreground space-y-4">
          <h2 className="font-display text-2xl text-foreground">Angaben gemäß § 5 TMG</h2>
          <p>NextCar<br />Meyfartstraße 19<br />99085 Erfurt</p>
          <h2 className="font-display text-2xl text-foreground">Kontakt</h2>
          <p>Telefon: 0160 3090886<br />E-Mail: info@nextcar-exklusiv.de</p>
          <h2 className="font-display text-2xl text-foreground">Umsatzsteuer-ID</h2>
          <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: [Auf Anfrage]</p>
          <h2 className="font-display text-2xl text-foreground">Streitschlichtung</h2>
          <p>Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit: https://ec.europa.eu/consumers/odr/. Unsere E-Mail-Adresse finden Sie oben im Impressum. Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.</p>
        </div>
      </div>
    </div>
  );
}
