package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Exam;
import emsi.pfa.pfabackend.service.impl.ExamService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequestMapping("/api/exam")
@RestController
public class ExamController {

    @Autowired
    private ExamService examService;

    @GetMapping("/")
    public List<Exam> findAll() {
        return examService.findAll();
    }

    @PostMapping("/save")
    public Exam save(@RequestBody Exam exam) {
        return examService.save(exam);
    }

    @DeleteMapping("/{id}")
    public void deleteById(@PathVariable Long id) {
        examService.deleteById(id);
    }
}
