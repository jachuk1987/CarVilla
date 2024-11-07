import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isMenuOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState(prevState => ({ isMenuOpen: !prevState.isMenuOpen }));
  };

  render() {
    return (
      <div className="top-area">
        <div className="header-area">
          <nav className="navbar navbar-default navbar-sticky">
            <div className="container">
              {/* Header Navigation */}
              <div className="navbar-header">
                <button 
                  type="button" 
                  className="navbar-toggle" 
                  onClick={this.toggleMenu}
                >
                  <i className="fa fa-bars"></i>
                </button>
                <a className="navbar-brand" href="index.html">
                  carvilla<span></span>
                </a>
              </div>
              {/* Navbar Links */}
              <div 
                className={`collapse navbar-collapse menu-ui-design ${this.state.isMenuOpen ? 'in' : ''}`}
                id="navbar-menu"
              >
                <ul className="nav navbar-nav navbar-right">
                  <li className="scroll active">
                    <a href="#home">home</a>
                  </li>
                  <li className="scroll">
                    <a href="#service">service</a>
                  </li>
                  <li className="scroll">
                    <a href="#featured-cars">featured cars</a>
                  </li>
                  <li className="scroll">
                    <a href="#new-cars">new cars</a>
                  </li>
                  <li className="scroll">
                    <a href="#brand">brands</a>
                  </li>
                  <li className="scroll">
                    <a href="#contact">contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="clearfix"></div>
      </div>
    );
  }
}

export default Header;
