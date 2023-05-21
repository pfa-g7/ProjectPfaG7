import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Card, CardBody, CardTitle, CardSubtitle, Table, Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";

function Surveillant() {
    const [surv, setSurv] = useState([]);
    const [userId, setUserId] = useState('');
    const [userCin, setUserCin] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userUserName, setUserUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userNumSurveillant, setUserNumSurveillant] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    const getSurv = async () => {
        axios.get('http://localhost:8080/api/surveillant/')
            .then(response => {
                setSurv(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getSurvById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/surveillant/${id}`);
            setUserId(response.data.id);
            setUserCin(response.data.cin);
            setUserEmail(response.data.email);
            setUserFirstName(response.data.firstName);
            setUserLastName(response.data.lastName);
            setUserUserName(response.data.username);
            setUserPassword(response.data.password);
            setUserNumSurveillant(response.data.numSurveillant);

        } catch (error) {
            console.error(error);
        }
    };
    const addSurv = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/surveillant/save', { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword, numSurveillant: userNumSurveillant });
            setSurv([...surv, response.data]);
            setUserCin('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setUserUserName('');
            setUserPassword('');
            setUserNumSurveillant('');
        } catch (error) {
            console.error(error);
        }
    };
    const updateSurv = async () => {
        try {
            const response = await axios.put(`/api/surveillant/${userId}`, { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword, numSurveillant: userNumSurveillant });
            const updatedUsers = surv.map((surve) => {
                if (surve.id === response.data.id) {
                    return response.data;
                }
                return surve;
            });
            setSurv(updatedUsers);
            setUserCin('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setUserUserName('');
            setUserPassword('');
            setUserNumSurveillant('');
        } catch (error) {
            console.error(error);
        }
    };
    const deleteSurv = async (id) => {
        try {
            await axios.delete(`/api/surveillant/${id}`);
            const updatedUsers = surv.filter((surve) => surve.id !== id);
            setSurv(updatedUsers);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getSurv();
    }, []);

    // Change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Filter the data based on the search term
    const filteredData = surv.filter((item) => {
        // Modify the condition based on your search requirements
        return item.firstName.toLowerCase().includes(searchTerm.toLowerCase());

    });
    // Get the current items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);

    // Update the search term state
    const handleSearch = (e) => {
        setSearchTerm(e.target.value);
        setCurrentPage(1); // Reset the current page when the search term changes
    };

    return (
        <Row>

            <div className="my-3">
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
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Num_Surveillant :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userNumSurveillant}
                            onChange={(e) => setUserNumSurveillant(e.target.value)}
                        />
                    </div>
                </div>
                {userId ? (
                    <div className="row justify-content-end text-end">
                        <button className="btn btn-success col-2" onClick={updateSurv}>
                            Update Surveillant
                        </button>
                    </div>

                ) : (
                    <div className="row justify-content-end text-end">
                        <button className="btn btn-primary col-2" onClick={addSurv}>
                            Add Surveillant
                        </button>
                    </div>

                )}
            </div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Surveillants</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">
                        Liste
                    </CardSubtitle>
                    <Input
                        type="text"
                        value={searchTerm}
                        placeholder="Search by First Name"
                        onChange={handleSearch}
                    />
                    <Table className="table no-wrap align-middle mt-3" responsive>
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">CIN</th>
                                <th scope="col">Email</th>
                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">UserName</th>
                                <th scope="col">Password</th>
                                <th scope="col">Num_Surveillant</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((surve, index) => (
                                <tr key={surve.id}>
                                    <th scope="row">{surve.id}</th>
                                    <td>{surve.cin}</td>
                                    <td>{surve.email}</td>
                                    <td>{surve.firstName}</td>
                                    <td>{surve.lastName}</td>
                                    <td>{surve.username}</td>
                                    <td>{surve.password}</td>
                                    <td>{surve.numSurveillant}</td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mx-1" onClick={() =>
                                            getSurvById(surve.id)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() =>
                                            deleteSurv(surve.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    <Pagination className="mt-2 text-center justify-content-center">
                        {Array(Math.ceil(surv.length / itemsPerPage))
                            .fill()
                            .map((_, index) => (
                                <PaginationItem key={index + 1} active={index + 1 === currentPage}>
                                    <PaginationLink onClick={() => paginate(index + 1)}>{index + 1}</PaginationLink>
                                </PaginationItem>
                            ))}
                    </Pagination>
                </CardBody>
            </Card>
        </Row >

    );

}
export default Surveillant;