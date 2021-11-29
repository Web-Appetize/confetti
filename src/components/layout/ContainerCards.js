import React from 'react';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';
import defaultURL from '../../imgs/sampleWall.jpg';
import { useNavigate } from 'react-router-dom';

const ContainerCards = ({
  projectType,
  title: btnTxt,
  imageURL,
  url = '/ProjectList',
  showProject,
  locked,
}) => {
  const navigate = useNavigate();
  const redirectPage = (tabName) => {
    navigate(tabName);
  };

  return (
    <div
      className={`row ${isMobile ? 'pl-1 pr-1 pt-1' : 'pl-5 pr-5 pt-5'} pb-0`}
    >
      <div className="containerCards col-12">
        <div className="col-12 projectTitle">{projectType}</div>
        <img
          src={imageURL || defaultURL}
          alt={projectType}
          width={'100%'}
          height="600"
          className="shadow-sm"
        />
        <div
          className="projectBtn"
          onClick={() =>
            locked ? showProject() : redirectPage('/projectList')
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
