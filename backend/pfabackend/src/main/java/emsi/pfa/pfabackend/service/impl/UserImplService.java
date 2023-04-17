package emsi.pfa.pfabackend.service.impl;

import emsi.pfa.pfabackend.entity.User;
import emsi.pfa.pfabackend.service.fasade.UserService;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserImplService implements UserService {

    @Override
    public ResponseEntity<User> signIn(User user) {
        return null;
    }

    @Override
    public User save(User user) {
        return null;
    }

    @Override
    public List<User> findAll() {
        return null;
    }

    @Override
    public String generatePassword() {
        return null;
    }

    @Override
    public void deleteUserById(Long id) {

    }

    @Override
    public User updateUser(User user) {
        return null;
    }
}
