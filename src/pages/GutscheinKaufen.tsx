import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, ChevronRight } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

type Experience = "instruktor30" | "instruktor60" | "selbstfahren" | null;
type Vehicle = "McLaren 720S" | "BMW M3" | "Audi RS3" | "Lamborghini Urus" | null;

const experiences = [
  {
    id: "instruktor30" as const,
    title: "Instruktorfahrt 30 Minuten",
    text: "30 Minuten McLaren 720S mit professionellem Instruktor Roy. Stadtfahrt inklusive.",
    badge: "Bestseller ⭐",
    price: "Preis auf Anfrage",
  },
  {
    id: "instruktor60" as const,
    title: "Instruktorfahrt 60 Minuten",
    text: "Die volle Stunde — Stadt und Autobahn. Bis zu 300 km/h möglich.",
    badge: "Empfohlen 🔥",
    price: "Preis auf Anfrage",
  },
  {
    id: "selbstfahren" as const,
    title: "Fahrzeug selber fahren",
    text: "1 Tag selbst fahren — McLaren 720S, BMW M3 oder Audi RS3. Wunschfahrzeug wählbar.",
    badge: "Individuell",
    price: "Preis auf Anfrage",
  },
];

const vehicles: Vehicle[] = ["McLaren 720S", "BMW M3", "Audi RS3", "Lamborghini Urus"];

function GutscheinPreview({ experience, vehicle, recipientName }: { experience: Experience; vehicle: Vehicle; recipientName: string }) {
  const expLabel = experiences.find((e) => e.id === experience)?.title || "—";
  return (
    <div className="bg-[hsl(0,0%,6%)] border border-[hsl(0,0%,20%)] rounded-sm p-8 max-w-md mx-auto text-center relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-accent via-[hsl(40,80%,50%)] to-accent" />
      <img src={logoWhite} alt="NextCar" className="h-8 mx-auto mb-4" />
      <h3 className="font-display text-5xl text-[hsl(0,0%,100%)] tracking-wider">GUTSCHEIN</h3>
      <div className="w-16 h-0.5 bg-accent mx-auto my-4" />
      <p className="text-[hsl(0,0%,60%)] text-sm">Für:</p>
      <p className="text-[hsl(0,0%,100%)] font-display text-xl mb-3">{recipientName || "[Name]"}</p>
      <p className="text-[hsl(0,0%,60%)] text-sm">Erlebnis:</p>
      <p className="text-accent font-display text-lg mb-1">{expLabel}</p>
      {vehicle && <p className="text-[hsl(0,0%,80%)] text-sm mb-3">{vehicle}</p>}
      <div className="border border-[hsl(0,0%,20%)] rounded-sm px-4 py-2 inline-block mt-2 mb-4">
        <span className="text-[hsl(0,0%,50%)] text-xs font-mono">NXT-XXXX-XXXX</span>
      </div>
      <p className="text-[hsl(0,0%,40%)] text-xs">Gültig 12 Monate ab Ausstellungsdatum</p>
      <div className="mt-4 pt-3 border-t border-[hsl(0,0%,15%)]">
        <p className="text-[hsl(0,0%,40%)] text-xs">NextCar Exklusiv · 0160 3090886 · info@nextcar-exklusiv.de</p>
      </div>
    </div>
  );
}

export default function GutscheinKaufen() {
  const [selectedExp, setSelectedExp] = useState<Experience>(null);
  const [selectedVehicle, setSelectedVehicle] = useState<Vehicle>(null);
  const [message, setMessage] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [sendDirect, setSendDirect] = useState(false);
  const [recipientName, setRecipientName] = useState("");
  const [recipientEmail, setRecipientEmail] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const expLabel = experiences.find((e) => e.id === selectedExp)?.title || "";
  const canSubmit = selectedExp && firstName && lastName && email && phone && privacy;

  if (submitted) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4 max-w-lg">
          <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center animate-[scale-in_0.5s_ease]">
            <Check size={40} className="text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Anfrage erfolgreich! ✓</h1>
          <p className="text-muted-foreground mb-6">
            Wir melden uns innerhalb von 24 Stunden unter deiner angegebenen Telefonnummer zur Preisabsprache.
            Nach der Zahlung erhältst du deinen personalisierten Gutschein per E-Mail.
          </p>
          <a href="tel:00491603090886" className="text-accent font-semibold text-lg block mb-6">📞 0160 3090886</a>
          <Link to="/" className="bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity inline-block">
            Zurück zur Startseite
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="bg-[hsl(0,0%,4%)] py-20 text-center border-b-2 border-accent">
        <h1 className="font-display text-5xl md:text-7xl text-[hsl(0,0%,100%)]">GUTSCHEIN KAUFEN 🎁</h1>
        <p className="text-[hsl(0,0%,60%)] mt-3 text-lg max-w-2xl mx-auto px-4">
          Das perfekte Geschenk — ein unvergessliches Erlebnis im Supersportwagen.
        </p>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* STEP 1 */}
        <div className="mb-16">
          <StepHeader number={1} title="Welches Erlebnis möchtest du schenken?" />
          <div className="grid md:grid-cols-3 gap-6">
            {experiences.map((exp) => (
              <button
                key={exp.id}
                onClick={() => { setSelectedExp(exp.id); if (exp.id !== "selbstfahren") setSelectedVehicle(null); }}
                className={`relative bg-card rounded-sm p-6 text-left transition-all border-2 ${
                  selectedExp === exp.id ? "border-accent shadow-lg" : "border-transparent hover:border-accent/30"
                }`}
              >
                {selectedExp === exp.id && (
                  <div className="absolute top-3 right-3 w-6 h-6 bg-accent rounded-full flex items-center justify-center">
                    <Check size={14} className="text-accent-foreground" />
                  </div>
                )}
                <span className="bg-accent/10 text-accent text-xs font-bold px-3 py-1 rounded-full">{exp.badge}</span>
                <h3 className="font-display text-xl text-foreground mt-4 mb-2">{exp.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{exp.text}</p>
                <p className="font-display text-lg text-accent">{exp.price}</p>
              </button>
            ))}
          </div>
        </div>

        {/* STEP 2 — Vehicle (only for selbstfahren) */}
        {selectedExp === "selbstfahren" && (
          <div className="mb-16">
            <StepHeader number={2} title="Wähle dein Wunschfahrzeug" />
            <div className="flex flex-wrap gap-3">
              {vehicles.map((v) => (
                <button
                  key={v}
                  onClick={() => setSelectedVehicle(v)}
                  className={`px-6 py-3 rounded-sm font-semibold text-sm transition-all border-2 ${
                    selectedVehicle === v
                      ? "border-accent bg-accent text-accent-foreground"
                      : "border-muted bg-card text-foreground hover:border-accent/50"
                  }`}
                >
                  {v}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* STEP 3 — Message */}
        <div className="mb-16">
          <StepHeader number={selectedExp === "selbstfahren" ? 3 : 2} title="Persönliche Nachricht auf dem Gutschein (optional)" />
          <div className="relative">
            <textarea
              value={message}
              onChange={(e) => { if (e.target.value.length <= 200) setMessage(e.target.value); }}
              placeholder="z.B. Alles Gute zum Geburtstag! Genieße dieses unvergessliche Erlebnis..."
              className="w-full bg-card border border-muted rounded-sm p-4 text-foreground placeholder:text-muted-foreground resize-none h-28 focus:border-accent focus:outline-none transition-colors"
            />
            <span className="absolute bottom-3 right-3 text-xs text-muted-foreground">{message.length}/200</span>
          </div>
        </div>

        {/* STEP 4 — Contact */}
        <div className="mb-16">
          <StepHeader number={selectedExp === "selbstfahren" ? 4 : 3} title="Deine Kontaktdaten" />
          <div className="grid sm:grid-cols-2 gap-4">
            <Input label="Vorname" value={firstName} onChange={setFirstName} required />
            <Input label="Nachname" value={lastName} onChange={setLastName} required />
            <Input label="E-Mail Adresse" type="email" value={email} onChange={setEmail} required />
            <Input label="Telefonnummer" type="tel" value={phone} onChange={setPhone} required />
          </div>
          <p className="text-xs text-muted-foreground mt-3">
            Wir kontaktieren dich zur Preisabsprache und Zahlungsabwicklung innerhalb von 24 Stunden.
          </p>
        </div>

        {/* STEP 5 — Recipient */}
        <div className="mb-16">
          <StepHeader number={selectedExp === "selbstfahren" ? 5 : 4} title="Empfänger (optional)" />
          <label className="flex items-center gap-3 cursor-pointer mb-4">
            <div
              onClick={() => setSendDirect(!sendDirect)}
              className={`w-12 h-6 rounded-full transition-colors relative cursor-pointer ${sendDirect ? "bg-accent" : "bg-muted"}`}
            >
              <div className={`w-5 h-5 bg-[hsl(0,0%,100%)] rounded-full absolute top-0.5 transition-transform ${sendDirect ? "translate-x-6" : "translate-x-0.5"}`} />
            </div>
            <span className="text-foreground text-sm">Direkt an Beschenkten senden?</span>
          </label>
          {sendDirect && (
            <div className="grid sm:grid-cols-2 gap-4">
              <Input label="Name des Beschenkten" value={recipientName} onChange={setRecipientName} />
              <Input label="E-Mail des Beschenkten" type="email" value={recipientEmail} onChange={setRecipientEmail} />
            </div>
          )}
        </div>

        {/* STEP 6 — Summary */}
        <div className="mb-16">
          <StepHeader number={selectedExp === "selbstfahren" ? 6 : 5} title="Zusammenfassung" />
          <div className="bg-card rounded-sm p-6 border border-muted mb-6 space-y-3 text-sm">
            <SummaryRow label="Erlebnis" value={expLabel || "—"} />
            {selectedVehicle && <SummaryRow label="Fahrzeug" value={selectedVehicle} />}
            {message && <SummaryRow label="Nachricht" value={`"${message}"`} />}
            <SummaryRow label="Kontakt" value={`${firstName} ${lastName}`} />
            {sendDirect && recipientName && <SummaryRow label="Versand an" value={recipientName} />}
          </div>

          <div className="bg-card border-2 border-accent rounded-sm p-6 mb-6">
            <p className="text-foreground text-sm font-semibold mb-2">💳 Zahlung & Preisinfo:</p>
            <p className="text-muted-foreground text-sm">
              Nach deiner Anfrage melden wir uns innerhalb von 24 Stunden telefonisch zur Preisabsprache und Zahlungsabwicklung.
              Der Gutschein wird nach Zahlungseingang per E-Mail zugesendet.
            </p>
          </div>

          <label className="flex items-start gap-3 cursor-pointer mb-6">
            <input type="checkbox" checked={privacy} onChange={(e) => setPrivacy(e.target.checked)} className="mt-1 accent-accent" />
            <span className="text-sm text-muted-foreground">
              Ich akzeptiere die{" "}
              <Link to="/datenschutz" className="text-accent hover:underline">Datenschutzerklärung</Link> und{" "}
              <Link to="/agb" className="text-accent hover:underline">AGB</Link>.
            </span>
          </label>

          <button
            onClick={() => canSubmit && setSubmitted(true)}
            disabled={!canSubmit}
            className={`w-full py-4 font-display text-xl rounded-sm transition-opacity ${
              canSubmit
                ? "bg-accent text-accent-foreground hover:opacity-90 cursor-pointer"
                : "bg-muted text-muted-foreground cursor-not-allowed"
            }`}
          >
            Gutschein jetzt anfragen
          </button>
        </div>

        {/* Preview Mockup */}
        <div className="mb-16">
          <h2 className="font-display text-3xl text-center text-foreground mb-8">SO SIEHT DEIN GUTSCHEIN AUS</h2>
          <GutscheinPreview
            experience={selectedExp}
            vehicle={selectedVehicle}
            recipientName={sendDirect ? recipientName : firstName}
          />
        </div>
      </div>
    </div>
  );
}

function StepHeader({ number, title }: { number: number; title: string }) {
  return (
    <div className="flex items-center gap-3 mb-6">
      <span className="w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center font-display text-lg flex-shrink-0">
        {number}
      </span>
      <h2 className="font-display text-2xl text-foreground">{title}</h2>
    </div>
  );
}

function Input({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
  return (
    <div>
      <label className="text-sm text-muted-foreground block mb-1">
        {label} {required && <span className="text-accent">*</span>}
      </label>
      <input
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-card border border-muted rounded-sm px-4 py-2.5 text-foreground focus:border-accent focus:outline-none transition-colors"
      />
    </div>
  );
}

function SummaryRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className="text-foreground font-medium">{value}</span>
    </div>
  );
}
