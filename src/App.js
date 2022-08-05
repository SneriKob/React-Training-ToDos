import React from "react";
import "./style.css";
import ListContainer from "./ListContainer.js"

export default function App() {
  const Title = () => {
    return (
      <div className='row'>
        <div className='col'>
         <h1>
          TO DOs
          </h1>
        </div>
      </div>
    )
  } 

  return (
    <div className='container'>
      <Title></Title>
      <ListContainer></ListContainer>
    </div>
  );
}