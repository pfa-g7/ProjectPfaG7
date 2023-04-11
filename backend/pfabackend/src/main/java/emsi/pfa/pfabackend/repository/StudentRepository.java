package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Student;
import org.springframework.data.jpa.repository.JpaRepository;

public interface StudentRepository extends JpaRepository<Student, Long> {
}
