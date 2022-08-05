import React from "react";
import "./style.css";
import ActiveList from "./ActiveList.js"
import todos from "./TestData"

export default function App() {
  const Title = () => {
    return <h1>TO DOs</h1>
  }

  return (
    <div>
      <Title></Title>
      <ActiveList
        listOfTodos = {todos}
      ></ActiveList>
    </div>
  );
}