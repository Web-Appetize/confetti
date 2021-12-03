import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import defaultURL from '../../imgs/sampleWall.jpg';
import { useNavigate } from 'react-router-dom';

const ContainerCards = ({
  projectType,
  title: btnTxt,
  imageURL,
  showProject,
  locked,
  id,
  showTitle,
}) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    navigate(tabName);
  };

  return (
    <div
      className={`row ${isMobile ? 'pl-0 pr-0 pt-3' : 'pl-5 pr-5 pt-5'} pb-0`}
    >
      <div className={`containerCards col-12 ${isMobile ? 'p-0' : ''}`}>
        <div className={`col-12 projectTitle ${showTitle ? 'mt-3 mb-3' : 'd-none'}`}>
          {projectType}
        </div>
        <img
          src={imageURL || defaultURL}
          alt={projectType}
          width={'100%'}
          height={isMobile ? '300' : '600'}
          className="shadow-sm img-responsive"
          onClick={() =>
            locked ? showProject() : redirectPage(`/ProjectList/${id}`)
          }
        />
        <div
          className="projectBtn"
          onClick={() =>
            locked ? showProject() : redirectPage(`/ProjectList/${id}`)
          }
        >
          {btnTxt}
        </div>
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
