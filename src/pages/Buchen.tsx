import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Check } from "lucide-react";

const cars = [
  { key: "mclaren", title: "McLaren 720S", price: 599, img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/61d18f1b-55d7-4299-bbf3-e3c92c8a93c2-1024x683.jpg" },
  { key: "bmw", title: "BMW M3 Competition", price: 349, img: "https://nextcar-exklusiv.de/wp-content/uploads/2024/08/9fd90d7c-2b63-4dd6-96ca-93f9e41789f9-1024x683.jpg" },
  { key: "audi", title: "Audi RS3", price: 249, img: "https://nextcar-exklusiv.de/wp-content/uploads/2025/11/PHOTO-2025-11-05-09-05-05-1024x683.jpg" },
  
];

export default function Buchen() {
  const [searchParams] = useSearchParams();
  const [step, setStep] = useState(1);
  const [selectedCar, setSelectedCar] = useState(searchParams.get("car") || "");
  const [mietart, setMietart] = useState("kurz");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [time, setTime] = useState("10:00");
  const [form, setForm] = useState({ vorname: "", nachname: "", email: "", telefon: "", fuehrerschein: "B", alter: "", adresse: "", wuensche: "" });
  const [datenschutz, setDatenschutz] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [step]);

  const car = cars.find((c) => c.key === selectedCar);

  const handleSubmit = () => {
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1500);
  };

  if (submitted) {
    return (
      <div className="pt-[70px] min-h-screen flex items-center justify-center bg-background">
        <div className="text-center max-w-md mx-auto px-4 animate-fade-in-up">
          <div className="w-20 h-20 bg-accent rounded-full flex items-center justify-center mx-auto mb-6">
            <Check size={40} className="text-accent-foreground" />
          </div>
          <h1 className="font-display text-4xl text-foreground mb-4">Anfrage erfolgreich! ✓</h1>
          <p className="text-muted-foreground mb-6">Wir melden uns innerhalb von 24 Stunden unter deiner angegebenen Telefonnummer.</p>
          <a href="tel:00491603090886" className="text-accent font-semibold text-lg">📞 0160 3090886</a>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-[70px] min-h-screen bg-background">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="font-display text-4xl md:text-5xl text-foreground text-center mb-8">DEIN ERLEBNIS BUCHEN</h1>

        {/* Progress */}
        <div className="flex items-center justify-center gap-2 mb-12">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-display text-lg ${s <= step ? "bg-accent text-accent-foreground" : "bg-muted text-muted-foreground"}`}>
                {s}
              </div>
              {s < 3 && <div className={`w-12 h-0.5 ${s < step ? "bg-accent" : "bg-muted"}`} />}
            </div>
          ))}
        </div>

        {step === 1 && (
          <div className="space-y-8">
            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">Fahrzeug auswählen</h3>
              <div className="grid grid-cols-2 gap-4">
                {cars.map((c) => (
                  <button
                    key={c.key}
                    onClick={() => setSelectedCar(c.key)}
                    className={`rounded-sm overflow-hidden border-2 transition-colors text-left ${selectedCar === c.key ? "border-accent" : "border-transparent"}`}
                  >
                    <img src={c.img} alt={c.title} className="w-full aspect-video object-cover" />
                    <div className="p-3 bg-card">
                      <p className="font-display text-lg text-foreground">{c.title}</p>
                      <p className="text-xs text-accent">{c.price ? `Ab ${c.price}€ / Tag` : "Auf Anfrage"}</p>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-display text-2xl text-foreground mb-4">Mietart</h3>
              <div className="space-y-2">
                {[
                  { value: "kurz", label: "Kurzzeitmiete (1 Tag+)" },
                  { value: "lang", label: "Langzeitmiete (bis 2 Wochen)" },
                  { value: "instruktor", label: "Instruktorfahrt (30 / 60 Min)" },
                ].map((m) => (
                  <label key={m.value} className="flex items-center gap-3 p-3 bg-card rounded-sm cursor-pointer border border-transparent hover:border-accent transition-colors">
                    <input type="radio" name="mietart" checked={mietart === m.value} onChange={() => setMietart(m.value)} className="accent-accent" />
                    <span className="text-foreground text-sm">{m.label}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Startdatum</label>
                <input type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Enddatum</label>
                <input type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
              </div>
              <div>
                <label className="text-sm text-muted-foreground mb-1 block">Uhrzeit</label>
                <input type="time" value={time} onChange={(e) => setTime(e.target.value)} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
              </div>
            </div>

            <button
              onClick={() => selectedCar && setStep(2)}
              disabled={!selectedCar}
              className="w-full bg-accent text-accent-foreground py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
            >
              Weiter
            </button>
          </div>
        )}

        {step === 2 && (
          <div className="space-y-4">
            <h3 className="font-display text-2xl text-foreground mb-4">Persönliche Daten</h3>
            <div className="grid grid-cols-2 gap-4">
              <input placeholder="Vorname *" value={form.vorname} onChange={(e) => setForm({ ...form, vorname: e.target.value })} className="bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
              <input placeholder="Nachname *" value={form.nachname} onChange={(e) => setForm({ ...form, nachname: e.target.value })} className="bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
            </div>
            <input placeholder="E-Mail *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
            <input placeholder="Telefonnummer *" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
            <div className="grid grid-cols-2 gap-4">
              <select value={form.fuehrerschein} onChange={(e) => setForm({ ...form, fuehrerschein: e.target.value })} className="bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm">
                <option value="B">Führerschein Klasse B</option>
                <option value="BE">Führerschein Klasse BE</option>
                <option value="Sonstige">Sonstige</option>
              </select>
              <input placeholder="Alter (min. 25) *" type="number" min={25} value={form.alter} onChange={(e) => setForm({ ...form, alter: e.target.value })} className="bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
            </div>
            <input placeholder="Lieferadresse" value={form.adresse} onChange={(e) => setForm({ ...form, adresse: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
            <textarea placeholder="Sonderwünsche" value={form.wuensche} onChange={(e) => setForm({ ...form, wuensche: e.target.value })} rows={3} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm resize-none" />
            <div className="flex gap-4">
              <button onClick={() => setStep(1)} className="flex-1 border border-accent text-accent py-3 font-semibold rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors">Zurück</button>
              <button
                onClick={() => form.vorname && form.nachname && form.email && form.telefon && form.alter && setStep(3)}
                className="flex-1 bg-accent text-accent-foreground py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
              >
                Weiter
              </button>
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <h3 className="font-display text-2xl text-foreground mb-4">Zusammenfassung</h3>
            <div className="bg-card p-6 rounded-sm space-y-3 text-sm">
              <div className="flex justify-between"><span className="text-muted-foreground">Fahrzeug</span><span className="text-foreground font-medium">{car?.title}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Mietart</span><span className="text-foreground font-medium">{mietart === "kurz" ? "Kurzzeitmiete" : mietart === "lang" ? "Langzeitmiete" : "Instruktorfahrt"}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Zeitraum</span><span className="text-foreground font-medium">{startDate} — {endDate}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Uhrzeit</span><span className="text-foreground font-medium">{time}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Startpreis</span><span className="text-accent font-bold">{car?.price ? `Ab ${car.price}€ / Tag` : "Auf Anfrage"}</span></div>
              <hr className="border-muted" />
              <div className="flex justify-between"><span className="text-muted-foreground">Name</span><span className="text-foreground">{form.vorname} {form.nachname}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">E-Mail</span><span className="text-foreground">{form.email}</span></div>
              <div className="flex justify-between"><span className="text-muted-foreground">Telefon</span><span className="text-foreground">{form.telefon}</span></div>
            </div>
            <p className="text-sm text-muted-foreground">Wir bestätigen deine Buchung innerhalb von 24 Stunden telefonisch.</p>
            <label className="flex items-center gap-3 cursor-pointer">
              <input type="checkbox" checked={datenschutz} onChange={(e) => setDatenschutz(e.target.checked)} className="accent-accent w-4 h-4" />
              <span className="text-sm text-muted-foreground">Ich akzeptiere die Datenschutzbestimmungen *</span>
            </label>
            <div className="flex gap-4">
              <button onClick={() => setStep(2)} className="flex-1 border border-accent text-accent py-3 font-semibold rounded-sm hover:bg-accent hover:text-accent-foreground transition-colors">Zurück</button>
              <button
                onClick={handleSubmit}
                disabled={!datenschutz || loading}
                className="flex-1 bg-accent text-accent-foreground py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity disabled:opacity-50"
              >
                {loading ? "Wird gesendet..." : "Verbindlich anfragen"}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
