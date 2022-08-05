import React, {Component} from "react";

class ActiveList extends Component {
  render(){
    const items = this.props.listOfTodos.map((item, index) => {
        return(
          <div className='ActiveListItem'> 
            <input type='checkbox' id={index} value={index} onClick={() => this.props.onChecked(index)} checked={false}></input>
            <label for={index}>{item.description}</label>
          </div>
        )
    });
  
    return( 
      <div className='ActiveList'> 
        {items} 
      </div>
    )
  }
} 
export default ActiveList;