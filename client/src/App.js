import React, { Component } from 'react';
import TodoForm from './components/Form';
import TodoList from './components/List';

class App extends Component {
  state = { questions: [] }

  componentDidMount() {
    //TODO make a call to our rails server to get Items
  }

  addQuestion = (name) => {
    //TODO make api call to rails server to add item
    //TODO update state
  }

  updateQuestion = (id) => {
    //TODO make api call to update todo
    //TODO update state
  }

  deleteQuestion = (id) => {
    //TODO make api call to delete todo
    //TODO remove it from state
  }

  render() {
    return (
      <div className="container">
        <TodoForm addItem={this.addQuestion} />
        <TodoList
          todos={this.state.questions}
          updateTodo={this.updateQuestion}
          deleteTodo={this.deleteQuestion}
        />
      </div>
    );
  }
}

export default App;