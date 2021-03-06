import React from 'react'
import {Link, useParams} from "react-router-dom";
import moduleReducer from "../reducers/modules-reducer";
import lessonReducer from "../reducers/lesson-reducer";
import topicReducer from "../reducers/topic-reducer";
import {combineReducers, createStore} from "redux";
import {Provider} from "react-redux";
import ModuleList from "./module-list";
import LessonTabs from "./lesson-tabs";
import TopicTabs from "./topic-pills";

const reducer = combineReducers({
    moduleReducer: moduleReducer,
    lessonReducer: lessonReducer,
    topicReducer: topicReducer
})


const store = createStore(reducer)

const CourseEditor = ({history}) => {
    console.log(history)
    const {courseId, moduleId} = useParams();
    return (
        <Provider store={store}>
            <div>
                <h2>
                    <Link to="/courses/table">
                        <i className="fas fa-arrow-left"></i>
                    </Link>
                    {/*Course Editor {courseId} {moduleId}*/}
                    Course Editor
                    <i onClick={() => history.goBack()}
                       className="fas fa-times float-right"></i>
                </h2>
                <div className="row">
                    <div className="col-4">
                        <ModuleList/>
                    </div>
                    <div className="col-8">
                        <LessonTabs/>
                        {/*<h1>topic</h1>*/}
                        <TopicTabs/>
                    </div>
                </div>

                {/*<div>*/}
                {/*    <TopicTabs/>*/}
                {/*</div>*/}
            </div>
        </Provider>)}

export default CourseEditor
