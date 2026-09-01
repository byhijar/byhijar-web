import { motion } from 'framer-motion';
import Hero from './components/sections/Hero';
import Problema from './components/sections/Problema';
import Soluciones from './components/sections/Soluciones';

import SobreMi from './components/sections/SobreMi';
import Contacto from './components/sections/Contacto';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <section id="inicio" aria-label="Inicio">
          <Hero />
        </section>

        <section id="problema" aria-label="El Problema">
          <Problema />
        </section>

        <section id="soluciones" aria-label="Soluciones">
          <Soluciones />
        </section>

        <section id="sobre-mi" aria-label="Sobre Mí">
          <SobreMi />
        </section>

        <section id="contacto" aria-label="Contacto">
          <Contacto />
        </section>
      </motion.main>
      <Footer />
    </div>
  );
}

export default App;
