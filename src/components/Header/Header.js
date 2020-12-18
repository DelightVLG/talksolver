import React from 'react';
import './Header.css';
import Logo from './Logo';
import Menu from './Menu';
import HeaderButton from './HeaderButton';

function Header() {
  return (
    <header>
      <Logo />
      <Menu />
      <HeaderButton />
    </header>
  )
}

export default Header;