import React from "react";
import styles from "./CalButton.module.css";

export default function CalButton({ onButtonClick }) {
  let buttonName = [
    "C",
    "1",
    "2",
    "+",
    "3",
    "4",
    "-",
    "5",
    "6",
    "*",
    "7",
    "8",
    "/",
    "9",
    "0",
    "=",
    ".",
  ];

  let data = buttonName.map((name, i) => {
    return (
      <button
        key={i}
        className={styles.button}
        onClick={() => onButtonClick(name)}
      >
        {name}
      </button>
    );
  });
  return <div className={styles.buttonsContainer}>{data}</div>;
}
