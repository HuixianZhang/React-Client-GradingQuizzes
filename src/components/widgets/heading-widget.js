import React, {useState} from 'react'
import ParagraphWidget from "./paragraph-widget";

const HeadingWidget = (
    {
        _widget,
        widget,
        setWidget,
        updateWidget,
        deleteWidget
        // editing
}) =>{
    const [editing, setEditing] = useState(false)
    return(
    <div>
        <h2>Heading Widget</h2>
        {/*{ widget.size ===1 && <h1>{widget.text}</h1>}*/}
        {/*{ widget.size ===2 && <h2>{widget.text}</h2>}*/}
        {/*{ widget.size ===3 && <h3>{widget.text}</h3>}*/}
        {/*{ widget.size ===4 && <h4>{widget.text}</h4>}*/}
        {/*{ widget.size ===5 && <h5>{widget.text}</h5>}*/}
        {/*{ widget.size ===6 && <h6>{widget.text}</h6>}*/}

        {
            !editing &&
            <i onClick={() => {
                setEditing(true)
                setWidget(_widget)
            }} className="fas fa-cog float-right"></i>

        }

        {
            editing &&
            <div>
                <i onClick={() => {
                    deleteWidget(_widget)}
                } className="fas fa-trash float-right"></i>
                <i onClick={() => {
                    updateWidget(widget)
                    setEditing(false)
                    console.log("inside update: ",widget)

                }} className="fas fa-check float-right"></i>

                <select onChange={(e) => {
                    setWidget(widget => ({...widget, type: e.target.options[e.target.selectedIndex].value}))
                    console.log(e.target.options[e.target.selectedIndex].value)
                }} value={widget.type} className="form-control">

                    <option value={'HEADING'}>Heading</option>
                    <option value={'PARAGRAPH'}>Paragraph</option>
                </select>

                <input onChange={(e) => {
                    setWidget(widget => ({...widget, text: e.target.value}))
                }} value={widget.text} className="form-control"/>
                <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))} value={widget.size} className="form-control">
                    <option value={1}>Heading 1</option>
                    <option value={2}>Heading 2</option>
                    <option value={3}>Heading 3</option>
                    <option value={4}>Heading 4</option>
                    <option value={5}>Heading 5</option>
                    <option value={6}>Heading 6</option>
                </select>
            </div>
        }
    </div>
    )
}
export default HeadingWidget



// const HeadingWidget = ({widget, setWidget, editing}) =>
//     <div>
//         <h2>Heading Widget</h2>
//         { widget.size ===1 && <h1>{widget.text}</h1>}
//         { widget.size ===2 && <h2>{widget.text}</h2>}
//         { widget.size ===3 && <h3>{widget.text}</h3>}
//         { widget.size ===4 && <h4>{widget.text}</h4>}
//         { widget.size ===5 && <h5>{widget.text}</h5>}
//         { widget.size ===6 && <h6>{widget.text}</h6>}
//
//
//
//
//         {
//             editing &&
//             <div>
//                 <select onChange={(e) => {
//                     setWidget(widget => ({...widget, type: e.target.options[e.target.selectedIndex].value}))
//                     console.log(e.target.options[e.target.selectedIndex].value)
//                 }} value={widget.type} className="form-control">
//
//                     <option value={'HEADING'}>Heading</option>
//                     <option value={'PARAGRAPH'}>Paragraph</option>
//                 </select>
//
//                 <input onChange={(e) => {
//                     setWidget(widget => ({...widget, text: e.target.value}))
//                     // console.log("sumanth is:", e.target.value)
//                 }} value={widget.text} className="form-control"/>
//                 <select onChange={(e) => setWidget(widget => ({...widget, size: parseInt(e.target.value)}))} value={widget.size} className="form-control">
//                     <option value={1}>Heading 1</option>
//                     <option value={2}>Heading 2</option>
//                     <option value={3}>Heading 3</option>
//                     <option value={4}>Heading 4</option>
//                     <option value={5}>Heading 5</option>
//                     <option value={6}>Heading 6</option>
//                 </select>
//             </div>
//         }
//     </div>
//
// export default HeadingWidget