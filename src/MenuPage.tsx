import React, { useEffect, useRef, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Image } from '@/components/ui/image';

// --- 1. COMPONENTE ANIMATED ELEMENT ---
const AnimatedElement: React.FC<{children: React.ReactNode; className?: string; delay?: number}> = ({
  children, className = '', delay = 0
  }) => {
    const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </div>
  );
};

// --- FADE IN COMPONENT ---
const FadeIn: React.FC<{children: React.ReactNode; className?: string; delay?: number}> = ({
  children, className = '', delay = 0
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setTimeout(() => setIsVisible(true), delay);
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);
  return (
    <div ref={ref} className={`transition-opacity duration-1000 ease-out ${isVisible ? 'opacity-100' : 'opacity-0'} ${className}`}>
      {children}
    </div>
  );
};

// --- 2. DATASET DEL MENU ---
const menuData = [
  {
    category: "Antipasti",
    desc: "I piatti proposti sono perfetti per essere condivisi",
    items: [
      { name: "Bruschette pomodoro, aglio e basilico (6pz)", price: "4 €" },
      { name: "Focaccine di Pan pizza farcite (4pz)", price: "8 €" },
      { name: "Misto caldo", price: "6 € - 10 €", desc: "Disponibile in 2 varianti" },
      { name: "Patatine fritte, salsa ai formaggi e bacon", price: "6 €" },
      { name: "Fiori di zucca* in pastella e salsa formaggi francesi (6pz)", price: "8 €" },
      { name: "Carciofi* in pastella", price: "8 €" },
      { name: "Cozze", price: "12 €", desc: "Crema, Curry o Gorgonzola" },
      { name: "Degustazione Formaggi Francesi e Salumi", price: "9 € - 16 €" },
      { name: "Tartare", price: "16 €", desc: "Gambero Rosso* o Tonno" },
      { name: "Cruditè", price: "25 €", desc: "Tonno, Salmone, Gambero Rosso, Scampo, Ostrica, Crostino ai Ricci" }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Gnocchi di ricotta gratin", price: "12 €", desc: "Pomodorino pic-pac, grana e chiffonade di melanzana" },
      { name: "Mezzo pacchero con battuto di manzo", price: "14 €", desc: "Con stracciatella fresca" },
      { name: "Ravioli di burrata e porcini", price: "16 €", desc: "Speck e crema di raclette" },
      { name: "Linguine Lime e Tartare di Ombrina*", price: "16 €", desc: "Crema di zucchine e lime" },
      { name: "Risotto alle vongole, zenzero e gambero*", price: "18 €" },
      { name: "Busiate al gambero*, pistacchio e pomodoro", price: "18 €" }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Filetto", price: "20 €", desc: "Al Caprino miele e noci o Ai formaggi francesi (Contorno Incluso)" },
      { name: "Entrecote", price: "16 €", desc: "Al Caprino miele e noci o Ai formaggi francesi (Contorno Incluso)" },
      { name: "Pollo", price: "15 €", desc: "Al curry o Alla mostarda" },
      { name: "Petto d'anatra all'arancia (CBT)", price: "16 €", desc: "Purea di patate allo zafferano" },
      { name: "Tagliata di tonno", price: "18 €", desc: "Marmellata di cipolla in agrodolce" },
      { name: "Salmone in crosta di panella", price: "18 €", desc: "Crema di finocchi al Pernod" },
      { name: "Frittura mista di pesce* S.D.", price: "15 € - 28 €" },
      { name: "Merluzzo* fritto e riso thai", price: "16 €", desc: "Verdure e salsa soia" }
    ]
  },
  {
    category: "Crêpes Salate",
    items: [
      { name: "La Biquette", price: "9 €", desc: "Formaggio di capra caldo, miele, noci e insalata" },
      { name: "La Vegetarienne", price: "9 €", desc: "Patate, funghi, zucchine e salsa ai formaggi" },
      { name: "La Campagnarde", price: "10 €", desc: "Patate, pancetta, funghi, panna e prezzemolo" },
      { name: "L'Atlantique", price: "12 €", desc: "Salmone affumicato, philadelphia e insalata" },
      { name: "La Reclettina", price: "9 €", desc: "Patate, formaggio raclette e bacon" },
      { name: "La Savoyarde", price: "12 €", desc: "Patate, formaggio raclette e prosciutto crudo" },
      { name: "La Maxi", price: "12 €", desc: "Vitello, formaggio, cipolla e funghi" },
      { name: "La Fermiere", price: "10 €", desc: "Bacon, caprino, panna e patate" },
      { name: "La Brie Sucrée", price: "10 €", desc: "Formaggio brie, pere caramellate, noci e insalata" },
      { name: "La Popeye", price: "10 €", desc: "Spinaci, bechamelle, funghi e salsiccia" },
      { name: "Méditerranéen", price: "14 €", desc: "Insalata con tagliatella di seppia* alla trapanese, mandorle tostate" }
    ]
  },
  {
    category: "Burger",
    desc: "Serviti con patate fritte*",
    items: [
      { name: "Burger Bacon", price: "10 €", desc: "Vitello, cipolla crispy, bacon, cheddar, lattuga, pomodoro" },
      { name: "Chicken Burger", price: "10 €", desc: "Pollo* crispy, cipolla crispy, bacon, cheddar, lattuga, pomodoro" },
      { name: "Vegetarien Burger", price: "8 €", desc: "Melanzane, zucchine, uovo, cipolle crispy, cheddar, lattuga" },
      { name: "Savoyard Burger", price: "10 €", desc: "Vitello, formaggio raclette, cipolla, bacon" },
      { name: "Burger Patanegra", price: "10 €", desc: "Suino, lardo di patanegra, scamorza, bacon" },
      { name: "Burger New York", price: "10 €", desc: "Vitello, raclette, bacon, cipolla caramellata, mele" }
    ]
  },
  {
    category: "Insalate",
    items: [
      { name: "Insalata Caprino", price: "9 €", desc: "Caprino caldo su toast, miele e noci" },
      { name: "Insalata Cesar", price: "10 €", desc: "Pollo croccante, grana, pomodorini, crostini all'aglio e salsa yogurt" },
      { name: "Insalata Tropical", price: "10 €", desc: "Gorgonzola, avocado, noci, cipolla rossa e cetrioli" },
      { name: "Eoliana", price: "12 €", desc: "Finocchi, arance, olive, cipolla rossa e alici" }
    ]
  },
  {
    category: "Pizze",
    items: [
      { name: "Biancaneve", price: "5 €", desc: "Fior di latte, olio EVO, basilico" },
      { name: "Margherita", price: "6,50 €", desc: "Pomodoro S. Marzano, fior di latte, olio EVO, basilico" },
      { name: "Romana", price: "8 €", desc: "Pomodoro, fior di latte, cotto arrosto, olio EVO" },
      { name: "Napoli", price: "9 €", desc: "Pomodoro, fior di latte, acciughe del cantabrico, olive taggiasche" },
      { name: "Marinara", price: "7 €", desc: "Pomodoro S. Marzano, aglio, origano, olio EVO" },
      { name: "Sfincionello", price: "8 €", desc: "Pomodoro, cipolla, caciocavallo, acciughe, pan grattato, origano" },
      { name: "Parmigiana", price: "10 €", desc: "Pomodoro, burrata, melanzane, pesto, parmigiano DOP" },
      { name: "Capricciosa", price: "10 €", desc: "Pomodoro, fior di latte, cotto, carciofi, olive, funghi" },
      { name: "Sei Formaggi", price: "11 €", desc: "Fior di latte, stracciatella, scamorza, caprino, gorgonzola, parmigiano, marmellata fichi" },
      { name: "Calzone", price: "9 €", desc: "Pomodoro, fior di latte, prosciutto cotto arrosto" },
      { name: "Salsiccia e Funghi", price: "9 €", desc: "Fior di latte, ragù di salsiccia, funghi cremini, pomodorino confit" },
      { name: "Vegetariana", price: "11 €", desc: "Pomodoro, burrata affumicata, porcini, pomodorini, verdure grigliate" },
      { name: "Tunnina", price: "12 €", desc: "Pomodoro, tonno CBT, cipolla rossa, olive, fior di cappero, menta" },
      { name: "Patanegra", price: "12 €", desc: "Fior di latte, patate julienne, lardo patanegra, gorgonzola, noci" },
      { name: "Mare Monte", price: "10 €", desc: "Pomodoro S. Marzano, acciughe del cantabrico, stracciatella" }
    ]
  },
  {
    category: "Schiacciate",
    items: [
      { name: "Rustica", price: "9 €", desc: "Fior di latte, cotto arrosto, pomodoro a fette, acciughe" },
      { name: "Regina", price: "12 €", desc: "Burrata affumicata, culatta, rucola, datterino, parmigiano DOP" },
      { name: "Affumicata", price: "9 €", desc: "Fior di latte, scamorza, speck dei nebrodi, pomodorino confit" },
      { name: "Mortazza", price: "8 €", desc: "Mortadella, limone a fette, olio EVO, basilico" },
      { name: "Bresaola", price: "12 €", desc: "Soncino, parmigiano, limone, sale Maldon, pepe Madagascar" },
      { name: "Piccante", price: "10 €", desc: "Fior di latte, melanzane, salamino piccante, caciocavallo" },
      { name: "Porchetta", price: "12 €", desc: "Scamorza affumicata, cipolla, funghi, porchetta artigianale" }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Crêpes Dolci", price: "5 €", desc: "Nutella / Fondente / Caramello Salato / Kinder / Grand Marnier / Miele e Noci" },
      { name: "Soufflé", price: "5 €", desc: "Fondente / Bianco / Pistacchio" },
      { name: "Tiramisù", price: "5 €" },
      { name: "Cheesecake", price: "5 €", desc: "Fragola, Pistacchio, Frutti di bosco, Caramello, Nutella" },
      { name: "Eclair au Citron", price: "6 €", desc: "Bignè, crema limone, meringa flambata o al cioccolato" },
      { name: "Big Macaron", price: "6 €", desc: "Al pistacchio o ai frutti di bosco" },
      { name: "Creme Brulée", price: "5 €" }
    ]
  },
  {
    category: "Drink",
    items: [
      { name: "Lattine", price: "2,50 €", desc: "Coca, Zero, Fanta, Sprite, Chinotto, The freddo" },
      { name: "Bitter (Bianco / Rosso)", price: "3 €" },
      { name: "Red Bull", price: "4 €" },
      { name: "Succhi di frutta", price: "2,50 €", desc: "Ananas, Arancia, Pesca, Pera, Mirtilli, Fragola" },
      { name: "Acqua", price: "1 € - 2 €", desc: "Naturale o Frizzante (Piccola / Grande)" },
      { name: "Birre Classiche", price: "2,50 € - 3,50 €", desc: "Moretti, Nastro Azzurro, Beck's, Heineken, Messina" },
      { name: "Birre Speciali", price: "4 € - 5 €", desc: "Ichnusa, Corona, Ceres, Paulaner, Tennent's" },
      { name: "Amari e Caffè", price: "Contattare staff", desc: "Amaro del Capo, Averna, Unicum, Monte Polizo, Caffè" }
    ]
  }
];

// --- 3. COMPONENTE PRINCIPALE ---
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);

  const currentSection = menuData.find(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-background text-link font-paragraph selection:bg-primary selection:text-background">
      <Header />

      {/* HERO SECTION - Same as HomePage with menu-specific details */}
      <section className="relative min-h-[70vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://i.postimg.cc/ppfvHLYr/Whats-App-Image-2026-04-24-at-19.jpg"
            alt="Ouhlàlà Menu"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/70 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-lg">
            <FadeIn delay={200}>
              <div className="bg-white p-8 md:p-10 shadow-2xl space-y-6 border-t-4 border-primary">
                <h1 className="font-heading text-3xl md:text-4xl text-background font-bold leading-tight uppercase tracking-tighter">Scopri il Nostro Menu</h1>
                <p className="text-background/80 text-sm leading-relaxed">Dalla cucina francese alla tradizione siciliana, ogni piatto è un'esperienza culinaria unica.</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* MENU SECTION */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-6 max-w-4xl">
          {/* Header */}
          <AnimatedElement className="text-center mb-16">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">Menu Completo</p>
            <h2 className="font-heading text-4xl md:text-5xl text-white font-light italic">Ouhlàlà</h2>
            <p className="text-white/60 text-sm mt-4 uppercase tracking-widest">Restaurant & Crêperie</p>
          </AnimatedElement>

          {/* Navigazione Categorie */}
          <nav className="flex flex-wrap justify-center gap-3 mb-16 pb-8 border-b border-white/10">
            {menuData.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`px-6 py-2 rounded-full text-sm font-bold uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === cat.category
                    ? 'bg-primary text-background shadow-lg shadow-primary/30'
                    : 'bg-white/10 text-white/70 hover:bg-white/20 border border-white/20'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </nav>

          {/* Main Content */}
          <main key={activeCategory}>
            <AnimatedElement className="space-y-12">
              <div className="text-center mb-12">
                <h3 className="font-heading text-3xl md:text-4xl text-white font-light italic mb-4">{activeCategory}</h3>
                {currentSection?.desc && (
                  <p className="text-white/60 text-sm uppercase tracking-widest">{currentSection.desc}</p>
                )}
              </div>

              <div className="space-y-8">
                {currentSection?.items.map((item, idx) => (
                  <AnimatedElement key={item.name + idx} delay={idx * 50}>
                    <div className="border-b border-white/10 pb-6 last:border-b-0">
                      <div className="flex justify-between items-start gap-4 mb-2">
                        <h4 className="font-heading text-white text-lg font-light flex-1">{item.name}</h4>
                        <span className="text-primary font-bold text-lg whitespace-nowrap">{item.price}</span>
                      </div>
                      {item.desc && (
                        <p className="text-white/50 text-sm italic">{item.desc}</p>
                      )}
                    </div>
                  </AnimatedElement>
                ))}
              </div>
            </AnimatedElement>
          </main>

          {/* Footer Info */}
          <AnimatedElement className="mt-20 pt-12 border-t border-white/10 text-center space-y-3">
            <p className="text-white/50 text-xs uppercase tracking-widest">* Alcuni ingredienti potrebbero essere surgelati all'origine (S.D. Secondo Disponibilità).</p>
            <p className="text-white/50 text-xs uppercase tracking-widest">Servizio tutti i giorni dalle 18:30 alle 23:00</p>
            <p className="text-white/40 text-xs mt-6">© OUH LÀ LÀ - Digital Experience</p>
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
