import React, { useEffect, useState } from 'react';
import './styles/SCBLoans.css';

const HeroSection = ({ onOpenEligibilityPage }) => {
  const [displayText, setDisplayText] = useState('');
  const fullText = 'Your Dreams , Our Priority';
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayText((prev) => prev + fullText.charAt(index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100); // Adjust speed as needed

    return () => clearInterval(timer);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const target = document.querySelector(targetId);
    if (target) {
      const offsetTop = target.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="hero-section" id="home">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-8 hero-content mx-auto text-center">
            <h1>Your Dreams , Our Priority</h1>
            <p className="mx-auto">
              Get instant approval on personal, home, and vehicle loans with competitive interest rates and flexible repayment options.
            </p>

            <div className="mt-4 d-flex justify-content-center gap-3">
              <a
                href="#loans"
                onClick={(e) => handleSmoothScroll(e, '#loans')}
                className=" btn-apply"
              >
                Apply for Loan
              </a>

              <button
                onClick={onOpenEligibilityPage}
                className="btn-eligibility"
              >
                Check Eligibility
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
