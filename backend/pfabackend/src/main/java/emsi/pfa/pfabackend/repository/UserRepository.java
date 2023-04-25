package emsi.pfa.pfabackend.repository;

import emsi.pfa.pfabackend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    User findUserByUsername(String username);
    List<User> findAll();
    User findById(long id);
}
