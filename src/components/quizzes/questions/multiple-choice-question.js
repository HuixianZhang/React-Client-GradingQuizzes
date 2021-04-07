import React, {useState} from "react";

const MultipleChoiceQuestion = ({question}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [GradeYourAnswer, setGradeYourAnswer] = useState("")

    return(
        <div>
            <h5>
                {question.question}
                {
                    question.correct === GradeYourAnswer &&
                    <i className="fas fa-check color-green"></i>
                }
                {
                    question.correct !== GradeYourAnswer && GradeYourAnswer !== "" &&
                    <i className="fas fa-times color-red"></i>
                }
            </h5>
            <ul className="list-group">
                {
                    question.choices.map((choice) => {
                        console.log('choice is:', choice)
                        return(
                            // <li className={`list-group-item ${GradeYourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                            // <li className={`list-group-item ${GradeYourAnswer === question.correct ? 'list-group-item-success' : 'list-group-item-danger'}`}>
                            <li className={`list-group-item ${GradeYourAnswer === "" ? "" : (choice === question.correct && 'list-group-item-success')
                                || ( GradeYourAnswer === question.correct && GradeYourAnswer === choice && 'list-group-item-success') ||
                                (GradeYourAnswer === choice ? 'list-group-item-danger' : "")}`}>
                                <label><input
                                    onClick={() => {setYourAnswer(choice)}}
                                    type="radio"
                                    name={question._id}/> {choice}
                                </label>

                                {
                                    question.correct === GradeYourAnswer && GradeYourAnswer === choice &&
                                    <i className="fas fa-check color-green"></i> ||
                                    choice === question.correct && GradeYourAnswer !== "" &&
                                    <i className="fas fa-check color-green"></i>
                                }
                                {
                                    question.correct !== GradeYourAnswer && GradeYourAnswer !== "" && GradeYourAnswer === choice &&
                                    <i className="fas fa-times color-red"></i>
                                }

                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
            <p><button onClick={() => {setGradeYourAnswer(yourAnswer)
                console.log('your answer is:', yourAnswer)}} className="btn btn-success">Grade</button></p>
        </div>
    )
}
export default MultipleChoiceQuestion