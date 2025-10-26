                        import React, { useState, useEffect } from 'react';

                        // Main component, matching the desired file name structure.
                        const EligibilityChecker = ({ show, onClose }) => {
                            // 1. STATE MANAGEMENT
                            const [currentStep, setCurrentStep] = useState(1);
                            const [formData, setFormData] = useState({
                                fullName: '', email: '', phone: '', country: 'Singapore',
                                employmentStatus: 'Salaried', industry: '', monthlyIncome: 0,
                                existingClient: false,
                                existingLoans: '0',
                                terms: false
                            });
                            const [isSubmitted, setIsSubmitted] = useState(false);
                            const [isEligible, setIsEligible] = useState(false);

                            // 3. EFFECT for enabling/disabling submit button
                            useEffect(() => {
                                const submitButton = document.getElementById('submit-btn');
                                if (submitButton) {
                                    submitButton.disabled = !formData.terms;
                                }
                            }, [formData.terms]);

                            if (!show) return null;

                            // Color Constants for easy modification
                            const COLORS = {
                                // NEW COLOR: #0653de for all primary blue elements
                                PRIMARY_BLUE: '#0653de',

                                // Darker shade for hover states (calculated from #0653de)
                                DARK_BLUE_HOVER: '#043bb5',

                                // Other colors remain the same
                                EMERALD: '#059669',  // Success Green
                                ROSE: '#f43f5e',     // Error Red
                                SLATE: '#64748b',    // Neutral Text
                                BG_LIGHT: '#f8fafc', // Light Background (used for inactive steps)
                                VERY_LIGHT_BG: '#f0f9ff', // Pale background color
                                WHITE: '#ffffff'
                            };

                            // 2. LOGIC HANDLERS
                            const handleChange = (e) => {
                                const { id, value, type, checked } = e.target;
                                setFormData(prev => ({
                                    ...prev,
                                    [id]: type === 'checkbox' ? checked : value
                                }));
                            };

                            const navigateToStep = (step) => {
                                setCurrentStep(step);
                            };

                            const handleClose = () => {
                                // Resets the view to the initial state (Step 1, not submitted)
                                setCurrentStep(1);
                                setIsSubmitted(false);
                                // Note: Form data is retained to let the user pick up where they left off if they choose to re-open.
                                onClose(); // Call the parent's close handler
                            };

                            const handleSubmit = (e) => {
                                e.preventDefault();

                                const income = parseFloat(formData.monthlyIncome);
                                const country = formData.country;
                                // Convert to integer for comparison
                                const existingLoans = parseInt(formData.existingLoans, 10);

                                // --- UPDATED MOCK ELIGIBILITY LOGIC ---
                                // 1. Income >= 100,000 Rs
                                // 2. Country is not Kenya
                                // 3. Existing Loans <= 3
                                if (income >= 100000 && country !== 'Kenya' && existingLoans <= 3) {
                                    setIsEligible(true);
                                } else {
                                    setIsEligible(false);
                                }

                                setIsSubmitted(true);
                            };

                            // 4. RENDER HELPERS
                            const renderStepBubble = (stepNum, label) => {
                                let className = 'step-bubble';
                                if (stepNum < currentStep) {
                                    className += ' step-complete';
                                } else if (stepNum === currentStep) {
                                    className += ' step-active';
                                } else {
                                    className += ' step-inactive';
                                }

                                const content = stepNum < currentStep ? '✓' : stepNum;

                                return (
                                    <div className="step-indicator">
                                        <span className={className}>{content}</span>
                                        <span className="step-label">{label}</span>
                                    </div>
                                );
                            };

                            // 5. COMPONENT STRUCTURE (JSX)
                            const handleModalClick = (e) => {
                                if (e.target === e.currentTarget) {
                                    onClose();
                                }
                            };

                            return (
                                <div className="modal-overlay active" onClick={handleModalClick}>
                                    <div className="eligibility-page">
                                        {/* Inline CSS Block */}
                                        <style jsx="true">{`
                                        .body-container {
                                            background-color: ${COLORS.VERY_LIGHT_BG};
                                            color: ${COLORS.SLATE};
                                            font-family: sans-serif;
                                            min-height: 90vh;
                                            padding: 2rem 0;
                                        }
                                        .app-container {
                                            max-width: 900px;
                                            margin: 0 auto;
                                            padding: 1rem;
                                        }
                                        .main-card {
                                            background-color: ${COLORS.WHITE};
                                            padding: 3rem;
                                            border-radius: 12px;
                                            box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
                                            position: relative;
                                        }
                                        @media (max-width: 640px) {
                                            .main-card {
                                                padding: 1.5rem;
                                            }
                                        }
                                        .header-title {
                                            font-size: 2rem;
                                            font-weight: 700;
                                            color: #1e293b;
                                        }
                                        .input-field {
                                            width: 100%;
                                            padding: 0.75rem;
                                            border: 1px solid #cbd5e1;
                                            border-radius: 6px;
                                            transition: all 0.2s ease-in-out;
                                            box-sizing: border-box;
                                            background-color: ${COLORS.WHITE};
                                        }
                                        .input-field:focus {
                                            outline: none;
                                            border-color: ${COLORS.PRIMARY_BLUE}; /* New Blue */
                                            /* Updated shadow using RGB of #0653de (6, 83, 222) */
                                            box-shadow: 0 0 0 2px rgba(6, 83, 222, 0.3); 
                                        }

                                        /* Close Button Style */
                                        .close-btn {
                                            position: absolute;
                                            top: 1rem;
                                            right: 1rem;
                                            background: none;
                                            border: none;
                                            font-size: 2rem;
                                            color: ${COLORS.SLATE};
                                            cursor: pointer;
                                            line-height: 1;
                                            padding: 0.25rem 0.5rem;
                                            border-radius: 9999px;
                                            transition: color 0.2s, background-color 0.2s;
                                        }
                                        .close-btn:hover {
                                            color: #1e293b;
                                            background-color: #f1f5f9; /* slate-100 */
                                        }
                                        @media (max-width: 640px) {
                                            .close-btn {
                                                top: 0.5rem;
                                                right: 0.5rem;
                                            }
                                            .main-card {
                                                padding-top: 3rem; 
                                            }
                                        }

                                        /* Progress Tracker Styles */
                                        .progress-tracker {
                                            display: flex;
                                            align-items: center;
                                            justify-content: space-between;
                                            margin-bottom: 2rem;
                                            font-size: 0.875rem;
                                            font-weight: 600;
                                        }
                                        .step-indicator {
                                            display: flex;
                                            align-items: center;
                                            gap: 0.5rem;
                                        }
                                        .step-label {
                                            display: none;
                                        }
                                        @media (min-width: 640px) {
                                            .step-label {
                                                display: inline;
                                            }
                                        }
                                        .divider {
                                            flex: 1;
                                            height: 1px;
                                            background-color: #e2e8f0;
                                            margin: 0 1rem;
                                        }
                                        .step-bubble {
                                            height: 2rem;
                                            width: 2rem;
                                            border-radius: 9999px;
                                            display: flex;
                                            align-items: center;
                                            justify-content: center;
                                            border: 2px solid;
                                            transition: all 0.3s ease-in-out;
                                            font-size: 0.875rem;
                                        }
                                        .step-inactive {
                                            background-color: ${COLORS.BG_LIGHT};
                                            border-color: #e2e8f0;
                                            color: ${COLORS.SLATE};
                                        }
                                        .step-active {
                                            background-color: ${COLORS.PRIMARY_BLUE}; /* New Blue */
                                            border-color: ${COLORS.PRIMARY_BLUE};     /* New Blue */
                                            color: ${COLORS.WHITE};
                                        }
                                        .step-complete {
                                            background-color: ${COLORS.EMERALD};
                                            border-color: ${COLORS.EMERALD};
                                            color: ${COLORS.WHITE};
                                        }

                                        /* Button Styles */
                                        .btn {
                                            font-weight: 600;
                                            padding: 0.75rem 1.5rem;
                                            border-radius: 6px;
                                            transition: all 0.2s ease-in-out;
                                            cursor: pointer;
                                            border: none;
                                        }
                                        .btn-secondary {
                                            background-color: #e2e8f0;
                                            color: #1e293b;
                                        }
                                        .btn-secondary:hover {
                                            background-color: #cbd5e1;
                                        }
                                        /* btn-next (Previous CYAN, now PRIMARY_BLUE) */
                                        .btn-next {
                                            background-color: ${COLORS.PRIMARY_BLUE}; /* New Blue */
                                            color: ${COLORS.WHITE};
                                        }
                                        .btn-next:hover {
                                            background-color: ${COLORS.DARK_BLUE_HOVER}; /* Darker New Blue */
                                        }
                                        /* btn-submit (Previous INDIGO, now PRIMARY_BLUE) */
                                        .btn-submit {
                                            background-color: ${COLORS.PRIMARY_BLUE}; /* New Blue */
                                            color: ${COLORS.WHITE};
                                        }
                                        .btn-submit:hover {
                                            background-color: ${COLORS.DARK_BLUE_HOVER}; /* Darker New Blue */
                                        }
                                        .btn-submit:disabled {
                                            background-color: #94a3b8; /* slate-400 */
                                            cursor: not-allowed;
                                        }
                                        .btn-success {
                                            background-color: ${COLORS.EMERALD};
                                            color: ${COLORS.WHITE};
                                        }
                                        .btn-success:hover {
                                            background-color: #047857; /* emerald-700 */
                                        }

                                        /* Alert Styles (no changes) */
                                        .alert-success {
                                            padding: 2rem;
                                            background-color: #ecfdf5; 
                                            border-left: 4px solid ${COLORS.EMERALD};
                                            border-radius: 0 6px 6px 0;
                                            text-align: left;
                                        }
                                        .alert-success h3 {
                                            color: #065f46; 
                                            font-weight: 700;
                                            margin-bottom: 0.5rem;
                                            font-size: 1.5rem;
                                        }
                                        .alert-success p {
                                            color: #065f46; 
                                            margin-bottom: 1rem;
                                        }

                                        .alert-ineligible {
                                            padding: 2rem;
                                            background-color: #fff1f2; 
                                            border-left: 4px solid ${COLORS.ROSE};
                                            border-radius: 0 6px 6px 0;
                                            text-align: left;
                                        }
                                        .alert-ineligible h3 {
                                            color: #9f1239; 
                                            font-weight: 700;
                                            margin-bottom: 0.5rem;
                                            font-size: 1.5rem;
                                        }
                                        .alert-ineligible p {
                                            color: #9f1239; 
                                            margin-bottom: 1rem;
                                        }

                                        /* Grid Layout for Forms (no changes) */
                                        .form-grid {
                                            display: grid;
                                            grid-template-columns: 1fr;
                                            gap: 1.5rem;
                                        }
                                        @media (min-width: 640px) {
                                            .form-grid {
                                                grid-template-columns: repeat(2, 1fr);
                                            }
                                            .col-span-2 {
                                                grid-column: span 2;
                                            }
                                        }
                                        .form-group label {
                                            display: block;
                                            font-size: 0.875rem;
                                            font-weight: 500;
                                            color: #334155; 
                                            margin-bottom: 0.25rem;
                                        }
                                        .flex-center {
                                            display: flex;
                                            align-items: center;
                                            margin-top: 0.5rem;
                                        }
                                        .checkbox-input {
                                            height: 1rem;
                                            width: 1rem;
                                            border-radius: 3px;
                                            border: 1px solid #cbd5e1;
                                            color: ${COLORS.PRIMARY_BLUE}; /* New Blue */
                                        }
                                        .link-style {
                                            font-weight: 500;
                                            color: ${COLORS.PRIMARY_BLUE}; /* New Blue */
                                            text-decoration: none;
                                        }
                                        .link-style:hover {
                                            color: ${COLORS.DARK_BLUE_HOVER}; /* Darker New Blue */
                                        }
                                    `}</style>
                                    
                                    {/* JSX Content */}
                                    <div className="body-container">
                                        <div className="app-container">
                                            <header style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
                                                <h1 className="header-title" style={{ marginBottom: '0.5rem' }}>Check Your Eligibility</h1>
                                                <p style={{ color: '#334155', maxWidth: '600px', margin: '0 auto' }}>
                                                    Find out instantly if you qualify for our products. This is a preliminary check and will not affect your credit score.
                                                </p>
                                            </header>

                                            <main className="main-card">
                                                {/* Global Close Button */}
                                                <button className="close-btn" onClick={handleClose}>
                                                    &times;
                                                </button>

                                                {!isSubmitted && (
                                                    <>
                                                        <div className="progress-tracker">
                                                            {renderStepBubble(1, 'Personal Details')}
                                                            <div className="divider"></div>
                                                            {renderStepBubble(2, 'Financial Status')}
                                                            <div className="divider"></div>
                                                            {renderStepBubble(3, 'Confirmation')}
                                                        </div>
                                                    
                                                        <form onSubmit={handleSubmit}>
                                                            {/* Step 1: Personal Details */}
                                                            {currentStep === 1 && (
                                                                <div id="step-1-content">
                                                                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#334155' }}>Step 1: Personal Details</h2>
                                                                    <div className="form-grid">
                                                                        <div className="col-span-2 form-group">
                                                                            <label htmlFor="fullName">Full Name</label>
                                                                            <input type="text" id="fullName" className="input-field" placeholder="Enter your full legal name" onChange={handleChange} value={formData.fullName} required />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="email">Email Address</label>
                                                                            <input type="email" id="email" className="input-field" placeholder="example@email.com" onChange={handleChange} value={formData.email} required />
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="phone">Phone Number</label>
                                                                            <input type="tel" id="phone" className="input-field" placeholder="Enter mobile number" onChange={handleChange} value={formData.phone} required />
                                                                        </div>
                                                                        <div className="col-span-2 form-group">
                                                                            <label htmlFor="country">Country of Residency</label>
                                                                            <select id="country" className="input-field" onChange={handleChange} value={formData.country} required>
                                                                                <option>Singapore</option>
                                                                                <option>United Arab Emirates</option>
                                                                                <option>Kenya</option>
                                                                                <option>United Kingdom</option>
                                                                                <option>India</option>
                                                                            </select>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ marginTop: '2rem', textAlign: 'right' }}>
                                                                        <button type="button" className="btn btn-next" onClick={() => navigateToStep(2)}>Next &rarr;</button>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Step 2: Financial Status */}
                                                            {currentStep === 2 && (
                                                                <div id="step-2-content">
                                                                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#334155' }}>Step 2: Financial Status</h2>
                                                                    <div className="form-grid">
                                                                        <div className="form-group">
                                                                            <label htmlFor="employmentStatus">Employment Status</label>
                                                                            <select id="employmentStatus" className="input-field" onChange={handleChange} value={formData.employmentStatus} required>
                                                                                <option>Salaried</option>
                                                                                <option>Self-Employed</option>
                                                                                <option>Other</option>
                                                                            </select>
                                                                        </div>
                                                                        <div className="form-group">
                                                                            <label htmlFor="industry">Industry</label>
                                                                            <input type="text" id="industry" className="input-field" placeholder="e.g., Finance, Tech, Healthcare" onChange={handleChange} value={formData.industry} required />
                                                                        </div>

                                                                        {/* Monthly Income in Rs */}
                                                                        <div className="form-group">
                                                                            <label htmlFor="monthlyIncome">Monthly Income (Rs)</label>
                                                                            <input type="number" id="monthlyIncome" className="input-field" placeholder="Enter amount in Rupees" onChange={handleChange} value={formData.monthlyIncome} required />
                                                                        </div>

                                                                        {/* Existing Loans Field */}
                                                                        <div className="form-group">
                                                                            <label htmlFor="existingLoans">Number of Existing Loans</label>
                                                                            <select id="existingLoans" className="input-field" onChange={handleChange} value={formData.existingLoans} required>
                                                                                <option value="0">0</option>
                                                                                <option value="1">1</option>
                                                                                <option value="2">2</option>
                                                                                <option value="3">3</option>
                                                                                <option value="4">4 or More</option>
                                                                            </select>
                                                                        </div>

                                                                        <div className="col-span-2 flex-center" style={{ marginTop: '0.5rem' }}>
                                                                            <input type="checkbox" id="existingClient" className="checkbox-input" onChange={handleChange} checked={formData.existingClient} />
                                                                            <label htmlFor="existingClient" style={{ marginLeft: '0.5rem', color: '#1e293b' }}>I am an existing Standard Chartered client.</label>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                                                        <button type="button" className="btn btn-secondary" onClick={() => navigateToStep(1)}>&larr; Previous</button>
                                                                        <button type="button" className="btn btn-next" onClick={() => navigateToStep(3)}>Next &rarr;</button>
                                                                    </div>
                                                                </div>
                                                            )}

                                                            {/* Step 3: Confirmation */}
                                                            {currentStep === 3 && (
                                                                <div id="step-3-content">
                                                                    <h2 style={{ fontSize: '1.25rem', fontWeight: '600', marginBottom: '1.5rem', color: '#334155' }}>Step 3: Declaration & Action</h2>
                                                                    <div style={{ marginBottom: '1rem' }}>
                                                                        <p style={{ color: COLORS.SLATE, marginBottom: '1rem' }}>Please confirm the following to proceed with your eligibility check.</p>
                                                                        <div className="flex-center" style={{ alignItems: 'flex-start' }}>
                                                                            <input id="terms" type="checkbox" className="checkbox-input" style={{ marginTop: '3px' }} onChange={handleChange} checked={formData.terms} />
                                                                            <label htmlFor="terms" style={{ marginLeft: '0.5rem', color: '#1e293b' }}>
                                                                                I have read and agree to the <button type="button" className="link-style">Terms and Conditions</button> and confirm the information provided is accurate.
                                                                            </label>
                                                                        </div>
                                                                    </div>
                                                                    <div style={{ marginTop: '2rem', display: 'flex', justifyContent: 'space-between' }}>
                                                                        <button type="button" className="btn btn-secondary" onClick={() => navigateToStep(2)}>&larr; Previous</button>
                                                                        <button type="submit" id="submit-btn" className="btn btn-submit" disabled={!formData.terms}>Check Eligibility Now</button>
                                                                    </div>
                                                                </div>
                                                            )}
                                                        </form>
                                                    </>
                                                )}

                                                {/* Results Section */}
                                                {isSubmitted && (
                                                    <div id="results-section" style={{ textAlign: 'center' }}>
                                                        {isEligible ? (
                                                            <div className="alert-success">
                                                                <h3>Congratulations! You are pre-qualified.</h3>
                                                                <p>Based on your details, you are eligible for  and a Personal Loan ,Home Loan and Vehicle Loan.</p>
                                                                <button className="btn btn-success">Apply Now</button>
                                                            </div>
                                                        ) : (
                                                            <div className="alert-ineligible">
                                                                <h3>We appreciate your interest.</h3>
                                                                <p>Based on your current details, we cannot proceed with pre-qualification at this time. Please review your details or check back in six months.</p>
                                                                {/* Now using the handleClose logic for the 'Go Back' button for consistency */}
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-secondary"
                                                                    onClick={handleClose}
                                                                >
                                                                    &larr; Go Back to Form
                                                                </button>
                                                            </div>
                                                        )}
                                                    </div>
                                                )}
                                            </main>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        );
                        };

                        export default EligibilityChecker;
