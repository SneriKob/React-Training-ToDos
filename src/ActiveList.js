import React, { Component } from 'react';

const InfoPanel = (props) => {
  if (props.state){
    return (
      <div className = 'InfoPanel'>
        <button onClick={props.onClose}>X</button>
        <p>
          {props.details}
        </p>
      </div>
    )
  }
} 

class ActiveList extends Component {
  render() {
    const items = this.props.listOfTodos.map((item, index) => {
      return (
        <div className="ActiveListItem" key={index}>
          <input
            type="checkbox"
            id={index}
            onClick={() => this.props.onChecked(index)}
            checked={false}
          ></input>
          <button 
            onClick={() => this.props.onInfoClick(index)}>
            Info
          </button>
          <label for={index}>{item.description}</label>
        </div>
      );
    });

    const currIndex = this.props.detailIndex;

    return (
    <div 
      className="ActiveList">
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
