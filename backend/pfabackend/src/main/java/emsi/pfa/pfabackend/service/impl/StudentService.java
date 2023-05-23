package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Role;
import emsi.pfa.pfabackend.entity.Student;
import emsi.pfa.pfabackend.repository.StudentRepository;
import jakarta.transaction.Transactional;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class StudentService {
    @Autowired
    private StudentRepository studentRepository;
    @Autowired
    private PasswordEncoder passwordEncoder;
    @Autowired
    private UserImplService userImplService;

    public List<Student> findAll() {
        return studentRepository.findAll();
    }

    public Student save(Student student) {
        Optional<Student> loadedStudent = studentRepository.findByCne(student.getCne());
        if (loadedStudent.isPresent()) {
            return loadedStudent.get();
        }
        String username = student.getLastName().replaceAll("\\s", "") + student.getFirstName().replaceAll("\\s", "");
//        String password = userImplService.generatePassword();
        String password = "12345";
        student.setUsername(username.toLowerCase());
        student.setPassword(passwordEncoder.encode(password));
        student.setRole(Role.STUDENT);
        return studentRepository.save(student);
    }

    public Optional<Student> findById(Integer id) {
        return studentRepository.findById(id);
    }

    @Transactional
    public void deleteById(Integer id) {
        studentRepository.deleteById(id);
    }
    public Student getStudentByAppoge(int id) {
        // TODO Auto-generated method stub
        return studentRepository.findStudentByNumAppoge(id);
    }
}
