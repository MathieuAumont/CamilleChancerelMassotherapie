import Navigator from './components/navigator'
import Hero from './components/hero'
import MassoSection from './components/massoSection'
import InfoHome from './components/infoHome'
import Footer from './components/footer'
import RendezVous from './components/rendez-vous'
import Apropos from './components/apropos'
import Services from './components/services'
import ScrollToTop from './components/ScrollToTop'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'

// Composant pour la page d'accueil
function HomePage() {
  return (
    <>
      <Hero />
      <Apropos />
      <InfoHome />
      <MassoSection />
      <Services/>
    </>
  );
}

// Composant pour la page rendez-vous
function RendezVousPage() {
  return (
    <>
      <RendezVous />
    </>
  );
}

function App() {
  return (
    <BrowserRouter basename="/CamilleChancerelMassotherapie">
      <ScrollToTop />
      <div>
        <header>
          <Navigator />
        </header>
        <main>
          <Routes>
            <Route path="/CamilleChancerelMassotherapie/" element={<HomePage />} />
            <Route path="/rendez-vous" element={<RendezVousPage />} />
            <Route path="/about" element={<Apropos />} />
            <Route path="/services" element={<Services />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App
