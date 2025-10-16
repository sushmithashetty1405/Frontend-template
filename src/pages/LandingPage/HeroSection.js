import React from 'react';

const HeroSection = ({ onOpenLoginModal }) => {
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
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 hero-content mx-auto text-center">
            <h1>Your Dreams, Our Priority</h1>
            <p className="mx-auto">
              Get instant approval on personal, home, and vehicle loans with competitive interest rates and flexible repayment options.
            </p>
            <div className="mt-4">
              <a href="#loans" className="btn btn-hero" onClick={(e) => handleSmoothScroll(e, '#loans')} style={{ padding: '1rem 2rem', fontSize: '1rem', backgroundColor: '#0473EA' }}>
                Apply for Loan
              </a>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
