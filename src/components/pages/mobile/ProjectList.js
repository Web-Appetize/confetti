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
                className="btn btn-primary btnThemeClr mt-3 mb-3 p-2 w-100 fs-25"
              >
                <strong>GET IN TOUCH</strong>
              </span>
            </div>
            <div className="row">
              <div className="p-5">
                <div className="w-100 h6">Client</div>
                <div className="w-100 h1 mb-3 font-weight-bold">{project.client}</div>
                <div className="w-100 h6">Industry</div>
                <div className="w-100 h1 mb-3 font-weight-bold">{project.industry}</div>
                <div className="w-100 h6">Project Type</div>
                <div className="w-100 h1 mb-3 font-weight-bold">{project.projectType}</div>
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
              <div className="h4 m-5 p-3 w-100 mx-auto text-secondary">
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
                    <div className="font-weight-bold h3 mt-3 mb-3">{testimonial}</div>
                    <div className="h4">{author}</div>
                    <div className="h6">{designation}</div>
                  </div>
                )
              )}
              <div className="p-3 text-center mt-5 w-100">
                <h1 className="font-weight-bold text-left">IMPRESSED BY OUR WORK?</h1>
                <button
                  type="button"
                  class="btn font-weight-bold pt-3 pb-3 btn-light impressend shadow-sm w-100 mt-3"
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
