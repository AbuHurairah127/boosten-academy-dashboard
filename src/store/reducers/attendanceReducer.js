import { FETCH_CLASS } from "../types/constants";

let initialState = {
  studentsList: [],
};

const attendanceReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_CLASS: {
      let newStudentsList = action.payload;
      return {
        ...state,
        studentsList: newStudentsList,
      };
    }
    default:
      return state;
  }
};

export default attendanceReducer;
