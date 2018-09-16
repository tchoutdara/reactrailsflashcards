import React from 'react';
class Form extends React.Component {
    state = { question: '', answer: ''}

    handleChange = (e) => {
        this.setState({ question: e.target.value });
    }
    
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addQuest(this.state.question);
        this.setState({ question: ''})
    }

    render() {
    return (
        <form onSubmit={this.handleSubmit}>
        <input
        placeholder="Add Question"
        required
        value={this.state.name}
        onChange={this.handleChange}
        />
        </form>
    
    )
    }
}