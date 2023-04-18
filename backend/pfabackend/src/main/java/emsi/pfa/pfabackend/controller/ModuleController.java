package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Module;
import emsi.pfa.pfabackend.service.impl.ModuleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/module")
public class ModuleController {

    @Autowired
    private ModuleService moduleService;

    @GetMapping("/")
    public List<Module> findAll() {
        return moduleService.findAll();
    }

    @PostMapping("/save")
    public Module save(@RequestBody Module m) {
        return moduleService.save(m);
    }
}
