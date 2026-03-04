import { useState } from "react";
import { Link } from "react-router-dom";
import { X } from "lucide-react";

import hochzeitImg from "@/assets/anlaesse/hochzeit.jpg";
import jugendweiheImg from "@/assets/anlaesse/jugendweihe.jpg";
import geburtstagImg from "@/assets/anlaesse/geburtstag.jpg";
import firmenfeierImg from "@/assets/anlaesse/firmenfeier.jpg";

interface Occasion {
  icon: string;
  title: string;
  subtitle: string;
  image: string;
  paragraphs: string[];
}

const occasions: Occasion[] = [
  {
    icon: "💍",
    title: "Hochzeiten",
    subtitle: "Stilvoll zum schönsten Tag Ihres Lebens.",
    image: hochzeitImg,
    paragraphs: [
      "Ihr Hochzeitstag ist einer der bedeutendsten Tage Ihres Lebens – ein Tag, an dem jedes Detail perfekt sein soll. Bei Nextcar wissen wir um die Bedeutung dieses einzigartigen Moments und bieten Ihnen nicht nur ein Auto, sondern ein außergewöhnliches Erlebnis, das Ihren besonderen Tag unvergesslich macht.",
      "Stellen Sie sich vor, wie Sie in einem eleganten Luxusfahrzeug stilvoll vorfahren, das nicht nur die Blicke auf sich zieht, sondern auch die Eleganz und den Glamour Ihres großen Tages unterstreicht. Unsere Auswahl an exklusiven Hochzeitsfahrzeugen reicht von klassischen Limousinen, die zeitlose Eleganz ausstrahlen, bis hin zu modernen Supersportwagen, die mit ihrer beeindruckenden Leistung und ihrem Design beeindrucken. Jedes Fahrzeug in unserer Flotte bietet höchsten Komfort und eine luxuriöse Atmosphäre, die Sie und Ihre Gäste in Staunen versetzen wird.",
      "Mit Nextcar erleben Sie nicht nur eine luxuriöse Fahrt, sondern profitieren auch von einem maßgeschneiderten Service, der auf Ihre Bedürfnisse abgestimmt ist. Unser engagiertes Team sorgt dafür, dass alle Aspekte Ihrer Fahrzeugmiete reibungslos und pünktlich ablaufen. Wir kümmern uns um jede Einzelheit – von der professionellen Präsentation des Fahrzeugs bis hin zur perfekten Planung der Abhol- und Rückgabezeiten. So können Sie sich voll und ganz auf das Wesentliche konzentrieren: Ihre Liebe, Ihre Gäste und die Feier Ihres großen Tages.",
      "Kontaktieren Sie uns noch heute telefonisch oder per E-Mail, um das perfekte Fahrzeug für Ihre Hochzeit zu finden und Ihren besonderen Tag zu einem außergewöhnlichen Erlebnis zu machen.",
    ],
  },
  {
    icon: "🎓",
    title: "Jugendweihe",
    subtitle: "Ein beeindruckender Auftritt zum großen Tag.",
    image: jugendweiheImg,
    paragraphs: [
      "Die Jugendweihe markiert einen bedeutenden Schritt ins Erwachsenenleben – ein Tag, der voller Stolz, Freude und unvergesslicher Momente steckt. Bei Nextcar wissen wir, wie wichtig dieser besondere Anlass für Sie und Ihre Familie ist. Deshalb möchten wir Ihnen ein Erlebnis bieten, das diesen Tag noch außergewöhnlicher und unvergesslicher macht.",
      "Stellen Sie sich vor, wie Sie in einem luxuriösen Fahrzeug von Nextcar zur Jugendweihe vorfahren – ein beeindruckender Auftritt, der garantiert alle Blicke auf sich zieht und die Bedeutung dieses Moments unterstreicht. Unsere exklusive Auswahl an stilvollen Limousinen und beeindruckenden Sportwagen bietet nicht nur ultimativen Komfort, sondern auch ein Fahrgefühl der Extraklasse, das Ihre Feier zu einem besonderen Highlight werden lässt.",
      "Mit Nextcar wird die Fahrt zu Ihrer Jugendweihe zu einem echten Erlebnis. Unser erstklassiger Service sorgt dafür, dass alles reibungslos verläuft – von der pünktlichen Abholung bis zur makellosen Präsentation des Fahrzeugs. Unser Team achtet auf jedes Detail, damit Sie sich ganz auf die Feierlichkeiten konzentrieren und diesen wichtigen Meilenstein in vollen Zügen genießen können.",
      "Jedes unserer Fahrzeuge ist darauf ausgelegt, Ihnen ein unvergleichliches Fahrerlebnis zu bieten. Von der luxuriösen Ausstattung bis hin zur perfekten Fahreigenschaft – wir garantieren, dass Ihr Auftritt zur Jugendweihe stilvoll und beeindruckend ist. Lassen Sie sich von Nextcar helfen, diesen besonderen Tag zu einem unvergesslichen Erlebnis zu machen, auf das Sie stolz zurückblicken können. Kontaktieren Sie uns noch heute, um das ideale Fahrzeug für Ihre Jugendweihe zu finden und diesen bedeutenden Tag perfekt abzurunden.",
    ],
  },
  {
    icon: "🎂",
    title: "Geburtstag",
    subtitle: "Feiern Sie Ihren Ehrentag mit Stil und PS.",
    image: geburtstagImg,
    paragraphs: [
      "Ein Geburtstag ist weit mehr als nur ein weiteres Jahr im Leben – es ist ein Tag, an dem Sie im Mittelpunkt stehen und der mit Freude, Stil und besonderen Momenten gefeiert werden will. Bei Nextcar wissen wir, wie man solche Anlässe zu einem unvergesslichen Erlebnis macht. Wir bieten Ihnen die Möglichkeit, Ihren Ehrentag auf eine ganz besondere Weise zu zelebrieren, indem Sie in einem luxuriösen Fahrzeug Ihrer Wahl vorfahren und den Tag mit Klasse genießen.",
      "Stellen Sie sich vor, wie Sie an Ihrem Geburtstag in einem eleganten Luxusfahrzeug vorfahren – sei es eine stilvolle Limousine, die mit zeitloser Eleganz besticht, oder ein sportlicher Wagen, der die Aufmerksamkeit aller auf sich zieht. Ihr Auftritt wird nicht nur Sie selbst begeistern, sondern auch Ihre Gäste beeindrucken. Unsere exklusive Flotte umfasst eine breite Auswahl an Fahrzeugen, die sowohl Komfort als auch aufregende Fahrerlebnisse bieten – perfekt für jeden Geschmack und Anlass.",
      "Bei Nextcar kümmern wir uns darum, dass Ihre Geburtstagsfahrt reibungslos und nach Ihren Wünschen abläuft. Unser erstklassiger Service stellt sicher, dass jedes Detail stimmt – von der pünktlichen Abholung bis hin zur stilvollen Ankunft an Ihrer Feierlocation.",
      "Feiern Sie Ihren Geburtstag mit Nextcar auf eine Art und Weise, die Sie nie vergessen werden. Unsere Fahrzeuge sind nicht nur Fortbewegungsmittel, sondern ein wesentlicher Teil Ihres Geburtstags-Erlebnisses. Ganz gleich, für welches Modell Sie sich entscheiden – Ihre Feier wird durch das perfekte Fahrzeug abgerundet, das Ihren Ehrentag unvergesslich macht. Fahren Sie mit Stil, feiern Sie mit Klasse und lassen Sie uns dafür sorgen, dass dieser Geburtstag in Ihrem Gedächtnis bleibt.",
    ],
  },
  {
    icon: "💼",
    title: "Firmenfeier",
    subtitle: "Erfolge stilvoll feiern — mit dem Team.",
    image: firmenfeierImg,
    paragraphs: [
      "Eine Firmenfeier ist mehr als nur eine Gelegenheit, Erfolge zu feiern – sie ist ein entscheidender Moment, um das Team zu motivieren, Beziehungen zu stärken und gemeinsam auf das Erreichte stolz zu sein. Solche Anlässe bieten die Chance, das Gemeinschaftsgefühl zu festigen und positive Energie für die kommenden Herausforderungen zu tanken. Bei Nextcar verstehen wir, wie wichtig diese besonderen Events für Ihr Unternehmen sind.",
      "Stellen Sie sich vor, Sie und Ihre Kollegen fahren in luxuriösen Fahrzeugen von Nextcar zur Feier – sei es eine elegante Limousine, die pure Klasse ausstrahlt, oder ein sportlicher Wagen, der das Adrenalin in die Höhe treibt. Ihr Auftritt wird nicht nur ein Statement der Wertschätzung gegenüber dem Team sein, sondern auch das besondere Ambiente Ihrer Veranstaltung unterstreichen. Unsere exklusive Fahrzeugflotte bietet Ihnen die Möglichkeit, Ihren Auftritt perfekt zu inszenieren – egal ob Sie den klassischen Luxus bevorzugen oder den Nervenkitzel eines Supersportwagens suchen.",
      "Ob Sie eine intime Feier im kleinen Kreis oder eine große Veranstaltung planen – wir haben das passende Fahrzeug für Ihren Anlass. Mit unserer breiten Auswahl an Premium-Limousinen und High-Performance-Sportwagen wird Ihre Firmenfeier garantiert zu einem besonderen Event, das noch lange Gesprächsthema bleibt.",
      "Machen Sie Ihre Firmenfeier mit Nextcar zu einem unvergesslichen Ereignis, das Stil, Eleganz und Spaß perfekt vereint. Fahren Sie gemeinsam mit Ihren Kollegen in Luxus und lassen Sie sich von einem erstklassigen Fahrerlebnis begeistern, das den Erfolg Ihres Unternehmens auf besondere Weise feiert. Kontaktieren Sie uns noch heute, um das ideale Fahrzeug für Ihre Veranstaltung auszuwählen und eine Firmenfeier zu erleben, die in bester Erinnerung bleibt.",
    ],
  },
];

export default function Anlaesse() {
  const [selected, setSelected] = useState<Occasion | null>(null);

  return (
    <div className="pt-[70px]">
      {/* Hero */}
      <section className="bg-[hsl(0,0%,4%)] text-[hsl(0,0%,100%)] py-20 text-center">
        <h1 className="font-display text-5xl md:text-6xl">DER PERFEKTE ANLASS</h1>
        <p className="text-[hsl(0,0%,60%)] mt-4 max-w-lg mx-auto">
          Für jeden besonderen Moment der richtige Wagen.
        </p>
      </section>

      {/* Cards Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {occasions.map((o) => (
            <div
              key={o.title}
              onClick={() => setSelected(o)}
              className="group relative overflow-hidden rounded-sm cursor-pointer aspect-[4/3]"
            >
              <img
                src={o.image}
                alt={o.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[hsl(0,0%,0%)]/80 via-[hsl(0,0%,0%)]/30 to-transparent group-hover:from-[hsl(0,0%,0%)]/90 transition-colors duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <span className="text-4xl mb-2 block">{o.icon}</span>
                <h2 className="font-display text-3xl md:text-4xl text-[hsl(0,0%,100%)]">{o.title}</h2>
                <p className="text-[hsl(0,0%,80%)] mt-2">{o.subtitle}</p>
                <span className="inline-block mt-4 text-accent font-semibold text-sm tracking-wide uppercase">
                  Mehr erfahren →
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Detail Modal */}
      {selected && (
        <div
          className="fixed inset-0 z-[100] bg-[hsl(0,0%,0%)]/90 flex items-start justify-center overflow-y-auto"
          onClick={() => setSelected(null)}
        >
          <div
            className="relative w-full max-w-3xl mx-4 my-8 bg-card rounded-sm overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              onClick={() => setSelected(null)}
              className="absolute top-4 right-4 z-10 text-[hsl(0,0%,100%)] hover:text-accent transition-colors"
            >
              <X size={28} />
            </button>

            {/* Image */}
            <div className="relative aspect-video">
              <img
                src={selected.image}
                alt={selected.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
              <div className="absolute bottom-6 left-6">
                <span className="text-4xl">{selected.icon}</span>
                <h2 className="font-display text-4xl md:text-5xl text-[hsl(0,0%,100%)] mt-2">
                  {selected.title}
                </h2>
              </div>
            </div>

            {/* Content */}
            <div className="p-6 md:p-10 space-y-5">
              {selected.paragraphs.map((p, i) => (
                <p key={i} className="text-muted-foreground leading-relaxed">
                  {p}
                </p>
              ))}
              <div className="pt-4">
                <Link
                  to="/kontakt"
                  className="inline-block bg-accent text-accent-foreground px-8 py-3 font-semibold rounded-sm hover:opacity-90 transition-opacity"
                >
                  Jetzt anfragen
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
