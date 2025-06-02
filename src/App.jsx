import { motion } from 'framer-motion';
import Hero from './components/sections/Hero';
import SobreMi from './components/sections/SobreMi';
import Servicios from './components/sections/Servicios';
import Proyectos from './components/sections/Proyectos';
import Testimonios from './components/shared/Testimonios';
import TechStack from './components/shared/TechStack';
import Blog from './components/shared/Blog';
import Contacto from './components/sections/Contacto';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import './index.css';

function App() {
  return (
    <div className="bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <section id="inicio" aria-label="Inicio">
          <Hero />
        </section>
        <section id="servicios" aria-label="Servicios">
          <Servicios />
        </section>
        <section id="proyectos" aria-label="Proyectos">
          <Proyectos />
        </section>
        <section id="sobre-mi" aria-label="Sobre mí">
          <SobreMi />
        </section>
        <section id="testimonios" aria-label="Testimonios">
          <Testimonios />
        </section> 
        <section id="tech" aria-label="TechStack">
          <TechStack />
        </section>
        <section id="blog" aria-label="Blog">
          <Blog />
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
