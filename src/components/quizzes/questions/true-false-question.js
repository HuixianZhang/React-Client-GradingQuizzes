
import React, {useState} from "react";

const TrueFalseQuestion = ({question,mcqTestFunction,setselectedAnswers}) => {
    const [answer, setAnswer] = useState()
    const [GradeYourAnswer, setGradeYourAnswer] = useState(null)
    const [selected, setselected] = useState("")
    return (
        <div>

            <h5>
                {question.question}

            </h5>
            {/*{question.correct}*/}
            {/*<br/>*/}
            {/*{JSON.stringify(answer)}*/}
            {/*<br/>*/}
            {/*{JSON.stringify(question)}*/}
            <ul className="list-group">
                <li
                    className={`list-group-item`}>

                    <label><input
                        type="radio"
                        onClick={() => {
                            setselectedAnswers({...question, answer: "true"})

                            setAnswer(true)

                            // props.setselectedAnswers(true)
                        }}
                        name={question._id}/>True</label>


                </li>
                <li
                    className={`list-group-item`}>


                   <label><input
                       type="radio"
                       onClick={() => {
                           setselectedAnswers({...question, answer: "false"})
                           setAnswer(false)

                           }}
                       name={question._id}/>False</label>

               </li>

            </ul>
            <p>
                Your answer: {JSON.stringify(answer)}
            </p>
        </div>
    )
}
export default TrueFalseQuestion;