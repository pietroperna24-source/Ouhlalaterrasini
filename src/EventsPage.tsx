import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Image } from '@/components/ui/image';
import { Calendar, ExternalLink, X, Search } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

// --- CONFIGURAZIONE ---
const WHATSAPP_NUMBER = "393274479558";

const MANUAL_EVENTS = [
  {
    _id: '0',
    title: "Domenica a Pranzo da Ouh là là",
    description: "Unisciti a noi per un pranzo speciale all'insegna della cucina francese. Atmosfera accogliente e piatti ricercati. Gradita la prenotazione.",
    dateTime: "2026-04-26T13:00:00",
    eventType: "Pranzo Domenicale",
    image: "https://scontent.fnap7-2.fna.fbcdn.net/v/t39.30808-6/679184160_4513452858876407_7276080807561636825_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=7b2446&_nc_ohc=0u0F_kXRkXcQ7kNvwG9Nme_&_nc_oc=AdoC6eB4mdaa6IB02x0HAMHWvtCVev_ofa6drAgnCiiFHV3NdHSK5mkeoEdWywk5rYk&_nc_zt=23&_nc_ht=scontent.fnap7-2.fna&_nc_gid=SntlYV9wDpAKmG6hnD67pA&_nc_ss=7b2a8&oh=00_Af313puGupU--vE8fh5tqnBU22Li1y57Wxdq-U8iEENzMQ&oe=69F3B69F",
  },
  {
    _id: '1',
    title: "Serata Degustazione Formaggi",
    description: "Un viaggio sensoriale tra i migliori formaggi d'oltralpe accompagnati da vini selezionati.",
    dateTime: "2024-03-20T20:30:00",
    eventType: "Degustazione",
    image: "https://images.unsplash.com/photo-1452195100486-9cc805987862?q=80&w=1000",
  },
  {
    _id: '2',
    title: "Live Jazz & Dinner",
    description: "Atmosfera parigina con musica jazz dal vivo e il nostro menu speciale alla carta.",
    dateTime: "2024-04-12T21:00:00",
    eventType: "Musica dal Vivo",
    image: "https://images.unsplash.com/photo-1511192336575-5a79af67a629?q=80&w=1000",
  }
];

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

export default function EventsPage() {
  const events = MANUAL_EVENTS;
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Funzione per generare il link WhatsApp con messaggio preimpostato
  const generateWhatsAppLink = (eventTitle: string, eventDate: string) => {
    const dateFormatted = new Date(eventDate).toLocaleDateString('it-IT', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    });

    const message = `Ciao Ouh là là! Mi chiamo [Inserisci Nome] e vorrei prenotare per l'evento "${eventTitle}" del ${dateFormatted}. Saremo in [Numero] persone. Resto in attesa di conferma. Grazie!`;

    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Lightbox per visualizzare l'immagine intera */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4 animate-in fade-in duration-300"
          onClick={() => setSelectedImage(null)}
        >
          <button className="absolute top-6 right-6 text-white hover:text-primary transition-colors">
            <X size={40} />
          </button>
          <Image src={selectedImage} alt="Event Fullscreen" className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-2xl" />
        </div>
      )}

      {/* Hero Section */}
      <section className="relative py-24 bg-gradient-to-b from-secondary/20 to-background">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-primary mb-6">
            I Nostri Eventi
          </h1>
          <p className="font-paragraph text-link text-lg md:text-xl max-w-2xl mx-auto">
            Scopri le nostre serate speciali a Terrasini. <br />
            Clicca sulle locandine per ingrandirle e prenota comodamente via WhatsApp.
          </p>
        </div>
      </section>

      {/* Events Grid */}
      <section className="py-16 min-h-[600px]">
        <div className="container mx-auto px-4">
          {events.length > 0 ? (
            <AnimatedElement>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                {events.map((event) => (
                  <Card
                    key={event._id}
                    className="bg-background border-primary/20 hover:shadow-xl transition-all duration-300 overflow-hidden group flex flex-col h-full"
                  >
                    {/* Immagine con Zoom */}
                    {event.image && (
                      <div
                        className="relative h-64 overflow-hidden cursor-zoom-in"
                        onClick={() => setSelectedImage(event.image)}
                      >
                        <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity z-10 flex items-center justify-center">
                            <div className="bg-background/90 p-3 rounded-full text-primary shadow-lg">
                                <Search size={24} />
                            </div>
                        </div>
                        <Image
                          src={event.image}
                          alt={event.title}
                          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                      </div>
                    )}

                    <CardContent className="p-6 flex flex-col flex-grow space-y-4">
                      {/* Data Evento */}
                      {event.dateTime && (
                        <div className="flex items-center space-x-2 text-primary">
                          <Calendar size={18} />
                          <span className="font-paragraph text-sm font-semibold capitalize">
                            {new Date(event.dateTime).toLocaleDateString('it-IT', {
                              weekday: 'long',
                              day: 'numeric',
                              month: 'long',
                              year: 'numeric'
                            })}
                          </span>
                        </div>
                      )}

                      {/* Titolo e Descrizione */}
                      <div className="flex-grow">
                        <h3 className="font-heading text-2xl font-bold text-primary mb-2">
                          {event.title}
                        </h3>
                        <p className="font-paragraph text-link leading-relaxed text-sm md:text-base">
                          {event.description}
                        </p>
                      </div>

                      {/* Pulsante Prenotazione */}
                      <Button asChild className="w-full bg-primary text-background hover:bg-primary/90 mt-4">
                        <a
                          href={generateWhatsAppLink(event.title, event.dateTime)}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center"
                        >
                          Prenota su WhatsApp
                          <ExternalLink size={16} className="ml-2" />
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </AnimatedElement>
          ) : (
            <div className="text-center py-20 italic text-muted-foreground">
              Al momento non ci sono eventi in programma. Torna a trovarci!
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
