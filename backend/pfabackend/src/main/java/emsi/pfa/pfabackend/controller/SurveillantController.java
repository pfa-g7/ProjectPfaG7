package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.entity.Surveillant;
import emsi.pfa.pfabackend.entity.Teacher;
import emsi.pfa.pfabackend.service.impl.StudentService;
import emsi.pfa.pfabackend.service.impl.SurveillantService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/api/surveillant")
public class SurveillantController {



        @Autowired
        private SurveillantService surveillantService;

        @GetMapping("/")
        public List<Surveillant> findAll(){
            return surveillantService.findAll();
        }
        @PostMapping("/save")
        public void save(@RequestBody Surveillant surveillant){
            surveillantService.save(surveillant);
        }
    @GetMapping("/{id}")
    public Optional<Surveillant> findSurveillantById(@PathVariable Integer id){
        return surveillantService.findById(id);
    }
    @PutMapping("/{id}")
    public Surveillant updateSurveillant(@PathVariable Integer id, @RequestBody Surveillant updatedSurveillant){
        Optional<Surveillant> existingSurveillant = surveillantService.findById(id);
        if (existingSurveillant.isPresent()) {
            Surveillant surveillant = existingSurveillant.get();
            // Update the student properties
            surveillant.setCin(updatedSurveillant.getCin());
            surveillant.setEmail(updatedSurveillant.getEmail());
            surveillant.setFirstName(updatedSurveillant.getFirstName());
            surveillant.setLastName(updatedSurveillant.getLastName());
            surveillant.setUsername(updatedSurveillant.getUsername());
            surveillant.setPassword(updatedSurveillant.getPassword());
            surveillant.setNumSurveillant(updatedSurveillant.getNumSurveillant());
            // Update other properties as needed

            // Save the updated user
            surveillantService.save(surveillant);

            return surveillantService.save(surveillant);
        } else {
            return null;
        }

    }


    @DeleteMapping("/{id}")
    public void deleteSurveillant(@PathVariable Integer id){
        surveillantService.deleteById(id);
    }

}
