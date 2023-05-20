package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.service.impl.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin
@RestController
@RequestMapping("/api/student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/")
    public List<Student> findAll() {
        return studentService.findAll();
    }
    @GetMapping("/{id}")
    public Optional<Student> findStudentById(@PathVariable Integer id){
        return studentService.findById(id);
    }

    @PutMapping("/{id}")
    public Student updateStudent(@PathVariable Integer id, @RequestBody Student upStudent){
        Optional<Student> existingStudent = studentService.findById(id);
        if (existingStudent.isPresent()) {
            Student student = existingStudent.get();
            // Update the student properties
            student.setCin(upStudent.getCin());
            student.setEmail(upStudent.getEmail());
            student.setFirstName(upStudent.getFirstName());
            student.setLastName(upStudent.getLastName());
            student.setUsername(upStudent.getUsername());
            student.setPassword(upStudent.getPassword());
            student.setNumAppoge(upStudent.getNumAppoge());
            student.setCne(upStudent.getCne());
            // Update other properties as needed

            // Save the updated user
            studentService.save(student);

            return studentService.save(student);
        } else {
            return null;
        }

    }
    @PostMapping("/save")
    public void save(@RequestBody Student student) {
        studentService.save(student);
    }
}
