/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../layout/Footer';
import AboutUsCards from '../../layout/AboutUsCards';
import noImg from '../../../imgs/noImage.png';
import intro from '../../../imgs/intro.jpg';
import { sortBy } from 'lodash';
import { Link } from 'react-router-dom';
const ww = window.innerWidth - 15;

const AboutUs = ({ aboutInfo, connectInfo, noTimeInfo, sortedInfo }) => {
  const {
    title,
    subtitle,
    coverImageWebURL = noImg,
    card,
    cardWithMedia,
  } = aboutInfo;
  const projectCards = sortBy([...card, ...cardWithMedia], ['sno']);
  return (
    <div className="container-fluid homeContainer">
      <div className="row">
        <div
          id="carouselExampleSlidesOnly"
          class="carousel slide"
          data-ride="carousel"
        >
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img
                class="d-block w-100"
                src={coverImageWebURL || intro}
                alt="title"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row aboutUsStarCard-3"></div>
      <div className="row text-left">
        <span className="h2 text-bold p-1">
          <strong>{title}</strong>{' '}
        </span>
      </div>
      <div className="row text-left h5 p-2">
        <h1 className="text-bold mt-3">
          <strong className="thatsUstext">{subtitle}</strong>{' '}
        </h1>
        <div className="col-7 aboutUsStarCard-3"></div>
      </div>
      {projectCards.map((project, idx) => {
        return (
          <AboutUsCards
            key={idx}
            {...project}
            isLast={idx === projectCards.length - 1}
          />
        );
      })}
      <div className="row mt-3 p-1 mt-3 mb-3">
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
            <div className="card-body">
              <h3 className="card-title ntpCardTitle2">{sortedInfo.text}</h3>
              <Link
                to="/ContactUs"
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

export default AboutUs;
