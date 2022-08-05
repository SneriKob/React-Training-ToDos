import React from "react";
import "./style.css";
import ListContainer from "./ListContainer.js"

export default function App() {
  const Title = () => {
    return <h1>TO DOs</h1>
  } 

  return (
    <div>
      <Title></Title>
      <ListContainer></ListContainer>
    </div>
  );
}