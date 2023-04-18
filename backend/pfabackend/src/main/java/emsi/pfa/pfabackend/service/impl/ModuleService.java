package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Module;
import emsi.pfa.pfabackend.repository.ModuleRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ModuleService {

    @Autowired
    private ModuleRepository moduleRepository;

    public List<Module> findAll() {
        return moduleRepository.findAll();
    }

    public Module save(Module m) {
        return moduleRepository.save(m);
    }
}
