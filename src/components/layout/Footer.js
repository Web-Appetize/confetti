import React from 'react';
import { Link } from 'react-router-dom';
// import footerWallImg from '../../imgs/footerWall.jpg';

const Footer = () => {
  return (
    <div>
      <div className="row">
        <div className="col footer bg-dark text-white">
          <div
            className="card  bg-dark"
            // style={{ backgroundImage: `url(${footerWallImg})` }}
          >
            <div className="card-body">
              <div className="footerTitle1">CONNECT WITH US!</div>
              <div>
                <Link to="">
                  <span className="footerIcon">
                    <i className="far fa-envelope"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon">
                    <i className="fab fa-instagram"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon">
                    <i className="fab fa-behance"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon">
                    <i className="fas fa-basketball-ball"></i>
                  </span>
                </Link>
              </div>
              <div className="footerTitle2">GURGAON</div>
              <div className="footerTitle3">
                CONTACT@CONFETTI.COM <br /> +91 7817920743{' '}
              </div>
              <div className="footerTitle4">
                CONFETTI <br /> GROUND FLOOR, 361, SECTOR 56 <br /> GURGAON
                201301
              </div>
              <br />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
