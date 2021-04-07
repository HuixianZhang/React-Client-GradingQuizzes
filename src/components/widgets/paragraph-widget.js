import React, {useState, useEffect} from 'react'

const ParagraphWidget = (
    {  _widget,
        widget,
        setWidget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    return (
        <div>
            <h2>Paragraph Widget</h2>
            {
                editing &&
                <div>
                    <i onClick={() => {
                        deleteWidget(_widget)}
                    } className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        updateWidget(widget)
                        setEditing(false)
                        console.log("inside update: ", widget)

                    }} className="fas fa-check float-right"></i>

                    <select onChange={(e) => {
                    setWidget(widget => ({...widget, type: e.target.options[e.target.selectedIndex].value}))
                    console.log(e.target.options[e.target.selectedIndex].value)

                }} value={widget.type} className="form-control">
                    <option value={'PARAGRAPH'}>Paragraph</option>
                    <option value={'HEADING'}>Heading</option>
                    <option value={'IMAGE'}>Image</option>
                    <option value={'LIST'}>List</option>

                </select>
                <textarea
                    onChange={(e) => setWidget({...widget, text: e.target.value})}
                    value={widget.text}
                    className="form-control"></textarea>
                </div>
            }
            {
                !editing &&
                <div>
                <i onClick={() => {
                    setEditing(true)
                    setWidget(_widget)
                }} className="fas fa-cog float-right"></i>
                <p>
                    {_widget.text}
                </p>
                </div>
            }
        </div>
    )
}

export default ParagraphWidget
