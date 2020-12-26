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

      <p className="footer__copyright">© TalkSolver, Inc., 2020 г. TalkSolver, логотип TalkSolver являются
      товарными знаками или зарегистрированными товарными знаками TalkSolver, Inc.
      в США и всём остальном мире. Все права сохранены.</p>
    </footer>
  )
}

export default Footer;