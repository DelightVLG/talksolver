import React from 'react';
import './Menu.css';

function Menu () {
  return (
    <nav>
      <ul className="menu">
        <li className="menu__link menu__link_type_accent">Item first</li>
        <li className="menu__link">Item two</li>
        <li className="menu__link">Item three</li>
        <li className="menu__link">Item four</li>
      </ul>
    </nav>
  )
}

export default Menu;
