// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navigation from './components/layout/Navigation';
import HeroSection from './components/layout/HeroSection';
import AboutSection from './components/layout/AboutSection';
import ProductEcosystem from './components/layout/ProductEcosystem';
import BrightSenseHighlight from './components/layout/BrightSenseHighlight';
import Footer from './components/layout/Footer';
import BrightSensePage from './pages/BrightSensePage';
import InvestPage from './pages/InvestPage';
import ContactPage from './pages/ContactPage';
import ScrollToTop from './components/layout/ScrollToTop';

// Homepage Component
const HomePage = () => {
  return (
    <>
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductEcosystem />
      <BrightSenseHighlight />
      <Footer />
    </>
  );
};

function App() {
  return (
    <Router>
      <div className="App">
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/brightsense" element={<BrightSensePage />} />
          <Route path="/invest" element={<InvestPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
