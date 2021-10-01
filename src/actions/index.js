export const addDentist = (newDentist) => {
  return {
    type: "ADD_DENTIST",
    payload: newDentist,
  };
};

export const loadData = () => {
  return {
    type:"LOAD_DATA"
  }
}

export const addPatient = (newPatient) => {
  return {
    type: "ADD_PATIENT",
    payload: newPatient,
  };
};
