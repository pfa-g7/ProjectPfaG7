package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Teacher;
import emsi.pfa.pfabackend.service.impl.TeacherService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/teacher")
public class TeacherController {

        @Autowired
        private TeacherService teacherService;

        @GetMapping("/")
        public List<Teacher> findAll(){
            return teacherService.findAll();
        }

        @PostMapping("/save")
        public void save(@RequestBody Teacher teacher){
            teacherService.save(teacher);
        }


}
