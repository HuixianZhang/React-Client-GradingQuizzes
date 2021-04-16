import React, {useState} from "react";

const MultipleChoiceQuestion = ({question,setselectedAnswers}) => {
    const [yourAnswer, setYourAnswer] = useState("")
    const [GradeYourAnswer, setGradeYourAnswer] = useState("")

    return(
        <div>
            <h5>
                {question.question}

            </h5>
            {/*{JSON.stringify(question)}*/}

            <ul className="list-group">
                {
                    question.choices.map((choice) => {

                        return(
                            <li className={`list-group-item`}>
                                <label><input
                                    onClick={() => {
                                        setselectedAnswers({...question, answer:choice})

                                        setYourAnswer(choice)

                                    }}
                                    type="radio"
                                    name={question._id}/> {choice}
                                </label>


                            </li>
                        )
                    })
                }
            </ul>
            <p>
                Your answer: {yourAnswer}
            </p>
        </div>
    )
}

export default MultipleChoiceQuestion