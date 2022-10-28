import {
  DELETE_STUDENTS,
  FETCH_STUDENT,
  UPDATE_STUDENT,
} from "./../types/constants";

let initialState = {
  studentsList: [],
  updateStudent: {},
  isUpdate: false,
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
    case UPDATE_STUDENT: {
      let studentToBeUpdated = action.payload;
      return {
        ...state,
        isUpdate: true,
        updateStudent: studentToBeUpdated,
      };
    }
    case DELETE_STUDENTS: {
      let newStudentList = state.studentsList.filter(
        (student) => student.uid !== action.payload
      );
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
