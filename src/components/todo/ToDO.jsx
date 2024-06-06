import React from "react";
import { MdDelete } from "react-icons/md";

export default function ToDO({ todoItems, handleDelete }) {
  let data = todoItems.map((item, i) => {
    return (
      <div className="row kg-row " key={i}>
        <div className="col-6">{item.todoName}</div>
        <div className="col-4">{item.todoDate}</div>
        <div className="col-2">
          <button
            type="button"
            className="btn btn-danger kg-button"
            onClick={() => handleDelete(i)}
          >
            <MdDelete />
          </button>
        </div>
      </div>
    );
  });
  return <div className="container">{data}</div>;
}
