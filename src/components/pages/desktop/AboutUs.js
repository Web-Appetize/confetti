/* eslint-disable no-unused-vars */
import React from 'react';
import Footer from '../../layout/Footer';
import { Link } from 'react-router-dom';
import ContainerCards from '../../layout/ContainerCards';
const ww = window.innerWidth - 15;

const AboutUs = ({ aboutInfo, connectInfo }) => {
  const { title, subtitle, coverImageWebURL, card, cardWithMedia } = aboutInfo;
  const projectCards = [...card, ...cardWithMedia];
  return (
    <div className="container-fluid homeContainer" style={{ width: ww }}>
      {projectCards.map((project, idx) => {
        return (
          <ContainerCards
            key={idx}
            {...project}
            isLast={idx === projectCards.length - 1}
          />
        );
      })}
      <Footer {...connectInfo} />
    </div>
  );
};

export default AboutUs;
