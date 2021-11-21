import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loading_url from '../../imgs/Confetti_logo.png';

const Navbar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand-lg navbar-light">
        <Link className="navbar-brand text-info" to="/">
          <img
            src={loading_url}
            alt="Confetti"
            style={{ marginLeft: '10%' }}
            width="50px"
            height="40px"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <Link className="nav-link" to="/">
                <button type="button" className="btn btn-default text-white">
                  Home
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="AboutUs">
                <button type="button" className="btn btn-default text-white">
                  About us
                </button>
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link" to="AboutUs">
                <button
                  type="button"
                  className="btn btnThemeClr text-white font-weight-bold pl-4 pr-4"
                >
                  GET IN TOUCH
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </React.Fragment>
  );
};

Navbar.defaultProps = {
  title: 'Page Title',
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Navbar;
