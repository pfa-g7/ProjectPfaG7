import {useEffect, useState} from 'react';
import axios from "axios";
import {Card, CardBody, CardHeader, CardTitle, Table} from "reactstrap";
import QRCode from "qrcode.react";

const StudentList = ({}) => {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        const fetchstudent = async () => {
            const result = await axios(`/api/student/`);
            console.log(students);
            setStudents(result.data);
        };
        fetchstudent();
    }, []);

    return (
        <div>
            <div className="container bg-body mt-3 shadow-lg p-5">
                <div className="row">
                    <div className="col-md-12">
                        <Card>
                            <CardHeader className="d-flex bg-success justify-content-between flex-row">
                                <CardTitle className="text-white">Students</CardTitle>

                            </CardHeader>

                            <CardBody>
                                <Table bordered>
                                    <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>CNE</th>
                                        <th>numero Appoge</th>
                                        <th>Nom</th>
                                        <th>Prenom</th>
                                        <th>QR</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {students.map((student) => (
                                        <tr key={student.id}>
                                            <td>{student.id}</td>
                                            <td>{student.cne}</td>
                                            <td>{student.numAppoge}</td>
                                            <td>{student.firstName}</td>
                                            <td>{student.lastName}</td>
                                            <td><QRCode
                                                value={`Appoge: ${student?.numAppoge}\n CNE: ${student?.lastName}`}/>
                                            </td>

                                        </tr>
                                    ))}
                                    </tbody>
                                </Table>
                            </CardBody>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default StudentList;