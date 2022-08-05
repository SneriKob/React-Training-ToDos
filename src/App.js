import React from "react";
import "./style.css";
import ActiveList from "./ActiveList.js"
import InActiveList from "./InActiveList.js"
import todos from "./TestData"

export default function App() {
  const Title = () => {
    return <h1>TO DOs</h1>
  }

  const ToDOs = () =>{
    return todos.map((item, index) =>{
      return (
      <li key={index}>
        {item.description}
      </li>
      )
    })
  }

  return (
    <div>
      <Title></Title>
      <ActiveList></ActiveList>
      <p></p>
      <InActiveList></InActiveList>
      <ul>{ToDOs}</ul>
    </div>
  );
}