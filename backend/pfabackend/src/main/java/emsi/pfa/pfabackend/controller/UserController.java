package emsi.pfa.pfabackend.controller;


import emsi.pfa.pfabackend.entity.Teacher;
import emsi.pfa.pfabackend.entity.User;
import emsi.pfa.pfabackend.service.impl.UserImplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserImplService userService;
    @PostMapping("/signIn")
    public ResponseEntity<User> signIn(User user) {
       return userService.signIn(user);
    }
    @PostMapping("/save")
    public void save(@RequestBody User user){
        userService.save(user);
    }
    @GetMapping("/")
    public List<User> findAll(){
        return userService.findAll();
    }
}
