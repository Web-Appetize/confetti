// plugins
import { isMobile } from 'react-device-detect';
import React, { useState, useEffect, useContext } from 'react';
import ConfettiContext from '../../context/confetti_context/context';

// components
import sampleWallUrl from '../../imgs/sampleWall.jpg';
import MobileHome from './mobile/Home';
import Home from './desktop/Home';
import Loader from './Loader';

const HomeContainer = () => {
  const githubContext = useContext(ConfettiContext);
  const { loading, homeInfo, fetchHomeInfo } = githubContext;
  useEffect(() => {
    fetchHomeInfo();
    //eslint-disable-next-line
  }, []);

  let currentDescription = {};
  const { title, videoUrl } = homeInfo;
  const services = [
    {
      label: 'Service 1',
      url: '',
      description: {
        title: 'PROTOTYPING',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 2',
      url: '',
      description: {
        title: 'PROTOTYPING 2',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 3',
      url: '',
      description: {
        title: 'PROTOTYPING 3',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 4',
      url: '',
      description: {
        title: 'PROTOTYPING 4',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
    {
      label: 'Service 5',
      url: '',
      description: {
        title: 'PROTOTYPING 5',
        image: '',
        sublabel1:
          'Prototyping is a process where design teams implement ideas into tangible forms from paper to digital.',
        sublabel2:
          'We use our expertise in protyping to help our clients to get a better look & feel of our designs',
        getInTouchUrl: '',
      },
    },
  ];
  const containerCards = [
    {
      title: 'SELECTED  UI/UX DESIGN',
      btnTxt: 'PETFRIENDS, MOBILE APP',
      backImage: sampleWallUrl,
      url: '',
    },
    {
      title: 'GRAPHIC DESIGN',
      btnTxt: 'PETFRIENDS, MOBILE APP 1',
      backImage: sampleWallUrl,
      url: '',
    },
  ];
  if (services.length) currentDescription = { ...services[0].description };
  const [currentDesc, setCurrentDesc] = useState(currentDescription);

  const data = {
    title,
    videoUrl,
    services,
    containerCards,
    currentDesc,
    setCurrentDesc,
  };

  if (loading) return <Loader />;
  if (isMobile) return <MobileHome {...data} />;

  return <Home {...data} />;
};

export default HomeContainer;
