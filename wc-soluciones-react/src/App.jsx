import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Importación de Componentes
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Indicators from './components/Indicators';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import WhatsAppBtn from './components/WhatsAppBtn';
import ServiceDetail from './components/services/ServiceDetail';
import './index.css';

// 1. Definimos la Página Principal (Home) agrupando sus secciones
const Home = () => (
  <main>
    <Hero />
    <Services />
    <Indicators />
    <FAQ />
  </main>
);

// 2. Definimos la Aplicación Principal con el Router
function App() {
  return (
    <BrowserRouter>
      {/* El Navbar se queda afuera de Routes para que se vea en todas las páginas */}
      <Navbar />

      <Routes>
        {/* Ruta principal (Inicio) */}
        <Route path="/" element={<Home />} />

        {/* Ruta dinámica para cada servicio */}
        <Route path="/servicio/:id" element={<ServiceDetail />} />
      </Routes>

      {/* El Footer y el Botón se quedan afuera para que aparezcan siempre */}
      <Footer />
      <WhatsAppBtn />
    </BrowserRouter>
  );
}

export default App;