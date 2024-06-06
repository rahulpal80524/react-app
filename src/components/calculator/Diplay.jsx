import React from "react";
import styles from "./Calculator.module.css";
export default function Diplay({ value }) {
  return <input className={styles.diplay} value={value} type="text" readOnly />;
}
