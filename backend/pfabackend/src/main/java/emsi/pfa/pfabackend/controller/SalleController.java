package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Salle;
import emsi.pfa.pfabackend.service.impl.SalleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/salle")
public class SalleController {

    @Autowired
    private SalleService salleService;

    @GetMapping("/")
    public List<Salle> findAll() {
        return salleService.findAll();
    }

    @PostMapping("/save")
    public Salle save(@RequestBody Salle salle) {
        return salleService.save(salle);
    }
}
