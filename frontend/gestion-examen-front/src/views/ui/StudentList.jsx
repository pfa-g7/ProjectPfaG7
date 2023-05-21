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

    const printDocument = (student) => {
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
      <html>
        <head>
          <title>Student Document</title>
          <style>
  body {
    font-family: Arial, sans-serif;
    margin: 20px;
  }

  h1 {
    font-size: 24px;
    text-align: center;
    margin-bottom: 20px;
  }

  .student-info {
    margin-bottom: 10px;
  }

  .student-info span {
    display: block;
    margin-bottom: 5px;
  }

  .qr-code {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }
</style>

        </head>
        <body>
          <h1>Convocation</h1>
          <div>
            <div>
              <span>Id: ${student.id}</span>
            </div>
            <div>
              <span>CNE: ${student.cne}</span>
            </div>
            <div>
              <span>Numero Appoge: ${student.numAppoge}</span>
            </div>
            <div>
              <span>Nom: ${student.firstName}</span>
            </div>
            <div>
              <span>Prenom: ${student.lastName}</span>
            </div>
            <div>
          
              <QRCode 
               value={\`Appoge: ${student?.numAppoge}\\n CNE: ${student?.cne}\\n First Name: ${student?.firstName}\\n Last Name: ${student?.lastName}\`}
               size={50}
               />                           
            </div>
          </div>
          <script>
            window.onload = function() {
              window.print();
            };
          </script>
        </body>
      </html>
    `);
        printWindow.document.close();
    };

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
                                        <th>print</th>
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
                                                value={`Appoge: ${student?.numAppoge}\n CNE: ${student?.cne}\n First Name: ${student?.firstName}\n Last Name: ${student?.lastName}`}
                                                size={50}/>
                                            </td>
                                            <td>
                                                <button onClick={() => printDocument(student)}>Print</button>
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