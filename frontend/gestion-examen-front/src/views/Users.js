import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row } from "reactstrap";

function Users() {
    const [userData, setUserData] = useState([]);
    const [userId, setUserId] = useState('');
    const [userCin, setUserCin] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userUserName, setUserUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');






    const getUsers = async () => {
        axios.get('http://localhost:8080/api/user/')
            .then(response => {
                setUserData(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getUserById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/user/${id}`);
            setUserId(response.data.id);
            setUserCin(response.data.cin);
            setUserEmail(response.data.email);
            setUserFirstName(response.data.firstName);
            setUserLastName(response.data.lastName);
            setUserUserName(response.data.username);
            setUserPassword(response.data.password);

        } catch (error) {
            console.error(error);
        }
    };
    const addUser = async () => {
        try {
        const response = await axios.post('http://localhost:8080/api/user/', { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword });
        setUserData([...userData, response.data]);
        setUserCin('');
        setUserEmail('');
        setUserFirstName('');
        setUserLastName('');
        setUserUserName('');
        setUserPassword('');
        } catch (error) {
        console.error(error);
        }
       }; 
       const updateUser = async () => {
        try {
        const response = await axios.put(`/api/user/${userId}`, { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword });
        const updatedUsers = userData.map((user) => {
        if (user.id === response.data.id) {
        return response.data;
        }
        return user;
        });
        setUserData(updatedUsers);
        setUserCin('');
        setUserEmail('');
        setUserFirstName('');
        setUserLastName('');
        setUserUserName('');
        setUserPassword('');
        } catch (error) {
        console.error(error);
        }
       };
       const deleteUser = async (id) => {
        try {
        await axios.delete(`/api/user/${id}`);
        const updatedUsers = userData.filter((user) => user.id !== id);
        setUserData(updatedUsers);
        } catch (error) {
        console.error(error);
        }
       };
    useEffect(() => {
        getUsers();
    }, []);

    return (
        <Row>
            
            <div className="mt-3">
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>CIN :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userCin}
                            onChange={(e) => setUserCin(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Email :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userEmail}
                            onChange={(e) => setUserEmail(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>First Name :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userFirstName}
                            onChange={(e) => setUserFirstName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Last Name :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userLastName}
                            onChange={(e) => setUserLastName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>User Name :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userUserName}
                            onChange={(e) => setUserUserName(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Password :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userPassword}
                            onChange={(e) => setUserPassword(e.target.value)}
                        />
                    </div>
                </div>
                {userId ? (
                    <div className="row justify-content-end text-end">
                        <button className="btn btn-success col-2" onClick={updateUser}>
                            Update User
                        </button>
                    </div>

                ) : (
                    <div className="row justify-content-end text-end">
                        <button className="btn btn-primary col-2" onClick={addUser}>
                        Add User
                    </button>
                    </div>
                    
                )}
            </div>
            
            <h1>Users</h1>
            <table className="table mt-3">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">CIN</th>
                        <th scope="col">Email</th>
                        <th scope="col">First Name</th>
                        <th scope="col">Last Name</th>
                        <th scope="col">UserName</th>
                        <th scope="col">Password</th>
                        <th scope="col">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {userData.map((user, index) => (
                        <tr key={user.id}>
                            <th scope="row">{index + 1}</th>
                            <td>{user.cin}</td>
                            <td>{user.email}</td>
                            <td>{user.firstName}</td>
                            <td>{user.lastName}</td>
                            <td>{user.username}</td>
                            <td>{user.password}</td>
                            <td>
                                <button className="btn btn-primary btn-sm mx-1" onClick={() =>
                                    getUserById(user.id)}>
                                    Edit
                                </button>
                                <button className="btn btn-danger btn-sm" onClick={() =>
                                    deleteUser(user.id)}>
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            
        </Row >

    );

}
export default Users;