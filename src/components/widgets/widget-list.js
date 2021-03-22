import React, {useState, useEffect} from 'react';
import {connect} from "react-redux";
import HeadingWidget from "./heading-widget";
import ParagraphWidget from "./paragraph-widget";
import {useParams} from "react-router-dom";
import widgetService from '../../services/widget-service';


// const WidgetList = (
//     {
//         widgets= [],
//         findWidgetsForTopic,
//         createWidget,
//         updateWidget,
//         deleteWidget
//     }) => {
//
//     const [editing, setEditing] = useState(false)
//     const [widget, setWidget] = useState({})
//
//     const {topicId, widgetId} = useParams();
//
//     useEffect(() => {
//
//
//         if(topicId !== "undefined" && typeof topicId !== "undefined") {
//             findWidgetsForTopic(topicId)
//             console.log("topic id for widget is:" + topicId)
//
//         }
//     }, [topicId])
//
//
//     console.log("widget id is: " + widget.id)
//     return(
//         <div>
//             <i onClick={() =>createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>
//
//             <h1>Widget List</h1>
//             <ul className="list-group">
//                 {console.log(widgets)}
//                 {
//                     widgets.map(_widget =>
//                         <li key={_widget.id} className="list-group-item">
//                             {
//                                 editing &&
//                                 <>
//                                     <i onClick={() => {
//                                         deleteWidget(_widget)}
//                                     } className="fas fa-trash float-right"></i>
//                                     <i onClick={() => {
//                                         updateWidget(widget)
//                                         setEditing(false)
//                                         console.log("inside update: ",widget)
//
//                                     }} className="fas fa-check float-right"></i>
//                                 </>
//                             }
//                             {
//                                 !editing &&
//                                 <i onClick={() => {
//                                     setEditing(true)
//                                     setWidget(_widget)
//
//                                 }} className="fas fa-cog float-right"></i>
//
//                             }
//                             {
//                                 _widget.type === "HEADING" &&
//                                 <HeadingWidget
//                                     // updateWidget = {updateWidget}
//                                     // deleteWidget = {deleteWidget}
//                                     // deleteWidget={deleteWidget}
//                                     setWidget={setWidget}
//                                     editing={editing}
//                                     widget={widget}/>
//                             }
//                             {
//                                 _widget.type === "PARAGRAPH" &&
//                                 <ParagraphWidget
//                                     // updateWidget = {updateWidget}
//                                     // deleteWidget = {deleteWidget}
//                                     setWidget={setWidget}
//                                     editing={editing}
//                                     widget={widget}/>
//                             }
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
//
// // export default WidgetList
// const stpm = (state) => ({
//     widgets: state.widgetReducer.widgets
// })
// const dtpm = (dispatch) => ({
//
//     findWidgetsForTopic: (topicId) => {
//         // console.log("LOAD LESSONS FOR MODULE:")
//         // console.log(moduleId)
//         widgetService.findWidgetsForTopic(topicId)
//             .then(widgets => dispatch({
//                 type: "FIND_WIDGETS",
//                 widgets
//
//             }))
//
//     },
//     deleteWidget: (widget) =>
//         widgetService.deleteWidget(widget.id)
//             .then(status => dispatch({
//                 type: "DELETE_WIDGET",
//                 widgetToDelete: widget
//             })),
//     updateWidget: (widget) =>
//         widgetService.updateWidget(widget.id, widget)
//             .then(status => dispatch({
//                 type: "UPDATE_WIDGET",
//                 widget
//             })),
//     createWidget: (topicId) => {
//         // console.log("CREATE LESSON FOR MODULE: " + moduleId)
//         widgetService
//             .createWidget(topicId, {title: "New Widget"})
//             .then(widget => dispatch({
//                 type: "CREATE_WIDGET",
//                 widget
//             }))
//     }
// })
//
// export default connect(stpm, dtpm)(WidgetList)

// const WidgetList = () => {
//     const {topicId} = useParams()
//     // const widgetId = _widget.id
//     // console.log(widgetId)
//     const [widgets, setWidgets] = useState([])
//     const [widget, setWidget] = useState({})
//     const widgetId = widget.id
//     console.log('widget id is:' + widgetId)
//     useEffect(() => {
//         fetch(`https://thawing-cove-99454.herokuapp.com/api/topics/${topicId}/widgets`)
//             .then(response => response.json())
//             .then(widgets => setWidgets(widgets))
//     }, [topicId])
//
//     const createWidget = () => {
//         fetch(`https://thawing-cove-99454.herokuapp.com/api/topics/${topicId}/widgets`, {
//             method: 'POST',
//             body: JSON.stringify({type: "HEADING", size: 1, text: "New Widget"}),
//             headers: {
//                 "content-type": 'application/json'
//             }
//         })
//             .then(response => response.json())
//             .then(widget => setWidgets((widgets) => [...widgets, widget]))
//     }
//
//     const deleteWidget = (id) =>
//         fetch(`https://thawing-cove-99454.herokuapp.com/api/widgets/${id}`, {
//             method: "DELETE"
//         }).then((status) => {
//             setWidgets((widgets) => widgets.filter(w => w.id !== id))
//         })
//
//     const updateWidget = (id, widget) =>
//         fetch(`https://thawing-cove-99454.herokuapp.com/api/widgets/${id}`, {
//             method: "PUT",
//             body: JSON.stringify(widget),
//             headers: {
//                 "content-type": 'application/json'
//             }
//         }).then((status) => {
//             setWidget({})
//             setWidgets((widgets) => widgets.map(w => w.id === id ? widget : w))
//         })
//
//     return(
//         <div>
//             <i onClick={createWidget} className="fas fa-plus float-right fa-2x"></i>
//             {/*<h1>Widget List {widget.id}</h1>*/}
//             <h1>Widget List</h1>
//             <ul className="list-group">
//                 {
//                     widgets.map(_widget =>
//                         <li key={_widget.id} className="list-group-item">
//                             {
//                                 _widget.id === widget.id &&
//                                 <>
//                                     <i onClick={() => deleteWidget(_widget.id)} className="fas fa-trash float-right"></i>
//                                     <i onClick={() => {
//                                         updateWidget(_widget.id, widget)
//                                     }} className="fas fa-check float-right"></i>
//                                 </>
//                             }
//                             {
//                                 _widget.id !== widget.id &&
//                                 <i onClick={() => setWidget(_widget)} className="fas fa-cog float-right"></i>
//                             }
//                             {
//                                 _widget.type === "HEADING" &&
//                                 <HeadingWidget
//                                     setWidget={setWidget}
//                                     editing={_widget.id === widget.id}
//                                     widget={widget}/>
//                             }
//                             {
//                                 _widget.type === "PARAGRAPH" &&
//                                 <ParagraphWidget
//                                     setWidget={setWidget}
//                                     editing={_widget.id === widget.id}
//                                     widget={widget}/>
//                             }
//                         </li>
//                     )
//                 }
//             </ul>
//         </div>
//     )
// }
//
// export default WidgetList

const WidgetList = (
    {
        widgets= [],
        findWidgetsForTopic,
        createWidget,
        updateWidget,
        deleteWidget
    }) => {

    const [editing, setEditing] = useState(false)
    const [widget, setWidget] = useState({})

    const {topicId, widgetId} = useParams();

    useEffect(() => {


        if(topicId !== "undefined" && typeof topicId !== "undefined") {
            findWidgetsForTopic(topicId)
            console.log("topic id for widget is:" + topicId)

        }
    }, [topicId])


    // console.log("widget id is: " + widget.id)
    return(
        <div>
            <i onClick={() =>createWidget(topicId)} className="fas fa-plus float-right fa-2x"></i>

            <h1>Widget List</h1>
            <ul className="list-group">
                {
                    widgets.map(_widget =>
                        <li key={_widget.id} className="list-group-item">
                            {/*{*/}
                            {/*    _widget.id === widget.id &&*/}
                            {/*    <>*/}
                            {/*        <i onClick={() => {*/}
                            {/*            deleteWidget(_widget)}*/}
                            {/*        } className="fas fa-trash float-right"></i>*/}
                            {/*        <i onClick={() => {*/}
                            {/*            updateWidget(widget)*/}
                            {/*            setEditing(false)*/}
                            {/*            console.log("inside update: ",widget)*/}

                            {/*        }} className="fas fa-check float-right"></i>*/}
                            {/*    </>*/}
                            {/*}*/}
                            {/*{*/}
                            {/*    _widget.id !== widget.id&&*/}
                            {/*    <i onClick={() => {*/}
                            {/*        setEditing(true)*/}
                            {/*        setWidget(_widget)*/}

                            {/*    }} className="fas fa-cog float-right"></i>*/}

                            {/*}*/}
                            {
                                _widget.type === "HEADING" &&
                                <HeadingWidget
                                    _widget={_widget}
                                    updateWidget = {updateWidget}
                                    deleteWidget = {deleteWidget}
                                    // deleteWidget={deleteWidget}
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
                            }
                            {
                                _widget.type === "PARAGRAPH" &&
                                <ParagraphWidget
                                    _widget={_widget}
                                    updateWidget = {updateWidget}
                                    deleteWidget = {deleteWidget}
                                    setWidget={setWidget}
                                    editing={_widget.id === widget.id}
                                    widget={widget}/>
                            }
                        </li>
                    )
                }
            </ul>
        </div>
    )
}

// export default WidgetList
const stpm = (state) => ({
    widgets: state.widgetReducer.widgets
})
const dtpm = (dispatch) => ({

    findWidgetsForTopic: (topicId) => {
        // console.log("LOAD LESSONS FOR MODULE:")
        // console.log(moduleId)
        widgetService.findWidgetsForTopic(topicId)
            .then(widgets => dispatch({
                type: "FIND_WIDGETS",
                widgets

            }))

    },
    deleteWidget: (widget) =>
        widgetService.deleteWidget(widget.id)
            .then(status => dispatch({
                type: "DELETE_WIDGET",
                widgetToDelete: widget
            })),
    updateWidget: (widget) =>
        widgetService.updateWidget(widget.id, widget)
            .then(status => dispatch({
                type: "UPDATE_WIDGET",
                widget
            })),
    createWidget: (topicId) => {
        // console.log("CREATE LESSON FOR MODULE: " + moduleId)
        widgetService
            .createWidget(topicId, {title: "New Widget"})
            .then(widget => dispatch({
                type: "CREATE_WIDGET",
                widget
            }))
    }
})

export default connect(stpm, dtpm)(WidgetList)