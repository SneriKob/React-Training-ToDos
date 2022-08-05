import React, {Component} from "react";

class NewTodoForm extends Component {
  render(){
    return (
      <div className='row'>
        <div className='row'>
          <div className='col'>
            <input 
            type='text' 
            name='inputAdd' 
            value={this.props.addText} 
            onChange={this.props.onChangeAdd}
            >
            </input>
          </div>
          <div className='col'>
            <label> Beschreibung</label>
          </div>
        </div>
        <div className='row'>
          <div className='col'>
            <input 
            type='text' 
            name='inputAddDetails' 
            value={this.props.addTextDetails} 
            onChange={this.props.onChangeAddDetails}>
            </input>
          </div>
          <div className='col'>
            <label > Details</label>
          </div>
        </div>
        <div className='row'>
          <div className='col-1'>
            <button onClick={this.props.onAdd}>+</button> 
          </div>
        </div>
        
        
      </div>
    )  
  }
}

export default NewTodoForm