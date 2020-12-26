import React from 'react';
import './Footer.css';
import Sociallinks from './Sociallinks';




function Footer() {
  return (
    <footer className="footer">
      <nav>
          <ul className="footer__nav">
            <li className="footer__nav-link">Главная</li>
            <li className="footer__nav-link">Наша миссия</li>
            <li className="footer__nav-link">О нас</li>
            <li className="footer__nav-link">Контакты</li>
          </ul>
      </nav>

      <Sociallinks />

      <p className="footer__copyright">© 2020 “COMPANY NAME”, Inc., “COMPANY NAME”, “COMPANY NAME”, “COMPANY NAME”
       logo are trademarks or registered trademarks of “COMPANY NAME”, Inc. in the
       US and the rest of the world. All rights reserved.</p>
    </footer>
  )
}

export default Footer;