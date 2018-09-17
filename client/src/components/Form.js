import React from 'react';

class Form extends React.Component {
    state = { question: '', answer: ''}

    handleChange = (e) => {
        this.setState({ question: e.target.value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuestion(this.state.question);
        this.setState({ question: ''})
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input
        placeholder="Add Question"
        required
        value={this.state.question}
        onChange={this.handleChange}
        />
        </form>
    
    )
    }
}
export default Form;