import React from 'react';

const CTASection = ({ onOpenLoginModal }) => {
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
    <section className="cta-section">
      <div className="container">
        <h2>Ready to Get Started?</h2>
        <p>Apply now and get instant approval on your loan application</p>
        <a
          href="#loans"
          onClick={(e) => handleSmoothScroll(e, '#loans')}
          className="btn-apply"
        >
          Apply for Loan
        </a>
      </div>
    </section>
  );
};

export default CTASection;