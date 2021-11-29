// plugins
import { isMobile } from 'react-device-detect';
import React, { useContext, useEffect } from 'react';
import ConfettiContext from '../../context/confetti_context/context';

// components
import MobileProjectList from './mobile/ProjectList';
import ProjectList from './desktop/ProjectList';
import Loader from './Loader';

const ProjectListContainer = () => {
  const githubContext = useContext(ConfettiContext);
  const {
    loading,
    fetchConnectInfo,
    fetchProjectInfo,
    connectInfo,
    projectInfo
  } = githubContext;
  useEffect(() => {
    fetchConnectInfo();
    fetchProjectInfo();
    //eslint-disable-next-line
  }, []);
  const data = {
    connectInfo,
    projectInfo
  };

  if (
    loading ||
    !Object.keys(connectInfo).length ||
    !Object.keys(projectInfo).length
  )
    return <Loader />;
  if (isMobile) return <MobileProjectList {...data} />;
  return <ProjectList {...data} />;
};

export default ProjectListContainer;
