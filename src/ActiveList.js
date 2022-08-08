import React, { Component } from 'react';

const InfoPanel = (props) => {
  if (props.state){
    return (
      <div className='card card-body'>
        <p className='card-text'>  
          <h5 class="card-title">Details zu {props.desc}</h5>
          {' '+props.details}
        </p>
        <button onClick={props.onClose} className='btn btn-danger btn-sm'>Schließen</button>
      </div>
    )
  }
} 

class ActiveList extends Component {
  render() {
    const toDos = this.props.listOfTodos;

    const items = toDos.map((item, index) => {
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
          desc={(toDos.length > currIndex)?toDos[currIndex].description:''}
          details={(toDos.length > currIndex)?toDos[currIndex].details:''}
          onClose={(this.props.onInfoClose)}
        ></InfoPanel>
    </div>
    );
  }
} 

export default ActiveList;
