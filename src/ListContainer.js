import React, {Component} from "react";
import ActiveList from "./ActiveList.js"
import InActiveList from "./InActiveList.js"
import NewTodoForm from "./NewTodoForm.js"

export default class ListContainer extends Component {
  state = {
    todos: [
      {
        description: 'Einkaufen gehen',
        details: 'hier könnten weitere infos stehen'
      },
      {
        description: 'Haare bürsten',
        details: 'hier könnten weitere infos stehen'
      },
      {
        description: 'Kuchen backen',
        details: 'hier könnten weitere infos stehen'
      },
      {
        description: 'Wäsche waschen',
        details: 'hier könnten weitere infos stehen'
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
    addText: ''
  }

  handleChecked = (i) => {
    this.setState({
      todos: this.state.todos.filter((val, index) => {
        return index !== i
      }),
      done: this.state.done.concat(this.state.todos[i]) 
    })
  }

  handleChange = (event) => {
    const { name, value } = event.target

    this.setState({
      addText: value,
    })
  }

  handleAdd = () => {
    const desc = {description: this.state.addText};
    this.setState({
      todos: this.state.todos.concat(desc),
      addText: ''
    })
  }


  render(){
    return(
      <div className='container'>
        <NewTodoForm
          onChangeAdd = {this.handleChange}
          onAdd = {this.handleAdd}
          addText = {this.state.addText}
        ></NewTodoForm>
        <br></br>
        <ActiveList
          listOfTodos={this.state.todos}
          onChecked = {this.handleChecked}
        ></ActiveList>
        <br></br>
        <InActiveList
          listOfTodos={this.state.done}
        ></InActiveList>
      </div>
    )
  }
}