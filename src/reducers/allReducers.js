import patientsReducer from "./patientsReducer.js";
import dentistsReducer from "./dentistsReducer.js";
import appointmentsReducer from "./appointmentsReducer.js";
// import loggedReducer from "./islogged.js";
import { combineReducers } from "redux";
import assistantsReducer from "./assistantsReducer.js";

const allReducers = combineReducers({
  // isLogged: loggedReducer,
  patients: patientsReducer,
  dentists: dentistsReducer,
  assistants: assistantsReducer,
  appointments: appointmentsReducer,
});

export default allReducers;
