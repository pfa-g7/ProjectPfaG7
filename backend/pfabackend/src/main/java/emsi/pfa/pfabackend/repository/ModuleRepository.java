package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Module;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ModuleRepository extends JpaRepository<Module, Long> {
    Optional<Module> findByLibelle(String lib);
}
