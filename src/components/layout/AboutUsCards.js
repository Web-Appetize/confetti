import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import defaultURL from '../../imgs/sampleWall.jpg';

const ContainerCards = ({
  projectType,
  title,
  text,
  subtitle,
  imageURL,
  url = '',
  showProject,
}) => {
  return (
    <div
      className={`row ${isMobile ? 'pl-1 pr-1 pt-1' : 'pl-5 pr-5 pt-5'}`}
    >
      <div class="card w-100 shadow">
        <div class="card-header h1 font-weight-bold">{title}</div>
        <img
          src={imageURL || defaultURL}
          alt={projectType}
          width={'100%'}
          height="600"
          className="card-img-top"
        />
        <div class="card-body">
          {isMobile ? (
            <div className="projectBtn card-link" onClick={showProject}>
              Click to Explore
            </div>
          ) : (
            <Link to={url}>
              <div className="projectBtn w-18 border card-link">Click to Explore</div>
            </Link>
          )}
          {subtitle && <h5 class="card-title">{subtitle}</h5>}
        </div>
        <ul class="list-group list-group-flush border">
          {text.map(({ text: label }) => (
            <li class="list-group-item">{label}</li>
          ))}
        </ul>
      </div>
      <div className="containerCards col-12"></div>
    </div>
  );
};

ContainerCards.defaultProps = {
  title: 'Page Title',
  imageURL: '',
};

ContainerCards.propTypes = {
  title: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ContainerCards;
