import React from 'react';

const LoanTypesSection = ({ onOpenLoginModal }) => {
  const loanTypes = [
    {
      icon: 'bi-person-circle',
      title: 'Personal Loan',
      description: 'Quick funds for any personal need without collateral',
      features: [
        'Up to ₹25 Lakhs',
        'Interest from 8.5% p.a.',
        'Tenure: 12-60 months',
        'No collateral required'
      ]
    },
    {
      icon: 'bi-house-door-fill',
      title: 'Home Loan',
      description: 'Turn your dream home into reality with affordable rates',
      features: [
        'Up to ₹5 Crores',
        'Interest from 7.5% p.a.',
        'Tenure: up to 30 years',
        'Tax benefits available'
      ]
    },
    {
      icon: 'bi-car-front-fill',
      title: 'Vehicle Loan',
      description: 'Drive your dream car or bike with easy financing',
      features: [
        'Up to ₹50 Lakhs',
        'Interest from 8.0% p.a.',
        'Tenure: 12-84 months',
        'Up to 90% financing'
      ]
    }
  ];

  return (
    <section className="loan-types-section" id="loans">
      <div className="container">
        <h2 className="section-title">Explore Our Loan Products</h2>
        <p className="section-subtitle">Choose the loan that fits your needs perfectly</p>
        
        <div className="row g-4">
          {loanTypes.map((loan, index) => (
            <div key={index} className="col-lg-4 col-md-6">
              <div className="loan-card">
                <div className="loan-icon">
                  <i className={loan.icon}></i>
                </div>
                <h3>{loan.title}</h3>
                <p>{loan.description}</p>
                <ul className="loan-features">
                  {loan.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>
                      <i className="bi bi-check-circle-fill"></i> {feature}
                    </li>
                  ))}
                </ul>
                <button onClick={onOpenLoginModal} className="btn btn-hero w-100 mt-3">
                  Apply Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LoanTypesSection;