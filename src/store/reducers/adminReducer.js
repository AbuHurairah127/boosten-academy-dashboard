import {
  DELETE_ADMINS,
  FETCH_ALL_ADMINS,
  UPDATE_ADMINS,
} from "../types/constants";

let initialState = {
  adminsList: [],
};

const adminReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ALL_ADMINS: {
      let newAdminsList = action.payload;
      return {
        ...state,
        adminsList: newAdminsList,
      };
    }
    case DELETE_ADMINS: {
      let newAdminsList = state.adminsList.filter(
        (admins) => admins.uid !== action.payload
      );
      return {
        ...state,
        adminsList: newAdminsList,
      };
    }
    case UPDATE_ADMINS: {
      let newAdminsList = state.adminsList.map((item) => {
        if (item.uid === action.payload.uid) {
          return action.payload;
        } else {
          return item;
        }
      });
      return {
        ...state,
        adminsList: newAdminsList,
      };
    }
    default:
      return state;
  }
};

export default adminReducer;
