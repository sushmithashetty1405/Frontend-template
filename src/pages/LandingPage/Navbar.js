import React, { useState, useEffect } from 'react';

const Navbar = ({ onOpenLoginModal }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className={`navbar navbar-expand-lg fixed-top ${scrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <a className="navbar-brand" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>
          <img
            src="/images/Sc-logo.jpg"
            alt="Standard Chartered"
            className="navbar-logo"
          />
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a className="nav-link" href="#home" onClick={(e) => handleSmoothScroll(e, '#home')}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#loans" onClick={(e) => handleSmoothScroll(e, '#loans')}>Loan Types</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#how-it-works" onClick={(e) => handleSmoothScroll(e, '#how-it-works')}>How It Works</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#about" onClick={(e) => handleSmoothScroll(e, '#about')}>About Us</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contact" onClick={(e) => handleSmoothScroll(e, '#contact')}>Contact</a>
            </li>
            <li className="nav-item">
              <button onClick={onOpenLoginModal} className="btn btn-login ms-3">Login / Sign Up</button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;