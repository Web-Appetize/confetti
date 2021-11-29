/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
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
}) => {
  const [slider, setSlider] = useState(false);
  const {
    title: currentServiceTitle,
    imageURL,
    description: currentServiceDescription = [],
    getInTouchUrl = '',
  } = currentDesc || services[0];

  const setCurrentDescFn = (data) => {
    if (data) {
      setSlider(true);
      setCurrentDesc(data);
    } else {
      setSlider(false);
    }
  };

  return (
    <div
      className={`container-fluid homeContainer ${
        slider ? 'disableYScroll' : ''
      }`}
      style={{ width: ww }}
    >
      <div className={`slider ${slider ? '' : 'close'}`}>
        <div className="transparent"></div>
        <div className="content">
          <div className="titleBar">
            <i className="fas fa-times" onClick={() => setSlider(!slider)}></i>
          </div>
          <div className="dataContainer">
            <div className="title">
              {currentServiceTitle}
              <span>
                <img
                  alt={currentServiceTitle}
                  className="img-responsive align-baseline ml-2"
                  src={imageURL}
                  height="30"
                />
              </span>
            </div>
            {currentServiceDescription.map(({ text, id }) => (
              <div key={id} className="h4 mb-3">
                {text}
              </div>
            ))}

            <Link
              to="/contactUs"
              className="btn btn-primary btnThemeClr getInTouchBtnMobile w-100 p-3 mt-2 mb-2"
            >
              GET IN TOUCH
            </Link>
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
              style={{ width: ww }}
            >
              <video loop={true} autoPlay="autoplay" muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="carousel-caption carousel-caption-mobile d-md-block">
                <span>{title}</span>
                <br />
                <div class="mouse_scroll_mobile">
                  <div class="mouse">
                    <div class="wheel"></div>
                  </div>
                  <div>
                    <span class="m_scroll_arrows unu"></span>
                    <span class="m_scroll_arrows doi"></span>
                    <span class="m_scroll_arrows trei"></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pl-1 pr-1 pt-1 pb-0">
        <div className="col">
          <span className="projectTitle">
            <strong>HOW CAN WE HELP YOU?</strong>{' '}
          </span>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div className="card services h-auto shadow-sm">
            <ul className="list-group list-group-flush">
              {services.map(({ title, url = '/' }, idx) => {
                return (
                  <Link key={idx} className="list-group-item p-0" to={url}>
                    <li
                      className="list-group-item text-dark services-list"
                      onClick={() => setCurrentDescFn(services[idx])}
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
      </div>
      {containerCards.map((project, idx) => {
        return (
          <>
            <ContainerCards
              key={idx}
              {...project}
              showProject={() => setSlider(!slider)}
              isLast={idx === containerCards.length - 1}
            />
          </>
        );
      })}
      <div className="row p-1 mt-3 mb-3">
        <div className="col-12 bg-dark text-white">
          <div className="card notTimePaddingMobile bg-dark">
            <div className="card-body">
              <span className="ntpCardTitle1">{noTimeInfo.title}</span>
              {noTimeInfo.text.map(({ text, id }) => (
                <p key={id} className="card-text">
                  {text}
                </p>
              ))}
            </div>
          </div>
        </div>
        <div className="col shadow-sm">
          <div className="card notTimePaddingMobile cardBackImgMobile">
            <div className="card-body">
              <h3 className="card-title ntpCardTitle2">LETS GET YOU SORTED!</h3>
              <Link
                to="/contactUs"
                className="btn btn-primary btnThemeClr getInTouchBtnMobile"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer {...connectInfo} />
    </div>
  );
};

export default Home;
