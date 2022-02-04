/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';
import { sortBy } from 'lodash';
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
  const [slider, setSlider] = useState(false);
  const {
    title: currentServiceTitle,
    imageURL = '',
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
  const updatedContainerCards = sortBy([...containerCards], ['projectType']);

  return (
    <div
      className={`container-fluid homeContainer ${
        slider ? 'disableYScroll' : ''
      }`}
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
                {imageURL && (
                  <img
                    alt={currentServiceTitle}
                    className="img-responsive align-baseline ml-2"
                    src={imageURL}
                    height="30"
                  />
                )}
              </span>
            </div>
            {currentServiceDescription.map(({ text, id }) => (
              <div key={id} className="fs18 mb-3">
                {text}
              </div>
            ))}

            <Link
              to="/ContactUs"
              className="btn btn-primary btnThemeClr getInTouchBtnMobile w-100 p-2 mt-2 mb-2 fs-20"
            >
              GET IN TOUCH
            </Link>
          </div>
        </div>
      </div>
      <div className="row verticalCenter">
        <div
          id="carouselExampleSlidesOnly"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div
              className="carousel-item active text-center videoContent"
              id="videoContentIdMobile"
            >
              <video
                className="widthUnset"
                loop={true}
                autoPlay="autoplay"
                muted
              >
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div className="carousel-caption carousel-caption-mobile d-md-block">
                <span className="mr-5">{title}</span>
                <br />
                <div class="mouse_scroll_mobile">
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
      <div className="mt-5 row pl-1 pr-1 pt-5 pb-5">
        <div className="col">
          <span className="projectTitle">
            <strong>HOW CAN WE HELP YOU?</strong>{' '}
          </span>
        </div>
        <div className="w-100"></div>
        <div className="col-12 p-0">
          <div className="card services h-auto">
            <ul className="list-group list-group-flush">
              {services.map(({ title, url = '/' }, idx) => {
                return (
                  <Link key={idx} className="list-group-item p-0" to={url}>
                    <li
                      className="list-group-item text-dark services-list border-bottom-secondary"
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
      <div className="mt-0">
        {containerCards.map((project, idx) => {
          return (
            <>
              <ContainerCards
                key={idx}
                {...project}
                index={idx}
                showProject={() =>
                  setCurrentDescFn({
                    title: lockInfo.title,
                    description: lockInfo.text,
                  })
                }
                showTitle={
                  idx === 0 ||
                  project.projectType !==
                    updatedContainerCards[idx - 1].projectType
                }
                isLast={idx === containerCards.length - 1}
              />
            </>
          );
        })}
      </div>
      <div className="row mt-5 p-1 pt-5 mt-5 mb-3">
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
        <div className="col p-0 mt-3">
          <div className="card notTimePaddingMobile cardBackImgMobile">
            <div className="card-body pt-5 pb-5">
              <h3 className="card-title ntpCardTitle2 pb-3">
                {sortedInfo.text}
              </h3>
              <Link
                to="/ContactUs"
                className="btn btn-primary btnThemeClr getInTouchBtnMobile w-100 p-2 mt-2 mb-2 fs-20"
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
