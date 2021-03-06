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
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [company, setcompany] = useState('');
  const [subject, setsubject] = useState('');
  const [message, setmessage] = useState('');
  const { instagram, mail, linkedin, behance, dribble } = connectInfo;
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 p-0 mt-3">
          <div className="card contactUsCard contactUsCardNoBorder border-0">
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
                          <i className="fa fa-phone-alt" aria-hidden="true"></i>
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
              <div className="justifyCenter">
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
        <div className="col-12 mt-5 mb-3 p-0">
          <div className="card contactUsCard hAuto border-0">
            <div className="card-body">
              <span className="h1 font-weight-bold">
                WE???D LOVE TO HEAR FROM YOU!
              </span>
              <br />
              <br />
              <form
                method="post"
                name="confetti"
                data-netlify="true"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="form-group">
                  <label for="name">NAME :</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="RISHABH JAIN"
                    name="name"
                    value={name}
                    onChange={(e) => setname(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="email">EMAIL ADDRESS :</label>
                  <input
                    type="text"
                    className="form-control"
                    id="email"
                    placeholder="NAME@EXAMPLE.COM"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
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
                    value={company}
                    onChange={(e) => setcompany(e.target.value)}
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
                    value={subject}
                    onChange={(e) => setsubject(e.target.value)}
                  />
                </div>
                <div className="form-group">
                  <label for="message">MESSAGE :</label>
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    placeholder="HOW CAN WE HELP YOU ?"
                    value={message}
                    onChange={(e) => setmessage(e.target.value)}
                  ></textarea>
                </div>
                <button
                  // type="submit"
                  className={`btn btn-default btn-secondary w-100 p-1 pt-2 pb-2 fs-20 font-weight-bold ${
                    name && email && company && subject && message
                      ? 'btnThemeClr'
                      : 'disabledBtn'
                  }`}
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
                <div key={id} className="h5 mb-3">
                  {text}
                </div>
              ))}

              <span
                onClick={() => redirectPage('/')}
                className="btn btn-primary btnThemeClr getInTouchBtnMobile w-100 p-3 mt-2 mb-2"
              >
              VIEW PROJECTS
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-5">{connectInfo && <Footer {...connectInfo} />}</div>
    </div>
  );
};

export default ContactUs;
