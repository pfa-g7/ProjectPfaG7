package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.service.impl.StudentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/Student")
public class StudentController {
    @Autowired
    private StudentService studentService;

    @GetMapping("/")
    public List<Student> findAll(){
        return studentService.findAll();
    }
    @PostMapping("/save")
    public void save(@PathVariable Student student){
         studentService.save(student);
    }
}