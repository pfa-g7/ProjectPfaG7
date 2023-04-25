package emsi.pfa.pfabackend.service.fasade;

import emsi.pfa.pfabackend.entity.User;
import org.springframework.http.ResponseEntity;

import java.util.List;


public interface UserService {
    ResponseEntity<User> signIn(User user);

    User save(User user);

    List<User> findAll();

    User findById(long id);

    String generatePassword();

    void deleteUserById(Long id);

    User updateUser(User user);
}
