// src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react'; // Add lazy and Suspense
import Navigation from './components/layout/Navigation';
import HeroSection from './components/layout/HeroSection';
import AboutSection from './components/layout/AboutSection';
import ProductEcosystem from './components/layout/ProductEcosystem';
import BrightSenseHighlight from './components/layout/BrightSenseHighlight';
import Footer from './components/layout/Footer';
import ScrollToTop from './components/layout/ScrollToTop';
import SEO from './components/SEO';

// Lazy load pages that use Three.js or are less critical
const BrightSensePage = lazy(() => import('./pages/BrightSensePage'));
const InvestPage = lazy(() => import('./pages/InvestPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto mb-4"></div>
      <p className="text-gray-600">Loading...</p>
    </div>
  </div>
);

// Homepage Component (not lazy loaded - needs to be fast)
const HomePage = () => {
  return (
    <>
      <SEO 
        title="Seculinx - Advanced Security Solutions for Modern Enterprises"
        description="Seculinx provides cutting-edge cybersecurity solutions including BrightSense AI-powered threat detection. Protect your enterprise with next-generation security technology."
        keywords="cybersecurity, AI security, threat detection, BrightSense, enterprise security, Seculinx, smart home automation"
        canonicalUrl="https://seculinx.com/"
      />
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
          <Route 
            path="/brightsense" 
            element={
              <Suspense fallback={<PageLoader />}>
                <BrightSensePage />
              </Suspense>
            } 
          />
          <Route 
            path="/invest" 
            element={
              <Suspense fallback={<PageLoader />}>
                <InvestPage />
              </Suspense>
            } 
          />
          <Route 
            path="/contact" 
            element={
              <Suspense fallback={<PageLoader />}>
                <ContactPage />
              </Suspense>
            } 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;