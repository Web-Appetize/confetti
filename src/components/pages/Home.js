/* eslint-disable no-unused-vars */
import React, { useState, useEffect, useContext } from 'react';
import ConfettiContext from '../../context/confetti_context/context';
import sampleWallUrl from '../../imgs/sampleWall.jpg';

import Loader from './Loader';
import { Link } from 'react-router-dom';

import ContainerCards from '../layout/ContainerCards';

const ww = window.innerWidth - 15;

const Home = () => {
  const githubContext = useContext(ConfettiContext);
  const { loading, homeInfo, fetchHomeInfo } = githubContext;
  useEffect(() => {
    fetchHomeInfo();
    //eslint-disable-next-line
  }, []);

  let currentDescription = {};
  const { title, videoUrl } = homeInfo;
  const services = [
    {
      label: 'Service 1',
      url: '',
      description: {
        title: 'PROTOTYPING',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 2',
      url: '',
      description: {
        title: 'PROTOTYPING 2',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 3',
      url: '',
      description: {
        title: 'PROTOTYPING 3',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 4',
      url: '',
      description: {
        title: 'PROTOTYPING 4',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 5',
      url: '',
      description: {
        title: 'PROTOTYPING 5',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
  ];
  const containerCards = [
    {
      title: 'SELECTED  UI/UX DESIGN',
      btnTxt: 'PETFRIENDS, MOBILE APP',
      backImage: sampleWallUrl,
      url: '',
    },
    {
      title: 'GRAPHIC DESIGN',
      btnTxt: 'PETFRIENDS, MOBILE APP 1',
      backImage: sampleWallUrl,
      url: '',
    },
  ];
  if (services.length) currentDescription = { ...services[0].description };

  const [currentDesc, setCurrentDesc] = useState(currentDescription);
  const {
    title: serviceTitle,
    image,
    sublabel1,
    sublabel2,
    getInTouchUrl,
  } = currentDesc;

  if (loading) return <Loader />;

  return (
    <div className="container-fluid">
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
              <video loop="true" autoplay="autoplay" muted>
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>

              <div class="carousel-caption d-none d-md-block">
                <span>{title}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* services  */}
      <div class="row pl-5 pr-5 pt-5 pb-0">
        <div class="col">
          <span className="homeTitle">HOW CAN WE HELP YOU?</span>
        </div>
        <div class="w-100"></div>
        <div class="col">
          <div class="card services shadow-sm">
            <ul class="list-group list-group-flush">
              {services.map(({ label, url, description }) => {
                return (
                  <Link class="list-group-item p-0" to={url}>
                    <li
                      class="list-group-item text-dark services-list"
                      onMouseOver={() => setCurrentDesc(description)}
                    >
                      <div className="d-flex justify-content-between">
                        <span>{label}</span>
                        <span>
                          <i class="fas fa-arrow-right fa-lg arrowRight"></i>
                        </span>
                      </div>
                    </li>
                  </Link>
                );
              })}
            </ul>
          </div>
        </div>
        <div class="col">
          <div class="card services shadow-sm">
            <div class="card-body">
              <h3 class="card-title">{serviceTitle}</h3>
              <h6 class="card-subtitle mb-2 text-muted">{sublabel1}</h6>
              <p class="card-text">{sublabel2}</p>
              <Link
                to={getInTouchUrl}
                class="btn btn-primary btnThemeClr getInTouchBtn"
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
            {...project}
            isLast={idx === containerCards.length - 1}
          />
        );
      })}
      {/* no time padding  */}
      <div class="row p-5">
        <div class="col bg-dark text-white">
          <div class="card notTimePadding bg-dark">
            <div class="card-body">
              <span className="ntpCardTitle1">NO TIME-PADDING</span>
              <p class="card-text">
                DESIGN AGENCIES CHARGE YOU 50% MORE FOR DOING TASKS THAT ARE
                IRRELIVENT FOR YOUR PROJECT.
              </p>
              <p class="card-text">THIS IS CALLED “TIME-PADDING”</p>
              <p class="card-text">
                CONFETTI FOLLOWS A “NO TIME-PADDING” POLICY AND SAVE YOU TIME &
                MONEY.
              </p>
            </div>
          </div>
        </div>
        <div class="col">
          <div class="card notTimePadding">
            <div class="card-body">
              <h3 class="card-title ntpCardTitle2">LETS GET YOU SORTED!</h3>
              <Link
                to={getInTouchUrl}
                class="btn btn-primary btnThemeClr getInTouchBtn"
              >
                GET IN TOUCH
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
