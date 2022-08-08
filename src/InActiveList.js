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
      <div className='row justify-content-end'>
        <div className='col-10'> 
          <div className='card card-body'> 
            {items} 
          </div>
        </div>
      </div>
    )
  }
} 

export default InActiveList;