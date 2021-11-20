import React, { useReducer } from 'react';
import axios from 'axios';
import GFcontext from './context';
import GFreducer from './reducer';
import { GET_HOME_INFO, GET_PROJECT_INFO, SET_LOADING } from '../Types';

const GFaction = (props) => {
  const initialState = {
    homeInfo: {},
    userProfile: {},
    loading: false,
  };
  const hostName = 'https://confettiportfolio.herokuapp.com';
  const [state, dispatch] = useReducer(GFreducer, initialState);

  async function fetchHomeInfo() {
    setloading();
    let res = await axios.get(`${hostName}/home`);
    dispatch({ type: GET_HOME_INFO, payload: res.data });
  }

  const searchUsers = async (text) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`
    );
    dispatch({ type: GET_HOME_INFO, payload: res.data.items });
  };

  const getUserProfile = async (username) => {
    setloading();
    const res = await axios.get(
      `https://api.github.com/search/users?q=${
        username.indexOf(':') > -1 ? username.replace(':', '') : username
      }`
    );
    dispatch({ type: GET_PROJECT_INFO, payload: res.data.items[0] });
  };

  const setloading = () => dispatch({ type: SET_LOADING });
  return (
    <GFcontext.Provider
      value={{
        homeInfo: state.homeInfo,
        userProfile: state.userProfile,
        loading: state.loading,
        searchUsers,
        fetchHomeInfo,
        getUserProfile,
      }}
    >
      {props.children}
    </GFcontext.Provider>
  );
};

export default GFaction;
