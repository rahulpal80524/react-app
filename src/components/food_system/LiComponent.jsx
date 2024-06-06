import React from "react";

export default function LiComponent({ item, onButtonClick }) {
  const handleClick = () => {
    onButtonClick(item);
  };
  return (
    <li className="list-group-item">
      {item}
      <button onClick={handleClick} type="button" className="btn btn-success">
        Buy
      </button>
    </li>
  );
}
