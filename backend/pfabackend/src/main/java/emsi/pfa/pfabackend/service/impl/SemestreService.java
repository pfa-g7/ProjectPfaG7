package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Semestre;
import emsi.pfa.pfabackend.repository.SemestreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SemestreService {

    @Autowired
    private SemestreRepository semestreRepository;

    public List<Semestre> findAll() {
        return semestreRepository.findAll();
    }

    public Semestre save(Semestre s) {
        return semestreRepository.save(s);
    }
}
