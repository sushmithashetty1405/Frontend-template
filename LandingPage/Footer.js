
import React from 'react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'Loan Types', href: '#loans' },
    { name: 'How It Works', href: '#how-it-works' },
    { name: 'About Us', href: '#about' },
    { name: 'Contact', href: '#contact' }
  ];

  const loanProducts = [
    { name: 'Personal Loan', href: '#' },
    { name: 'Home Loan', href: '#' },
    { name: 'Vehicle Loan', href: '#' },
    { name: 'Eligibility Check', href: '#' }
  ];

  const resources = [
    { name: 'FAQs', href: '#' },
    { name: 'Terms & Conditions', href: '#' },
    { name: 'Privacy Policy', href: '#' },
    { name: 'Loan Agreement', href: '#' },
    { name: 'Grievance Redressal', href: '#' }
  ];

  const socialLinks = [
    { icon: 'bi-facebook', href: 'https://www.facebook.com/StandardCharteredIN/' },
    { icon: 'bi-twitter', href: 'https://x.com/StanChart/' },
    { icon: 'bi-linkedin', href: 'https://in.linkedin.com/company/standardchartered' },
    { icon: 'bi-instagram', href: 'https://www.instagram.com/stanchart/ '}
  ];

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
    <footer className="footer">
      <div className="container">
        <div className="row g-4">
          <div className="col-lg-4">
            <h5><i className="bi bi-bank2"></i> SCB Loans</h5>
            <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.7' }}>
              Your trusted partner for all loan requirements. We provide flexible, secure, and quick loan solutions tailored to your needs.
            </p>
            <div className="social-icons mt-3">
              {socialLinks.map((social, index) => (
                <a key={index} href={social.href}>
                  <i className={social.icon}></i>
                </a>
              ))}
            </div>
          </div>
          
          <div className="col-lg-2 col-md-6">
            <h5>Quick Links</h5>
            <ul>
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} onClick={(e) => handleSmoothScroll(e, link.href)}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5>Loan Products</h5>
            <ul>
              {loanProducts.map((product, index) => (
                <li key={index}>
                  <a href={product.href}>{product.name}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="col-lg-3 col-md-6">
            <h5>Resources</h5>
            <ul>
              {resources.map((resource, index) => (
                <li key={index}>
                  <a href={resource.href}>{resource.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2025 Standard Chartered Bank. All rights reserved. | Designed for SCB Loan Portal</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;