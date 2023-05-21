import {useRoutes} from "react-router-dom";
import Themeroutes from "./routes/Router";
import AuthGuard from "./utils/guards/AuthGuard";
import SignIn from "./views/SignIn";

const App = () => {
    const routing = useRoutes([{
        path: '/*', element: <AuthGuard/>, children: Themeroutes},
     {
        path: '/login', element: <SignIn/>,
     },
        ]);
    return (<div className="dark">{routing}</div>)
};

export default App;
