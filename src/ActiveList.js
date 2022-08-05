import React, {Component} from "react";

class ActiveList extends Component {
  render(){
    const items = this.props.listOfTodos.map((item, index) => {
        return(
          <div className='ActiveListItem'> 
            <input type='checkbox' id={index} onChange={() => this.props.onChecked(index)}></input>
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
export default ActiveList;