import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import loading_url from '../../imgs/Confetti_logo.png';

const Navbar = () => {
  const [open, setNav] = useState(false);
  return (
    <React.Fragment>
      <div id="myNav" class={`overlay ${open ? 'w-100' : ''}`}>
        <div class="overlay-content">
          <Link to="/">
            <span>Home </span>
          </Link>
          <Link to="/">
            <span> About Us</span>
          </Link>

          <Link
            key="NavGetInTouchUrl"
            to=""
            className={`btn btn-primary btnThemeClr NavGetInTouchUrl ${
              open ? '' : 'd-none'
            }`}
          >
            GET IN TOUCH
          </Link>
        </div>
      </div>
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
          className="navbar-toggler customToggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {open ? (
            <i
              class="fas fa-times text-white"
              onClick={() => setNav(!open)}
            ></i>
          ) : (
            <i class="fas fa-bars text-white" onClick={() => setNav(!open)}></i>
          )}
        </button>

        <div className="collapse navbar-collapse">
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
