import { useState, useEffect, useRef } from 'react';
import { Table, Card, CardHeader, CardBody, Input, Form, FormGroup, Label, Button, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import axios from 'axios';

function ProcesV() {
    const [exams, setExams] = useState([]);
    const [selectedDate, setSelectedDate] = useState('');
    const handleDateChange = (event) => {
        setSelectedDate(event.target.value);
    };
    const handleFilter = () => {
        // Make the API request to filter exams by date
        axios.get(`api/exam/findByDate?date=${selectedDate}`)
            .then(response => {
                // Set the filtered exams in the state
                setExams(response.data);
            })
            .catch(error => {
                // Handle the error
                console.error(error);
            });
    };


    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage] = useState(50);


    // Get the current items to display on the current page
    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = exams.slice(indexOfFirstItem, indexOfLastItem);
    // Change the current page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const tableRef = useRef(null);


    const handlePrint = () => {
        if (tableRef.current) {
          const printWindow = window.open('', '_blank');
          printWindow.document.open();
          printWindow.document.write(`
            <html>
              <head>
                <title>Print Table</title>
                <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
              </head>
              <body>
                <div class="container">
                  ${tableRef.current.outerHTML}
                </div>
                <script>
                  window.onload = function() {
                    window.print();
                    window.onafterprint = function() {
                      window.close();
                    };
                  };
                </script>
              </body>
            </html>
          `);
          printWindow.document.close();
        }
      };

    return (
        <div>
            <Form className='mb-3'>
                <FormGroup>
                    <Label for="dateInput">Select Date:</Label>
                    <Input
                        type="date"
                        id="dateInput"
                        value={selectedDate}
                        onChange={handleDateChange}
                    />
                </FormGroup>
                <Button onClick={handleFilter}>Filter</Button>
            </Form>

            {exams.length > 0 ? (
                <Card>
                    <CardBody>
                        <h5>Exam Report for : {selectedDate}</h5><Table className="no-wrap mt-3 align-middle" innerRef={tableRef} responsive borderless>
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>Etudiant</th>
                                    <th>Module</th>
                                    <th>Presence</th>
                                    <th>date_Exam</th>
                                    <th>Heure</th>
                                    <th>Salle</th>
                                    <th>num_Table</th>
                                    <th>Filiere</th>
                                    <th>Semestre</th>
                                </tr>
                            </thead>
                            <tbody>
                                {currentItems.map((exam, index) => (
                                    <tr key={exam.id}>
                                        <th scope="row">{exam.id}</th>
                                        <td>{exam.student.firstName} {exam.student.lastName}</td>
                                        <td>{exam.module.libelle}</td>
                                        <td>{exam.presence == 0 ? <span className="p-2 bg-success rounded-circle d-inline-block ms-3"></span> : <span className="p-2 bg-danger rounded-circle d-inline-block ms-3"></span>}</td>
                                        <td>{selectedDate}</td>
                                        <td>{exam.heure}</td>
                                        <td>{exam.salle}</td>
                                        <td>{exam.numTable}</td>
                                        <td>{exam.module.filiere.libelle}</td>
                                        <td>{exam.module.semestre.libelle}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                        <Button className='my-1' onClick={handlePrint}>Print Table</Button>
                        {/* Render pagination */}
                        <Pagination>
                            {Array(Math.ceil(exams.length / itemsPerPage))
                                .fill()
                                .map((_, index) => (
                                    <PaginationItem key={index + 1} active={index + 1 === currentPage}>
                                        <PaginationLink onClick={() => paginate(index + 1)}>{index + 1}</PaginationLink>
                                    </PaginationItem>
                                ))}
                        </Pagination>
                    </CardBody>
                </Card>
            ) : (
                <p className="alert alert-danger" role="alert">No exams found for the selected date.</p>
              
          )}
        </div>
    );
}

export default ProcesV;
