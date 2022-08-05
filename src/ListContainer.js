import React, {Component} from "react";
import ActiveList from "./ActiveList.js"
import InActiveList from "./InActiveList.js"

export default class ListContainer extends Component {
  state = {
    todos: [
      {
        description: 'Einkaufen gehen'
      },
      {
        description: 'Haare bürsten'
      },
      {
        description: 'Kuchen backen'
      },
    ], 
    done: [
      {
        description: 'State einfügen'
      },
      {
        description: 'Sportwagen in Garage fahren'
      },
      {
        description: 'Projekt eröffnen'
      }
    ]
  }

  handleChecked = (i) => {
    const newDone = [{...this.state.done}, {description: this.state.todos[i].description}];
    this.setState({
      todos: this.state.todos.filter((val, index) => {
        return index !== i
      }),
      done: this.state.done.concat(this.state.todos[i]) 
    })
  }

  render(){
    return(
      <div className='container'>
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