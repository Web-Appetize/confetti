import React from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';
const ww = window.innerWidth - 15;

const AboutUs = ({
  title,
  containerCards,
  currentDesc,
}) => {
  const {
    title: serviceTitle,
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
              <img alt="product" src="" />

              <div className="carousel-caption d-none d-md-block">
                <span>{title}</span>
              </div>
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

export default AboutUs;
