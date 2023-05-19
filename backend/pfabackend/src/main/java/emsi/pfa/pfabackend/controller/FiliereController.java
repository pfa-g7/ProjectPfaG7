package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Filiere;
import emsi.pfa.pfabackend.service.impl.FiliereService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/filiere")
@RestController
public class FiliereController {

    @Autowired
    private FiliereService filiereService;

    @GetMapping("/")
    public List<Filiere> findAll() {
        return filiereService.findAll();
    }

    @PostMapping("/save")
    public Filiere save(@RequestBody Filiere filiere) {
        System.out.println("filiere.getLibelle() = " + filiere.getLibelle());
        return filiereService.save(filiere);
    }
}
