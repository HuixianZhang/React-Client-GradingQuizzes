// import React from 'react'
// import CourseCard from "./course-card";
// import {Link} from "react-router-dom";
//
// const CourseGrid = ({courses}) =>
//     <div>
//         <Link to="/courses/table">
//             <i className="fas fa-list fa-2x float-right"></i>
//         </Link>
//         <h2>Course Grid {courses.length}</h2>
//
//
//         <div className="row">
//             {
//                 courses.map(course =>
//                     <CourseCard course={course}/>
//                 )
//             }
//         </div>
//
//
//     </div>
//
// export default CourseGrid

import React from 'react'
import CourseCard from "./course-card";
import {Link} from "react-router-dom";
import CourseRow from "./course-row";

// const CourseGrid = ({courses}) =>
//     <div>
//         <Link to="/courses/table">
//             <i className="fas fa-list fa-2x float-right"></i>
//         </Link>
//         <h2>Course Grid {courses.length}</h2>
//
//         <div className="row">
//             {
//                 courses.map(course =>
//                     <CourseCard course={course}/>
//                 )
//             }
//         </div>
//
//
//     </div>
//
// export default CourseGrid


export default class CourseGrid
    extends React.Component {

    constructor(props) {
        super(props)
        console.log(props)
    }

    render() {
        return(
            <div>
                <Link to="/courses/table">
                    <i className="fas fa-2x fa-th float-right"></i>
                </Link>
                <h2>Course Grid</h2>


                <div className="row">
                    {
                        this.props.courses.map((course, ndx) =>
                            <CourseCard
                                updateCourse={this.props.updateCourse}
                                deleteCourse={this.props.deleteCourse}
                                key={ndx}
                                course={course}
                                title={course.title}
                                owner={course.owner}
                                lastModified={course.lastModified}
                            />)
                    }
                </div>

            </div>
        )
    }
}





