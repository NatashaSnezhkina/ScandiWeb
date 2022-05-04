import React from 'react';
import logo from '../images/logo.svg';

class Header extends React.Component {
  render() {
    return (
      <header className="header">
        <ul className="header__navigation">
          <li><a className="header__element">WOMEN</a></li>
          <li><a className="header__element">MEN</a></li>
          <li><a className="header__element">KIDS</a></li>
        </ul>
        <img className="header__logo" src={logo} alt="логотип" />
        <div className="header__actions">
          <button className="header__currency"></button>
          <button className="header__empty-cart"></button>
        </div>
      </header>
    )
  }
}

export default Header;
