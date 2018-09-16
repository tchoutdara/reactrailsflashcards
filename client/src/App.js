import React, { Component } from 'react';
import TodoForm from './components/Form';
import TodoList from './components/List';

class App extends Component {
  state = { todos: [] }

  componentDidMount() {
    //TODO make a call to our rails server to get Items
  }

  addItem = (name) => {
    //TODO make api call to rails server to add item
    //TODO update state
  }

  updateTodo = (id) => {
    //TODO make api call to update todo
    //TODO update state
  }

  deleteTodo = (id) => {
    //TODO make api call to delete todo
    //TODO remove it from state
  }

  render() {
    return (
      <div className="container">
        <TodoForm addItem={this.addItem} />
        <TodoList
          todos={this.state.todos}
          updateTodo={this.updateTodo}
          deleteTodo={this.deleteTodo}
        />
      </div>
    );
  }
}

export default App;