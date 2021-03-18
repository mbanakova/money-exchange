import React from 'react';
import './Header.css';
import icon from './currency.svg';

class Header extends React.Component {
  render() {
    return (
        <header>
          <div className="top-bar animate-dropdown"></div>
          <div className="main-header">
            <div className="header container">
              <h1 className="site-title">React Lite Level</h1>
              <img src={icon} width="90" height="90" alt="icon"/>
            </div>
          </div>
        </header>
    );
  }
}

export default Header;
