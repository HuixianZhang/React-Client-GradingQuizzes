import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom"
import Question from "./questions/question";
import questionservice from '../../services/question-service';
import quizzesService from '../../services/quiz-service';
import TrueFalseQuestion from "./questions/true-false-question";
import MultipleChoiceQuestion from "./questions/multiple-choice-question";

const Quiz = () => {
    const {quizId} = useParams()
    let [selectedAnswers,setselectedAnswers] = useState({})

    const [score, setscore] = useState()

    const userAnswer = (questionWithAnswer) =>{

        setselectedAnswers(questionWithAnswer)
        setQuestions((prevQuestions) => {
            return prevQuestions.map((prevQuestion) => {
                if(prevQuestion._id === questionWithAnswer._id) {
                    return questionWithAnswer
                } else {
                    return prevQuestion
                }
            })
        })

    }
    const [questions, setQuestions] = useState([])
    useEffect(() => {
        questionservice.findQuestionsForQuiz(quizId)
        // fetch(`http://localhost:4000/api/quizzes/${quizId}/questions`)
        //     .then(response => response.json())
            .then((questions) => {
                setQuestions(questions)
            })
    }, [quizId])


    // console.log('questions is:',questions)

    // selectedAnswers.map((selectedAnswer)=>{
    //     return selectedAnswer
    // })


    // var i;
    // for (i = 0; i < questions.length; i++) {
    //
    //     Object.assign(questions[i], {answer: selectedAnswers});
    //     console.log(questions[i])
    // }

    // var i;
    // for (i = 0; i < questions.length; i++) {
    //     console.log('inside questions:',selectedAnswers)
    //     Object.assign(questions[i], {answer: selectedAnswers});
    //     console.log(questions)
    // }
    const submitQuiz = (quizId, questions) => {
        // console.log("submit questions:", questions, quizId)
        fetch(`http://localhost:4000/api/quizzes/${quizId}/attempts`, {
            method: 'POST',
            body: JSON.stringify(questions),
            headers: {
                'content-type': 'application/json'
            }
        }).then(response => response.json())
            .then(result => setscore(result['score']))
    }

    return(
        <div>
            <h3>Quiz {quizId} </h3>
            <ul>
                {
                    questions.map((question) => {
                        return(
                            <li>
                                {
                                    question.type === "TRUE_FALSE" &&
                                    <TrueFalseQuestion question={question} setselectedAnswers={userAnswer}/>

                                }
                                {
                                    question.type === "MULTIPLE_CHOICE" &&
                                    <MultipleChoiceQuestion question={question} setselectedAnswers={userAnswer}/>
                                }
                            </li>
                        )
                    })
                }

                <p><button onClick={() => {
                    submitQuiz(quizId,questions)
                    // quizzesService.submitQuiz(quizId,questions)
                }} className="btn btn-success">Submit</button></p>
                <p>After click submit, your score is:
                    {score}
                </p>
            </ul>

        </div>
    )
}

export default Quiz;