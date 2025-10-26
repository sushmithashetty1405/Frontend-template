import React from 'react';

const StatsSection = () => {
  const stats = [
    { number: '50K+', label: 'Happy Customers' },
    { number: '₹500Cr+', label: 'Loans Disbursed' },
    { number: '98%', label: 'Approval Rate' },
    { number: '24 Hrs', label: 'Quick Disbursement' }
  ];

  return (
    <section className="stats-section">
      <div className="container">
        <div className="row">
          {stats.map((stat, index) => (
            <div key={index} className="col-lg-3 col-md-6">
              <div className="stat-item">
                <div className="stat-number">{stat.number}</div>
                <div className="stat-label">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;