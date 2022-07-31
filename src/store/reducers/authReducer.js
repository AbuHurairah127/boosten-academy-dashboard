import { LOGIN, LOGOUT } from "../types/constants";

let initialState = {
  isUserAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN: {
      let isUserAuthenticatedNow = true;
      return {
        ...state,
        isUserAuthenticated: isUserAuthenticatedNow,
      };
    }
    case LOGOUT: {
      let isUserAuthenticatedNow = false;
      return {
        ...state,
        isUserAuthenticated: isUserAuthenticatedNow,
      };
    }
    default:
      return state;
  }
};

export default authReducer;
