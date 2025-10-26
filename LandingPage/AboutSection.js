import React from 'react';

// --- Global Constants (Brand Colors) ---
const ACCENT_CYAN = '#6ee742ffff'; // Bright Cyan for accents
const INDIGO_COLOR = '#104becff'; // Primary Indigo for backgrounds
const DARK_INDIGO_COLOR = '#1e3a8a'; // Dark Indigo for key text
const LIGHT_GREEN = '#81c784'; // New Light Green color for text


// --- Component 1: Hero Section ---
const Hero = () => (
    <section className="hero-section py-5 py-md-5">
        <div className="container text-center py-5">
            {/* FONT SIZE CHANGE: Reduced main heading from display-4 to display-5 */}
            <h1 className="display-5 fw-bolder mb-3">
            <span style={{ color: DARK_INDIGO_COLOR }}>Standard</span> <span style={{ color: LIGHT_GREEN }}>Chartered.</span> <br />
            Connecting Markets, Empowering Communities.
            </h1>
            <p className="lead mx-auto mb-5" style={{ maxWidth: '50rem', fontWeight: '700', color: '#94bca2ff' }}>
            As a leading international banking group, we connect markets and empower communities across Asia, Africa, and the Middle East.
            </p>
        </div>
    </section>
);


// --- Component 2: Content Card (Reusable) ---
const ContentCard = ({ title, body, icon, borderColor }) => (
    // Card uses shadow-sm and border-0. Border color applied to the top border.
    <div className="card h-100 shadow-sm border-0" style={{ borderTop: `4px solid ${borderColor}`, borderRadius: '0.5rem', transition: 'all 0.3s ease-in-out' }}>
      <div className="card-body">
        {icon}
        {/* MARGIN CHANGE: Reduced margin-bottom from mb-3 to mb-2 */}
        <h3 className="card-title h5 fw-semibold mb-2">{title}</h3>
        {/* FONT SIZE CHANGE: Increased font size for better readability */}
        <p className="card-text text-muted" style={{ fontSize: '1.3rem' }}>{body}</p>
      </div>
    </div>
);


// --- Component 3: Mission and Vision Section ---
const MissionVision = () => (
    <section className="py-5 py-md-5">
        <div className="container">
            <div className="row g-4 g-md-5 align-items-center">
                
                {/* Purpose Card */}
                <div className="col-md-6">
                    <ContentCard
                        title="Our Purpose"
                        borderColor={ACCENT_CYAN}
                        body="To drive commerce and prosperity through our unique diversity. We are committed to using our global network and expertise to create positive, sustainable impact in the economies we serve."
                        icon={<svg width="48" height="48" style={{ color: ACCENT_CYAN }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3"><path d="M3 10h18M3 14h18m-9-4v8m-9-4h9m-9 4h9"></path></svg>}
                    />
                </div>

                {/* Strategy Card */}
                <div className="col-md-6">
                    <ContentCard
                        title="Our Strategy"
                        borderColor={INDIGO_COLOR}
                        body="To focus on our Asia, Africa, and Middle East footprint, leveraging digital innovation to deliver best-in-class service and build enduring value for clients and shareholders alike."
                        icon={<svg width="48" height="48" style={{ color: INDIGO_COLOR }} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mb-3"><path d="M9 19V6l12-3v14m-9 4h9a2 2 0 002-2v-3M9 19c-3.879 0-7-.665-7-4v-8c0-2.92 3.121-4 7-4s7 1.08 7 4v8c0 3.335-3.121 4-7 4z"></path></svg>}
                    />
                </div>
            </div>
        </div>
    </section>
);

// --- Component 4: Stat Display (Reusable) ---
const StatDisplay = ({ value, label }) => (
    <div className="text-center p-3">
      {/* FONT SIZE CHANGE: Reduced value size from display-4 to display-5 */}
      <p className="display-5 fw-bolder mb-2" style={{ color: ACCENT_CYAN }}>{value}</p>
      <p className="lead text-light">{label}</p>
    </div>
);

// --- Component 5: Stats Section ---
const StatsSection = () => (
    <section className="py-5 py-md-5" style={{ backgroundColor: INDIGO_COLOR }}>
        <div className="container text-white">
            {/* FONT SIZE CHANGE: Reduced heading size from display-6 to h2 */}
            <h2 className="text-center h2 fw-bolder mb-5">
                A Global Network, <span style={{ color: ACCENT_CYAN }}>Local Expertise</span>
            </h2>
            
            <div className="row g-4">
                <div className="col-6 col-md-3"><StatDisplay value="160+" label="Years of Heritage" /></div>
                <div className="col-6 col-md-3"><StatDisplay value="50+" label="Markets Covered" /></div> 
                <div className="col-6 col-md-3"><StatDisplay value="80K+" label="Diverse Employees" /></div> 
                <div className="col-6 col-md-3"><StatDisplay value="$1.5T" label="Assets Under Management" /></div> 
            </div>
        </div>
    </section>
);


// --- Component 6: Commitment Section ---
const CommitmentSection = () => (
    <section className="py-5 py-md-5">
        <div className="container">
            {/* FONT SIZE CHANGE: Reduced heading size from display-6 to h3 */}
            <h2 className="text-center h3 fw-bolder mb-4" style={{ color: DARK_INDIGO_COLOR }}>Our Commitments</h2>
            
            <div className="row g-4 g-md-5">
                
                <div className="col-md-4">
                    <ContentCard
                    title="Sustainability"
                    borderColor={INDIGO_COLOR}
                    body="We integrate environmental and social concerns into our financing decisions to accelerate the transition to a sustainable global economy."
                    />
                </div>

                <div className="col-md-4">
                    <ContentCard
                    title="Inclusion & Diversity"
                    borderColor={ACCENT_CYAN}
                    body="Fostering an inclusive workplace where all 80,000+ employees feel valued, enabling them to better serve our diverse client base."
                    />
                </div>

                <div className="col-md-4">
                    <ContentCard
                    title="Digital Transformation"
                    borderColor={INDIGO_COLOR}
                    body="Continuously investing in technology to deliver secure, seamless, and client-centric digital banking solutions across our footprint."
                    />
                </div>
            </div>
        </div>
    </section>
);





// --- Main Exported Component: About ---
const About = () => {
  return (
    <React.Fragment>
      {/* 1. CDN Links for Bootstrap CSS and Icons */}
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" 
        xintegrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" 
        crossOrigin="anonymous" 
      />
      <link 
        rel="stylesheet" 
        href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
      />
      
      {/* 2. Custom Styles */}
      <style>{`
        .navbar-custom {
            height: 0; 
            display: none;
        }
        .hero-section {
            background-color: rgba(238, 242, 255, 0.5); 
        }
        .card:hover {
            transform: translateY(-5px);
            box-shadow: 0 1rem 3rem rgba(0,0,0,.175) !important;
        }
      `}</style>


      <div id="about" className="bg-light min-vh-100">
        
        <main>
          <Hero />
          <MissionVision />
          <StatsSection />
          <CommitmentSection />
        </main>
      </div>

      {/* 3. Bootstrap JS Bundle */}
      <script 
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" 
        xintegrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" 
        crossOrigin="anonymous"
      ></script>
    </React.Fragment>
  );
};

export default About;
