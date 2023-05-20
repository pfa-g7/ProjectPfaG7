import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Row, Card, CardBody, CardTitle, CardSubtitle, Table, Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";
import QRCode from "qrcode.react";


function Students() {

    const [student, setStudent] = useState([]);
    const [userId, setUserId] = useState('');
    const [userCin, setUserCin] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [userFirstName, setUserFirstName] = useState('');
    const [userLastName, setUserLastName] = useState('');
    const [userUserName, setUserUserName] = useState('');
    const [userPassword, setUserPassword] = useState('');
    const [userNumAppoge, setUserNumAppoge] = useState('');
    const [userCne, setUserCne] = useState('');

    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(5);
    const [searchTerm, setSearchTerm] = useState('');



    const getStudent = async () => {
        axios.get('http://localhost:8080/api/student/')
            .then(response => {
                setStudent(response.data);
            })
            .catch(error => {
                console.log(error);
            });
    };


    const getStudentById = async (id) => {
        try {
            const response = await axios.get(`http://localhost:8080/api/student/${id}`);
            setUserId(response.data.id);
            setUserCin(response.data.cin);
            setUserEmail(response.data.email);
            setUserFirstName(response.data.firstName);
            setUserLastName(response.data.lastName);
            setUserUserName(response.data.username);
            setUserPassword(response.data.password);
            setUserNumAppoge(response.data.numAppoge);
            setUserCne(response.data.cne);

        } catch (error) {
            console.error(error);
        }
    };
    const addStudent = async () => {
        try {
            const response = await axios.post('http://localhost:8080/api/student/save', { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword, numAppoge: userNumAppoge, cne: userCne });
            setStudent([...student, response.data]);
            setUserCin('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setUserUserName('');
            setUserPassword('');
            setUserNumAppoge('');
            setUserCne('');
        } catch (error) {
            console.error(error);
        }
    };
    const updateStudent = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/student/${userId}`, { cin: userCin, email: userEmail, firstName: userFirstName, lastName: userLastName, username: userUserName, password: userPassword, numAppoge: userNumAppoge, cne: userCne });
            const updatedUsers = student.map((studente) => {
                if (studente.id === response.data.id) {
                    return response.data;
                }
                return studente;
            });
            setStudent(updatedUsers);
            setUserCin('');
            setUserEmail('');
            setUserFirstName('');
            setUserLastName('');
            setUserUserName('');
            setUserPassword('');
            setUserNumAppoge('');
            setUserCne('');
        } catch (error) {
            console.error(error);
        }
    };
    const deleteStudent = async (id) => {
        try {
            await axios.delete(`http://localhost:8080/api/student/${id}`);
            const updatedUsers = student.filter((studente) => studente.id !== id);
            setStudent(updatedUsers);
        } catch (error) {
            console.error(error);
        }
    };


    useEffect(() => {
        getStudent();
    }, []);


    // Change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);
    // Filter the data based on the search term
    const filteredData = student.filter((item) => {
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
                        <h6>Num_Appoge :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userNumAppoge}
                            onChange={(e) => setUserNumAppoge(e.target.value)}
                        />
                    </div>
                </div>
                <div className="row my-2 justify-content-center">
                    <div className="col-md-4 text-center">
                        <h6>Cne :</h6>
                    </div>
                    <div className="col-md-8">
                        <input
                            type="text"
                            className="form-control  d-inline-block"
                            value={userCne}
                            onChange={(e) => setUserCne(e.target.value)}
                        />
                    </div>
                </div>
                {userId ? (
                    <div className="row justify-content-end text-end">
                        <button className="btn btn-success col-2" onClick={updateStudent}>
                            Update Student
                        </button>
                    </div>

                ) : (
                    <div className="row justify-content-end text-end">
                        <button className="btn btn-primary col-2" onClick={addStudent}>
                            Add Student
                        </button>
                    </div>

                )}
            </div>
            <Card>
                <CardBody>
                    <CardTitle tag="h5">Students</CardTitle>
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
                                <th scope="col">Num_Appoge</th>
                                <th scope="col">Cne</th>
                                <th scope="col">Code Qr</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {currentItems.map((studente, index) => (
                                <tr key={studente.id}>
                                    <th scope="row">{studente.id}</th>
                                    <td>{studente.cin}</td>
                                    <td>{studente.email}</td>
                                    <td>{studente.firstName}</td>
                                    <td>{studente.lastName}</td>
                                    <td>{studente.username}</td>
                                    <td>{studente.password}</td>
                                    <td>{studente.numAppoge}</td>
                                    <td>{studente.cne}</td>
                                    <td><QRCode
                                                value={`Appoge: ${studente?.numAppoge}\n CNE: ${studente?.cne}\n CNE: ${studente?.firstName}\n CNE: ${studente?.lastName}`}/>
                                    </td>
                                    <td>
                                        <button className="btn btn-primary btn-sm mx-1" onClick={() =>
                                            getStudentById(studente.id)}>
                                            Edit
                                        </button>
                                        <button className="btn btn-danger btn-sm" onClick={() =>
                                            deleteStudent(studente.id)}>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                    {/* Render pagination */}
                    <Pagination className="mt-2 text-center justify-content-center">
                        {Array(Math.ceil(student.length / itemsPerPage))
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

export default Students;