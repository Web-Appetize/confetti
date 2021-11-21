import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { isMobile } from 'react-device-detect';

const ContainerCards = ({ title, btnTxt, backImage, url }) => {
  return (
    <div
      className={`row ${isMobile ? 'pl-1 pr-1 pt-1' : 'pl-5 pr-5 pt-5'} pb-0`}
    >
      <div className="containerCards">
        <div className="col-12 projectTitle">{title}</div>
        <img src={backImage} alt={title} width={'100%'} height="600" />
        <Link to={url}>
          <div className="projectBtn">{btnTxt}</div>
        </Link>
      </div>
    </div>
  );
};

ContainerCards.defaultProps = {
  title: 'Page Title',
  btnTxt: 'Project Name',
  backImage: '',
};

ContainerCards.propTypes = {
  title: PropTypes.string.isRequired,
  btnTxt: PropTypes.string.isRequired,
  backImage: PropTypes.string.isRequired,
};

export default ContainerCards;
