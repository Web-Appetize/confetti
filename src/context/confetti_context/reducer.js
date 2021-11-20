import { GET_HOME_INFO, GET_PROJECT_INFO, SET_LOADING } from "../Types";
export default (state, action) => {
  switch (action.type) {
    case GET_HOME_INFO:
      return { ...state, homeInfo: action.payload, loading: false };
    case GET_PROJECT_INFO:
      return { ...state, userProfile: action.payload, loading: false };
    case SET_LOADING:
      return { ...state, loading: true };
    default:
      return state;
  }
};
