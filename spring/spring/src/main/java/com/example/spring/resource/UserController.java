package com.example.spring.resource;

import com.example.spring.Model.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.spring.repository.UserRepository;

import java.util.List;
import java.util.Optional;

@RestController
public class UserController {
    @Autowired
    private UserRepository repository;

    @PostMapping("/addUser")
    public String addUser(@RequestBody User user){
        repository.save(user);
        return user.getFirstName();
    }
    @GetMapping("/findAllUsers")
    public List<User> getUsers(){
        return repository.findAll();
    }
    @GetMapping("/findAllBooks/{id}")
    public Optional<User> getUser(@PathVariable String id){
        return repository.findById(id);
    }
    @DeleteMapping("/delete/{id}")
    public String deleteUser(@PathVariable String id){
        repository.deleteById(id);
        return "The user eleminate with the id is "+id;
    }
}
