/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';
import { useNavigate } from 'react-router-dom';
const ww = window.innerWidth - 15;

const ContactUs = ({ connectInfo, msgSentInfo }) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    navigate(tabName);
  };

  const { instagram, mail, linkedin, behance, dribble } = connectInfo;
  return (
    <div className="container-fluid">
      <div className="row p-5">
        <div className="col">
          <div className="card contactUsCard hAuto border-0">
            <div className="card-body">
              <span className="h1 font-weight-bold">
                WE’D LOVE TO HEAR FROM YOU!
              </span>
              <form
                method="post"
                name="confetti"
                data-netlify="true"
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
                  <textarea
                    class="form-control"
                    id="message"
                    rows="3"
                    name="message"
                    placeholder="HOW CAN WE HELP YOU ?"

                  ></textarea>
                </div>
                <button
                  // type="submit"
                  className="btn btn-default contactUsSendBtn"
                  data-toggle="modal"
                  data-target="#sendMessage"
                >
                  SEND MESSAGE
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card contactUsCard contactUsCardNoBorder border-0">
            <div className="card-body">
              <h3 className="card-title ntpCardTitle2 text-normal">
                GET IN TOUCH
              </h3>
              <form>
                <div className="form-row align-items-center">
                  <div className="col-12">
                    <label className="sr-only" for="inlineFormInputGroup">
                      Username
                    </label>
                    <div className="input-group mb-3">
                      <div className="input-group-prepend">
                        <div className="fs-25 input-group-text ">
                          <i className="fa fa-phone-alt" aria-hidden="true"></i>
                        </div>
                      </div>
                      <input
                        type="text"
                        className="fs-25 form-control"
                        id="inlineFormInputGroup"
                        placeholder=""
                      />
                      <div className="input-group-append">
                        <span className="fs-25 input-group-text " id="basic-addon2">
                          +91 7817920743
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div className="text-right">
                <span onClick={() => window.open(mail)}>
                  <span className="footerIcon iconBorder">
                    <i className="far fa-envelope"></i>
                  </span>
                </span>

                <span onClick={() => window.open(instagram)}>
                  <span className="footerIcon iconBorder">
                    <i className="fab fa-instagram"></i>
                  </span>
                </span>

                <span onClick={() => window.open(linkedin)}>
                  <span className="footerIcon iconBorder">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </span>

                <span onClick={() => window.open(behance)}>
                  <span className="footerIcon iconBorder">
                    <i className="fab fa-behance"></i>
                  </span>
                </span>

                <span onClick={() => window.open(dribble)}>
                  <span className="footerIcon iconBorder">
                    <i className="fas fa-basketball-ball"></i>
                  </span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="modal fade contactUsDesktopModal"
        id="sendMessage"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-body">
              <h3>
                {' '}
                <strong>{msgSentInfo.title}</strong>{' '}
              </h3>
              {msgSentInfo.text.map(({ text }) => (
                <h6>{text}</h6>
              ))}
            </div>
            <div className="modal-footer">
              <span
                onClick={() => redirectPage('/')}
                type="button"
                className="btn btn-default btnThemeClr text-white"
                data-dismiss="modal"
              >
                BACK TO HOME
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
