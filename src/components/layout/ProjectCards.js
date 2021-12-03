import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import defaultURL from '../../imgs/sampleWall.jpg';

const ContainerCards = ({
  projectType,
  title,
  text,
  subtitle,
  url = '',
  media,
  showProject,
}) => {
  return (
    <div className={`mx-auto ${isMobile ? 'pl-1 pr-1 pt-1 w-100' : 'pl-5 pr-5 pt-5 w-75'}`}>
      <div class="card">
        <div class="card-header h1 font-weight-bold">
          <div className="h6">{subtitle}</div>
          <div className="h2">{title}</div>
        </div>
        {media &&
          media.map(({ url: imageURL }) => (
            <img
              src={imageURL || defaultURL}
              alt={projectType}
              
              className="card-img-top mb-2 img-responsive"
            />
          ))}
        <ul class="list-group list-group-flush">
          {text.map(({ text: label }) => (
            <li class="list-group-item">{label}</li>
          ))}
        </ul>
      </div>
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
