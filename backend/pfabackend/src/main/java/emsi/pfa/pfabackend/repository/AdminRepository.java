package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AdminRepository extends JpaRepository<Admin, Long> {
}
