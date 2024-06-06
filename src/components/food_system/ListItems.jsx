import React, { useState } from "react";
import UlComponent from "./UlComponent";
import styles from "./ListItems.module.css";
export default function ListItems() {
  // let foodItem = [
  //   "1 An item",
  //   "2 A second item",
  //   "3 A third item",
  //   "4 A fourth item",
  // ];

  let buyItem = (item) => {
    alert(item);
  };

  return (
    <>
      <h1 className={`${styles["kg"]}`}>Food Items</h1>
      <UlComponent buyItem={buyItem} />
    </>
  );
}
