import { Component } from "react";
import Styles from './Navbar.module.css';
import { Link, NavLink } from 'react-router-dom';

class Navbar extends Component {
  render() {
    return (
        <nav className={`${Styles.myNavbar} navbar navbar-expand-lg py-3`}>
        <div className="container">
          <Link className={`${Styles.myBrand} nav-brand`} exact to="/">
            Start React
          </Link>
          <button
            className={`${Styles.myToggler} navbar-toggler`}
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className={`${Styles.myTogglerIcon} navbar-toggler-icon`}></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} exact to="/portfolio">
                  Portfolio
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} exact to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className={`${Styles.myLink} nav-link`} exact to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>

    );
  }
}

export default Navbar;
