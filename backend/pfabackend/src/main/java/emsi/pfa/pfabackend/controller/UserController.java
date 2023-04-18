package emsi.pfa.pfabackend.controller;

import emsi.pfa.pfabackend.entity.User;
import emsi.pfa.pfabackend.service.impl.UserImplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("/api/user")
public class UserController {
@Autowired
    private UserImplService userService;
    @PostMapping("/signIn")
    public ResponseEntity<User> signIn(User user) {
       return userService.signIn(user);
    }
}
