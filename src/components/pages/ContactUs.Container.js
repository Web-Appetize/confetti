// plugins
import { isMobile } from 'react-device-detect';
import React, { useContext } from 'react';
import ConfettiContext from '../../context/confetti_context/context';

// components
import MobileContactUs from './mobile/ContactUs';
import ContactUs from './desktop/ContactUs';
import Loader from './Loader';

const ContactUsContainer = () => {
  const githubContext = useContext(ConfettiContext);
  const { loading } = githubContext;

  const data = {};

  if (loading) return <Loader />;
  if (isMobile) return <MobileContactUs {...data} />;

  return <ContactUs {...data} />;
};

export default ContactUsContainer;
