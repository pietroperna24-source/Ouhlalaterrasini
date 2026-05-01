import { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ChefHat, Heart, Award, Users } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AnimatedElement: React.FC<{children: React.ReactNode; className?: string}> = ({ children, className }) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        el.classList.add('opacity-100', 'translate-y-0');
        el.classList.remove('opacity-0', 'translate-y-8');
        observer.unobserve(el);
      }
    }, { threshold: 0.1 });
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return <div ref={ref} className={`${className || ''} opacity-0 translate-y-8 transition-all duration-700`}>{children}</div>;
};

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Chi Siamo
          </h1>
          <p className="font-paragraph text-link text-lg md:text-xl max-w-2xl mx-auto">
            La nostra storia di passione, tradizione e innovazione culinaria
          </p>
        </div>
      </section>

      {/* Story Section */}
      <AnimatedElement>
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="space-y-6">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  Dove Parigi abbraccia Palermo
                </h2>
                <p className="font-paragraph text-link text-lg leading-relaxed">
                  Ouhlàlà nasce dalla passione per due mondi culinari straordinari: la raffinatezza della cucina francese e l&apos;autenticità dei sapori siciliani. Nel cuore di Terrasini, abbiamo creato un luogo dove ogni piatto racconta una storia di tradizione e innovazione.
                </p>
                <p className="font-paragraph text-link text-lg leading-relaxed">
                  I nostri ingredienti sono selezionati con cura dai migliori produttori locali e francesi, per offrirvi un&apos;esperienza gastronomica unica. Un viaggio sensoriale che parte dalla Sicilia e arriva fino a Parigi, passando per il cuore.
                </p>
                <p className="font-paragraph text-link text-lg leading-relaxed">
                  La nostra filosofia è semplice: rispettare le tradizioni culinarie di entrambe le culture, utilizzando solo ingredienti di altissima qualità e tecniche di preparazione che esaltano i sapori naturali.
                </p>
              </div>
              <div className="relative">
                <Image
                  src="https://media.base44.com/images/public/69eb8478ebe7ff3b37372107/97e5b1891_20241204_231211.jpg"
                  alt="Il bar di Ouhlàlà"
                  width={600}
                  className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* Values Section */}
      <AnimatedElement>
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary mb-4">
                I Nostri Valori
              </h2>
              <p className="font-paragraph text-link text-lg max-w-2xl mx-auto">
                Ciò che ci guida ogni giorno nella creazione di esperienze culinarie indimenticabili
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
              <Card className="bg-background border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <ChefHat size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Qualità
                  </h3>
                  <p className="font-paragraph text-link leading-relaxed">
                    Solo ingredienti premium selezionati dai migliori produttori locali e francesi
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Heart size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Passione
                  </h3>
                  <p className="font-paragraph text-link leading-relaxed">
                    Amore per la cucina che si riflette in ogni piatto che prepariamo
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Award size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Eccellenza
                  </h3>
                  <p className="font-paragraph text-link leading-relaxed">
                    Standard elevati in ogni aspetto, dalla cucina al servizio
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-background border-primary/20 hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-8 text-center space-y-4">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-4">
                    <Users size={32} />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-primary">
                    Ospitalità
                  </h3>
                  <p className="font-paragraph text-link leading-relaxed">
                    Ogni ospite è parte della nostra famiglia culinaria
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* Experience Section */}
      <AnimatedElement>
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
              <div className="relative order-2 md:order-1">
                <Image
                  src="https://media.base44.com/images/public/69eb8478ebe7ff3b37372107/be9094c36__DCM0065.jpg"
                  alt="Interno del locale"
                  width={600}
                  className="rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-300"
                />
              </div>
              <div className="space-y-6 order-1 md:order-2">
                <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                  Un&apos;Esperienza Unica
                </h2>
                <p className="font-paragraph text-link text-lg leading-relaxed">
                  Da Ouhlàlà non offriamo solo cibo, ma un&apos;esperienza completa che coinvolge tutti i sensi. L&apos;atmosfera elegante e accogliente del nostro locale è stata progettata per farvi sentire a vostro agio, che siate qui per una cena romantica, una serata con amici o un evento speciale.
                </p>
                <p className="font-paragraph text-link text-lg leading-relaxed">
                  Il nostro team di chef esperti combina tecniche culinarie francesi con la generosità e il calore della cucina siciliana, creando piatti che sono vere opere d&apos;arte gastronomiche.
                </p>
                <p className="font-paragraph text-link text-lg leading-relaxed">
                  Organizziamo regolarmente serate a tema, degustazioni di vini e eventi musicali dal vivo per rendere ogni visita un&apos;occasione speciale.
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* Location Section */}
      <AnimatedElement>
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                Vieni a Trovarci
              </h2>
              <p className="font-paragraph text-link text-lg leading-relaxed">
                Situati nel cuore di Terrasini, in Sicilia, siamo facilmente raggiungibili e pronti ad accogliervi per un&apos;esperienza culinaria indimenticabile.
              </p>
              <div className="bg-background rounded-3xl p-8 shadow-xl">
                <div className="space-y-4 font-paragraph text-link">
                  <p className="text-xl font-semibold text-primary">Via Madonia, 94</p>
                  <p className="text-lg">90049 Terrasini (PA), Italia</p>
                  <p className="text-lg">Aperto tutti i giorni: 18:00 – 00:00</p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  size="lg"
                  onClick={() => navigate('/contact')}
                  className="bg-primary text-background hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                >
                  Prenota Tavolo
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => navigate('/menu')}
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                >
                  Vedi il Menu
                </Button>
              </div>
            </div>
          </div>
        </section>
      </AnimatedElement>

      <Footer />
    </div>
  );
}
