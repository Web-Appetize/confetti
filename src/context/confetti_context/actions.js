import React, { useReducer } from 'react';
import axios from 'axios';
import GFcontext from './context';
import GFreducer from './reducer';
import {
  SET_HOME_INFO,
  SET_LOADING,
  SET_SERVICE_INFO,
  SET_PROJECT_INFO,
  SET_NOTIME_INFO,
  SET_CONNECT_INFO,
  SET_ABOUT_INFO,
  SET_TABS,
} from '../Types';

const CCaction = (props) => {
  const initialState = {
    homeInfo: {},
    serviceInfo: [],
    projectInfo: [],
    noTimeInfo: {},
    connectInfo: {},
    aboutInfo: {},
    loading: false,
    tabs: ['ContactUs', 'AboutUs'],
  };
  const hostName = 'https://confettiportfolio.herokuapp.com';
  const [state, dispatch] = useReducer(GFreducer, initialState);

  async function fetchHomeInfo() {
    setloading();
    let res = await axios.get(`${hostName}/home`);
    dispatch({ type: SET_HOME_INFO, payload: res.data });

    let serviceRes = await axios.get(`${hostName}/services`);
    dispatch({ type: SET_SERVICE_INFO, payload: serviceRes.data });

    let projectRes = await axios.get(`${hostName}/projects`);
    dispatch({ type: SET_PROJECT_INFO, payload: projectRes.data });

    let notTimeRes = await axios.get(`${hostName}/nopad`);
    dispatch({ type: SET_NOTIME_INFO, payload: notTimeRes.data });

    let connectRes = await axios.get(`${hostName}/connect`);
    dispatch({ type: SET_CONNECT_INFO, payload: connectRes.data });
  }

  async function fetchServiceInfo() {
    setloading();
    let res = await axios.get(`${hostName}/services`);
    dispatch({ type: SET_SERVICE_INFO, payload: res.data });
  }

  async function fetchProjectInfo() {
    setloading();
    let res = await axios.get(`${hostName}/projects`);
    dispatch({ type: SET_PROJECT_INFO, payload: res.data });
  }

  async function fetchNoTimeInfo() {
    setloading();
    let res = await axios.get(`${hostName}/nopad`);
    dispatch({ type: SET_NOTIME_INFO, payload: res.data });
  }

  async function fetchAboutInfo() {
    setloading();
    let res = await axios.get(`${hostName}/about`);
    dispatch({ type: SET_ABOUT_INFO, payload: res.data });
  }

  async function fetchConnectInfo() {
    setloading();
    let res = await axios.get(`${hostName}/connect`);
    dispatch({ type: SET_CONNECT_INFO, payload: res.data });
  }

  const setloading = (status) =>
    dispatch({ type: SET_LOADING, payload: status });

  const setTabs = (val) => dispatch({ type: SET_TABS, payload: val });

  return (
    <GFcontext.Provider
      value={{
        homeInfo: state.homeInfo,
        serviceInfo: state.serviceInfo,
        projectInfo: state.projectInfo,
        noTimeInfo: state.noTimeInfo,
        connectInfo: state.connectInfo,
        aboutInfo: state.aboutInfo,
        loading: state.loading,
        tabs: state.tabs,
        fetchHomeInfo,
        fetchServiceInfo,
        fetchProjectInfo,
        fetchNoTimeInfo,
        fetchConnectInfo,
        fetchAboutInfo,
        setTabs,
      }}
    >
      {props.children}
    </GFcontext.Provider>
  );
};

export default CCaction;
