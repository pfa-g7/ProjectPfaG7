package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ExamRepository extends JpaRepository<Exam, Long> {
}
