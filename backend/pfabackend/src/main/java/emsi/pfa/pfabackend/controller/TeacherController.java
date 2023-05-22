package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.entity.Teacher;
import emsi.pfa.pfabackend.service.impl.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/teacher")
public class TeacherController {

        @Autowired
        private TeacherService teacherService;

        @GetMapping("/")
        public List<Teacher> findAll(){
            return teacherService.findAll();
        }
        @GetMapping("/{id}")
        public Optional<Teacher> findTeacherById(@PathVariable Integer id){
            return teacherService.findById(id);
        }

    @PutMapping("/{id}")
    public Teacher updateStudent(@PathVariable Integer id, @RequestBody Teacher updatedTeacher){
        Optional<Teacher> existingTeacher = teacherService.findById(id);
        if (existingTeacher.isPresent()) {
            Teacher teacher = existingTeacher.get();
            // Update the student properties
            teacher.setCin(updatedTeacher.getCin());
            teacher.setEmail(updatedTeacher.getEmail());
            teacher.setFirstName(updatedTeacher.getFirstName());
            teacher.setLastName(updatedTeacher.getLastName());
            teacher.setUsername(updatedTeacher.getUsername());
            teacher.setPassword(updatedTeacher.getPassword());
            teacher.setNppr(updatedTeacher.getNppr());
            // Update other properties as needed

            // Save the updated user
            teacherService.save(teacher);

            return teacherService.save(teacher);
        } else {
            return null;
        }

    }
        @PostMapping("/save")
        public void save(@RequestBody Teacher teacher){
            teacherService.save(teacher);
        }
    @DeleteMapping("/{id}")
    public void deleteTeacher(@PathVariable Integer id){
        teacherService.deleteById(id);
    }


}
