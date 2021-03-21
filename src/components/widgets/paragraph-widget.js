import React, {useState, useEffect} from 'react'

const ParagraphWidget = ({widget, setWidget, editing}) => {
    return (
        <div>
            {/*<select onChange={(e) => setWidget(widget => ({...widget, type: e.target.type}))} className="form-control">*/}
            {/*    <option value={1}>Heading</option>*/}
            {/*    <option value={2}>Paragraph</option>*/}
            {/*</select>*/}
            <select onChange={(e) => {
                setWidget(widget => ({...widget, type: e.target.options[e.target.selectedIndex].value}))
                console.log(e.target.options[e.target.selectedIndex].value)
                // console.log(widget.target.value)

            }} value={widget.type} className="form-control">
                <option value={'PARAGRAPH'}>Paragraph</option>
                <option value={'HEADING'}>Heading</option>

            </select>
            {
                editing &&
                <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
            }
            {
                !editing &&
                <p>
                    {widget.text}
                </p>
            }
        </div>
    )
}

export default ParagraphWidget
