import { useState } from "react";
import "./styles.css"

function TypeMe() {
  const [getter, setter] = useState(false);

  function handleEvent(value) {
    setter(value);
    console.log(getter);
  }

  function changeColor(value) {
    if (value == true) {
      return "red";
    } else {
      return "white";
    }
  }

  return (
    <div>
      <input
        onFocus={() => handleEvent(false)}
        onBlur={() => handleEvent(true)}
      ></input>
      <p style={{ color: changeColor(getter) }}>Please type in here!</p>
    </div>
  );
}
export default TypeMe;
