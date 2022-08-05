import React, {Component} from "react";
import ActiveListItem from "./ActiveListItem"

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
      if(!item.isDone){
        return(
        <ActiveListItem
        id={index}
        description={item.description}
        >
        </ActiveListItem>)
      } else {
        return
      }
    });
  
    return( 
      <div> 
        {items} 
      </div>
    )
  }
} 

const ActiveListItem = (props) => {
  return (
    <div className='ActiveListItem'> 
        <input type='checkbox' id={props.id}></input>
        <label for={props.id}>{props.description}</label>
    </div>
  )
}

export default ActiveList;