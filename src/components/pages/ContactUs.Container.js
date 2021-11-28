// plugins
import { isMobile } from 'react-device-detect';
import React, { useContext, useEffect } from 'react';
import ConfettiContext from '../../context/confetti_context/context';

// components
import MobileContactUs from './mobile/ContactUs';
import ContactUs from './desktop/ContactUs';
import Loader from './Loader';

const ContactUsContainer = () => {
  const githubContext = useContext(ConfettiContext);
  const { loading, connectInfo, fetchConnectInfo } = githubContext;
  useEffect(() => {
    fetchConnectInfo();
    //eslint-disable-next-line
  }, []);
  const data = {
    connectInfo,
  };

  if (loading || !Object.keys(connectInfo).length) return <Loader />;
  if (isMobile) return <MobileContactUs {...data} />;
  return <ContactUs {...data} />;
};

export default ContactUsContainer;
