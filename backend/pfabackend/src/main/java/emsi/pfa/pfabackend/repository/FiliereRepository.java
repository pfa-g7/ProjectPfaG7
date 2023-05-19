package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Filiere;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface FiliereRepository extends JpaRepository<Filiere, Long> {

    Optional<Filiere> findByLibelle(String lib);
}
