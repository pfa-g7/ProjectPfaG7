import {useEffect, useState} from 'react';
import QRCode from 'qrcode.react';
import axios from "axios";
import {Table} from "reactstrap";


function StudentQRCode() {
    const [studentData, setStudentData] = useState([]);

    useEffect(() => {
        const fetchstudent = async () => {
            const result = await axios(`/api/auth/users`);
            console.log(studentData);
            setStudentData(result.data);
        };
        fetchstudent();
    }, []);



    const isDataNull = () => {
        return (!studentData || studentData?.length < 1);
    };

    return (
        <div>
            {
                (
                    <div>

                        <Table bordered>
                            <thead>
                            <tr>
                                <th>numAppoge</th>
                                <th>CNE</th>
                                <th>Actions</th>
                            </tr>
                            </thead>
                            <tbody>
                            {studentData.map((student) => (
                                <tr key={student.id}>
                                    <td>{student.firstName}</td>
                                    <td>{student.lastName}</td>
                                    <td><QRCode value={`Appoge: ${student?.firstName}\n CNE: ${student?.lastName}`}/></td>
                                </tr>
                            ))}
                            </tbody>
                        </Table>
                    </div>
                )
            }
        </div>

    );
}

export default StudentQRCode;