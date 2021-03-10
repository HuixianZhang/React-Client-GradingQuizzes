import React, {useEffect} from 'react'
import {connect} from "react-redux";
import EditableItem from "./editable-item";
import {useParams} from "react-router-dom";
import topicService from '../services/topic-service'

const TopicTabs = (
    {
        topics=[
            // {_id: "123", title: "Lesson A"},
            // {_id: "123", title: "Lesson B"},
            // {_id: "123", title: "Lesson C"}
        ],
        findTopicsForLesson,
        createTopicForLesson,
        updateTopic,
        deleteTopic=(item) => alert("delete " + item._id)
    }) => {
    const {courseId, moduleId, lessonId, topicId, layout} = useParams();
    useEffect(() => {

        // topics=[]
        // console.log("LOAD LESSONS FOR MODULE: " + moduleId)
        if(lessonId !== "undefined" && typeof lessonId !== "undefined" && moduleId !== "undefined" && typeof moduleId !== "undefined") {
            findTopicsForLesson(lessonId)
        }
        else{
            findTopicsForLesson(lessonId)
            // topics =[]
        }
    }, [lessonId, moduleId])

    console.log("topic id is:" + topicId)
    return(
        <div>
            <h2>Topics</h2>
            <ul className="nav nav-pills">
                {
                    topics.map(topic =>
                        // <li className="nav-item">
                        <li className={`nav-item ${topic._id === topicId ? 'active' : ''}`}>
                            <EditableItem
                                // active={lesson._id === lessonId}
                                to={`/courses/${layout}/editor/${courseId}/${moduleId}/${lessonId}/${topic._id}`}
                                updateItem={updateTopic}
                                deleteItem={deleteTopic}
                                item={topic}/>
                        </li>
                    )
                }
                {   lessonId !== undefined && <li>
                    <i onClick={() => createTopicForLesson(lessonId)} className="fas fa-plus"></i>
                </li>}
            </ul>
        </div>)}

const stpm = (state) => ({
    topics: state.topicReducer.topics
})
const dtpm = (dispatch) => ({
    findTopicsForLesson: (lessonId) => {
        // console.log("LOAD LESSONS FOR MODULE:")
        // console.log(moduleId)
        topicService.findTopicsForLesson(lessonId)
            .then(topics => dispatch({
                type: "FIND_TOPICS",
                topics
            }))
    },
    deleteTopic: (item) =>
        topicService.deleteTopic(item._id)
            .then(status => dispatch({
                type: "DELETE_TOPIC",
                topicToDelete: item
            })),
    updateTopic: (topic) =>
        topicService.updateTopic(topic._id, topic)
            .then(status => dispatch({
                type: "UPDATE_TOPIC",
                topic
            })),
    createTopicForLesson: (lessonId) => {
        // console.log("CREATE LESSON FOR MODULE: " + moduleId)
        topicService
            .createTopicForLesson(lessonId, {title: "New Topic"})
            .then(topic => dispatch({
                type: "CREATE_TOPIC",
                topic
            }))
    }
})

export default connect(stpm, dtpm)(TopicTabs)
