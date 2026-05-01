import React, { useEffect, useRef, useState } from 'react';

// --- 1. COMPONENTE PER LE ANIMAZIONI ---
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

// --- 2. DATASET COMPLETO DEL MENU ---
const menuData = [
  {
    category: "Antipasti",
    desc: "I piatti proposti sono perfetti per essere condivisi",
    items: [
      { name: "Bruschette pomodoro, aglio e basilico (6pz)", price: "4 €" },
      { name: "Focaccine di Pan pizza farcite (4pz)", price: "8 €" },
      { name: "Misto caldo", price: "6 € - 10 €", desc: "Disponibile in 2 varianti" },
      { name: "Patatine fritte, salsa ai formaggi e bacon", price: "6 €" },
      { name: "Fiori di zucca* in pastella (6pz)", price: "8 €" },
      { name: "Carciofi* in pastella", price: "8 €" },
      { name: "Cozze", price: "12 €", desc: "Crema, Curry o Gorgonzola" },
      { name: "Degustazione Formaggi Francesi e Salumi", price: "9 € - 16 €" },
      { name: "Tartare", price: "16 €", desc: "Gambero Rosso* o Tonno" },
      { name: "Cruditè", price: "25 €", desc: "Tonno, Salmone, Gambero Rosso, Scampo, Ostrica" }
    ]
  },
  {
    category: "Primi",
    items: [
      { name: "Gnocchi di ricotta gratin", price: "12 €", desc: "Pomodorino pic-pac, grana e melanzana" },
      { name: "Mezzo pacchero con battuto di manzo", price: "14 €", desc: "Con stracciatella fresca" },
      { name: "Ravioli di burrata e porcini", price: "16 €", desc: "Speck e crema di raclette" },
      { name: "Linguine Lime e Tartare di Ombrina*", price: "16 €" },
      { name: "Risotto alle vongole, zenzero e gambero*", price: "18 €" },
      { name: "Busiate al gambero*, pistacchio e pomodoro", price: "18 €" }
    ]
  },
  {
    category: "Secondi",
    items: [
      { name: "Filetto", price: "20 €", desc: "Al Caprino o Ai formaggi francesi" },
      { name: "Entrecote", price: "16 €", desc: "Al Caprino o Ai formaggi francesi" },
      { name: "Pollo", price: "15 €", desc: "Al curry o Alla mostarda" },
      { name: "Petto d'anatra all'arancia (CBT)", price: "16 €" },
      { name: "Tagliata di tonno", price: "18 €" },
      { name: "Salmone in crosta di panella", price: "18 €" }
    ]
  },
  {
    category: "Crêpes Salate",
    items: [
      { name: "La Biquette", price: "9 €", desc: "Caprino caldo, miele, noci e insalata" },
      { name: "La Vegetarienne", price: "9 €", desc: "Patate, funghi, zucchine e salsa formaggi" },
      { name: "La Reclettina", price: "9 €", desc: "Patate, formaggio raclette e bacon" },
      { name: "La Savoyarde", price: "12 €", desc: "Patate, raclette e prosciutto crudo" }
    ]
  },
  {
    category: "Pizze",
    items: [
      { name: "Margherita", price: "6,50 €", desc: "Pomodoro S. Marzano, fior di latte" },
      { name: "Parmigiana", price: "10 €", desc: "Pomodoro, burrata, melanzane, pesto" },
      { name: "Sei Formaggi", price: "11 €", desc: "Fior di latte, stracciatella, scamorza, caprino, gorgonzola, parmigiano" }
    ]
  },
  {
    category: "Dolci",
    items: [
      { name: "Crêpes Dolci", price: "5 €", desc: "Nutella / Fondente / Caramello Salato" },
      { name: "Tiramisù", price: "5 €" },
      { name: "Cheesecake", price: "5 €", desc: "Fragola, Pistacchio, Frutti di bosco" },
      { name: "Creme Brulée", price: "5 €" }
    ]
  }
];

// --- 3. COMPONENTE PRINCIPALE ---
export default function MenuPage() {
  const [activeCategory, setActiveCategory] = useState(menuData[0].category);
  const currentSection = menuData.find(c => c.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white" style={{ paddingBottom: '50px' }}>
      
      {/* HERO SECTION */}
      <section style={{ 
        position: 'relative', 
        height: '300px', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        backgroundImage: 'url("https://i.postimg.cc/ppfvHLYr/Whats-App-Image-2026-04-24-at-19.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}>
        <div style={{ position: 'absolute', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)' }} />
        <h1 style={{ position: 'relative', fontSize: '2.5rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>
          Menu
        </h1>
      </section>

      {/* NAVIGAZIONE CATEGORIE */}
      <div style={{ position: 'sticky', top: 0, backgroundColor: '#0a0a0a', zIndex: 50, padding: '20px 0', borderBottom: '1px solid #333' }}>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap', maxWidth: '1000px', margin: '0 auto', padding: '0 20px' }}>
          {menuData.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveCategory(cat.category)}
              style={{
                padding: '8px 16px',
                borderRadius: '20px',
                border: 'none',
                backgroundColor: activeCategory === cat.category ? '#eab308' : '#222',
                color: activeCategory === cat.category ? 'black' : 'white',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontWeight: 'bold',
                textTransform: 'uppercase',
                transition: '0.3s'
              }}
            >
              {cat.category}
            </button>
          ))}
        </div>
      </div>

      {/* LISTA PIATTI */}
      <main style={{ maxWidth: '800px', margin: '40px auto', padding: '0 20px' }}>
        <AnimatedElement key={activeCategory}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontStyle: 'italic', color: '#eab308' }}>{activeCategory}</h2>
            {currentSection?.desc && <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '10px' }}>{currentSection.desc}</p>}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px' }}>
            {currentSection?.items.map((item, idx) => (
              <div key={item.name + idx} style={{ borderBottom: '1px solid #222', paddingBottom: '15px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <h3 style={{ fontSize: '1.1rem', fontWeight: 'normal', margin: 0 }}>{item.name}</h3>
                  <span style={{ color: '#eab308', fontWeight: 'bold' }}>{item.price}</span>
                </div>
                {item.desc && <p style={{ color: '#666', fontSize: '0.85rem', marginTop: '5px', fontStyle: 'italic' }}>{item.desc}</p>}
              </div>
            ))}
          </div>
        </AnimatedElement>
      </main>

      {/* FOOTER INFO */}
      <footer style={{ textAlign: 'center', marginTop: '60px', padding: '0 20px', color: '#444', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
        <p>* Alcuni ingredienti potrebbero essere surgelati all'origine.</p>
        <p style={{ marginTop: '10px' }}>© ouhlalaterrasini - Digital Menu</p>
      </footer>
    </div>
  );
}
