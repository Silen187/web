import React from 'react';
import './footer.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <p>&copy; {new Date().getFullYear()} Duong Cong Thai. All rights reserved.</p>
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/profile.php?id=100086649046579" target="_blank" rel = "noopener noreferrer"><FontAwesomeIcon icon={faFacebook} /></a>
          </div>
        </div>
        {/* <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Duong Cong Thai. All rights reserved.</p>
        </div> */}
      </div>
    </footer>
  );
};

export default Footer;