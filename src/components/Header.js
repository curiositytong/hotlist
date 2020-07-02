import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/svg/logo.svg';

class Header extends Component {
  state = {
    isMenuActive: false,
  };

  render() {
    const { isMenuActive } = this.state;

    return (
      <div className="navbar b-header">
        <div className="container">
          <div className="navbar-brand">
            <Link
              className="navbar-item navbar-logo"
              to="/"
              onClick={() => window.location.reload()}
            >
              <img src={logo} alt="logo" width="112" height="28" />
            </Link>
            <div
              className={`navbar-burger${isMenuActive ? ' is-active' : ''}`}
              onClick={() => this.setState({ isMenuActive: !isMenuActive })}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div className={`navbar-menu${isMenuActive ? ' is-active' : ''}`}>
            <div className="navbar-end">
              <a
                className="navbar-item"
                href="https://github.com/curiositytong/hot-list/issues"
                target="_blank"
                rel="noopener noreferrer"
              >
                反馈
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
