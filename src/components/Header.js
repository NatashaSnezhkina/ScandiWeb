import React from 'react';
import logo from '../images/logo.svg';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// const Tab = createBottomTabNavigator();

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      focus: false
    };
    this.addActiveClass = this.addActiveClass.bind(this);
  }

  addActiveClass() {
    const currentState = this.state.active;
    this.setState({ focus: !currentState });
  }

  render() {
    return (
      <header className="header">
        <ul className="header__navigation">
          <li><button className={`header__element ${this.state.focus ? "header__element_chosen" : ""}`} onClick={this.props.addActiveClass}>ALL</button></li>
          <li><button className={`header__element ${this.state.focus ? "header__element_chosen" : ""}`} onClick={this.props.addActiveClass}>TECH</button></li>
          <li><button className={`header__element ${this.state.focus ? "header__element_chosen" : ""}`} onClick={this.props.addActiveClass}>CLOTHES</button></li>
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
