import React, { Component } from 'react';

const InfoPanel = (props) => {
  if (props.state){
    return (
      <div className = 'row InfoPanel'>
        <div className='col-1'>
          <button onClick={props.onClose} className='btn btn-danger'>X</button>
        </div>
        <div className='col'>
          <p>
            {props.details}
          </p>
        </div>
        
      </div>
    )
  }
} 

class ActiveList extends Component {
  render() {
    const items = this.props.listOfTodos.map((item, index) => {
      return (
        <div className="row ActiveListItem" key={index}>
          <div className='col-1'>
            <input
              type="checkbox"
              id={index}
              onClick={() => this.props.onChecked(index)}
              checked={false}
            ></input>
          </div>
          <div className='col'>
            <label for={index}>{item.description}</label>
          </div>
          <div className='col-2'>
            <button 
              className='btn btn-dark'
              onClick={() => this.props.onInfoClick(index)}>
              Info
            </button>
          </div>
        </div>
      );
    });

    const currIndex = this.props.detailIndex;

    return (
    <div 
      className="row ActiveList">
        {items}
        <InfoPanel
          state={this.props.toggleDetails}
          details={this.props.listOfTodos[currIndex].details}
          onClose={this.props.onInfoClose}
        ></InfoPanel>
    </div>
    );
  }
} 

export default ActiveList;
