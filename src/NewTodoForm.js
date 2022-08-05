import React, {Component} from "react";

class NewTodoForm extends Component {
  render(){
    return (
      <div>
        <input 
          type='text' 
          name='inputAdd' 
          value={this.props.addText} 
          onChange={this.props.onChangeAdd}>
        </input>
        <label> Beschreibung</label>
        <br></br>
        <input 
          type='text' 
          name='inputAddDetails' 
          value={this.props.addTextDetails} 
          onChange={this.props.onChangeAddDetails}>
        </input>
        <label> Details</label>
        <br></br>
        <button onClick={this.props.onAdd}>+</button>
      </div>
    )  
  }
}

export default NewTodoForm