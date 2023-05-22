import { Card, CardBody, CardTitle, CardSubtitle, Table, Pagination, PaginationItem, PaginationLink, Input } from "reactstrap";
import React, { useState, useEffect } from "react";
import axios from 'axios';




const Excel = () => {
  const [exams, setExams] = useState([]);


  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage] = useState(70);
  const [searchTerm, setSearchTerm] = useState('');

  const getExams = async () => {
    axios.get('/api/exam/')
      .then(response => {
        setExams(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  };
  
  useEffect(() => {
    getExams();
  }, []);

  // Change the current page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  // Filter the data based on the search term
  const filteredData = exams.filter((item) => {
    // Modify the condition based on your search requirements
    const searchMatch = item.student.firstName.toLowerCase().includes(searchTerm.toLowerCase());
    //const optionMatch = selectedOption ? item.module.filiere.libelle === selectedOption : true;
    return searchMatch ;

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
    <div>
      <Card>
        <CardBody>
          <CardTitle tag="h5">Liste des Examens</CardTitle>
          <CardSubtitle className="mb-2 text-muted" tag="h6">
            /Etudiant
          </CardSubtitle>
          <Input
            type="text"
            value={searchTerm}
            placeholder="Search by First Name"
            onChange={handleSearch}
          />
          <Table className="no-wrap mt-3 align-middle" responsive borderless>
            <thead>
              <tr>
                <th>#</th>
                <th>Etudiant</th>
                <th>Module</th>
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
                  <td>{exam.date}</td>
                  <td>{exam.heure}</td>
                  <td>{exam.salle}</td>
                  <td>{exam.numTable}</td>
                  <td>{exam.module.filiere.libelle}</td>
                  <td>{exam.module.semestre.libelle}</td>
                </tr>
              ))}
            </tbody>
          </Table>
          {/* Render pagination */}
          <Pagination className="mt-2 text-center justify-content-center">
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

    </div>
  );
};

export default Excel;