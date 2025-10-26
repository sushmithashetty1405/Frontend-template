import React from 'react';

const ContactSection = () => {
  const contactMethods = [
    {
      icon: 'bi-telephone-fill',
      title: 'Call Us',
      subtitle: 'Customer Care (24/7)',
      mainInfo: '6601 2424',
      footer: 'Toll-free number'
    },
    {
      icon: 'bi-envelope-fill',
      title: 'Email Us',
      subtitle: 'For loan inquiries',
      mainInfo: 'customercare.business@sc.com',
      footer: 'Response within 24 hours',
      action: () => window.location.href = 'mailto:customercare.business@sc.com'
    },
    {
      icon: 'bi-geo-alt-fill',
      title: 'Visit Us',
      subtitle: 'Head Office',
      mainInfo: 'SCB Tower, MG Road',
      footer: 'Bengaluru, Karnataka 560001',
      action: () => window.open('https://www.bing.com/maps/search?mepi=0%7ELocal%7EEmbedded%7EEntity_Vertical_List_Card&ty=17&chain=2530023&poicount=18&sei=0&FORM=MPSRPL&q=standardad+charted+location&secq=1&sece=ypid.YN4070x857017255201156777&ppois=12.973247528076172_77.61396026611328_Standard+Chartered+Bank-M+G+Road+-+M+G+Road_YN4070x857017255201156777%7E13.00469970703125_77.581298828125_Standard+Chartered_YN4070x112207909769699578%7E12.970521926879883_77.61030578613281_Standard+Chartered+Finance+Private+Limited_YN4070x8459782111932105610%7E12.933347702026367_77.61326599121094_Standard+Chartered+Bank_YN4070x9577780185381364293%7E&segment=Local&cp=12.992375%7E77.292956&lvl=11.7&style=r', '_blank')
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
              <div className="contact-card" onClick={method.action} style={{ cursor: method.action ? 'pointer' : 'default' }}>
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