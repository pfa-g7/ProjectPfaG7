package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Teacher;
import org.springframework.data.jpa.repository.JpaRepository;

public interface TeacherRepository extends JpaRepository<Teacher, Long> {
}
