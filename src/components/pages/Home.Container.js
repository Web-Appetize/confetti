// plugins
import { isMobile } from 'react-device-detect';
import React, { useState, useEffect, useContext } from 'react';
import ConfettiContext from '../../context/confetti_context/context';

// components
import MobileHome from './mobile/Home';
import Home from './desktop/Home';
import Loader from './Loader';

const HomeContainer = () => {
  const [currentDesc, setCurrentDesc] = useState(null);
  const githubContext = useContext(ConfettiContext);
  const {
    loading,
    homeInfo,
    serviceInfo,
    projectInfo,
    sortedInfo,
    noTimeInfo,
    connectInfo,
    fetchHomeInfo,
    lockInfo,
  } = githubContext;

  useEffect(() => {
    fetchHomeInfo().then(() => {
      setCurrentDesc(serviceInfo[0]);
    });
    //eslint-disable-next-line
  }, []);

  const noRender =
    !serviceInfo.length ||
    !projectInfo.length ||
    !Object.keys(noTimeInfo).length ||
    !Object.keys(sortedInfo).length ||
    !Object.keys(lockInfo).length ||
    !Object.keys(connectInfo).length;

  if (loading || noRender) {
    return <Loader />;
  }

  const { title, videoUrl } = homeInfo;
  const data = {
    title,
    videoUrl,
    services: [...serviceInfo],
    containerCards: [...projectInfo],
    noTimeInfo,
    connectInfo,
    currentDesc,
    setCurrentDesc,
    sortedInfo,
    lockInfo,
  };

  if (isMobile) return <MobileHome {...data} />;
  return <Home {...data} />;
};

export default HomeContainer;
