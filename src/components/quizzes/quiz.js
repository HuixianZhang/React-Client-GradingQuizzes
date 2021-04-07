import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionservice from '../../services/question-service';

const Quiz = () => {
    const {quizId} = useParams()
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        questionservice.findQuestionsForQuiz(quizId)
        // fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
        //     .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
    }, [quizId])

    return(
        <div>
            <h3>Quiz {quizId} </h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                                <Question question={question}/>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Quiz;