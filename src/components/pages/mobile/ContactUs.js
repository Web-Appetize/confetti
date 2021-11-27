/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';
const ww = window.innerWidth - 15;

const ContactUs = () => {
  return (
    <div className="container-fluid" style={{ width: ww }}>
      <div className="row p-1">
        <div className="col-12 mt-3">
          <div className="card contactUsCard contactUsCardNoBorder border-0 shadow-sm">
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
              </form>
              <div className="text-right">
                <Link to="">
                  <span className="footerIcon iconBorder">
                    <i className="far fa-envelope"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon iconBorder">
                    <i className="fab fa-instagram"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon iconBorder">
                    <i className="fab fa-linkedin-in"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon iconBorder">
                    <i className="fab fa-behance"></i>
                  </span>
                </Link>

                <Link to="">
                  <span className="footerIcon iconBorder">
                    <i className="fas fa-basketball-ball"></i>
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="col-12 mt-3">
          <div className="card contactUsCard hAuto shadow-sm border-0">
            <div className="card-body">
              <span className="ntpCardTitle1">WE’D LOVE TO HEAR FROM YOU!</span>
              <form action="/action_page.php">
                <div className="form-group">
                  <label for="name">Name :</label>
                  <input
                    type="name"
                    className="form-control"
                    id="name"
                    placeholder="RISHABH JAIN"
                    name="name"
                    required
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
                    required
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
                    required
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
                    required
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
                    required
                  />
                </div>
                <button
                  // type="submit"
                  className="btn btn-default btn-secondary"
                  data-toggle="modal"
                  data-target="#sendMessage"
                >
                  SEND MESSAGE
                </button>
              </form>
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
                <h4>
                  {' '}
                  <strong>MESSAGE SENT SUCCESFULLY !</strong>{' '}
                </h4>
                <h6>
                  THANKS FOR GETTING IN TOUCH! WE WILL GET BACK TO YOU WITHIN 24
                  HOURS!
                </h6>
                <h6>WHY DON’T YOU VIEW SOME OF OUR WORK TILL THEN?</h6>
              </div>
              <div className="modal-footer">
                <Link
                  to="/"
                  type="button"
                  className="btn btn-default btnThemeClr text-white"
                  data-dismiss="modal"
                >
                  BACK TO HOME
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
