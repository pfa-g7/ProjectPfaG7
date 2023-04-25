package emsi.pfa.pfabackend.controller;


import emsi.pfa.pfabackend.entity.Teacher;
import emsi.pfa.pfabackend.entity.User;
import emsi.pfa.pfabackend.service.impl.UserImplService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/api/user")
public class UserController {
    @Autowired
    private UserImplService userService;
    @PostMapping("/signIn")
    public ResponseEntity<User> signIn(User user) {
       return userService.signIn(user);
    }
    @PostMapping("/")
    public void save(@RequestBody User user){
        userService.save(user);
    }
    @GetMapping("/")
    public List<User> findAll(){
        return userService.findAll();
    }
    @GetMapping("/{id}")
    public User findUserById(@PathVariable long id){
        return userService.findById(id);
    }
    @PutMapping("/{id}")
    public User updateUser(@PathVariable Long id, @RequestBody User user){
        User existingUser = userService.findById(id);
        if (existingUser != null){
            existingUser.setCin(user.getCin());
            existingUser.setEmail(user.getEmail());
            existingUser.setFirstName(user.getFirstName());
            existingUser.setLastName(user.getLastName());
            existingUser.setUsername(user.getUsername());
            existingUser.setPassword(user.getPassword());
            return userService.save(existingUser);

        }
        return  null;
    }
    @DeleteMapping("/{id}")
    public void deleteUser(@PathVariable Long id){
        userService.deleteUserById(id);
    }
}
