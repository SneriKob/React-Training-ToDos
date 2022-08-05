import React, {Component} from "react";

class ActiveList extends Component {
  render(){
    const listOfTodos = [
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

    const items = listOfTodos.map((item, index) => {
      return (
        <li key={index}> 
          <input type='checkbox' value={item.isDone}></input> | {item.description} 
        </li>
      )
    });
  
    return( 
      <ol> {items} </ol>
    )
  }
} 

export default ActiveList;