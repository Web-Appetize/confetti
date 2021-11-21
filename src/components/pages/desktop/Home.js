/* eslint-disable no-unused-vars */
import React from 'react';
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
}) => {
  const {
    title: serviceTitle,
    sublabel1,
    sublabel2,
    getInTouchUrl,
  } = currentDesc;

  return (
    <div className="container-fluid homeContainer" style={{ width: ww }}>
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

              <div className="carousel-caption d-none d-md-block">
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row pl-5 pr-5 pt-5 pb-0">
        <div className="col">
          <span className="homeTitle">HOW CAN WE HELP YOU?</span>
        </div>
        <div className="w-100"></div>
        <div className="col">
          <div className="card services shadow-sm">
            <ul className="list-group list-group-flush">
              {services.map(({ label, url, description }, idx) => {
                return (
                  <Link
                    key={idx}
                    className="list-group-item p-0"
                    to={url}
                  >
                    <li
                      className="list-group-item text-dark services-list"
                      onMouseOver={() => setCurrentDesc(description)}
                    >
                      <div className="d-flex justify-content-between">
                        <span>{label}</span>
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
          <div className="card services shadow-sm">
            <div className="card-body">
              <h3 className="card-title">{serviceTitle}</h3>
              <h6 className="card-subtitle mb-2 text-muted">{sublabel1}</h6>
              <p className="card-text">{sublabel2}</p>
              <Link
                key={sublabel2}
                to={getInTouchUrl}
                className="btn btn-primary btnThemeClr getInTouchBtn"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
      {/* projects showcase */}
      {containerCards.map((project, idx) => {
        return (
          <ContainerCards
            key={idx}
            {...project}
            isLast={idx === containerCards.length - 1}
          />
        );
      })}
      <div className="row p-5">
        <div className="col bg-dark text-white">
          <div className="card notTimePadding bg-dark">
            <div className="card-body">
              <span className="ntpCardTitle1">NO TIME-PADDING</span>
              <p className="card-text">
                DESIGN AGENCIES CHARGE YOU 50% MORE FOR DOING TASKS THAT ARE
                IRRELIVENT FOR YOUR PROJECT.
              </p>
              <p className="card-text">THIS IS CALLED “TIME-PADDING”</p>
              <p className="card-text">
                CONFETTI FOLLOWS A “NO TIME-PADDING” POLICY AND SAVE YOU TIME &
                MONEY.
              </p>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="card notTimePadding">
            <div className="card-body">
              <h3 className="card-title ntpCardTitle2">LETS GET YOU SORTED!</h3>
              <Link
                key={getInTouchUrl}
                to={getInTouchUrl}
                className="btn btn-primary btnThemeClr NavGetInTouchUrl ml-0"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
