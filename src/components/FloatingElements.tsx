import { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

export default function FloatingElements() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowScroll(window.scrollY > 400);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Call button */}
      <a
        href="tel:00491603090886"
        className="fixed bottom-6 right-6 z-40 bg-accent text-accent-foreground px-5 py-3 rounded-full font-semibold text-sm shadow-lg hover:opacity-90 transition-opacity flex items-center gap-2"
      >
        📞 Jetzt anrufen
      </a>

      {/* Scroll to top */}
      {showScroll && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-20 right-6 z-40 w-10 h-10 bg-card text-foreground rounded-full flex items-center justify-center shadow-lg border border-accent hover:bg-accent hover:text-accent-foreground transition-colors"
          aria-label="Scroll to top"
        >
          <ArrowUp size={18} />
        </button>
      )}
    </>
  );
}
