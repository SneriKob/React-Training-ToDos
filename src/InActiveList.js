import React, {Component} from "react";

class InActiveList extends Component {
  render(){
    const items = this.props.listOfTodos.map((item, index) => {
        const myKey = 'InActive'+ index;
        return(
          <div className='row InActiveListItem' key={myKey}> 
            <div className='col-1'>
              <input type='checkbox' id={myKey} checked></input>
            </div>
            <div className='col'>
              <label for={myKey}>{item.description}</label>
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