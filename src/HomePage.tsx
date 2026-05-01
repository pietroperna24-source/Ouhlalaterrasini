// WI-HPI
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';
import { MapPin, Phone, X } from 'lucide-react';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// --- Animation Components ---
const AnimatedElement: React.FC<{children: React.ReactNode; className?: string; delay?: number; onClick?: () => void}> = (
  { children, className = '', delay = 0, onClick }
) => {
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
      onClick={onClick}
      className={`transition-all duration-1000 ease-out ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

const FadeIn: React.FC<{children: React.ReactNode; className?: string; delay?: number}> = (
  { children, className = '', delay = 0 }
) => {
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

export default function HomePage() {
  const navigate = useNavigate();
  const [selectedImg, setSelectedImg] = useState<string | null>(null);

  const allRestaurantImages = [
    "https://static.wixstatic.com/media/4904af_0f483cab52df4ede8230b9e740ca5a13~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_12dd76ef5b1a4093b5222ce4b2592112~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_c76fed55f5e540a6a52a51946ad0ac9b~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_dc37a74deb584ee7ae4617a28aa5d375~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_bbee12315b494d3abd4fb4dc7da56697~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_ff9de9956f8a4912b35b51167867754d~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_548bbe74a7044fea9c03c59e79f9d539~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_a34e397bbdae4bb28b5ad9c0d0318211~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_4ba0a37033cd46d3aebac1ae6834b15e~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_e2e1eaf09dfb42fca10d60a07ea88d92~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_87a6c7bfe1374c8faad56a63666fffb2~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_0bac47375d184289b51292687c6bf752~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_5d93a555ede949219a849735d95fbb09~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_d7719eb8746f4e6e8aafe3b73039f6b6~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_db34cbf157064848b3cb29d3932c2a90~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_4bb8625fd54d4e8cb88517cb6280751c~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_8615c934eee6457c91cf160994b54b2f~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_43f1765870404cae87486a45a425b886~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_d602db89c98048e689cc3cd3ffc18498~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_644a05b3f2574a97972721ca6eb10e51~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_3d60f5dbf89545cdbb1c437c11407cd4~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_570caaa64afd4015b0e99ca89605b9d4~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_863cde3258c34ddbbd351e9b9f019840~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_4ab5dafd0df149e38956239bdf9cbb05~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_866727c144e94dfc8e46aa6d4005d459~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_a81b60e89b574d88b33a3712a87ca6c1~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_59e59a2da58944e281f866f6615f2bbf~mv2.jpeg",
    "https://static.wixstatic.com/media/4904af_ca8e7e92dbab4f3d8ae89c2b929a15ab~mv2.jpeg"
  ];

  const handleBookingSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const nome = formData.get('nome');
    const persone = formData.get('persone');
    const data = formData.get('data');
    const ora = formData.get('ora');
    const numeroTelefono = "393274479558";
    const messaggio = `Ciao Ouhlàlà! Vorrei richiedere una prenotazione:%0A- *Nome:* ${nome}%0A- *Persone:* ${persone}%0A- *Data:* ${data}%0A- *Ora:* ${ora}%0A%0AAttendo vostra conferma. Grazie!`;
    window.open(`https://wa.me/${numeroTelefono}?text=${messaggio}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-background text-link font-paragraph selection:bg-primary selection:text-background">
      <Header />

      {/* FULL-SCREEN LIGHTBOX MODAL */}
      {selectedImg && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/98 p-0 cursor-pointer animate-in fade-in duration-300"
          onClick={() => setSelectedImg(null)}
        >
          <button className="absolute top-4 right-4 text-white/70 hover:text-primary z-[110] p-2 bg-black/20 rounded-full">
            <X size={32} />
          </button>
          <Image src={selectedImg} alt="Ingrandimento Ouhlàlà" className="w-full h-auto max-h-screen object-contain animate-in zoom-in-100 duration-500 shadow-[0_0_50px_rgba(0,0,0,0.5)]" />
        </div>
      )}

      {/* HERO SECTION */}
      <section className="relative min-h-[85vh] flex items-center pt-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://static.wixstatic.com/media/4904af_43f1765870404cae87486a45a425b886~mv2.jpeg"
            alt="Ouhlàlà Interior"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-background/70 bg-gradient-to-r from-background/90 via-background/50 to-transparent" />
        </div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-lg">
            <FadeIn delay={200}>
              <div className="bg-white p-8 md:p-10 shadow-2xl space-y-6 border-t-4 border-primary">
                {/* TITOLO MODIFICATO SU DUE RIGHE */}
                <h1 className="font-heading text-3xl md:text-5xl text-background font-bold leading-none uppercase tracking-tighter">
                  Cucina <br />
                  <span className="text-2xl md:text-4xl block mt-1">italo francese</span>
                </h1>

                <div className="pt-4 flex flex-col gap-3">
                  <Button onClick={() => document.getElementById('booking-section')?.scrollIntoView({ behavior: 'smooth' })} className="w-full bg-primary hover:bg-primary/90 text-background rounded-none py-7 font-bold text-base uppercase">Prenota Tavolo</Button>
                  <Button variant="outline" onClick={() => navigate('/menu')} className="w-full border-background/20 text-background hover:bg-background/5 rounded-none py-7 uppercase">Guarda il Menu</Button>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* BIG GALLERY SECTION */}
      <section className="py-20 bg-[#0a0a0a]">
        <div className="container mx-auto px-4">
          <AnimatedElement className="text-center mb-12">
            <p className="text-primary text-xs uppercase tracking-[0.3em] mb-2">Galleria</p>
            <h2 className="font-heading text-3xl md:text-5xl text-white font-light italic">L'Anima di Ouhlàlà</h2>
          </AnimatedElement>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2">
            {allRestaurantImages.map((src, index) => (
              <AnimatedElement
                key={index}
                delay={(index % 12) * 50}
                className="group relative overflow-hidden aspect-[4/5] cursor-zoom-in bg-white/5"
              >
                <div onClick={() => setSelectedImg(src)} className="w-full h-full">
                  <Image
                    src={src}
                    alt={`Ristorante Ouhlàlà Terrasini ${index + 1}`}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="border border-white/50 px-4 py-2 text-white text-[10px] uppercase tracking-widest">Vedi</span>
                  </div>
                </div>
              </AnimatedElement>
            ))}
          </div>
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section id="booking-section" className="py-24 bg-[#0d0d0d] border-y border-white/5">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <AnimatedElement className="space-y-6">
            <h2 className="font-heading text-4xl text-white font-light">Prenota su <span className="italic text-primary">WhatsApp</span></h2>
            <form onSubmit={handleBookingSubmit} className="grid gap-4 mt-8">
              <input name="nome" type="text" placeholder="Tuo Nome" required className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary transition-colors" />
              <div className="grid grid-cols-2 gap-4">
                <select name="persone" required className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary">
                  {[1,2,3,4,5,6,7,8,9,10].map(n => <option key={n} value={n} className="bg-background">{n} {n === 1 ? 'Persona' : 'Persone'}</option>)}
                </select>
                <select name="ora" required className="bg-transparent border-b border-white/20 py-4 text-white focus:outline-none focus:border-primary">
                  {["19:00", "19:30", "20:00", "20:30", "21:00", "21:30", "22:00"].map(h => <option key={h} value={h} className="bg-background">{h}</option>)}
                </select>
              </div>
              <input name="data" type="date" required className="w-full bg-transparent border-b border-white/20 py-4 text-white focus:outline-none [color-scheme:dark]" />
              <Button type="submit" className="mt-6 bg-primary hover:bg-primary/90 text-background py-8 rounded-none font-bold uppercase tracking-widest text-lg">Richiedi Prenotazione</Button>
            </form>
          </AnimatedElement>
        </div>
      </section>

      {/* FOOTER AREA CONTACTS */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-12 text-center md:text-left">
          <div className="space-y-4">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <MapPin className="text-primary" />
              <p className="text-white/80 uppercase tracking-widest text-sm">Via Vincenzo Madonia 94, Terrasini</p>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <Phone className="text-primary" />
              <p className="text-white font-bold">+39 327 447 9558</p>
            </div>
          </div>
          <AnimatedElement
            className="w-full md:w-1/3 aspect-video rounded-sm overflow-hidden border border-white/10 cursor-zoom-in"
            onClick={() => setSelectedImg("https://static.wixstatic.com/media/4904af_43f1765870404cae87486a45a425b886~mv2.jpeg")}
          >
            <Image src="https://static.wixstatic.com/media/4904af_43f1765870404cae87486a45a425b886~mv2.jpeg" alt="Outdoor" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
          </AnimatedElement>
        </div>
      </section>

      <Footer />
    </div>
  );
}
