import React from "react";
import "./style.css";
import ListContainer from "./ListContainer.js"

export default function App() {
  const Title = () => {
    return (
      <nav class="navbar navbar-light bg-dark">
        <span class="navbar-brand h1 text-light">Interaktive To Do Liste</span>
      </nav>
    )
  } 

  return (
    <div className='container'>
      <Title></Title>
      <ListContainer></ListContainer>
    </div>
  );
}