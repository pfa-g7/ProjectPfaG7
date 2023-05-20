// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {useNavigate, useRoutes} from 'react-router-dom';
import {isAuthenticated} from "../auth";
import ThemeRoutes from "../../routes/Router";

const AuthGuard = ({children}) => {
    const navigate = useNavigate();
    const routing = useRoutes(ThemeRoutes);
    useEffect(() => {
        if (!isAuthenticated()) {
            navigate("/login");
        }
    }, [routing, navigate]);

    return (<div className="dark">{routing}</div>);
};

export default AuthGuard;


