import { useState } from "react";
import { Link } from "react-router-dom";
import { Check, X, Loader2 } from "lucide-react";
import { format, addDays, addMonths, isWeekend } from "date-fns";
import { de } from "date-fns/locale";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { cn } from "@/lib/utils";

const VALID_CODES: Record<string, { experience: string; vehicle: string; name: string; validUntil: string }> = {
  "NXT-0001-TEST": {
    experience: "Instruktorfahrt 30 Minuten",
    vehicle: "McLaren 720S",
    name: "Max Mustermann",
    validUntil: "31.12.2026",
  },
  "NXT-0002-TEST": {
    experience: "Fahrzeug selber fahren — 1 Tag",
    vehicle: "BMW M3",
    name: "Anna Schmidt",
    validUntil: "31.12.2026",
  },
};

const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00"];

export default function GutscheinEinloesen() {
  const [code, setCode] = useState("");
  const [codeStatus, setCodeStatus] = useState<"idle" | "loading" | "valid" | "invalid">("idle");
  const [voucherData, setVoucherData] = useState<(typeof VALID_CODES)[string] | null>(null);

  const [date, setDate] = useState<Date>();
  const [time, setTime] = useState("");
  const [pickup, setPickup] = useState<"erfurt" | "delivery">("erfurt");
  const [deliveryAddress, setDeliveryAddress] = useState("");

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [notes, setNotes] = useState("");
  const [privacy, setPrivacy] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const minDate = addDays(new Date(), 3);
  const maxDate = addMonths(new Date(), 6);

  const checkCode = () => {
    setCodeStatus("loading");
    setTimeout(() => {
      const normalized = code.trim().toUpperCase();
      if (VALID_CODES[normalized]) {
        setCodeStatus("valid");
        setVoucherData(VALID_CODES[normalized]);
      } else {
        setCodeStatus("invalid");
        setVoucherData(null);
      }
    }, 1200);
  };

  const canSubmit = voucherData && date && time && firstName && lastName && phone && email && privacy;

  if (submitted) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center bg-background">
        <div className="text-center px-4 max-w-lg">
          <div className="w-20 h-20 rounded-full bg-accent mx-auto mb-6 flex items-center justify-center">
            <Check size={40} className="text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4">Termin angefragt! ✓</h1>
          <p className="text-muted-foreground mb-4">
            Wir bestätigen deinen Termin innerhalb von 24 Stunden unter deiner angegebenen Telefonnummer. Wir freuen uns auf dich!
          </p>
          {date && (
            <div className="bg-card border border-muted rounded-sm p-4 mb-6 inline-block text-sm">
              <p className="text-foreground font-medium">{format(date, "EEEE, dd. MMMM yyyy", { locale: de })}</p>
              <p className="text-accent font-display text-lg">{time} Uhr</p>
              <p className="text-muted-foreground">{voucherData?.experience}</p>
            </div>
          )}
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
        <h1 className="font-display text-5xl md:text-7xl text-[hsl(0,0%,100%)]">GUTSCHEIN EINLÖSEN 🎟️</h1>
        <p className="text-[hsl(0,0%,60%)] mt-3 text-lg max-w-2xl mx-auto px-4">
          Dein Erlebnis wartet — löse jetzt deinen Gutschein ein und buche deinen Wunschtermin.
        </p>
      </section>

      <div className="container mx-auto px-4 py-16 max-w-3xl">
        {/* STEP 1 — Code */}
        <div className="mb-16">
          <StepHeader number={1} title="Dein Gutschein-Code" />
          <div className="flex gap-3">
            <input
              value={code}
              onChange={(e) => { setCode(e.target.value); setCodeStatus("idle"); }}
              placeholder="z.B. NXT-1234-5678"
              className="flex-1 bg-card border border-muted rounded-sm px-4 py-3 text-foreground font-mono text-lg focus:border-accent focus:outline-none transition-colors uppercase"
            />
            <button
              onClick={checkCode}
              disabled={!code.trim() || codeStatus === "loading"}
              className="bg-accent text-accent-foreground px-6 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              {codeStatus === "loading" ? <Loader2 size={20} className="animate-spin" /> : "Code prüfen"}
            </button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">Format: NXT-XXXX-XXXX</p>

          {codeStatus === "valid" && (
            <div className="mt-4 flex items-center gap-2 text-sm">
              <Check size={18} className="text-[hsl(120,60%,45%)]" />
              <span className="text-[hsl(120,60%,45%)] font-medium">Gutschein gefunden! ✓</span>
            </div>
          )}
          {codeStatus === "invalid" && (
            <div className="mt-4 flex items-center gap-2 text-sm">
              <X size={18} className="text-accent" />
              <span className="text-accent">Code nicht gefunden. Bitte überprüfe deine Eingabe.</span>
            </div>
          )}
        </div>

        {/* STEP 2 — Voucher details */}
        {voucherData && (
          <div className="mb-16">
            <StepHeader number={2} title="Gutschein Details" />
            <div className="bg-card border border-muted rounded-sm p-6 space-y-3 text-sm">
              <Row label="Erlebnis" value={voucherData.experience} />
              <Row label="Fahrzeug" value={voucherData.vehicle} />
              <Row label="Gültig bis" value={voucherData.validUntil} />
              <Row label="Status" value="Aktiv ✓" valueClass="text-[hsl(120,60%,45%)] font-medium" />
              <Row label="Ausgestellt für" value={voucherData.name} />
            </div>
          </div>
        )}

        {/* STEP 3 — Date booking */}
        {voucherData && (
          <div className="mb-16">
            <StepHeader number={3} title="Wähle deinen Wunschtermin" />

            <div className="space-y-6">
              <div>
                <label className="text-sm text-muted-foreground block mb-2">Fahrzeug</label>
                <div className="bg-card border border-accent rounded-sm px-4 py-3 text-foreground font-medium">
                  {voucherData.vehicle}
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Wunschdatum (Mo–Fr, min. 3 Tage im Voraus)</label>
                <Popover>
                  <PopoverTrigger asChild>
                    <button className={cn(
                      "w-full bg-card border border-muted rounded-sm px-4 py-3 text-left transition-colors hover:border-accent",
                      !date && "text-muted-foreground"
                    )}>
                      {date ? format(date, "EEEE, dd. MMMM yyyy", { locale: de }) : "Datum auswählen"}
                    </button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      disabled={(d) => d < minDate || d > maxDate || isWeekend(d)}
                      initialFocus
                      className={cn("p-3 pointer-events-auto")}
                    />
                  </PopoverContent>
                </Popover>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-2">Wunschuhrzeit</label>
                <div className="flex flex-wrap gap-2">
                  {timeSlots.map((t) => (
                    <button
                      key={t}
                      onClick={() => setTime(t)}
                      className={`px-4 py-2 rounded-sm text-sm font-medium border-2 transition-all ${
                        time === t
                          ? "border-accent bg-accent text-accent-foreground"
                          : "border-muted bg-card text-foreground hover:border-accent/50"
                      }`}
                    >
                      {t}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm text-muted-foreground block mb-3">Abholung oder Lieferung</label>
                <div className="space-y-2">
                  <label className="flex items-start gap-3 cursor-pointer bg-card border border-muted rounded-sm p-4 hover:border-accent/50 transition-colors">
                    <input type="radio" name="pickup" checked={pickup === "erfurt"} onChange={() => setPickup("erfurt")} className="mt-0.5 accent-accent" />
                    <div>
                      <p className="text-foreground text-sm font-medium">Ich komme nach Erfurt</p>
                      <p className="text-muted-foreground text-xs">Meyfartstraße 19, 99085 Erfurt</p>
                    </div>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer bg-card border border-muted rounded-sm p-4 hover:border-accent/50 transition-colors">
                    <input type="radio" name="pickup" checked={pickup === "delivery"} onChange={() => setPickup("delivery")} className="mt-0.5 accent-accent" />
                    <div>
                      <p className="text-foreground text-sm font-medium">Lieferung zu mir</p>
                      <p className="text-muted-foreground text-xs">Zusätzliche Kosten, Adresse eingeben</p>
                    </div>
                  </label>
                </div>
                {pickup === "delivery" && (
                  <input
                    value={deliveryAddress}
                    onChange={(e) => setDeliveryAddress(e.target.value)}
                    placeholder="Deine Adresse"
                    className="w-full mt-3 bg-card border border-muted rounded-sm px-4 py-2.5 text-foreground focus:border-accent focus:outline-none"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* STEP 4 — Contact */}
        {voucherData && (
          <div className="mb-16">
            <StepHeader number={4} title="Deine Kontaktdaten" />
            <div className="grid sm:grid-cols-2 gap-4">
              <InputField label="Vorname" value={firstName} onChange={setFirstName} required />
              <InputField label="Nachname" value={lastName} onChange={setLastName} required />
              <InputField label="Telefonnummer" type="tel" value={phone} onChange={setPhone} required />
              <InputField label="E-Mail" type="email" value={email} onChange={setEmail} required />
            </div>
            <div className="mt-4">
              <label className="text-sm text-muted-foreground block mb-1">Sonderwünsche (optional)</label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                placeholder="Hast du besondere Wünsche?"
                className="w-full bg-card border border-muted rounded-sm p-4 text-foreground placeholder:text-muted-foreground resize-none h-24 focus:border-accent focus:outline-none"
              />
            </div>
          </div>
        )}

        {/* STEP 5 — Summary */}
        {voucherData && (
          <div className="mb-16">
            <StepHeader number={5} title="Zusammenfassung" />
            <div className="bg-card border border-muted rounded-sm p-6 space-y-3 text-sm mb-6">
              <Row label="Gutschein Code" value={code.toUpperCase()} />
              <Row label="Erlebnis" value={voucherData.experience} />
              {date && <Row label="Datum" value={format(date, "dd.MM.yyyy")} />}
              {time && <Row label="Uhrzeit" value={`${time} Uhr`} />}
              <Row label="Abholung" value={pickup === "erfurt" ? "Erfurt" : deliveryAddress || "Lieferung"} />
              <Row label="Kontakt" value={`${firstName} ${lastName}`} />
            </div>

            <div className="bg-card border border-muted rounded-sm p-4 mb-6">
              <p className="text-muted-foreground text-sm">
                📞 Wir bestätigen deinen Termin innerhalb von 24 Stunden telefonisch.
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
              Termin verbindlich anfragen
            </button>
          </div>
        )}
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

function InputField({ label, value, onChange, type = "text", required }: { label: string; value: string; onChange: (v: string) => void; type?: string; required?: boolean }) {
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

function Row({ label, value, valueClass }: { label: string; value: string; valueClass?: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-muted-foreground">{label}:</span>
      <span className={valueClass || "text-foreground font-medium"}>{value}</span>
    </div>
  );
}
