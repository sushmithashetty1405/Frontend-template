import React, { useState } from 'react';

const HowItWorksSection = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '1',
      title: 'Choose Loan Type',
      description: 'Select from Personal, Home, or Vehicle loan based on your requirement',
      icon: 'bi-check-circle-fill',
      color: '#00c4cc'
    },
    {
      number: '2',
      title: 'Fill Application',
      description: 'Complete our easy multi-step form with your personal and employment details',
      icon: 'bi-file-earmark-text-fill',
      color: '#4f46e5'
    },
    {
      number: '3',
      title: 'Get Verified',
      description: 'Our team reviews your application and documents for quick approval',
      icon: 'bi-shield-check',
      color: '#81c784'
    },
    {
      number: '4',
      title: 'Receive Funds',
      description: 'Get loan amount disbursed directly to your account within 24 hours',
      icon: 'bi-cash-coin',
      color: '#ff9800'
    }
  ];

  return (
    <section className="how-it-works-section" id="how-it-works">
      <div className="container">
        <h2 className="section-title">How It Works</h2>
        <p className="section-subtitle">Get your loan in just 4 simple steps</p>

        {/* Interactive Timeline */}
        <div className="timeline-container">
          <div className="timeline">
            {steps.map((step, index) => (
              <div
                key={index}
                className={`timeline-step ${activeStep === index ? 'active' : ''}`}
                onClick={() => setActiveStep(index)}
              >
                <div className="timeline-icon" style={{ backgroundColor: step.color }}>
                  <i className={`bi ${step.icon}`}></i>
                </div>
                <div className="timeline-content">
                  <h4>{step.title}</h4>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>

      <style jsx>{`
        .timeline-container {
          margin: 3rem 0;
        }

        .timeline {
          display: flex;
          justify-content: space-between;
          align-items: center;
          position: relative;
          padding: 2rem 0;
        }

        .timeline::before {
          content: '';
          position: absolute;
          top: 50%;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(to right, #00c4cc, #4f46e5, #81c784, #ff9800);
          z-index: 1;
        }

        .timeline-step {
          background: white;
          border-radius: 10px;
          padding: 1.5rem;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          z-index: 2;
          text-align: center;
          flex: 1;
          margin: 0 0.5rem;
        }

        .timeline-step:hover,
        .timeline-step.active {
          transform: translateY(-5px);
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .timeline-icon {
          width: 60px;
          height: 60px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1rem;
          color: white;
          font-size: 1.5rem;
        }

        .timeline-content h4 {
          margin-bottom: 0.5rem;
          font-size: 1.1rem;
          font-weight: 600;
        }

        .timeline-content p {
          font-size: 0.9rem;
          color: #666;
          margin: 0;
        }

        .step-detail {
          background: linear-gradient(135deg, #f8f9fa 0%, #e9ecef 100%);
          border-radius: 15px;
          padding: 3rem;
          margin-top: 3rem;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .step-visual {
          text-align: center;
        }

        .step-number-large {
          font-size: 6rem;
          font-weight: bold;
          opacity: 0.1;
          margin-bottom: -2rem;
        }

        .step-icon-large {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 3rem;
          margin: 0 auto;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        .step-description {
          font-size: 1.2rem;
          line-height: 1.6;
          color: #555;
          margin-bottom: 2rem;
        }

        .step-indicators {
          display: flex;
          justify-content: center;
          gap: 1rem;
        }

        .indicator {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .indicator:hover {
          transform: scale(1.2);
        }

        @media (max-width: 768px) {
          .timeline {
            flex-direction: column;
            gap: 1rem;
          }

          .timeline::before {
            display: none;
          }

          .timeline-step {
            width: 100%;
            margin: 0;
          }

          .step-detail {
            padding: 2rem 1rem;
          }

          .step-number-large {
            font-size: 4rem;
          }

          .step-icon-large {
            width: 80px;
            height: 80px;
            font-size: 2rem;
          }
        }
      `}</style>
    </section>
  );
};

export default HowItWorksSection;
