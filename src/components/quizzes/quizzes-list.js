import React, {useState, useEffect} from "react";
import {Link, useParams} from "react-router-dom";
import quizservice from '../../services/quiz-service';
import {connect} from "react-redux";


// const QuizzesList = () => {
//     const {courseId} = useParams()
//     const [quizzes, setQuizzes] = useState([])
//     useEffect(() => {
//         // TODO: move this to a service file
//         fetch("http://localhost:4000/api/quizzes")
//             .then(response => response.json())
//             .then((quizzes) => {
//                 setQuizzes(quizzes)
//             })
//
//     }, [])
//     return(
//         <div>
//             <h2>Quizzes ({quizzes.length})</h2>
//             <ul>
//                 {
//                     quizzes.map((quiz) => {
//                         return(
//                             <li>
//                                 <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
//                                     {quiz.title}
//                                 </Link>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }
//
// export default QuizzesList;

// const QuizzesList = (
//     {
//         findAllQuizzes,
//         quizzes= []
//     })=> {
//     const {courseId} = useParams()
//     // const [quizzes, setQuizzes] = useState([])
//     useEffect(() => {
//
//         // fetch("http://localhost:4000/api/quizzes")
//         //     .then(response => response.json())
//         //     .then((quizzes) => {
//         //         setQuizzes(quizzes)
//         //     }
//             findAllQuizzes()
//     }, [])
//     return(
//         <div>
//             <h2>Quizzes ({quizzes.length})</h2>
//             <ul>
//                 {
//                     quizzes.map((quiz) => {
//                         return(
//                             <li>
//                                 <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
//                                     {quiz.title}
//                                 </Link>
//                             </li>
//                         )
//                     })
//                 }
//             </ul>
//         </div>
//     );
// }
// const stpm = (state) => ({
//     quizzes: state.QuizReducer.quizzes
// })
// const dtpm = (dispatch) => ({
//
//     findAllQuizzes: () => {
//         // console.log("LOAD LESSONS FOR MODULE:")
//         // console.log(moduleId)
//         quizservice.findAllQuizzes()
//             .then(quizzes => dispatch({
//                 type: "FIND_QUIZZES",
//                     quizzes
//             }))
//     }
// })
//
// export default connect(stpm, dtpm)(QuizzesList);
//
const QuizzesList = () => {
    const {courseId} = useParams()
    const [quizzes, setQuizzes] = useState([])
    useEffect(() => {
        quizservice.findAllQuizzes()
        // fetch("http://localhost:4000/api/quizzes")
        //     .then(response => response.json())
            .then((quizzes) => {
                setQuizzes(quizzes)
            })

    }, [])
    return(
        <div>
            {/*<h2>Quizzes ({quizzes.length})</h2>*/}
            <h2>Quizzes</h2>
            <ul>
                {
                    quizzes.map((quiz) => {
                        return(
                            // <tr>
                            //     <td>
                            //         <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                            //             {quiz.title}
                            //         </Link>
                            //     </td>
                            //     <br/>
                            //     <br/>
                            //     <td>
                            //         <button className="btn btn-primary btn-block float-xl-right">Start</button>
                            //     </td>
                            // </tr>
                            <div class="row">
                                <div class="col-3">
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        {quiz.title}
                                    </Link>
                                </div>
                                <br/>
                                <br/>
                                <div class="col-1">
                                    <Link to={`/courses/${courseId}/quizzes/${quiz._id}`}>
                                        <button className="btn btn-primary btn-block float-right">Start</button>
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </ul>
        </div>
    );
}

export default QuizzesList;
