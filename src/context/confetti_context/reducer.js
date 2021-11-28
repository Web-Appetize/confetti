import {
  SET_HOME_INFO,
  SET_LOADING,
  SET_SERVICE_INFO,
  SET_PROJECT_INFO,
  SET_NOTIME_INFO,
  SET_CONNECT_INFO,
  SET_ABOUT_INFO
} from '../Types';
export default (state, action) => {
  switch (action.type) {
    case SET_HOME_INFO:
      return { ...state, homeInfo: action.payload, loading: false };
    case SET_SERVICE_INFO:
      return { ...state, serviceInfo: action.payload, loading: false };
    case SET_PROJECT_INFO:
      return { ...state, projectInfo: action.payload, loading: false };
    case SET_NOTIME_INFO:
      return { ...state, noTimeInfo: action.payload, loading: false };
    case SET_CONNECT_INFO:
      return { ...state, connectInfo: action.payload, loading: false };
    case SET_ABOUT_INFO:
      return { ...state, aboutInfo: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
