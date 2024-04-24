import { Routes, Route } from "react-router-dom";
import ReactConceptsDashboard from "../react-concepts/ReactConceptsDashboard.jsx"
import LoginForm from "./LoginForm.js";
import ContextComponentA from "../react-concepts/react-context/ContextComponentA.js";
import UseReducerInstance from "../react-concepts/react-usereducer/UseReducerInstance.js";
import ComplexReducerInstance from "../react-concepts/react-usereducer/ComplexReducerInstance.jsx";
import UseRefInstance from "../react-concepts/react-useref/UseRefInstance.jsx";
import PureComponentClassInstance from "../react-concepts/react-usememo/PureComponentInstance.jsx";
import MemoComponent from "../react-concepts/react-usememo/MemoComponent.jsx";
import UserForm from "../react-concepts/react-customhook/userForm.js";
import UserDataComponent from "../react-concepts/react-usecallback/UserDataComponent.jsx";
import ConceptsComponent from "../react-concepts/ConceptsComponent.jsx";

const MainContainer = () => {
    
    return(
        <>
            <Routes>
                <Route path="/" element={<LoginForm />}></Route>
                <Route exact path="/learn-react" element={<ReactConceptsDashboard />}>
                    <Route exact path="react-useReducer" element={<UseReducerInstance />}>
                        <Route exact path="complex-reducer" element={<ComplexReducerInstance />}/>            
                    </Route>    
                </Route>
                {/* <Route exact path="react-context" element={<ContextComponentA />}/> */}
                {/* <Route exact path="/react-useReducer" element={<UseReducerInstance />}/> */}
                {/* <Route exact path="/react-useReducer/complex-reducer" element={<ComplexReducerInstance />}/> */}
                {/* <Route exact path="/react-useRef" element={<UseRefInstance />}/> */}
                {/* <Route exact path="/react-purecomponents/class" element={<PureComponentClassInstance />}/> */}
                {/* <Route exact path="/react-purecomponents/memo" element={<MemoComponent />}/> */}
                {/* <Route exact path="/react-customHooks" element={<UserForm />}/> */}
                {/* <Route exact path="/react-usecallback" element={<UserDataComponent />}/> */}
                <Route path=":conceptName" element={<ConceptsComponent/>} />
                <Route path="*" element={<h1 className="text-danger not-found">Page not found Check the URL before you enter Idiot!!</h1>} />
            </Routes>
        </>
    )
}

export default MainContainer