import React, {useState, useEffect} from 'react'

const ListWidget = (
    {   _widget,
        widget,
        setWidget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    return(
        <div>
            <h2>List Widget</h2>
            {
                editing &&
                <>
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

                    <input onChange={(e) => {setWidget({...widget, ordered: e.target.checked})
                    console.log('order is', e.target.checked)
                    }} checked={widget.ordered} type="checkbox"/> Ordered
                    <br/>
                    Item list
                    <textarea onChange={(e) => setWidget({...widget, text: e.target.value})} value={widget.text} rows={10} className="form-control"></textarea>
                    {/*{JSON.stringify(widget)}*/}
                </>
            }
            {
                !editing &&
                <>
                    <i onClick={() => {
                        setEditing(true)
                        setWidget(_widget)
                    }} className="fas fa-cog float-right"></i>
                    {/*{JSON.stringify(widget)}*/}
                    {
                        _widget.ordered &&
                        <ol>
                            {
                                _widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ol>
                    }
                    {
                        !_widget.ordered &&
                        <ul>
                            {
                                _widget.text.split("\n").map((item) => {
                                    return(
                                        <li>
                                            {item}
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    }
                </>
            }
        </div>
    )
}

export default ListWidget