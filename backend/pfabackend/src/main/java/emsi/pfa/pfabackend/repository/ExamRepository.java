package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Exam;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.Date;
import java.util.List;


public interface ExamRepository extends JpaRepository<Exam, Long> {
    List<Exam> findByDate(Date date);
    Exam findById(int id);

    @Query("SELECT e from Exam e where e.student.id = :id")
    List<Exam> findByStudentId(@Param("id") int id);
}
