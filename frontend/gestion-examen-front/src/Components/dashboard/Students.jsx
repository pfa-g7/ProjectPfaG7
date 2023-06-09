import React, { useEffect, useState } from "react";
import axios from 'axios';
import { faEdit, faTrash, faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    Card,
    CardBody,
    CardSubtitle,
    CardTitle,
    Input,
    Pagination,
    PaginationItem,
    PaginationLink,
    Row,
    Table
} from "reactstrap";
import QRCode, { QRCodeCanvas, QRCodeSVG } from "qrcode.react";
import emsi from "../image/emsi.png";


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
    const [itemsPerPage] = useState(20);
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
            const response = await axios.post('http://localhost:8080/api/student/save', {
                cin: userCin,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                username: userUserName,
                password: userPassword,
                numAppoge: userNumAppoge,
                cne: userCne
            });
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
        window.location.reload();
    };
    const updateStudent = async () => {
        try {
            const response = await axios.put(`http://localhost:8080/api/student/${userId}`, {
                cin: userCin,
                email: userEmail,
                firstName: userFirstName,
                lastName: userLastName,
                username: userUserName,
                password: userPassword,
                numAppoge: userNumAppoge,
                cne: userCne
            });
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
        window.location.reload();
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

    const printDocument = (studente) => {
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
  
  h2 {
     font-size : 16px;
     float: right;
  }

  
  img{
    height: 80px;
    float: left;
  }

  #a{
    margin-top: 50px;
  }

 #b{
    margin-top: 50px;
  }

  .info{
    float: left;
    margin-top: 50px;
  }



  
</style>
<h1>Convocation des examens</h1>
          <h2>Année Universitaire : 2022/2023</h2>
          <img src="${emsi}" alt="emsi" />
        </head>
        <body>
          <div class="info">
           <div>
              <span>CNE: ${studente.cne}</span>
            </div>
            <div>
              <span>Numero Appoge: ${studente.numAppoge}</span>
            </div>
            <div>
              <span>Nom: ${studente.firstName}</span>
            </div>
            <div>
              <span>Prenom: ${studente.lastName}</span>
            </div>
          <div>
            </div>
          <p id="a">Vous êtes convoqué(e) aux examens finaux session juin à École Marocaine des Sciences de l'Ingénieur selon le planning que vous avez recevez et selon votre  filière et vous devrez être présent(e)  muni(e)  de cette convocation,  de votre pièce d'identité à jour et 30 minutes avant les épreuves devant votre salle.  </p>

          <p id="b"> </p>

          <p><b>Nous vous rappelons que les consignes de l'examen :</b> </p>
          <p>- Interdiction formelle d'introduire tout document à l'interieur de la salle d'examen sauf en cas d'examen avec documents autorisés.</p>
          <br>
          <p>- Interdiction formelle d'utiliser les portables pendant l'examen.</p>
          <br>
             <p>- Toute fraude ou tentative de fraude sera sanctionnée conformément à la réglemetaion en vigueur.</p>
          </div>
    
         ${<QRCode value={`Appoge: ${studente?.numAppoge}\\n CNE: ${studente?.cne}\\n
        firstName: ${studente?.firstName}\\n lastName: ${studente?.lastName}`}
            />}  
   
           <script>
            window.onload = function() {
              window.print();
             
            };
          </script> 
        </body>
      </html>
    `
        )

        printWindow.document.close();
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
                    <div className="row  text-start">
                        <button className="btn btn-success" onClick={updateStudent}>
                            Update Student
                        </button>
                    </div>

                ) : (
                    <div className="row  text-start">
                        <button className="btn btn-primary" onClick={addStudent}>
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
                                    <td>{studente.numAppoge}</td>
                                    <td>{studente.cne}</td>
                                    <td><QRCode
                                        value={`Appoge: ${studente?.numAppoge}\n CNE: ${studente?.cne}\n firstName: ${studente?.firstName}\n lastName: ${studente?.lastName}`}
                                        size={50} />
                                    </td>
                                    <td className="text-center justify-content-center">
                                        <FontAwesomeIcon
                                            icon={faEdit}
                                            className="btn btn-primary btn-sm mx-1 my-1"
                                            onClick={() => getStudentById(student.id)}
                                        />
                                        <FontAwesomeIcon
                                            icon={faTrash}
                                            className="btn btn-danger btn-sm my-1 mx-"
                                            onClick={() => deleteStudent(student.id)}
                                        />
                                        <FontAwesomeIcon
                                            icon={faFilePdf}
                                            className="btn btn-success my-1 mx-1"
                                            onClick={() => printDocument(student)}
                                        />

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
        </Row>

    );
}

export default Students;