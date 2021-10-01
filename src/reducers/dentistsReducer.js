import { dentists } from "../utils.js";


const dentistsReducer = (state = dentists, action) => {
  switch (action.type) {
    case "ADD_DENTIST":
      const newstate = [...state, action.payload];
      console.log(newstate);
      return [...state, action.payload];
    case "LOAD_DATA":
      console.log('load data')          
      return state;
    default:
      return state;
  }
};
export default dentistsReducer ;
