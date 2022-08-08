import React, {Component} from "react";

class NewTodoForm extends Component {
  render(){
    return (
      <div>
        <div className='form-row'>
          <div className='form-group col-md-6'>
            <label for="inputAdd">Beschreibung</label>
            <input 
              type='text' 
              name='inputAdd' 
              className='form-control'
              placeholder="Beschreibung"
              value={this.props.addText} 
              onChange={this.props.onChangeAdd}
              >
            </input>
          </div>
          <div className='form-group col-md-6'>
            <label for="inputAddDetails">Details</label>
            <textarea
              name='inputAddDetails' 
              className='form-control'
              placeholder="Details"
              value={this.props.addTextDetails} 
              onChange={this.props.onChangeAddDetails}>
            </textarea>
          </div>
        </div>
        <div className='form-row'>
          <div className='col-2'>
            <button onClick={this.props.onAdd} className='btn btn-dark btn-sm'>Neue Aufgabe</button> 
          </div>
        </div>
      </div>
    )  
  }
}

export default NewTodoForm