import { assistants } from "../utils.js";

const assistantsReducer = (state = assistants, action) => {
  switch (action.type) {
    case "INCREMENT":
      return state + action.payload;
    case "DECREMENT":
      return state - 1;
    default:
      return state;
  }
};
export default assistantsReducer;
