import React, { useState, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';
import loading_url from '../../imgs/Confetti_logo.png';
import ConfettiContext from '../../context/confetti_context/context';
import { isMobile } from 'react-device-detect';

const Navbar = () => {
  const navigate = useNavigate();
  const { tabs } = useContext(ConfettiContext);

  const [open, setNav] = useState(false);
  let isBlackBar = false;
  tabs.forEach((tab) => {
    if (!isBlackBar) {
      isBlackBar = window.location.href.indexOf(tab) !== -1;
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
            className="text-white font-weight-bold"
          >
            <span>HOME </span>
          </span>
          <span
            onClick={() => closeOverlayandnavigate('/AboutUs')}
            className="text-white font-weight-bold"
          >
            <span> ABOUT US</span>
          </span>
          <span
            key="NavGetInTouchUrl"
            onClick={() => closeOverlayandnavigate('/ContactUs')}
            className={`btn btn-primary btnThemeClr NavGetInTouchUrl text-white font-weight-bold ${
              open ? '' : 'd-none'
            }`}
          >
            GET IN TOUCH
          </span>
        </div>
      </div>
      <nav
        className={`navbar navbar-expand-lg navbar-light ${
          isBlackBar ? 'shadow-sm' : ''
        } ${isMobile ? 'top5px' : ''}`}
      >
        <span
          className="navbar-brand text-info"
          onClick={() => redirectPage('/')}
        >
          <img
            src={loading_url}
            alt="Confetti"
            style={{ marginLeft: isMobile ? '10%' : '100%' }}
            width={isMobile ? '40px' : '45px'}
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
              className={`fas fa-bars ${isBlackBar ? '' : 'text-white'}`}
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
                  className={`${
                    isBlackBar ? '' : 'text-white'
                  } btn btn-default font-weight-bold`}
                >
                  HOME
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
                  className={`${
                    isBlackBar ? '' : 'text-white'
                  } btn btn-default font-weight-bold`}
                >
                  ABOUT US
                </button>
              </span>
            </li>
            <li className="nav-item mr-5">
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
