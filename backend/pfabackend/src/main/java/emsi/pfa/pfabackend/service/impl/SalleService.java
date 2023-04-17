package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Salle;
import emsi.pfa.pfabackend.repository.SalleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class SalleService {

    @Autowired
    private SalleRepository salleRepository;

    public List<Salle> findAll() {
        return salleRepository.findAll();
    }

    public Salle save(Salle salle) {
        return salleRepository.save(salle);
    }
}
