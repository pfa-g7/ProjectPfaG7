package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Filiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface FiliereRepository extends JpaRepository<Filiere,Long> {
}
