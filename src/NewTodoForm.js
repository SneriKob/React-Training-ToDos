import React, {Component} from "react";

class NewTodoForm extends Component {
  render(){
    return (
      <div>
        <label>Beschreibung:</label>
        <input 
          type='text' 
          name='inputAdd' 
          value={this.props.addText} 
          onChange={this.props.onChangeAdd}>
        </input>
        <br></br>
        <label>Details:</label>
        <input 
          type='text' 
          name='inputAddDetails' 
          value={this.props.addTextDetails} 
          onChange={this.props.onChangeAddDetails}>
        </input>
        <button onClick={this.props.onAdd}>+</button>
      </div>
    )  
  }
}

export default NewTodoForm