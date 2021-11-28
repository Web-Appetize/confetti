import React from 'react';
import { isMobile } from 'react-device-detect';
const Footer = ({
  address: fullAddress,
  instagram,
  mail,
  linkedin,
  behance,
  dribble,
}) => {
  if (!fullAddress) return null;
  const { title, mail: addressMail, phone, company, address } = fullAddress;
  return (
    <div>
      <div className="row">
        <div
          className={`col ${
            isMobile ? 'footerMobile' : 'footer'
          } bg-dark text-white`}
        >
          <div
            className="card  bg-dark"
            // style={{ backgroundImage: `url(${footerWallImg})` }}
          >
            <div className="card-body">
              <div className="footerTitle1">CONNECT WITH US!</div>
              <div>
                <span onClick={() => window.open(mail)}>
                  <span className="footerIcon">
                    <i className="far fa-envelope"></i>
                  </span>
                </span>

                <span onClick={() => window.open(instagram)}>
                  <span className="footerIcon">
                    <i className="fab fa-instagram"></i>
                  </span>
                </span>

                <span onClick={() => window.open(linkedin)}>
                  <span className="footerIcon">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </span>

                <span onClick={() => window.open(behance)}>
                  <span className="footerIcon">
                    <i className="fab fa-behance"></i>
                  </span>
                </span>

                <span onClick={() => window.open(dribble)}>
                  <span className="footerIcon">
                    <i className="fas fa-basketball-ball"></i>
                  </span>
                </span>
              </div>
              <div className="footerTitle2">{title}</div>
              <div className="footerTitle3">
                {addressMail} <br /> {phone}{' '}
              </div>
              <div className="footerTitle4">
                {company} <br /> {address[0].text}
                <br /> {address[1].text}
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
