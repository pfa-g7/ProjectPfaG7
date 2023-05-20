import { useState, useEffect } from 'react';
import { Card, CardHeader, CardBody, DateTimePicker, Input } from 'reactstrap';
import axios from 'axios';

function ProcesV() {
    const [exams, setExams] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);
  
    // Fetch exam data from the API
    useEffect(() => {
      fetchExamData();
    }, []);
  
    const fetchExamData = () => {
        axios.get('/api/exam/')
        .then(response => {
          setExams(response.data);
        })
        .catch(error => {
          console.log(error);
        });
    };
  
    // Filter exams by selected date
    const filteredExams = exams.filter(exam => {
      const examDate = new Date(exam.date);
      return selectedDate && examDate === selectedDate;
    });
  
    return (
      <div>
        <Input type='date' onChange={date => setSelectedDate(date)} />
        {filteredExams.length > 0 ? (
          <Card>
            <CardHeader>Exam Report</CardHeader>
            <CardBody>
              {filteredExams.map((exam, index) => (
                <div key={index}>
                  <h5>Exam ID: {exam.id}</h5>
                  <p>Heure: {exam.heure} </p>
                  {/* Add more exam report details as needed */}
                </div>
              ))}
            </CardBody>
          </Card>
        ) : (
          <p>No exams found for the selected date.</p>
        )}
      </div>
    );
  }
  
  export default ProcesV;
  