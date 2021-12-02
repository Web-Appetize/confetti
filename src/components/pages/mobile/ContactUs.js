/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';
const ww = window.innerWidth - 15;

const ContactUs = ({ connectInfo, msgSentInfo }) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    setSlider(!slider);
    navigate(tabName);
  };
  const [slider, setSlider] = useState(false);
  const { instagram, mail, linkedin, behance, dribble } = connectInfo;
  return (
    <div className="container-fluid" style={{ width: ww }}>
      <div className="row">
        <div className="col-12  p-0 mt-3">
          <div className="card contactUsCard contactUsCardNoBorder border-0 shadow-sm">
            <div className="card-body">
              <h3 className="card-title ntpCardTitle2 text-normal">
                GET IN TOUCH
              </h3>
              <div>
                <div className="form-row align-items-center">
                  <div className="col-12">
                    <label className="sr-only" for="inlineFormInputGroup">
                      Username
                    </label>
                    <div className="input-group mb-2">
                      <div className="input-group-prepend">
                        <div className="input-group-text">
                          <i className="fa fa-phone" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="form-control"
                        id="inlineFormInputGroup"
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <span className="input-group-text" id="basic-addon2">
                          +91 9931230819
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="text-center">
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
            </div>
          </div>
        </div>
        <div className="col-12 mt-3 mb-3 p-0">
          <div className="card contactUsCard hAuto shadow-sm border-0">
            <div className="card-body">
              <span className="ntpCardTitle1">WE’D LOVE TO HEAR FROM YOU!</span>
              <form
                method="post"
                name="confetti"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label for="name">Name :</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="RISHABH JAIN"
                    name="name"
                  />
                </div>
                <div className="form-group">
                  <label for="email">Email Address :</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="NAME@EXAMPLE.COM"
                    name="email"
                  />
                </div>
                <div className="form-group">
                  <label for="company">COMPANY NAME :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="company"
                    placeholder="'YOUR COMPANY'"
                    name="company"
                  />
                </div>
                <div className="form-group">
                  <label for="subject">SUBJECT :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="subject"
                    placeholder="UI / UX DESIGN"
                    name="subject"
                  />
                </div>
                <div className="form-group">
                  <label for="message">MESSAGE :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="message"
                    placeholder="HOW CAN WE HELP YOU ?"
                    name="message"
                  />
                </div>
                <button
                  // type="submit"
                  className="btn btn-default btn-secondary"
                  data-toggle="modal"
                  onClick={() => setSlider(!slider)}
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className={`slider ${slider ? '' : 'close'}`}>
          <div className="transparent"></div>
          <div className="content">
            <div className="titleBar">
              <i
                className="fas fa-times"
                onClick={() => setSlider(!slider)}
              ></i>
            </div>
            <div className="dataContainer">
              <div className="title">{msgSentInfo.title}</div>
              {msgSentInfo.text.map(({ text, id }) => (
                <div key={id} className="h4 mb-3">
                  {text}
                </div>
              ))}

              <span
                onClick={() => redirectPage('/ProjectList')}
                className="btn btn-primary btnThemeClr getInTouchBtnMobile w-100 p-3 mt-2 mb-2"
              >
                View Projects
              </span>
            </div>
          </div>
        </div>
      </div>
      {connectInfo && <Footer {...connectInfo} />}
    </div>
  );
};

export default ContactUs;
