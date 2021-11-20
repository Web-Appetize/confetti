import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const ww = window.innerWidth - 100;

const ContainerCards = ({ title, btnTxt, backImage, url, isLast }) => {
  return (
    <div className={`row pl-5 pr-5 pt-5 ${isLast ? 'pb-0' : 'pb-0'}`}>
      <div className="projectTitle">{title}</div>
      <div className="containerCards">
        <img src={backImage} alt={title} width={ww} height="600" />
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
