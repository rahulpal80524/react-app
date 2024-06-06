import React, { useState, useRef } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";

export default function AddToDo({ onNewItem }) {
  let [todoName, setTodoName] = useState("");
  let [todoDate, setTodoDate] = useState("");
  const numberOfUpdates = useRef(0);
  let handleName = (event) => {
    setTodoName(event.target.value);
    numberOfUpdates.current += 1;
  };
  let handleDate = (event) => {
    setTodoDate(event.target.value);
    console.log(numberOfUpdates.current);
  };
  let handleSaveBtn = (event) => {
    event.preventDefault();
    onNewItem(todoName, todoDate);
    setTodoName("");
    setTodoDate("");
  };
  return (
    <div className="container">
      <form action="" onSubmit={handleSaveBtn}>
        <div className="row kg-row ">
          <div className="col-6">
            <input
              type="text"
              placeholder="Enter ToDo Here"
              className="kg-input"
              value={todoName}
              onChange={handleName}
            />
          </div>
          <div className="col-4">
            <input
              type="date"
              name=""
              id=""
              className="kg-input"
              value={todoDate}
              onChange={handleDate}
            />
          </div>
          <div className="col-2">
            <button type="submit" className="btn btn-success kg-button">
              <IoIosAddCircleOutline />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
