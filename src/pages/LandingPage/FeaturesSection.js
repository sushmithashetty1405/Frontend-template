import React from 'react';

const FeaturesSection = () => {
  const features = [
    {
      icon: 'bi-lightning-charge-fill',
      title: 'Instant Approval',
      description: 'Get loan approval within 24 hours with our streamlined digital process and automated verification system.'
    },
    {
      icon: 'bi-percent',
      title: 'Low Interest Rates',
      description: 'Enjoy competitive interest rates starting from 8.5% per annum with flexible EMI options tailored to your needs.'
    },
    {
      icon: 'bi-shield-check',
      title: '100% Secure',
      description: 'Your data is protected with bank-grade encryption and complies with all regulatory security standards.'
    },
    {
      icon: 'bi-file-earmark-text',
      title: 'Minimal Documentation',
      description: 'Apply with just basic documents - Aadhaar, PAN, and income proof. No hidden paperwork required.'
    },
    {
      icon: 'bi-clock-history',
      title: 'Flexible Tenure',
      description: 'Choose repayment periods from 12 to 84 months based on your financial comfort and planning.'
    },
    {
      icon: 'bi-headset',
      title: '24/7 Support',
      description: 'Our dedicated customer support team is available round the clock to assist you with any queries.'
    }
  ];

  return (
    <section className="features-section" id="features">
      <div className="container">
        <h2 className="section-title">Why Choose SCB Loans?</h2>
        <p className="section-subtitle">Experience hassle-free lending with our customer-first approach</p>
        
        <div className="row g-4">
          {features.map((feature, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="card feature-card">
                <div className="feature-icon">
                  <i className={feature.icon}></i>
                </div>
                <h4>{feature.title}</h4>
                <p>{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;