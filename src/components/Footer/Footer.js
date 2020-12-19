
import React from 'react';
import './Footer.css';
import Sociallinks from './Sociallinks';




function Footer() {
  return (
    <footer className="footer">
      <nav>
          <ul className="footer__nav">
            <li className="footer__nav-link">Main page</li>
            <li className="footer__nav-link">About us</li>
            <li className="footer__nav-link">Our mission</li>
            <li className="footer__nav-link">Contact us</li>

            <li className="footer__nav-link">FAQ</li>
            <li className="footer__nav-link">License agreement</li>
            <li className="footer__nav-link">Help</li>
            <li className="footer__nav-link">Security</li>
            <Sociallinks className="footer__nav-social-links" />
          </ul>
      </nav>

      <p className="footer__copyright">© 2020 “COMPANY NAME”, Inc., “COMPANY NAME”, “COMPANY NAME”, “COMPANY NAME”
       logo are trademarks or registered trademarks of “COMPANY NAME”, Inc. in the
       US and the rest of the world. All rights reserved.</p>
    </footer>
  )
}

export default Footer;





