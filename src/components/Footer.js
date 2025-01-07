import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="contact-info">
        <h3>Contact Info</h3>
        <p>
          EduPortal Headquarters<br />
          123 Knowledge Road,<br />
          Oxford, England.
        </p>
        <p>TEL: (+44) 123 456 789</p>
        <p>EMAIL: <a href="mailto:info@eduportal.com">info@eduportal.com</a></p>
      </div>

      <div className="map">
        <h3>Our Location</h3>
        <iframe
  title="EduPortal Location Map"
  src="https://www.google.com/maps?q=Oxford,England&output=embed"
  width="100%"
  height="200"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
></iframe>


      </div>

      <div className="footer-bottom">
        <p>&copy; 2025 EduPortal. All rights reserved.</p>
        <p>
          Follow us: 
          <a href="https://facebook.com" title="Follow us on Facebook" target="_blank" rel="noopener noreferrer">Facebook</a> | 
          <a href="https://twitter.com" title="Follow us on Twitter" target="_blank" rel="noopener noreferrer">Twitter</a> | 
          <a href="https://linkedin.com" title="Follow us on LinkedIn" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
