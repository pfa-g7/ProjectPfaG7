import {lazy} from "react";
import { Navigate } from "react-router-dom";
import Students from "../Components/dashboard/Students";
import Professeurs from "../Components/dashboard/Professeurs";
import Surveillant from "../Components/dashboard/Surveillants";
import Users from "../Components/dashboard/Users";
import ProcesV from "../Components/dashboard/ProcesV";


/****Layouts*****/
const FullLayout = lazy(() => import("../layouts/FullLayout.js"));

/***** Pages ****/

const Starter = lazy(() => import("../views/Starter.js"));
const About = lazy(() => import("../views/About.js"));
const Alerts = lazy(() => import("../views/ui/Alerts"));
const Badges = lazy(() => import("../views/ui/Badges"));
const Buttons = lazy(() => import("../views/ui/Buttons"));
const Cards = lazy(() => import("../views/ui/Cards"));
const Grid = lazy(() => import("../views/ui/Grid"));
const Tables = lazy(() => import("../views/ui/Tables"));
const Forms = lazy(() => import("../views/ui/Forms"));
const Breadcrumbs = lazy(() => import("../views/ui/Breadcrumbs"));


/*****Routes******/

const ThemeRoutes = [
    {
        path: "",
        element: <FullLayout/>,
        children: [
            { path: "", element: <Navigate to="/starter" /> },
            {path: "starter", element: <Starter/>},
            {path: "about", element: <About/>},
            {path: "alerts", element: <Alerts/>},
            {path: "badges", element: <Badges/>},
            {path: "buttons", element: <Buttons/>},
            {path: "cards", element: <Cards/>},
            {path: "grid", element: <Grid/>},
            {path: "table", element: <Tables/>},
            {path: "forms", element: <Forms/>},
            {path: "breadcrumbs", element: <Breadcrumbs/>},
            { path: "students", exact: true, element: <Students /> },
            { path: "teachers", exact: true, element: <Professeurs /> },
            { path: "surveillants", exact: true, element: <Surveillant /> },
            { path: "users", exact: true, element: <Users /> },
            { path: "proces", exact: true, element: <ProcesV /> },
            // { path: "*", element: <Navigate to="/starter" /> },
        ],
    },
];

export default ThemeRoutes;
