import React, {Component} from "react";

class InActiveList extends Component {
  render(){
    const items = this.props.listOfTodos.map((item, index) => {
        return(
          <div className='row InActiveListItem' key={index}> 
            <div className='col-1'>
              <input type='checkbox' id={index} checked></input>
            </div>
            <div className='col'>
              <label for={index}>{item.description}</label>
            </div>
          </div>
        )
    });
  
    return( 
      <div className='row InActiveList'> 
        {items} 
      </div>
    )
  }
} 

export default InActiveList;