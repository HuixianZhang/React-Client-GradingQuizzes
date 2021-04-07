import React, {useState} from 'react'
import {Link} from "react-router-dom";

const CourseRow = (
    {
        deleteCourse,
        updateCourse,
        course,
        lastModified,
        title,
        owner
    }) => {
    const [editing, setEditing] = useState(false)
    const [newTitle, setNewTitle] = useState(title)
    const courseId = course._id
    // const coursetitle = title


    const saveTitle = () => {
        setEditing(false)
        const newCourse = {
            ...course,
            title: newTitle
        }
        updateCourse(newCourse)
    }
    console.log(courseId)
    console.log('row title is: ' + course.title)
    return (
        <tr>
            <td>
                {
                    !editing &&

                    // <Link to={`/courses/table/editor/${course._id}`}>
                    <Link to={`/courses/table/editor/${course._id}`}>
                        {course.title}
                    </Link>
                }
                {
                    editing &&
                    <input
                        onChange={(event) => setNewTitle(event.target.value)}
                        value={newTitle}
                        className="form-control"/>
                }
            </td>
            <td className="d-none d-md-table-cell">{owner}</td>
            <td className="d-none d-lg-table-cell">{lastModified}</td>
            <td>
                <Link to={`/courses/${course._id}/quizzes`}>
                    Quizzes
                </Link>
            </td>
            <td>
                <i onClick={() => deleteCourse(course)} className="fas fa-trash"></i>
                {!editing && <i onClick={() => setEditing(true)} className="fas fa-edit"></i>}
                {editing && <i onClick={() => saveTitle()} className="fas fa-check"></i>}
            </td>
        </tr>
    )
}
export default CourseRow
