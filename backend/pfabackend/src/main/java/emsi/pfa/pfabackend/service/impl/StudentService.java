package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student save(Student student) {
        return studentRepository.save(student);
    }

    public Optional<Student> findById(Long aLong) {
        return studentRepository.findById(aLong);
    }

    @Transactional
    public void deleteById(Long aLong) {
        studentRepository.deleteById(aLong);
    }
}
