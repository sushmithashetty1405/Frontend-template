import React from 'react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      subtitle: 'Customer Care (24/7)',
      mainInfo: '1800-123-4567',
      footer: 'Toll-free number'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      subtitle: 'For loan inquiries',
      mainInfo: 'loans@scb.com',
      footer: 'Response within 24 hours'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Us',
      subtitle: 'Head Office',
      mainInfo: 'SCB Tower, MG Road',
      footer: 'Bengaluru, Karnataka 560001'
    }
  ];

  return (
    <section className="features-section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <p className="section-subtitle">We're here to help you with any questions</p>
        
        <div className="row g-4">
          {contactMethods.map((method, index) => (
            <div key={index} className="col-lg-4">
              <div className="contact-card">
                <div className="feature-icon mx-auto">
                  <i className={method.icon}></i>
                </div>
                <h4>{method.title}</h4>
                <p style={{ color: 'var(--text-medium)' }}>{method.subtitle}</p>
                <h5 style={{ fontWeight: '700', fontSize: '1.3rem' }}>{method.mainInfo}</h5>
                <p className="mb-0" style={{ fontSize: '0.95rem', color: 'var(--text-light)' }}>
                  {method.footer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;