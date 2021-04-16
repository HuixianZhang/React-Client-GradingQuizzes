
const QUIZZES_URL = 'http://localhost:4000/api/quizzes';
const findAllQuizzes = () =>{
    return fetch(QUIZZES_URL)
        .then(response => response.json())
}

const findQuizzById = (qid) => {
    return fetch(`${QUIZZES_URL}/${qid}`)
        .then(response => response.json())
}


const submitQuiz = (quizId, questions) => {
    // console.log("submit questions:", questions, quizId)
    fetch(`http://localhost:4000/api/quizzes/${quizId}/attempts`, {
        method: 'POST',
        body: JSON.stringify(questions),
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
        .then(result => console.log(result['score']))
}

// const ShowScore = (quizId) => {
//     return fetch(`http://localhost:4000/api/quizzes/${quizId}/attempts`)
//         .then(response => response.json())
// }


export default {
    findAllQuizzes, findQuizzById, submitQuiz
}
