import { useState } from "react";

export default function Kontakt() {
  const [form, setForm] = useState({ name: "", email: "", telefon: "", fahrzeug: "", nachricht: "" });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="pt-[70px]">
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">KONTAKT</h1>
      </section>
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <div>
            <h2 className="font-display text-3xl text-foreground mb-6">Erreichen Sie uns</h2>
            <div className="space-y-4 text-foreground">
              <a href="tel:00491603090886" className="flex items-center gap-3 hover:text-accent transition-colors">
                <span>📞</span> 0160 3090886
              </a>
              <a href="mailto:info@nextcar-exklusiv.de" className="flex items-center gap-3 hover:text-accent transition-colors">
                <span>✉️</span> info@nextcar-exklusiv.de
              </a>
              <p className="flex items-center gap-3">
                <span>📍</span> Meyfartstraße 19, 99085 Erfurt
              </p>
            </div>
            <div className="mt-8 p-4 bg-card rounded-sm border-l-4 border-accent">
              <p className="text-sm text-muted-foreground">Erreichbar: täglich 8:00 — 20:00 Uhr</p>
            </div>
          </div>

          <div>
            {sent ? (
              <div className="bg-card p-8 rounded-sm text-center">
                <h3 className="font-display text-2xl text-accent mb-2">Nachricht gesendet! ✓</h3>
                <p className="text-muted-foreground">Wir melden uns schnellstmöglich bei Ihnen.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input required placeholder="Name *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
                <input required placeholder="E-Mail *" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
                <input placeholder="Telefon" value={form.telefon} onChange={(e) => setForm({ ...form, telefon: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm" />
                <select value={form.fahrzeug} onChange={(e) => setForm({ ...form, fahrzeug: e.target.value })} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm">
                  <option value="">Fahrzeug Interesse</option>
                  <option value="mclaren">McLaren 720S</option>
                  <option value="bmw">BMW M3 Competition</option>
                  <option value="audi">Audi RS3</option>
                  
                </select>
                <textarea required placeholder="Nachricht *" value={form.nachricht} onChange={(e) => setForm({ ...form, nachricht: e.target.value })} rows={5} className="w-full bg-card border border-input rounded-sm px-3 py-2 text-foreground text-sm resize-none" />
                <button type="submit" className="w-full bg-accent text-accent-foreground py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity">
                  Nachricht senden
                </button>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
