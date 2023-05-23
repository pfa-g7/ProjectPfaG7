import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Card, CardBody, CardTitle, CardSubtitle, Table, Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";
import { faEdit, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Professeurs() {
    const [profs, setProfs] = useState([]);
    const [userId, setUserId] = useState('');
    const [userCin, setUserCin] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userUserName, setUserUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userNppr, setUserNppr] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');

    const getProfs = async () => {
        axios.get('http://localhost:8080/api/teacher/')
            .then(response => {
                setProfs(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };

    const getProfById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/teacher/${id}`);
            setUserId(response.data.id);
            setUserCin(response.data.cin);
            setUserEmail(response.data.email);
            setUserFirstName(response.data.firstName);
            setUserLastName(response.data.lastName);
            setUserUserName(response.data.username);
            setUserPassword(response.data.password);
            setUserNppr(response.data.nppr);

        } catch (error) {
            console.error(error);
        }
    };
    const addProf = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/teacher/save', { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword, nppr: userNppr, role: 'USER' });
            setProfs([...profs, response.data]);
            setUserCin('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setUserUserName('');
            setUserPassword('');
            setUserNppr('');
        } catch (error) {
            console.error(error);
        }
        window.location.reload();
    };
    const updateProf = async () => {
        try {
            const response = await axios.put(`/api/teacher/${userId}`, { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword, nppr: userNppr });
            const updatedUsers = profs.map((prof) => {
                if (prof.id === response.data.id) {
                    return response.data;
                }
                return prof;
            });
            setProfs(updatedUsers);
            setUserCin('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setUserUserName('');
            setUserPassword('');
            setUserNppr('');
        } catch (error) {
            console.error(error);
        }
        window.location.reload();
    };
    const deleteProf = async (id) => {
        try {
            await axios.delete(`/api/teacher/${id}`);
            const updatedUsers = profs.filter((prof) => prof.id !== id);
            setProfs(updatedUsers);
        } catch (error) {
            console.error(error);
        }
    };
    useEffect(() => {
        getProfs();
    }, []);

    // Change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Filter the data based on the search term
    const filteredData = profs.filter((item) => {
        // Modify the condition based on your search requirements
        return item.firstName?.toLowerCase()?.includes(searchTerm?.toLowerCase());

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
                        <h6>Nppr :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userNppr}
                            onChange={(e) => setUserNppr(e.target.value)}
                        />
                    </div>
                </div>
                {userId ? (
                    <div className="row  text-start">
                        <button className="btn btn-success" onClick={updateProf}>
                            Update Teacher
                        </button>
                    </div>

                ) : (
                    <div className="row text-start">
                        <button className="btn btn-primary" onClick={addProf}>
                            Add Teacher
                        </button>
                    </div>

                )}
            </div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Teachers</CardTitle>
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
                                <th scope="col">Nppr</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((prof, index) => (
                                <tr key={prof.id}>
                                    <th scope="row">{prof.id}</th>
                                    <td>{prof.cin}</td>
                                    <td>{prof.email}</td>
                                    <td>{prof.firstName}</td>
                                    <td>{prof.lastName}</td>
                                    <td>{prof.username}</td>
                                    <td>{prof.password}</td>
                                    <td>{prof.nppr}</td>
                                    <td>
                                    <FontAwesomeIcon
                                            icon={faEdit}
                                            className="btn btn-primary btn-sm mx-1 my-1"
                                            onClick={() => getProfById(prof.id)}
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="btn btn-danger btn-sm my-1 mx-"
                                            onClick={() => deleteProf(prof.id)}
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* Render pagination */}
                    <Pagination className="mt-2 text-center justify-content-center">
                        {Array(Math.ceil(profs.length / itemsPerPage))
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
export default Professeurs;