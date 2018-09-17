import React, { Component } from 'react';
import Form from './components/Form';
import List from './components/List';

class App extends Component {
  state = { question: [], answer: [] }

  componentDidMount() {
    //make a call to our rails server to get Items
  }

  addQuestion = (name) => {
    //make api call to rails server to add item
    //Tupdate state
  }

  updateQuestion = (id) => {
    //make api call to update todo
    //update state
  }

  deleteQuestion = (id) => {
    //make api call to delete todo
    //remove it from state
  }

  render() {
    return (
      <div className="container">
        <Form addQuestion={this.addQuestion} />
        <List
          questions={this.state.questions}
          updateTodo={this.updateQuestion}
          deleteTodo={this.deleteQuestion}
        />
      </div>
    );
  }
}

export default App;