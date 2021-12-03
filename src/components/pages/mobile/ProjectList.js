/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../layout/Footer';
import ProjectCards from '../../layout/ProjectCards';
import noImg from '../../../imgs/noImage.png';
import intro from '../../../imgs/intro.jpg';
import { sortBy } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
import { isMobile } from 'react-device-detect';
const ww = window.innerWidth - 15;

const AboutUs = ({ projectInfo, connectInfo }) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    navigate(tabName);
  };
  return (
    <div className="container-fluid">
      {projectInfo.map((project) => {
        const projectCards = sortBy(
          [...project.projectCard, ...project.projectCardWithMedia],
          ['sno']
        );

        return (
          <>
            <div className="projectTitleTextMobile shadow-lg text-white text-center">
              NOW LETS WORK ON YOUR PROJECT{' '}
              <span
                onClick={() => redirectPage('/ContactUs')}
                className="btn btn-primary btnThemeClr mt-2 w-100 fs-40"
              >
                <strong>GET IN TOUCH</strong>
              </span>
            </div>
            <div className="row">
              <div className="p-5">
                <div className="w-100 h4 themeClr">Client</div>
                <div className="w-100 h1">{project.client}</div>
                <div className="w-100 h4 themeClr">Industry</div>
                <div className="w-100 h1">{project.industry}</div>
                <div className="w-100 h4 themeClr">Project Type</div>
                <div className="w-100 h1">{project.type}</div>
              </div>
              <div
                id="carouselExampleSlidesOnly"
                class="carousel slide mt-3 shadow-sm"
                data-ride="carousel"
              >
                <div class="carousel-inner">
                  <div class="carousel-item active">
                    <img
                      class="d-block w-100"
                      src={project.imageURL || intro}
                      alt="title"
                    />
                  </div>
                </div>
              </div>
              <div className="h4 mt-5 w-75 mx-auto text-secondary">
                {project.subtitle}
              </div>
              {projectCards.map((project, idx) => {
                return (
                  <ProjectCards
                    key={idx}
                    {...project}
                    isLast={idx === projectCards.length - 1}
                  />
                );
              })}
              {project.testimonial.map(
                ({ testimonial, stars, author, designation }) => (
                  <div
                    className={`h1 mx-auto pl-4 mt-5 pr-4 pt-4 pb-4 testimonial shadow-sm ${
                      isMobile ? 'w-100' : ''
                    }`}
                  >
                    <div>
                      {Array(stars)
                        .fill(0)
                        .map(() => (
                          <i class="fas fa-star mr-1 fsstar"></i>
                        ))}
                    </div>
                    <div className="font-weight-bold h3">{testimonial}</div>
                    <div className="h4">{author}</div>
                    <div className="h5">{designation}</div>
                  </div>
                )
              )}
              <div className="p-3 text-center">
                <h1 className="fs-55">IMPRESSED BY OUR WORK?</h1>
                <button
                  type="button"
                  class="btn btn-light impressend shadow-sm"
                  onClick={() => redirectPage('/ContactUs')}
                >
                  VIEW OTHER PROJECTS
                </button>
              </div>
            </div>
          </>
        );
      })}
      <div className="mt-5"></div>

      <Footer {...connectInfo} />
    </div>
  );
};

export default AboutUs;
