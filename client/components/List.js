import React from 'react';
import Answer from './Answer';

const List = ({ questions, updateQuestion, deleteQuestion}) => (
    <div className="row">
    { questions.map( question => 
    <question
    key={question.id}
    {...question}
    updateQuestion={updateQuesation}
    deleteQuestion={deleteQuestion}
    />
    )
    }
    </div>
)

export default List;