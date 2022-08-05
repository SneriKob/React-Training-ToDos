import React, { Component } from 'react';

const InfoPanel = (props) => {
  if (props.state){
    return (
      <div className = 'InfoPanel'>
        <p>
          {props.details}
        </p>
      </div>
    )
  }
} 

class ActiveList extends Component {
  state = {
    toggleDetails: false,
    detailIndex: 0,
  };

  handleClick = (i) => {
    const state = true;
    this.setState({
      toggleDetails: state,
      detailIndex: i,
    })
  }

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
            onClick={() => this.handleClick(index)}>
            Info
          </button>
          <label for={index}>{item.description}</label>
        </div>
      );
    });

    const currIndex = this.state.detailIndex;

    return (
    <div 
      className="ActiveList">
        {items}
        <InfoPanel
          state={this.state.toggleDetails}
          details={this.props.listOfTodos[currIndex].details}
        ></InfoPanel>
    </div>
    );
  }
} 

export default ActiveList;
