package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Surveillant;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SurveillantRepository extends JpaRepository<Surveillant, Integer> {
}
