import React, { useState } from "react";
import styles from "./Calculator.module.css";
import CalButton from "./CalButton";
import Diplay from "./Diplay";
export default function Calculator() {
  let [calVal, setCalVal] = useState("");

  let onButtonClick = (val) => {
    if (
      calVal.charAt(calVal.length - 1) === val &&
      ["=", "*", "/", "+", "-", "."].includes(calVal.charAt(calVal.length - 1))
    ) {
      return;
    }
    if (calVal.includes("=") && val === "=") {
      setCalVal(" ");
      return;
    }
    if (val === "C") {
      setCalVal("");
    } else if (val === "=") {
      let result = eval(calVal);
      const final = calVal + val + result;
      setCalVal(final);
    } else {
      let newString = calVal + val;
      setCalVal(newString);
    }
  };

  return (
    <div className={styles.calculator}>
      <Diplay value={calVal} />
      <CalButton onButtonClick={onButtonClick}></CalButton>
    </div>
  );
}
