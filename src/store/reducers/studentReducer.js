// import {
//   ADD_EMPLOYEE,
//   DELETE_EMPLOYEE,
//   UPDATE_EMPLOYEE,
// } from "../constants/type";

let initialState = {
  students: [
    {
      name: "Abu Hurairah",
      fatherName: "Muhammad Shafique",
      rollNo: "8109",
      fee: "Paid",
    },
    {
      name: "Hassan Saeed",
      fatherName: "Muhammad Saeed",
      rollNo: "8081",
      fee: "Paid",
    },
    {
      name: "Bassam Tanvir",
      fatherName: "Muhammad Tanvir",
      rollNo: "8091",
      fee: "Not paid",
    },
  ],
};
const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    // case ADD_EMPLOYEE: {
    //   let newEmployees = [...state.employees, action.payload];
    //   return {
    //     employees: newEmployees,
    //   };
    // }
    // case DELETE_EMPLOYEE: {
    //   let newEmployees = state.employees.filter(
    //     (employee) => employee.uid !== action.payload
    //   );
    //   return {
    //     employees: newEmployees,
    //   };
    // }
    // case UPDATE_EMPLOYEE: {
    //   let newEmployees = state.employees.map((item) => {
    //     if (item.uid === action.payload.uid) {
    //       return action.payload;
    //     } else {
    //       return item;
    //     }
    //   });
    //   return { employees: newEmployees };

    //   // <-----------Update wale reducer mn filter iss liye nahi chalain gai q k IT WILL ONLY RETURN ONLY ONE ITEM WHICH IS UPDATED ------------>
    //   // let newEmployees = state.employees.filter(
    //   //   (item) => item.uid === action.payload.uid
    //   // );
    //   // // return
    //   // // action.payload;
    // }
    default:
      return state;
  }
};

export default studentReducer;
