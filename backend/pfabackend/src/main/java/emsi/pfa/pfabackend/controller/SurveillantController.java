package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.entity.Surveillant;
import emsi.pfa.pfabackend.service.impl.StudentService;
import emsi.pfa.pfabackend.service.impl.SurveillantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
@RestController
@RequestMapping("/Surveillant")
public class SurveillantController {



        @Autowired
        private SurveillantService surveillantService;

        @GetMapping("/")
        public List<Surveillant> findAll(){
            return surveillantService.findAll();
        }
        @PostMapping("/save")
        public void save(@PathVariable Surveillant surveillant){
            surveillantService.save(surveillant);
        }


}
