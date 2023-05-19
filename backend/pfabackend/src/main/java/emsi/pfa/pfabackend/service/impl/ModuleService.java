package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Filiere;
import emsi.pfa.pfabackend.entity.Module;
import emsi.pfa.pfabackend.entity.Semestre;
import emsi.pfa.pfabackend.repository.FiliereRepository;
import emsi.pfa.pfabackend.repository.ModuleRepository;
import emsi.pfa.pfabackend.repository.SemestreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;
    @Autowired
    private FiliereRepository filiereRepository;
    @Autowired
    private SemestreRepository semestreRepository;

    public List<Module> findAll() {
        return moduleRepository.findAll();
    }

    public Module save(Module m) {
        Semestre semestre = semestreRepository.findByLibelle(m.getSemestre().getLibelle()).orElseThrow();
        Filiere filiere = filiereRepository.findByLibelle(m.getFiliere().getLibelle()).orElseThrow();
        m.setFiliere(filiere);
        m.setSemestre(semestre);
        Optional<Module> loaded = moduleRepository.findByLibelle(m.getLibelle());
        if (loaded.isPresent()) return loaded.get();
        return moduleRepository.save(m);
    }
}
