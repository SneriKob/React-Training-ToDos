import React, {Component} from "react";
import ActiveList from "./ActiveList.js"
import InActiveList from "./InActiveList.js"
import NewTodoForm from "./NewTodoForm.js"

export default class ListContainer extends Component {
  state = {
    todos: [
      {
        description: 'Einkaufen gehen',
        details: 'hier könnten weitere infos stehen zum Einkaufen'
      },
      {
        description: 'Haare bürsten',
        details: 'hier könnten weitere infos stehen für Haare'
      },
      {
        description: 'Kuchen backen',
        details: 'hier könnten weitere infos stehen zu Kuchen'
      },
      {
        description: 'Wäsche waschen',
        details: 'hier könnten weitere infos stehen für Wäsche'
      },
    ], 
    done: [
      {
        description: 'State einfügen',
        details: 'hier könnten weitere infos stehen'
      },
      {
        description: 'Sportwagen in Garage fahren',
        details: 'hier könnten weitere infos stehen'
      },
      {
        description: 'Projekt eröffnen',
        details: 'hier könnten weitere infos stehen'
      }
    ],
    addText: '',
    toggleDetails: false,
    detailIndex: 0,
    addTextDetails: '',
  }

  handleChecked = (i) => {
    this.setState({
      todos: this.state.todos.filter((val, index) => {
        return index !== i
      }),
      done: this.state.done.concat(this.state.todos[i]), 
      toggleDetails: false,
      detailIndex: 0,
    })
  }

  handleInfoClose = () => {
    this.setState({
      toggleDetails: false 
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      addText: value,
    })
  }

  handleChangeDetails = (event) => {
    const { name, value } = event.target

    this.setState({
      addTextDetails: value,
    })
  }

  handleAdd = () => {
    const desc = {description: this.state.addText, details: this.state.addTextDetails};
    this.setState({
      todos: this.state.todos.concat(desc),
      addText: ''
    })
  }

  handleInfoClick = (i) => {
    const state = !this.state.toggleDetails;
    this.setState({
      toggleDetails: state,
      detailIndex: i,
    })
  }

  render(){
    return(
      <div className='row'>
        <NewTodoForm
          onChangeAdd = {this.handleChange}
          onChangeAddDetails = {this.handleChangeDetails}
          onAdd = {this.handleAdd}
          addText = {this.state.addText}
          addTextDetails = {this.state.addTextDetails}
        ></NewTodoForm>
        <br></br>
        <ActiveList
          listOfTodos={this.state.todos}
          onChecked = {this.handleChecked}
          toggleDetails = {this.state.toggleDetails}
          detailIndex = {this.state.detailIndex}
          onInfoClick = {this.handleInfoClick}
          onInfoClose = {this.handleInfoClose}
        ></ActiveList>
        <br></br>
        <InActiveList
          listOfTodos={this.state.done}
        ></InActiveList>
      </div>
    )
  }
}