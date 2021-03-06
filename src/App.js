import CourseManager from "./components/course-manager";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Home from "./components/home"
import CourseEditor from "./components/course-editor";
// function App() {
//     return (
//         <BrowserRouter>
//             <div className="container-fluid">
//                 <Route path="/" exact={true}>
//                     <Home/>
//                 </Route>
//                 <Route path="/courses">
//                     <CourseManager/>
//                 </Route>
//             </div>
//         </BrowserRouter>
//     );
// }
function App() {
    return (
        <BrowserRouter>
            <div>
                <Switch>
                    <Route path={[
                        "/courses/editor",
                        "/courses/:layout/editor/:courseId",
                        "/courses/:layout/editor/:courseId/:moduleId",
                        "/courses/:layout/editor/:courseId/:moduleId/:lessonId",
                        "/courses/:layout/editor/:courseId/:moduleId/:lessonId/:topicId"
                    ]}
                           exact={true}
                           render={(props) => <CourseEditor {...props}/>} />
                    <Route path="/courses/table" exact={true}>
                        <CourseManager />
                    </Route>
                    <Route path="/courses/grid" exact={true}>
                        <CourseManager />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </div>
        </BrowserRouter>);
}


export default App;

