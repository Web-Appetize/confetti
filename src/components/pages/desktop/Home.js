/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../../layout/Footer';
import { Link, useNavigate } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';

const ww = window.innerWidth - 15;

const Home = ({
  title,
  videoUrl,
  services,
  containerCards,
  currentDesc,
  setCurrentDesc,
  noTimeInfo,
  connectInfo,
  sortedInfo,
  lockInfo,
}) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    navigate(tabName);
  };

  const {
    title: currentServiceTitle,
    imageURL,
    description: currentServiceDescription = [],
    getInTouchUrl = '',
  } = currentDesc || services[0];

  const [modal, setmodal] = useState(false);

  const setmodalFn = (val) => {
    document.getElementById('homeProjectModalBtn').click();
    setmodal(val);
  };

  return (
    <div className="container-fluid homeContainer">
      <div
        class="modal fade"
        id="homeProjectModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="homeProjectModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-body">
              <button
                type="button"
                class="close"
                onClick={() => setmodalFn(!modal)}
              >
                <span aria-hidden="true">&times;</span>
              </button>

              <div>
                <h3 className="font-weight-bold">{lockInfo.title}</h3>
                {lockInfo.text.map(({ text: locktext }) => (
                  <h6>{locktext}</h6>
                ))}
              </div>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-default mr-auto btnThemeClr text-white font-weight-bold"
                data-dismiss="modal"
                onClick={() => redirectPage('/ContactUs')}
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active text-center videoContent"
              id="videoContentId"
              style={{ width: ww }}
            >
              <video loop={true} autoPlay="autoplay" muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="carousel-caption d-md-block">
                <span>{title}</span>
              </div>
              <div className="carousel-caption m-auto">
                <div class="mouse_scroll mt-5">
                  <div class="mouse">
                    <div class="wheel"></div>
                  </div>
                  <div>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows trei"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pl-5 pr-5 pt-5 pb-0 mt-3">
        <div className="col">
          <span className="homeTitle">HOW CAN WE HELP YOU?</span>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div className="card services shadow-sm border rounded">
            <ul className="list-group list-group-flush">
              {services.map(({ title, url = '/' }, idx) => {
                return (
                  <Link key={idx} className="list-group-item p-0" to={url}>
                    <li
                      className="list-group-item text-dark services-list"
                      onMouseOver={() => setCurrentDesc(services[idx])}
                    >
                      <div className="d-flex justify-content-between">
                        <span>{title}</span>
                        <span>
                          <i className="fas fa-arrow-right fa-lg arrowRight"></i>
                        </span>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="col">
          <div className="card services shadow-sm border rounded">
            <div className="card-body">
              <h3 className="card-title mb-3">
                {currentServiceTitle}{' '}
                <span>
                  <img
                    alt={currentServiceTitle}
                    className="img-responsive align-bottom"
                    src={imageURL}
                    height="30"
                  />
                </span>
              </h3>
              {currentServiceDescription.map(({ text, id }) => (
                <h6 key={id} className="card-subtitle mb-3">
                  {text}
                </h6>
              ))}

              <span
                onClick={() => redirectPage('/ContactUs')}
                className="btn btn-primary btnThemeClr getInTouchBtn"
              >
                GET IN TOUCH
              </span>
            </div>
          </div>
        </div>
      </div>
      {/* projects showcase */}
      <div className="mt-3">
        {containerCards.map((project, idx) => {
          return (
            <ContainerCards
              key={idx}
              {...project}
              showProject={() => setmodalFn(!modal)}
              isLast={idx === containerCards.length - 1}
            />
          );
        })}
      </div>

      <div className="row mt-3 p-5 m-1">
        <div className="col bg-dark text-white">
          <div className="card notTimePadding bg-dark">
            <div className="card-body">
              <span className="ntpCardTitle1"> {noTimeInfo.title}</span>
              {noTimeInfo.text.map(({ text, id }) => (
                <p key={id} className="card-text">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="col shadow-sm border">
          <div className="card notTimePadding cardBackImg">
            <div className="card-body">
              <h3 className="card-title ntpCardTitle2">{sortedInfo.text}</h3>
              <span
                key={getInTouchUrl}
                onClick={() => redirectPage('/ContactUs')}
                className="btn btn-primary btnThemeClr NavGetInTouchUrl ml-0"
              >
                GET IN TOUCH
              </span>
            </div>
          </div>
        </div>
      </div>
      <button
        type="button"
        class="btn btn-primary invisible"
        data-toggle="modal"
        data-target="#homeProjectModal"
        id="homeProjectModalBtn"
      >
        Launch demo modal
      </button>
      <Footer {...connectInfo} />
    </div>
  );
};

export default Home;
