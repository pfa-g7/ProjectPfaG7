// eslint-disable-next-line no-unused-vars
import React, {useEffect} from 'react';
import {useNavigate} from 'react-router-dom';
import {isAuthenticated} from "../auth";

const AuthGuard = ({children}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated()) {
            navigate('/login');
        }
    }, [navigate]);

    return children;
};

export default AuthGuard;


