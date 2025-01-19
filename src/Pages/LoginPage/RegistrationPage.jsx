import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './RegistrationPage.css'; // Include this for styling

const RegistrationPage = () => {




  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
    remember: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register">
      <div className="register-form">
        <div className="welcome">
          <i className="fa-solid fa-user-plus"></i>
          <h2>Welcome</h2>
          <h3>Create your account</h3>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="fullName">Full Name</label>
            <i className="fa-solid fa-user"></i>
            <input
              type="text"
              name="fullName"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <i className="fa-solid fa-envelope"></i>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <i className="fa-solid fa-lock"></i>
            <input
              type="password"
              name="confirmPassword"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <div className="remember">
            <div className="remember-check">
              <input
                type="checkbox"
                name="remember"
                checked={formData.remember}
                onChange={handleChange}
              />
              Remember Me
            </div>
          </div>
          <button type="submit" className="register-btn"
          onClick={()=>{alert("Registrastion Sucess retun Go To Login Page")}}>
            Register <i className="fa-solid fa-caret-right"></i>
          </button>
          <p className="redirect-login">
            Already have an account?{' '}
            <Link to="/login" className="login-link">
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
