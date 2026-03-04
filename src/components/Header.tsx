import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sun, Moon, ChevronDown } from "lucide-react";
import logoWhite from "@/assets/logo-white.png";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Fahrzeuge", to: "/fahrzeuge" },
  { label: "Anlässe", to: "/anlaesse" },
  { label: "Instruktorfahrt", to: "/instruktorfahrt" },
  { label: "Bewertungen", to: "/#bewertungen" },
  {
    label: "Info",
    children: [
      { label: "Versicherung", to: "/versicherung" },
      { label: "Übergabeprozess", to: "/uebergabe" },
      { label: "FAQ", to: "/faq" },
    ],
  },
  { label: "Kontakt", to: "/kontakt" },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [dark, setDark] = useState(true);
  const [infoOpen, setInfoOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const saved = localStorage.getItem("nextcar-theme");
    const isDark = saved ? saved === "dark" : true;
    setDark(isDark);
    document.documentElement.classList.toggle("dark", isDark);
  }, []);

  const toggleTheme = () => {
    const next = !dark;
    setDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("nextcar-theme", next ? "dark" : "light");
  };

  useEffect(() => {
    setMobileOpen(false);
    setInfoOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-[70px] bg-background border-b-2 border-accent">
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link to="/">
          <img
            src={logoWhite}
            alt="NextCar Logo"
            className="h-10 dark:brightness-100 brightness-0"
          />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-6">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="relative">
                <button
                  onClick={() => setInfoOpen(!infoOpen)}
                  className="flex items-center gap-1 text-sm font-medium text-foreground hover:text-accent transition-colors"
                >
                  {item.label} <ChevronDown size={14} />
                </button>
                {infoOpen && (
                  <div className="absolute top-full mt-2 left-0 bg-card border border-accent rounded-sm shadow-lg min-w-[180px] py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.to}
                        to={child.to}
                        className="block px-4 py-2 text-sm text-card-foreground hover:bg-accent hover:text-accent-foreground transition-colors"
                      >
                        {child.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={item.to}
                to={item.to!}
                className="text-sm font-medium text-foreground hover:text-accent transition-colors"
              >
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/buchen"
            className="bg-accent text-accent-foreground px-5 py-2 text-sm font-semibold rounded-sm hover:opacity-90 transition-opacity"
          >
            Jetzt buchen
          </Link>
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full text-foreground hover:text-accent transition-colors"
            aria-label="Theme toggle"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
        </nav>

        {/* Mobile controls */}
        <div className="flex lg:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            className="w-10 h-10 flex items-center justify-center rounded-full text-foreground"
            aria-label="Theme toggle"
          >
            {dark ? <Sun size={20} /> : <Moon size={20} />}
          </button>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="w-10 h-10 flex items-center justify-center text-foreground"
            aria-label="Menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-[70px] bg-background z-40 flex flex-col items-center justify-center gap-6">
          {navLinks.map((item) =>
            item.children ? (
              <div key={item.label} className="flex flex-col items-center gap-3">
                <span className="font-display text-2xl text-foreground">{item.label}</span>
                {item.children.map((child) => (
                  <Link key={child.to} to={child.to} className="text-muted-foreground text-lg hover:text-accent">
                    {child.label}
                  </Link>
                ))}
              </div>
            ) : (
              <Link key={item.to} to={item.to!} className="font-display text-2xl text-foreground hover:text-accent">
                {item.label}
              </Link>
            )
          )}
          <Link
            to="/buchen"
            className="bg-accent text-accent-foreground px-8 py-3 font-display text-xl rounded-sm"
          >
            Jetzt buchen
          </Link>
        </div>
      )}
    </header>
  );
}
