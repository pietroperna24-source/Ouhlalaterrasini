import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, Facebook, Instagram, Mail, MapPin, Phone } from 'lucide-react';
import { useEffect, useRef } from 'react';

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

export default function ContactPage() {
  // URL di Google Maps configurato per le indicazioni stradali verso l'indirizzo specifico
  const googleMapsUrl = "https://www.google.com/maps/dir/?api=1&destination=Via+V.+Madonia+98+Terrasini+PA";

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            Contatti
          </h1>
          <p className="font-paragraph text-link text-lg md:text-xl max-w-2xl mx-auto">
            Siamo qui per rispondere a tutte le tue domande e prenotazioni
          </p>
        </div>
      </section>

      {/* Contact Info Section */}
      <AnimatedElement>
        <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Information */}
                <div className="space-y-8">
                  <div>
                    <h2 className="font-heading text-4xl font-bold text-primary mb-6">
                      Vieni a Trovarci
                    </h2>
                    <p className="font-paragraph text-link text-lg leading-relaxed mb-8">
                      Riserva il tuo posto per una serata indimenticabile o contattaci per qualsiasi informazione.
                    </p>
                  </div>

                  <div className="flex space-x-4">
                    <Button
                      asChild
                      size="lg"
                      className="bg-primary text-background hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                    >
                      <a href="https://instagram.com/ouhlala_terrasini" target="_blank" rel="noopener noreferrer">
                        <Instagram className="mr-2" size={20} />
                        Instagram
                      </a>
                    </Button>
                    <Button
                      asChild
                      size="lg"
                      variant="outline"
                      className="border-primary text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                    >
                      <a href="https://www.facebook.com/ouhlalacucinafrancese?locale=ga_IE" target="_blank" rel="noopener noreferrer">
                        <Facebook className="mr-2" size={20} />
                        Facebook
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Info Cards */}
                <Card className="bg-background border-primary/20 hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <MapPin className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">Indirizzo</h3>
                        {/* Link all'indirizzo con Google Maps */}
                        <a
                          href={googleMapsUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="font-paragraph text-link hover:text-primary transition-colors group"
                        >
                          <p>
                            Via V. Madonia, 98<br />
                            90049 Terrasini (PA), Sicilia
                          </p>
                          <span className="text-xs text-primary/60 group-hover:text-primary underline">
                            Ottieni indicazioni stradali
                          </span>
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Clock className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">Orari</h3>
                        <p className="font-paragraph text-link">
                          Lunedì – Domenica<br />
                          18:00 – 00:00
                        </p>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">PEC</h3>
                        <a href="mailto:charlottesrls@arubapec.it" className="font-paragraph text-link hover:text-primary transition-colors">
                          charlottesrls@arubapec.it
                        </a>
                      </div>
                    </div>

                    {/* ... keep existing code (Phone and Email sections) */}
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Phone className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">Telefono</h3>
                        <a href="tel:+393274479558" className="font-paragraph text-link hover:text-primary transition-colors">
                          +39 327 447 9558
                        </a>
                      </div>
                    </div>

                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <Mail className="text-primary" size={24} />
                      </div>
                      <div>
                        <h3 className="font-heading text-xl font-bold text-primary mb-2">Email</h3>
                        <a href="mailto:info@ouhlala-terrasini.it" className="font-paragraph text-link hover:text-primary transition-colors">
                          info@ouhlala-terrasini.it
                        </a>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      </AnimatedElement>

      {/* Quick Actions */}
      <AnimatedElement>
        <section className="py-20 bg-secondary/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center space-y-8 bg-background rounded-3xl p-12 shadow-xl border border-primary/20">
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-primary">
                Prenota il Tuo Tavolo
              </h2>
              <p className="font-paragraph text-link text-lg leading-relaxed">
                Contattaci direttamente per prenotare il tuo tavolo e assicurarti un posto per una serata indimenticabile
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-primary text-background hover:bg-primary/90 transition-all duration-200 hover:scale-105"
                >
                  <a href="https://wa.me/393274479558" target="_blank" rel="noopener noreferrer">
                    Prenota via WhatsApp
                  </a>
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary/10 transition-all duration-200 hover:scale-105"
                >
                  <a href="tel:+393274479558">
                    Chiama Ora
                  </a>
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
