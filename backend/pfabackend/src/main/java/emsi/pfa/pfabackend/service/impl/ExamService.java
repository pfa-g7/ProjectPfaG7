package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Exam;
import emsi.pfa.pfabackend.entity.Module;
import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.repository.ExamRepository;
import emsi.pfa.pfabackend.repository.ModuleRepository;
import emsi.pfa.pfabackend.repository.StudentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamService {
    @Autowired
    private ExamRepository examRepository;
    @Autowired
    private ModuleRepository moduleRepository;
    @Autowired
    private StudentRepository studentRepository;


    public List<Exam> findAll() {
        return examRepository.findAll();
    }

    public Exam save(Exam exam) {
        Student student = studentRepository.findByCne(exam.getStudent().getCne()).orElseThrow();
        Module module = moduleRepository.findByLibelle(exam.getModule().getLibelle()).orElseThrow();
        exam.setStudent(student);
        exam.setModule(module);
        return examRepository.save(exam);
    }

    public void deleteById(Long aLong) {
        examRepository.deleteById(aLong);
    }
}
