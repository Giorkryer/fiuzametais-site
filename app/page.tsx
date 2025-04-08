import Header from '@/components/Header/Header';
import BackgroundSection from '@/components/BackgroundSection';
import ConteudoPrincipal from '@/components/ConteudoPrincipal';
import ServicosSection from '@/components/ServicosSection';
import ProcessoSection from '@/components/ProcessoSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main>
      <Header />
      <BackgroundSection />
      <ConteudoPrincipal />
      <ServicosSection />
      <ProcessoSection />
      <ContactSection />
      <Footer />
    </main>
  );
}