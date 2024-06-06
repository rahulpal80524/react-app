import React, { useState } from "react";
import LiComponent from "./LiComponent";
import Container from "../Container";

export default function UlComponent() {
  let [itemVal, setItemVal] = useState("");
  let [foodItem, setFoodItem] = useState([]);

  let setInputItem = (event) => {
    setItemVal(event.target.value);
  };

  let addItem = () => {
    let newItem = [...foodItem, itemVal];
    setFoodItem(newItem);
    setItemVal("");
  };

  let buyItem = (item) => {
    alert(item);
  };
  return (
    <Container>
      <ul className="list-group">
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Please enter food items"
            aria-label="Please enter food items"
            aria-describedby="button-addon2"
            value={itemVal}
            onChange={setInputItem}
          />
          <button
            className="btn btn-outline-secondary"
            type="button"
            id="button-addon2"
            onClick={addItem}
          >
            Button
          </button>
        </div>
        {foodItem.map((item, i) => (
          <LiComponent item={item} key={i} onButtonClick={buyItem} />
        ))}
      </ul>
    </Container>
  );
}
