import { useEffect } from 'react';
import Hero from './components/Hero';
import Servicios from './components/Servicios';
import CasosExito from './components/CasosExito';
import SobreMi from './components/SobreMi';
import ContactoForm from './components/ContactoForm';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import SEO from './components/SEO';
import ToggleTheme from './components/ToggleTheme';

function App() {
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
  }, []);

  return (
    <main className="scroll-smooth bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors duration-300">
      <Navbar />
      <div id="inicio" className="pt-16">
        <SEO />
        <Hero />
        <Servicios />
        <CasosExito />
        <SobreMi />
        <ContactoForm />
        <WhatsAppButton />
        <ToggleTheme />
        <Footer />
      </div>
    </main>
  );
}

export default App;
