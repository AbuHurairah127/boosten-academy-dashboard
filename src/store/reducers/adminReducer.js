import { FETCH_ALL_ADMINS } from "../types/constants";

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
    default:
      return state;
  }
};

export default adminReducer;
