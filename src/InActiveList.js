import React, {Component} from "react";

class InActiveList extends Component {
  render(){
    const items = this.props.listOfTodos.map((item, index) => {
        return(
          <div className='InActiveListItem'> 
            <input type='checkbox' id={index} checked></input>
            <label for={index}>{item.description}</label>
          </div>
        )
    });
  
    return( 
      <div> 
        {items} 
      </div>
    )
  }
} 

export default InActiveList;