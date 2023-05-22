package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.Exam;
import emsi.pfa.pfabackend.repository.ExamRepository;
import emsi.pfa.pfabackend.service.impl.ExamService;
import org.springframework.beans.factory.annotation.Autowired;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.*;


import java.time.LocalDate;
import java.util.Date;
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
    @GetMapping("/findByDate")
    public List<Exam> findByDate(@RequestParam("date") @DateTimeFormat(iso = DateTimeFormat.ISO.DATE) LocalDate date) {
        // Convert the LocalDate to Date
        Date searchDate = java.sql.Date.valueOf(date);

        // Call the custom repository method
        return examService.findByDate(searchDate);
    }
}
