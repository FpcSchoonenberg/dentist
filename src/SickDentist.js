import { React, useEffect, useState } from "react";
import { dentists, addDropdowns } from "./utils";
import { useDispatch } from "react-redux"
import { loadData } from './actions'
import {store} from './index'

function SickDentist() {
    const [test, setTest] = useState(0);
    const dispatch = useDispatch();
//   document.addEventListener(
//     "DOMContentLoaded",
//     function () {
//       document.addEventListener(
//         "DOMContentLoaded",
//         addDropdowns("select_dentist", dentists),
//         false
//       );
//     },
//     false
//   );
  //     function useForceUpdate() {
  //       const [value, setValue] = useState(0); // integer state
  //       return () => setValue((value) => value + 1); // update the state to force render
  //     }

  // //   }, [test]);

  console.log(test);
  return (
    <form onSubmit={() => console.log("dummy submit")}>
      <select
        onMouseOver={() => {
                  
                  addDropdowns("select_dentist", dentists);
                  const test = store.getState();
                  console.log(test)
                  dispatch(loadData());
        }}
        id="select_dentist"
        onChange={() => console.log("dummy change")}
        name="select_dentist"
        defaultValue={"DEFAULT"}
      >
        <option
          value="DEFAULT"
          disabled="disabled"
          // onClick={useForceUpdate}
        >
          select a dentist
        </option>
      </select>
      <button>set status dentist on sick</button>
    </form>
  );
}

export default SickDentist;


