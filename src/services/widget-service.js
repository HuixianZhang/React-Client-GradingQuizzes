
export const createWidget = (topicId) =>
    fetch(`https://thawing-cove-99454.herokuapp.com/api/topics/${topicId}/widgets`, {
        method: 'POST',
        body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
        headers: {
            "content-type": 'application/json'
        }
    })
        .then(response => response.json())
        // .then(widget => setWidgets((widgets) => [...widgets, widget]))

export const deleteWidget = (widgetId) =>
    fetch(`https://thawing-cove-99454.herokuapp.com/api/widgets/${widgetId}`, {
        method: "DELETE"
    })
        .then(response => response.json())

const updateWidget = (widgetId, widget) =>
    fetch(`https://thawing-cove-99454.herokuapp.com/api/widgets/${widgetId}`, {
        method: "PUT",
        body: JSON.stringify(widget),
        headers: {
            "content-type": 'application/json'
        }
    }) .then(response => response.json())

export const findWidgetsForTopic = (topicId) =>
    fetch(`https://thawing-cove-99454.herokuapp.com/api/topics/${topicId}/widgets`)
        .then(response => response.json())

// export const findWidById = (courseId) =>
//     fetch(`${COURSES_URL}/${courseId}`, {
//         method: 'GET'
//
//     })
//         .then(response => response.json())

export default {
    createWidget, updateWidget, deleteWidget, findWidgetsForTopic
}