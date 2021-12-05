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
    <div className={`mx-auto ${isMobile ? 'p-3 mt-5 w-100' : 'p-5 w-75'}`}>
      <div class="card">
        <div class="card-header h1 font-weight-bold p-0 border-0">
          <div className="h6">{subtitle}</div>
          <div className="h1 font-weight-bold">{title}</div>
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
            <li class="list-group-item p-0 border-0 pt-3">{label}</li>
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
