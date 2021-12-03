/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../layout/Footer';
import ProjectCards from '../../layout/ProjectCards';
import noImg from '../../../imgs/noImage.png';
import intro from '../../../imgs/intro.jpg';
import { sortBy } from 'lodash';
import { Link, useNavigate } from 'react-router-dom';
const ww = window.innerWidth - 15;

const AboutUs = ({ projectInfo, connectInfo }) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    navigate(tabName);
  };
  return (
    <div className="container-fluid">
      {projectInfo.map((project, index) => {
        const projectCards = sortBy(
          [...project.projectCard, ...project.projectCardWithMedia],
          ['sno']
        );

        return (
          <>
            <div className="row">
              <div className="p-5">
                <div className="w-100 h5">CLIENT</div>
                <div className="w-100 h1 font-weight-bolder">
                  {project.client}
                </div>
                <div className="w-100 h5">INDUSTRY</div>
                <div className="w-100 h1 font-weight-bolder">
                  {project.industry}
                </div>
                <div className="w-100 h5">PROJECT TYPE</div>
                <div className="w-100 h1 font-weight-bolder">
                  {project.type}
                </div>
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
                    <div
                      className={`${
                        index === 0 ? 'd-none' : ''
                      } carousel-caption rightTopCaption d-md-block`}
                    >
                      <div className="projectTitleText shadow">
                        NOW LETS WORK ON YOUR PROJECT{' '}
                        <span
                          onClick={() => redirectPage('/ContactUs')}
                          className="btn btn-primary btnThemeClr mt-3"
                        >
                          GET IN TOUCH
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h5 mt-5 w-75 mx-auto text-secondary">
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
                  <div className="h1 mx-auto pl-4 mt-5 pr-4 pt-4 pb-4 testimonial shadow-sm">
                    <div>
                      {Array(stars)
                        .fill(0)
                        .map(() => (
                          <i class="fas fa-star mr-1 fsstar"></i>
                        ))}
                    </div>
                    <div className="h1 pt-5 pb-5 font-weight-bold">{testimonial}</div>
                    <div className="h4 pt-3">{author}</div>
                    <div className="h5">{designation}</div>
                  </div>
                )
              )}
              <div className="text-left m-5 w-75 p-5 mx-auto">
                <h1>IMPRESSED BY OUR WORK?</h1>
                <button
                  type="button"
                  class="h4 btn btn-light impressend shadow-sm"
                  onClick={() => redirectPage('/')}
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
