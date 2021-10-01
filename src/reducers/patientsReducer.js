import { patients } from "../utils.js";

const patientsReducer = (state = patients, action) => {
  switch (action.type) {
    case "ADD_PATIENT":
      const newstate = [...state, action.payload];
      console.log(newstate);
      return [...state, action.payload];
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default patientsReducer;
