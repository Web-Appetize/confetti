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
  const {
    loading,
    connectInfo,
    fetchConnectInfo,
    fetchMsgSentInfo,
    msgSentInfo,
  } = githubContext;
  useEffect(() => {
    fetchConnectInfo();
    fetchMsgSentInfo();
    //eslint-disable-next-line
  }, []);
  const data = {
    connectInfo,
    msgSentInfo,
  };

  if (
    loading ||
    !Object.keys(connectInfo).length ||
    !Object.keys(msgSentInfo).length
  )
    return <Loader />;
  if (isMobile) return <MobileContactUs {...data} />;
  return <ContactUs {...data} />;
};

export default ContactUsContainer;
