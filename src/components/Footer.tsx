import { Link } from "react-router-dom";
import logoWhite from "@/assets/logo-white.png";

export default function Footer() {
  return (
    <footer className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] border-t-[3px] border-accent">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & tagline */}
          <div>
            <img
              src={logoWhite}
              alt="NextCar Logo"
              className="h-10 mb-4"
            />
            <p className="text-sm text-[hsl(0,0%,60%)]">Fahrspaß pur. Deutschlandweit.</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Navigation</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["Home", "/"],
                ["Fahrzeuge", "/fahrzeuge"],
                ["Anlässe", "/anlaesse"],
                ["Instruktorfahrt", "/instruktorfahrt"],
                ["Versicherung", "/versicherung"],
                ["Übergabeprozess", "/uebergabe"],
                ["FAQ", "/faq"],
                ["Kontakt", "/kontakt"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[hsl(0,0%,60%)] hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Fahrzeuge */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Fahrzeuge</h4>
            <ul className="space-y-2 text-sm">
              {[
                ["McLaren 720S", "/fahrzeuge/mclaren-720s"],
                ["BMW M3 Competition", "/fahrzeuge/bmw-m3"],
                ["Audi RS3", "/fahrzeuge/audi-rs3"],
                ["Lamborghini Urus", "/fahrzeuge/lamborghini-urus"],
              ].map(([label, to]) => (
                <li key={to}>
                  <Link to={to} className="text-[hsl(0,0%,60%)] hover:text-accent transition-colors">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h4 className="font-display text-lg mb-4 text-accent">Kontakt</h4>
            <ul className="space-y-2 text-sm text-[hsl(0,0%,60%)]">
              <li>
                <a href="tel:00491603090886" className="hover:text-accent transition-colors">
                  📞 0160 3090886
                </a>
              </li>
              <li>
                <a href="mailto:info@nextcar-exklusiv.de" className="hover:text-accent transition-colors">
                  ✉️ info@nextcar-exklusiv.de
                </a>
              </li>
              <li>📍 Meyfartstraße 19, 99085 Erfurt</li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-[hsl(0,0%,15%)] flex flex-col md:flex-row items-center justify-between text-xs text-[hsl(0,0%,40%)]">
          <p>© 2026 NextCar. Alle Rechte vorbehalten.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <Link to="/impressum" className="hover:text-accent">Impressum</Link>
            <Link to="/datenschutz" className="hover:text-accent">Datenschutz</Link>
            <Link to="/agb" className="hover:text-accent">AGB</Link>
            <button
              onClick={() => {
                localStorage.removeItem("nextcar-cookies");
                window.dispatchEvent(new Event("show-cookie-banner"));
              }}
              className="hover:text-accent"
            >
              Cookie-Einstellungen
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
