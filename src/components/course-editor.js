// import React from 'react'
// import {Link} from "react-router-dom";
//
// // const CourseEditor = ({props}) =>
// const CourseEditor = ({history}) =>
//     <div>
//         <h2>
//             <Link to="/courses/table">
//                 <i className="fas fa-arrow-left"></i>
//             </Link>
//             Course Editor
//             <i onClick={() => history.goBack()}
//                className="fas fa-times float-right"></i>
//             {/*<i onClick={() => props.history.goBack()}*/}
//             {/*   className="fas fa-times float-right"></i>*/}
//         </h2>
//     </div>
//
// export default CourseEditor

import React from 'react'
import {Link} from "react-router-dom";

// const CourseEditor = ({props}) =>
const CourseEditor = ({history}) =>
    <div>
        <h2>
            <Link to="/courses/table">
                <i className="fas fa-arrow-left"></i>
            </Link>
            Course Editor
            <i onClick={() => history.goBack()}
               className="fas fa-times float-right"></i>
            {/*<i onClick={() => props.history.goBack()}*/}
            {/*   className="fas fa-times float-right"></i>*/}
        </h2>


        <div className="row">
            <div className="col-4">
                <h3 className="style-1"><i className="fas fa-trash"></i> CS5610-WebDev</h3>
            </div>
            <div className="col-8 ms-1">
                <ul className="nav nav-tabs style-4">
                    <li className="nav-item">
                        <a className="nav-link color-white font-10" aria-current="page" href="#">
                            Build
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white bg-secondary font-10" href="#">Pages</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white font-10" href="#">Theme</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white font-10" href="#" tabIndex="-1"
                           aria-disabled="true">Store</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white font-10" href="#" tabIndex="-1" aria-disabled="true">Apps</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white font-10" href="#" tabIndex="-1"
                           aria-disabled="true">Settings</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link color-white font-10" href="#" tabIndex="-1" aria-disabled="true">
                            <i className="fas fa-plus-circle"></i>
                        </a>
                    </li>
                </ul>
            </div>


        </div>




        <div className="row">
            <div className="col-4">
                <ul className="list-group">
                    <li className="list-group-item style-2 center">
                        Module 1 - JQuery
                        <i className="fas fa-trash float-right"></i>
                    </li>

                    <li className="list-group-item style-3 center">
                        Module 2 - React
                        <i className="fas fa-trash float-right"></i>
                    </li>
                    <li className="list-group-item style-2 center">
                        Module 3 - Redux
                        <i className="fas fa-trash float-right"></i>
                    </li>
                    <li className="list-group-item style-2 center">
                        Module 4 - Native
                        <i className="fas fa-trash float-right"></i>
                    </li>
                    <li className="list-group-item style-2 center">
                        Module 5 - Angular
                        <i className="fas fa-trash float-right"></i>
                    </li>
                    <li className="list-group-item style-1 center">
                        <i className="fas fa-plus-circle float-right"></i>
                    </li>
                </ul>
            </div>
            <div className="col-8">
                <a href="#" className="badge badge-dark font-5">Topic 1</a>
                <a href="#" className="badge badge-dark font-5">Topic 2</a>
                <a href="#" className="badge badge-dark font-5">Topic 3</a>
                <a href="#" className="badge badge-dark font-5">Topic 4</a>
                <a href="#" className="badge badge-dark font-5"><i className="fas fa-plus-circle"></i></a>
                <br/>
                <br/>
                Content intentionally left blank
            </div>
        </div>

        {/*<div className="row">*/}
        {/*    <div className="col-4">*/}
        {/*        <ul className="list-group">*/}
        {/*            <li className="list-group-item">*/}
        {/*                Cras justo odio*/}
        {/*                <i className="fas fa-trash float-right"></i>*/}
        {/*            </li>*/}
        {/*            <li className="list-group-item active">Dapibus ac facilisis in</li>*/}
        {/*            <li className="list-group-item">Morbi leo risus</li>*/}
        {/*            <li className="list-group-item">Porta ac consectetur ac</li>*/}
        {/*            <li className="list-group-item">Vestibulum at eros</li>*/}
        {/*            <li className="list-group-item">*/}
        {/*                <i className="fas fa-plus-circle"></i>*/}
        {/*            </li>*/}
        {/*        </ul>*/}
        {/*    </div>*/}
        {/*    <div className="col-8">*/}
        {/*        <ul className="nav nav-tabs">*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link" aria-current="page" href="#">*/}
        {/*                    Active*/}
        {/*                    <i className="fas fa-trash"></i>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link active" href="#">Link</a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link" href="#">Link</a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">*/}
        {/*                    <i className="fas fa-plus-circle"></i>*/}
        {/*                </a>*/}
        {/*            </li>*/}
        {/*        </ul>*/}

        {/*        <br/>*/}

        {/*        <ul className="nav nav-pills">*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link active" aria-current="page" href="#">Active</a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link" href="#">Link</a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link" href="#">Link</a>*/}
        {/*            </li>*/}
        {/*            <li className="nav-item">*/}
        {/*                <a className="nav-link disabled" href="#" tabIndex="-1" aria-disabled="true">Disabled</a>*/}
        {/*            </li>*/}
        {/*        </ul>*/}

        {/*        Content intentionally left blank*/}
        {/*    </div>*/}
        {/*</div>*/}


    </div>

export default CourseEditor
