import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Indicators from './components/Indicators';
import FAQ from './components/FAQ';
import WhatsAppBtn from './components/WhatsAppBtn'; /* <--- Importamos el botón */
import './index.css';
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Indicators />
        <FAQ />
        <Footer />
      </main>

      {/* Colocamos el botón al final */}
      <WhatsAppBtn />
    </>
  );
}

export default App;