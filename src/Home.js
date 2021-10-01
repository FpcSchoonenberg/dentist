import React from "react";
import "./css/App.css";
import AddDentist from "./AddDentist";
import AddPatient from "./AddPatient";
import SickDentist from "./SickDentist";

function Home() {
  return (
    <div>
      <AddDentist />
      <AddPatient />
      <SickDentist />
    </div>
  );
}

export default Home;
