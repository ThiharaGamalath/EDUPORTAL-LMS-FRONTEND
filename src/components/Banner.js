import React from 'react';
import './Banner.css';

function Banner() {
  return (
    <section className="banner">
      <div className="overlay">
        <div className="content">
          <h2>Welcome to the eduprotal Learning Management System</h2>
          <p>
            Transform your academic experience with seamless access to modules, resources, and performance tracking.
            Join our vibrant learning community today!
          </p>
          <div className="buttons">
            <a href="/register" className="btn primary" aria-label="Register now">Register</a>
            <a href="/login" className="btn secondary" aria-label="Login">Login</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
