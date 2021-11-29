import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import loading_url from '../../imgs/Confetti_logo.png';
import ConfettiContext from '../../context/confetti_context/context';

const Navbar = () => {
  const navigate = useNavigate();
  const { tabs } = useContext(ConfettiContext);

  const [open, setNav] = useState(false);
  let tabExist = false;
  let videoExist = document.getElementsByClassName('videoContent').length;
  tabs.forEach((tab) => {
    if (!tabExist) {
      tabExist = window.location.href.indexOf(tab) !== -1;
    }
  });

  const redirectPage = (tabName) => {
    navigate(tabName);
  };

  const closeOverlayandnavigate = (tabName) => {
    setNav(!open);
    navigate(tabName);
  };

  return (
    <React.Fragment>
      <div id="myNav" className={`overlay ${open ? 'w-100' : ''}`}>
        <div className="overlay-content">
          <span
            onClick={() => closeOverlayandnavigate('/')}
            className="text-white"
          >
            <span>Home </span>
          </span>
          <span
            onClick={() => closeOverlayandnavigate('/aboutUs')}
            className="text-white"
          >
            <span> About Us</span>
          </span>
          <span
            key="NavGetInTouchUrl"
            onClick={() => closeOverlayandnavigate('/contactUs')}
            className={`btn btn-primary btnThemeClr NavGetInTouchUrl text-white ${
              open ? '' : 'd-none'
            }`}
          >
            GET IN TOUCH
          </span>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          tabExist ? 'shadow-sm' : ''
        }`}
      >
        <span
          className="navbar-brand text-info"
          onClick={() => redirectPage('/')}
        >
          <img
            src={loading_url}
            alt="Confetti"
            style={{ marginLeft: '10%' }}
            width="50px"
            height="40px"
          />
        </span>
        <button
          className="navbar-toggler customToggler"
          type="button"
          data-toggle="collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          {open ? (
            <i
              className={`fas fa-times text-white`}
              onClick={() => setNav(!open)}
            ></i>
          ) : (
            <i
              className={`fas fa-bars ${
                tabExist || videoExist ? 'text-white' : ''
              }`}
              onClick={() => setNav(!open)}
            ></i>
          )}
        </button>

        <div className="collapse navbar-collapse">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item ">
              <span className="nav-link" onClick={() => redirectPage('/')}>
                <button
                  type="button"
                  className={`${tabExist ? '' : 'text-white'} btn btn-default`}
                >
                  Home
                </button>
              </span>
            </li>
            <li className="nav-item ">
              <span
                className="nav-link"
                onClick={() => redirectPage('/AboutUs')}
              >
                <button
                  type="button"
                  className={`${tabExist ? '' : 'text-white'} btn btn-default`}
                >
                  About us
                </button>
              </span>
            </li>
            <li className="nav-item ">
              <span
                className="nav-link"
                onClick={() => redirectPage('/ContactUs')}
              >
                <button
                  type="button"
                  className="btn btnThemeClr text-white font-weight-bold pl-4 pr-4"
                >
                  GET IN TOUCH
                </button>
              </span>
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
