import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingElements from "./components/FloatingElements";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import { FahrzeugeListe, FahrzeugDetail } from "./pages/Fahrzeuge";
import Buchen from "./pages/Buchen";
import Anlaesse from "./pages/Anlaesse";
import Instruktorfahrt from "./pages/Instruktorfahrt";
import FAQ from "./pages/FAQ";
import Kontakt from "./pages/Kontakt";
import Versicherung from "./pages/Versicherung";
import Uebergabe from "./pages/Uebergabe";
import Impressum from "./pages/Impressum";
import Datenschutz from "./pages/Datenschutz";
import AGB from "./pages/AGB";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/fahrzeuge" element={<FahrzeugeListe />} />
            <Route path="/fahrzeuge/:slug" element={<FahrzeugDetail />} />
            <Route path="/buchen" element={<Buchen />} />
            <Route path="/anlaesse" element={<Anlaesse />} />
            <Route path="/instruktorfahrt" element={<Instruktorfahrt />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/kontakt" element={<Kontakt />} />
            <Route path="/versicherung" element={<Versicherung />} />
            <Route path="/uebergabe" element={<Uebergabe />} />
            <Route path="/impressum" element={<Impressum />} />
            <Route path="/datenschutz" element={<Datenschutz />} />
            <Route path="/agb" element={<AGB />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingElements />
        <CookieBanner />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
