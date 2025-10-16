import React, { useState } from 'react';
import Navbar from './pages/LandingPage/Navbar';
import HeroSection from './pages/LandingPage/HeroSection';
import FeaturesSection from './pages/LandingPage/FeaturesSection';
import LoanTypesSection from './pages/LandingPage/LoanTypesSection';
import HowItWorksSection from './pages/LandingPage/HowItWorksSection';
import StatsSection from './pages/LandingPage/StatsSection';
import AboutSection from './pages/LandingPage/AboutSection';
import ContactSection from './pages/LandingPage/ContactSection';
import CTASection from './pages/LandingPage/CTASection';
import Footer from './pages/LandingPage/Footer';
import LoginModal from './pages/LandingPage/LoginModal';
import './pages/LandingPage/styles/SCBLoans.css';

function App() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  const handleOpenLoginModal = () => {
    setShowLoginModal(true);
  };

  const handleCloseLoginModal = () => {
    setShowLoginModal(false);
  };

  return (
    <div className="App">
      <Navbar onOpenLoginModal={handleOpenLoginModal} />
      <HeroSection onOpenLoginModal={handleOpenLoginModal} />
      <FeaturesSection />
      <LoanTypesSection onOpenLoginModal={handleOpenLoginModal} />
      <HowItWorksSection />
      <StatsSection />
      <AboutSection />
      <ContactSection />
      <CTASection onOpenLoginModal={handleOpenLoginModal} />
      <Footer />
      
      <LoginModal 
        show={showLoginModal}
        onClose={handleCloseLoginModal}
      />
    </div>
  );
}

export default App;
