import { appointments } from "../App.js";

const appointmentsReducer = (state = appointments, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default appointmentsReducer;
