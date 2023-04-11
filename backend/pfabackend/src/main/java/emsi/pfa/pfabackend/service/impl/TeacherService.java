package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.Teacher;
import emsi.pfa.pfabackend.repository.TeacherRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class TeacherService {
    @Autowired
    private TeacherRepository teacherRepository;

    public List<Teacher> findAll() {
        return teacherRepository.findAll();
    }

    public Teacher save(Teacher entity) {
        return teacherRepository.save(entity);
    }

    public Optional<Teacher> findById(Long aLong) {
        return teacherRepository.findById(aLong);
    }

    public void deleteById(Long aLong) {
        teacherRepository.deleteById(aLong);
    }
}
