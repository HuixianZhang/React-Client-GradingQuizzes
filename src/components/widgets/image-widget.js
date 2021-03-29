import React, {useState, useEffect} from 'react'

const ImageWidget = (
    {
        _widget,
        widget,
        setWidget,
        updateWidget,
        deleteWidget
    }) => {
    const [editing, setEditing] = useState(false)
    return (
        <div>
            <h2>Image Widget</h2>
            {
                !editing &&
                <>
                <i onClick={() => {
                    setEditing(true)
                    setWidget(_widget)
                }} className="fas fa-cog float-right"></i>
                <img width={_widget.width} height={_widget.height} src={_widget.src}/>
                {/*{JSON.stringify(_widget)}*/}
                </>
            }
            {
                editing &&
                <>

                    <i onClick={() => {
                        deleteWidget(_widget)}
                    } className="fas fa-trash float-right"></i>
                    <i onClick={() => {
                        // console.log("after widget", widget)
                        updateWidget(widget)
                        setEditing(false)
                        // console.log("inside update: ", widget)
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

                    <input onChange={(e) => {
                        setWidget(widget => ({...widget, src: e.target.value}))
                        console.log(e.target.value, widget)
                    }} value={widget.src} className="form-control"/>
                    <input onChange={(e) => {
                        setWidget(widget => ({...widget, width: e.target.value}))
                    }} value={widget.width} className="form-control"/>
                    <input onChange={(e) => {
                        setWidget(widget => ({...widget, height: e.target.value}))
                    }} value={widget.height} className="form-control"/>


                </>
            }
        </div>
    )
}
export default ImageWidget