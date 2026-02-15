import { motion } from 'framer-motion';
import Hero from './components/sections/Hero';
import Enfoque from './components/sections/Enfoque';
import Proyectos from './components/sections/Proyectos';
import Trayectoria from './components/sections/Trayectoria';
import TechStack from './components/shared/TechStack';
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

        <section id="proyectos" aria-label="Proyectos">
          <Proyectos />
        </section>

        <Enfoque />

        <section id="trayectoria" aria-label="Trayectoria">
          <Trayectoria />
        </section>

        <section id="tech" aria-label="TechStack">
          <TechStack />
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
