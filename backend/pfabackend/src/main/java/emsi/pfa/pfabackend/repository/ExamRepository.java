package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;


public interface ExamRepository extends JpaRepository<Exam, Long> {
    List<Exam> findByDate(Date date);
}
