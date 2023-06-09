package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Surveillant;
import emsi.pfa.pfabackend.repository.SurveillantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class SurveillantService {
    @Autowired
    private SurveillantRepository surveillantRepository;

    public List<Surveillant> findAll() {
        return surveillantRepository.findAll();
    }

    public Surveillant save(Surveillant entity) {
        return surveillantRepository.save(entity);
    }

    public Optional<Surveillant> findById(Integer id) {
        return surveillantRepository.findById(id);
    }

    public void deleteById(Integer id) {
        surveillantRepository.deleteById(id);
    }
}
