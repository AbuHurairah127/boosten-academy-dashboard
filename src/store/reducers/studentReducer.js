import { FETCH_STUDENT } from "./../types/constants";

let initialState = {
  studentsList: [],
};
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_STUDENT: {
      let newStudentList = action.payload;
      return {
        ...state,
        studentsList: newStudentList,
      };
    }

    default:
      return state;
  }
};

export default studentReducer;
