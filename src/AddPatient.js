import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPatient } from "./actions";
import { totalPatients } from "./utils.js";

function AddPatient() {
  const dispatch = useDispatch();
  const [surname, setSurname] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const healthy = true;
  const Id = totalPatients + 1;
  console.log(Id);
  const newPatient = { surname, name, email, phone, healthy, Id };
  const handleSubmit = (event) => {
    // event.preventDefault();
    console.log(newPatient);
    dispatch(addPatient(newPatient));
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="surname"
        onChange={(event) => setSurname(event.target.value)}
        name="surname"
        value={surname}
      />
      <input
        type="text"
        placeholder="name"
        onChange={(event) => setName(event.target.value)}
        name="name"
        value={name}
      />
      <input
        type="email"
        placeholder="email"
        name="email"
        onChange={(event) => setEmail(event.target.value)}
        value={email}
      />
      <input
        type="tel"
        placeholder="xx-xx"
        name="phone"
        pattern="[0-9]{2}-[0-9]{2}"
        onChange={(event) => setPhone(event.target.value)}
        value={phone}
      />
      <button>add patient</button>
    </form>
  );
}

export default AddPatient;
