import React from 'react';
import Form from './components/Form';

const List = ({ questions, updateQuestion, deleteQuestion}) => (
    <div className="row">
    { questions.map( question => 
    <question
    key={question.id}
    {...question}
    updateQuestion={updateQuestion}
    deleteQuestion={deleteQuestion}
    />
    )
    }
    </div>
)

export default List;