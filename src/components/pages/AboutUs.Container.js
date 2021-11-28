// plugins
import { isMobile } from 'react-device-detect';
import React, { useContext, useEffect } from 'react';
import ConfettiContext from '../../context/confetti_context/context';

// components
import MobileAboutUs from './mobile/AboutUs';
import AboutUs from './desktop/AboutUs';
import Loader from './Loader';

const AboutUsContainer = () => {
  const githubContext = useContext(ConfettiContext);
  const {
    loading,
    aboutInfo,
    fetchAboutInfo,
    fetchConnectInfo,
    connectInfo,
  } = githubContext;
  useEffect(() => {
    fetchAboutInfo();
    fetchConnectInfo();
    //eslint-disable-next-line
  }, []);
  const data = {
    aboutInfo,
    connectInfo,
  };

  if (
    loading ||
    !Object.keys(aboutInfo).length ||
    !Object.keys(connectInfo).length
  )
    return <Loader />;
  if (isMobile) return <MobileAboutUs {...data} />;
  return <AboutUs {...data} />;
};

export default AboutUsContainer;
