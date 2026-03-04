import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

interface CookieConsent {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const [analytics, setAnalytics] = useState(false);
  const [marketing, setMarketing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("nextcar-cookies");
    if (!saved) {
      setVisible(true);
    } else {
      const parsed: CookieConsent = JSON.parse(saved);
      const yearMs = 365 * 24 * 60 * 60 * 1000;
      if (Date.now() - parsed.timestamp > yearMs) {
        localStorage.removeItem("nextcar-cookies");
        setVisible(true);
      }
    }
    const handler = () => setVisible(true);
    window.addEventListener("show-cookie-banner", handler);
    return () => window.removeEventListener("show-cookie-banner", handler);
  }, []);

  const save = (all: boolean) => {
    const consent: CookieConsent = {
      necessary: true,
      analytics: all ? true : analytics,
      marketing: all ? true : marketing,
      timestamp: Date.now(),
    };
    localStorage.setItem("nextcar-cookies", JSON.stringify(consent));
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] bg-card border-t-[3px] border-accent shadow-2xl">
      <div className="container mx-auto px-4 py-6">
        <h3 className="font-display text-xl text-foreground mb-2">Wir verwenden Cookies 🍪</h3>
        <p className="text-sm text-muted-foreground mb-4">
          Wir nutzen Cookies für ein optimales Erlebnis auf unserer Website.
          Weitere Infos in unserer{" "}
          <Link to="/datenschutz" className="text-accent underline">
            Datenschutzerklärung
          </Link>.
        </p>

        {showDetails && (
          <div className="mb-4 space-y-3">
            <label className="flex items-center gap-3 text-sm">
              <input type="checkbox" checked disabled className="accent-accent w-4 h-4" />
              <span className="text-foreground font-medium">Technisch notwendig</span>
              <span className="text-muted-foreground">— Für den Betrieb der Website erforderlich.</span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={analytics}
                onChange={(e) => setAnalytics(e.target.checked)}
                className="accent-accent w-4 h-4"
              />
              <span className="text-foreground font-medium">Analyse</span>
              <span className="text-muted-foreground">— Helfen uns die Website zu verbessern.</span>
            </label>
            <label className="flex items-center gap-3 text-sm cursor-pointer">
              <input
                type="checkbox"
                checked={marketing}
                onChange={(e) => setMarketing(e.target.checked)}
                className="accent-accent w-4 h-4"
              />
              <span className="text-foreground font-medium">Marketing</span>
              <span className="text-muted-foreground">— Für personalisierte Inhalte.</span>
            </label>
          </div>
        )}

        <div className="flex flex-col sm:flex-row gap-3">
          <button
            onClick={() => { setAnalytics(false); setMarketing(false); save(false); }}
            className="flex-1 border border-accent text-accent px-4 py-2.5 rounded-sm text-sm font-semibold hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            Ablehnen
          </button>
          <button
            onClick={() => save(false)}
            className="flex-1 border border-muted-foreground text-foreground px-4 py-2.5 rounded-sm text-sm font-semibold hover:bg-muted transition-colors"
          >
            Auswahl speichern
          </button>
          <button
            onClick={() => save(true)}
            className="flex-1 bg-accent text-accent-foreground px-4 py-2.5 rounded-sm text-sm font-semibold hover:opacity-90 transition-opacity"
          >
            Alle akzeptieren
          </button>
        </div>

        <div className="mt-3 flex items-center gap-4 text-xs text-muted-foreground">
          <button onClick={() => setShowDetails(!showDetails)} className="hover:text-accent underline">
            Einstellungen anpassen
          </button>
          <Link to="/datenschutz" className="hover:text-accent">Datenschutz</Link>
          <Link to="/impressum" className="hover:text-accent">Impressum</Link>
        </div>
      </div>
    </div>
  );
}
