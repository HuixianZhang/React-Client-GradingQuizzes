
import React, {useState} from "react";

const TrueFalseQuestion = ({question}) => {
    const [answer, setAnswer] = useState()
    const [GradeYourAnswer, setGradeYourAnswer] = useState(null)
    const [selected, setselected] = useState("")
    return (
        <div>
            <h5>
                {question.question}
                {
                    question.correct === JSON.stringify(GradeYourAnswer)  &&
                    <i className="fas fa-check color-green"></i>
                }
                {
                    question.correct !== JSON.stringify(GradeYourAnswer) && GradeYourAnswer !== null &&
                    <i className="fas fa-times color-red"></i>
                }
            </h5>
            {/*{question.correct}*/}
            {/*<br/>*/}
            {/*{JSON.stringify(answer)}*/}
            {/*<br/>*/}
            <ul className="list-group">
                <li
                    className={`list-group-item ${ (question.correct === 'true' && GradeYourAnswer !== null  ? "list-group-item-success" : "") || 
                    (question.correct !== JSON.stringify(GradeYourAnswer)&& GradeYourAnswer !== null && JSON.stringify(answer) === 'true' && 
                    JSON.stringify(selected) === 'true'  ? "list-group-item-danger" : question.correct === JSON.stringify(GradeYourAnswer) && 
                    JSON.stringify(answer) === 'true' && JSON.stringify(selected) === 'true' ? "list-group-item-success": "")}`}>

                    <label><input
                        type="radio"
                        onClick={() => setAnswer(true)}
                        name={question._id}/>True</label>
                    {
                        question.correct === 'true' && GradeYourAnswer !== null &&
                        <i className="fas fa-check color-green"></i>


                    }
                    {   question.correct === 'false' && GradeYourAnswer !== null && JSON.stringify(selected) === 'true' &&

                    <i className="fas fa-times color-red"></i>
                    }

                </li>
                <li
                    className={`list-group-item ${ (question.correct === 'false'&& GradeYourAnswer !== null ? "list-group-item-success" : "") 
                    || (question.correct !== JSON.stringify(GradeYourAnswer)&& GradeYourAnswer !== null && JSON.stringify(answer) === 'false' && 
                    JSON.stringify(selected) === 'false' ? "list-group-item-danger" : question.correct === JSON.stringify(GradeYourAnswer) && 
                    JSON.stringify(answer) === 'false' && JSON.stringify(selected) === 'false' ? "list-group-item-success": "")}`}>


                   <label><input
                       type="radio"
                       onClick={() => setAnswer(false)}
                       name={question._id}/>False</label>
                    {
                        question.correct === 'false' && GradeYourAnswer !== null &&
                        <i className="fas fa-check color-green"></i>


                    }
                    {
                        question.correct === 'true' && GradeYourAnswer !== null && JSON.stringify(selected) === 'false' &&
                        <i className="fas fa-times color-red"></i>
                    }

               </li>

            </ul>
            <p>
                Your answer: {JSON.stringify(answer)}
            </p>
            <p><button onClick={() => {setGradeYourAnswer(answer)
                setselected(answer)
                console.log('your answer is:', answer)}} className="btn btn-success">Grade</button></p>
        </div>
    )
}
export default TrueFalseQuestion;