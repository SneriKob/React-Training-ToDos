import React from "react";
import "./style.css";
import ActiveList from "./ActiveList.js"
import InActiveList from "./InActiveList.js"

export default function App() {
  const Title = () => {
    return <h1>TO DOs</h1>
  }

  const todos = [
    {
      isDone: false,
      description: 'Einkaufen gehen'
    },
    {
      isDone: true,
      description: 'Sportwagen in Garage fahren'
    },
    {
      isDone: false,
      description: 'Haare bürsten'
    },
    {
      isDone: false,
      description: 'Kuchen backen'
    },
    {
      isDone: true,
      description: 'Projekt eröffnen'
    }
  ]

  return (
    <div>
      <Title></Title>
      <ActiveList
        listOfTodos={todos}
      ></ActiveList>
      <p></p>
      <InActiveList
        listOfTodos={todos}
      ></InActiveList>
    </div>
  );
}