import React, { useState } from 'react';

const LoginModal = ({ show, onClose }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [showSignup, setShowSignup] = useState(false);

  const selectRole = (role) => {
    setSelectedRole(role);
  };

  const togglePassword = (fieldId) => {
    const passwordInput = document.getElementById(fieldId);
    if (passwordInput.type === 'password') {
      passwordInput.type = 'text';
    } else {
      passwordInput.type = 'password';
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    
    if (!selectedRole) {
      return;
    }
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    console.log('Login:', { username, password, role: selectedRole });
    
    // Redirect based on role
    if (selectedRole === 'customer') {
      window.location.href = '/customer-dashboard';
    } else if (selectedRole === 'maker') {
      window.location.href = '/maker-dashboard';
    } else if (selectedRole === 'checker') {
      window.location.href = '/checker-dashboard';
    }
  };

  const handleSignupSubmit = (e) => {
    e.preventDefault();
    
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
      return;
    }
    
    if (password.length < 8) {
      return;
    }
    
    const formData = {
      fullName: document.getElementById('fullName').value,
      username: document.getElementById('signupUsername').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      password: password,
      address: document.getElementById('address').value
    };
    
    console.log('Sign Up:', formData);
    
    setShowSignup(false);
  };

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!show) return null;

  return (
    <div className="modal-overlay active" onClick={handleModalClick}>
      <div className="login-container">
        <div className="login-header">
          <button className="close-modal" onClick={onClose}>&times;</button>
          <h2><i className="bi bi-bank2"></i> SCB Loans</h2>
          <p>Secure Login Portal</p>
        </div>
        
        <div className="login-body">
          {!showSignup ? (
            <form id="loginForm" onSubmit={handleLoginSubmit}>
              <div className="role-selector">
                <label>Select Your Role</label>
                <div className="role-options">
                  <div 
                    className={`role-option ${selectedRole === 'customer' ? 'active' : ''}`}
                    onClick={() => selectRole('customer')}
                  >
                    <div className="role-content">
                      <i className="bi bi-person-circle"></i>
                      <span>Customer</span>
                    </div>
                  </div>
                  <div 
                    className={`role-option ${selectedRole === 'maker' ? 'active' : ''}`}
                    onClick={() => selectRole('maker')}
                  >
                    <div className="role-content">
                      <i className="bi bi-person-check"></i>
                      <span>Maker</span>
                    </div>
                  </div>
                  <div 
                    className={`role-option ${selectedRole === 'checker' ? 'active' : ''}`}
                    onClick={() => selectRole('checker')}
                  >
                    <div className="role-content">
                      <i className="bi bi-person-badge"></i>
                      <span>Checker</span>
                    </div>
                  </div>
                </div>
              </div>

              {selectedRole === 'customer' && (
                <div className="alert alert-info" id="newUserAlert">
                  <i className="bi bi-info-circle"></i> New customer? You can sign up below after selecting customer role.
                </div>
              )}

              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" className="form-control" id="username" placeholder="Enter your username" required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password</label>
                <div className="password-wrapper">
                  <input type="password" className="form-control" id="password" placeholder="Enter your password" required />
                  <i 
                    className="bi bi-eye password-toggle" 
                    onClick={() => togglePassword('password')}
                  ></i>
                </div>
              </div>

              <div className="remember-forgot">
                <label className="remember-me">
                  <input type="checkbox" id="rememberMe" />
                  <span>Remember me</span>
                </label>
                <a href="#" className="forgot-password">Forgot Password?</a>
              </div>

              <button type="submit" className="btn-login-submit">
                <i className="bi bi-box-arrow-in-right"></i> Login
              </button>

              <div className="divider">
                <span>OR</span>
              </div>

              {selectedRole === 'customer' && (
                <div className="signup-link">
                  Don't have an account? <a onClick={() => setShowSignup(true)}>Sign Up</a>
                </div>
              )}
            </form>
          ) : (
            <form id="signupForm" onSubmit={handleSignupSubmit}>
              <h3 style={{ marginBottom: '1.5rem', color: 'var(--text-dark)', fontWeight: '700' }}>
                Create New Account
              </h3>

              <div className="form-group">
                <label htmlFor="fullName">Full Name *</label>
                <input type="text" className="form-control" id="fullName" placeholder="Enter your full name" required />
              </div>

              <div className="form-group">
                <label htmlFor="signupUsername">Username *</label>
                <input type="text" className="form-control" id="signupUsername" placeholder="Choose a unique username" required />
              </div>

              <div className="form-group">
                <label htmlFor="email">Email Address *</label>
                <input type="email" className="form-control" id="email" placeholder="your.email@example.com" required />
              </div>

              <div className="form-group">
                <label htmlFor="phone">Phone Number *</label>
                <input type="tel" className="form-control" id="phone" placeholder="10-digit mobile number" required />
              </div>

              <div className="form-group">
                <label htmlFor="signupPassword">Password *</label>
                <div className="password-wrapper">
                  <input type="password" className="form-control" id="signupPassword" placeholder="Create a strong password" required />
                  <i 
                    className="bi bi-eye password-toggle" 
                    onClick={() => togglePassword('signupPassword')}
                  ></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <div className="password-wrapper">
                  <input type="password" className="form-control" id="confirmPassword" placeholder="Re-enter your password" required />
                  <i 
                    className="bi bi-eye password-toggle" 
                    onClick={() => togglePassword('confirmPassword')}
                  ></i>
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="address">Address *</label>
                <textarea className="form-control" id="address" rows="2" placeholder="Your residential address" required></textarea>
              </div>

              <div className="remember-me" style={{ marginBottom: '1.5rem' }}>
                <input type="checkbox" id="termsAccept" required />
                <span style={{ fontSize: '0.9rem' }}>
                  I agree to the <a href="#" style={{ color: 'var(--scb-bright-blue)' }}>Terms & Conditions</a>
                </span>
              </div>

              <button type="submit" className="btn-login-submit">
                <i className="bi bi-person-plus"></i> Create Account
              </button>

              <div className="signup-link">
                Already have an account? <a onClick={() => setShowSignup(false)}>Login</a>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default LoginModal;