package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Semestre;
import emsi.pfa.pfabackend.service.impl.SemestreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/semestre")
public class SemestreController {

    @Autowired
    private SemestreService semestreService;

    @GetMapping("/")
    public List<Semestre> findAll() {
        return semestreService.findAll();
    }

    @PostMapping("/save")
    public Semestre save(@RequestBody Semestre s) {
        return semestreService.save(s);
    }
}
