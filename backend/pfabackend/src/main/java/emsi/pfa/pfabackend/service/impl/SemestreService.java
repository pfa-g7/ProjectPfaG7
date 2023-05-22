package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Semestre;
import emsi.pfa.pfabackend.repository.SemestreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SemestreService {

    @Autowired
    private SemestreRepository semestreRepository;

    public List<Semestre> findAll() {
        return semestreRepository.findAll();
    }

    public Semestre save(Semestre s) {
        s.setLibelle(s.getLibelle().replaceAll("\\s", ""));
        Optional<Semestre> loadedSemestre = semestreRepository.findByLibelle(s.getLibelle());
        if (loadedSemestre.isPresent()) {
            return loadedSemestre.get();
        }
        return semestreRepository.save(s);
    }
}
