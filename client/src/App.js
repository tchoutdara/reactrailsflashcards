import React, { Component } from 'react';
import Form from './components/Form';


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

  List = () => {
    return this.state.questions.map(question => {
      return (
        <div className="row">
          <Answer
            {...question}
            updateQuestion={this.updateQuestion}
            deleteQUestion={this.deleteQuestion}
          />
        </div>
      )
    })
  }

  render() {
    return (
      <div>
        <div>
          <Form addQuestion={this.addQuestion} />
          {this.List()}
        </div>
      </div>
    );
  }
}

export default App;
