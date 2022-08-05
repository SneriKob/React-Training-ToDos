import React, {Component} from "react";
import InActiveListItem from "./ActiveListItem"

class InActiveList extends Component {
  render(){
    const items = this.props.listOfTodos.map((item, index) => {
      if(item.isDone){
        return(
        <InActiveListItem
        id={index}
        description={item.description}
        >
        </InActiveListItem>)
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

const InActiveListItem = (props) => {
  return (
    <div className='InActiveListItem'>
        <input type='checkbox' checked id={props.id}></input>
        <label for={props.id}>{props.description}</label>
    </div>
  )
}

export default InActiveList;