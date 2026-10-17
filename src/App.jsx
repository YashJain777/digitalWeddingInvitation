import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

// Layout & Interactive Components
import Header from './components/Header';
import Footer from './components/Footer';
import Entrance from './components/Entrance';
import MusicPlayer from './components/MusicPlayer';
import PetalsCanvas from './components/PetalsCanvas';
import FlowerShower from './components/FlowerShower';

// Page Components
import Home from './pages/Home';
import GanpatiSthapana from './pages/GanpatiSthapana';
import HaldiMehendi from './pages/HaldiMehendi';
import TheWedding from './pages/TheWedding';
import Celebration from './pages/Celebration';

const AppContent = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
      window.scrollTo(0, 0);
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      window.scrollTo(0, 0);
    }
  }, [location.pathname, isOpen]);

  return (
    <div className="min-h-screen bg-[#FDF0E8] font-inter overflow-x-hidden text-[#2E1810]">
      <AnimatePresence>
        {!isOpen && <Entrance onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      <div
        className={`flex flex-col min-h-screen relative transition-opacity duration-700 ease-out ${
          isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        aria-hidden={!isOpen}
      >
        {/* Subtle Falling Rose Petals & Gold Confetti Canvas */}
        <PetalsCanvas count={45} active={isOpen} />

        <Header />

        <main className="flex-grow pt-14">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/reception" element={<GanpatiSthapana />} />
            <Route path="/sangeet" element={<HaldiMehendi />} />
            <Route path="/wedding" element={<TheWedding />} />
            <Route path="/celebration" element={<Celebration />} />
          </Routes>
        </main>

        {/* Interactive Ceremonial Flower Shower (Pushpavrishti) & Diya Blessing */}
        <FlowerShower />

        {/* Luxury Music Player Button with Audio Wave Rings */}
        <MusicPlayer isOpen={isOpen} />

        <Footer />
      </div>
    </div>
  );
};

const App = () => (
  <Router>
    <AppContent />
  </Router>
);

export default App;
