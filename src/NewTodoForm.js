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
        <button onClick={this.props.onAdd}>+</button>
      </div>
    )  
  }
}

export default NewTodoForm