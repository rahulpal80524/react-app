import React, { useState } from "react";
import AppName from "./components/todo/AppName";
import AddToDo from "./components/todo/AddToDo";
import ToDO from "./components/todo/ToDO";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Calculator from "./components/calculator/Calculator";
import Theme from "./components/calculator/Theme";
import ListItems from "./components/food_system/ListItems";
import Container from "./components/Container";
export default function App() {
  let [todoItems, setTodoItems] = useState([]);

  const handleNewItem = (itemName, itemDate) => {
    let newItems = [...todoItems, { todoName: itemName, todoDate: itemDate }];
    setTodoItems(newItems);
  };
  const handleDelete = (index) => {
    let newItems = todoItems.filter((data, i) => i != index);

    setTodoItems(newItems);
  };

  return (
    <div className="todo-container">
      <Container>
        <AppName />
        <AddToDo onNewItem={handleNewItem} />
        <div className="item-container">
          <ToDO todoItems={todoItems} handleDelete={handleDelete} />
        </div>
      </Container>

      <ListItems />
      <Theme />
      <Container>
        <Calculator />
      </Container>
    </div>
  );
}
