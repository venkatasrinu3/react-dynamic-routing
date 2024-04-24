import "./ConceptsDashboard.scss";
import { useNavigate,useLocation, Outlet } from "react-router-dom"
import ContextComponentA from "./react-context/ContextComponentA";
import UseReducerInstance from "./react-usereducer/UseReducerInstance";
import UseRefInstance from "./react-useref/UseRefInstance";
import UserDataComponent from "./react-usecallback/UserDataComponent";
import NoComponent from "./NoComponent";
import PureComponentClassInstance from "./react-usememo/PureComponentInstance";
import MemoComponent from "./react-usememo/MemoComponent";
import UserForm from "./react-customhook/userForm";


export const conceptsList = [
    { conceptName: "Context", route: "/react-context", componentName: <ContextComponentA /> },
    { conceptName: "Reducer", route: "/react-useReducer", componentName: <UseReducerInstance /> },
    { conceptName: "Ref", route: "/react-useRef", componentName: <UseRefInstance /> },
    { conceptName: "Callback", route: "/react-usecallback", componentName: <UserDataComponent /> },
    { conceptName: "Memo", route: "/react-usememo", componentName: <NoComponent /> },
    { conceptName: "Higher Order Components", route: "/react-hoc", componentName: <NoComponent /> },
    { conceptName: "Redux toolkit", route: "/react-redux-toolkit", componentName: <NoComponent /> },
    { conceptName: "React Pure Components Class", route: "/react-purecomponents/class", componentName: <PureComponentClassInstance /> },
    { conceptName: "React Pure Components Memo", route: "/react-purecomponents/memo", componentName: <MemoComponent /> },
    { conceptName: "React Custom Hooks", route: "/react-customHooks", componentName: <UserForm /> },
]

const ReactConceptsDashboard = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {name} = location.state
    return (
        <div className="container">
            <h4>Welcome <h3>{name}</h3> Pick the concepts below You wanna practice</h4>
            {conceptsList.map((ele) => (
                <div key={ele.conceptName} className="card" onClick={() => navigate(ele.route)}>
                    <span className="concept-name">{ele.conceptName}</span>
                    <button className="lets-practice-btn">Lets practice <span className="material-symbols-outlined">arrow_forward</span></button>
                </div>
            ))}
            <Outlet/>
        </div>
    )
}
export default ReactConceptsDashboard;