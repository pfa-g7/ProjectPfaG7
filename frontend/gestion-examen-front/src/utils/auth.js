import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {redirect, useNavigate} from "react-router-dom";

const API_URL = 'http://localhost:8080/api/auth';

const setAuthToken = token => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axios.defaults.headers.common['Authorization'];
    }
}

const getTokenExpirationDate = encodedToken => {
    const token = jwtDecode(encodedToken);
    if (!token.exp) {
        return null;
    }

    const expirationDate = new Date(0);
    expirationDate.setUTCSeconds(token.exp);

    return expirationDate;
}

const isTokenExpired = token => {
    const expirationDate = getTokenExpirationDate(token);
    return expirationDate < new Date();
}

const login = async (email, password) => {
    const response = await axios.post(`${API_URL}/authenticate`, {email, password});
    const token = response.data.access_token;
    console.log(token)
    console.log(response)
    localStorage.setItem('token', token);
    setAuthToken(token);
}

const register = async (name, email, password) => {
    await axios.post(`${API_URL}/register`, {name, email, password});
}

const logout = () => {
    localStorage.removeItem('token');
    setAuthToken(null);
}

const getAuthToken = () => localStorage.getItem('token');

const isAuthenticated = () => {
    const token = getAuthToken();
    return !!token && !isTokenExpired(token);
}

export {
    setAuthToken,
    getTokenExpirationDate,
    isTokenExpired,
    login,
    register,
    logout,
    getAuthToken,
    isAuthenticated,
};
