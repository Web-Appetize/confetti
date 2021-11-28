import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

const ContainerCards = ({
  projectType,
  title: btnTxt,
  imageURL,
  url = '',
  showProject,
}) => {
  return (
    <div
      className={`row ${isMobile ? 'pl-1 pr-1 pt-1' : 'pl-5 pr-5 pt-5'} pb-0`}
    >
      <div className="containerCards col-12">
        <div className="col-12 projectTitle">{projectType}</div>
        <img src={imageURL} alt={projectType} width={'100%'} height="600" className="shadow-sm" />
        {isMobile ? (
          <div className="projectBtn" onClick={showProject}>
            {btnTxt}
          </div>
        ) : (
          <Link to={url}>
            <div className="projectBtn">{btnTxt}</div>
          </Link>
        )}
      </div>
    </div>
  );
};

ContainerCards.defaultProps = {
  title: 'Page Title',
  btnTxt: 'Project Name',
  imageURL: '',
};

ContainerCards.propTypes = {
  title: PropTypes.string.isRequired,
  btnTxt: PropTypes.string.isRequired,
  imageURL: PropTypes.string.isRequired,
};

export default ContainerCards;
