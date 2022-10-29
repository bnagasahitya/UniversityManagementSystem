package com.university.management.controllers;

import com.university.management.model.Registration;
import com.university.management.repository.RegistrationRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class RegistrationController {


    @Autowired
    private RegistrationRepo repo;

    @PostMapping(value = "/register")
    public void createRegister(@RequestBody Registration user) {


        repo.save(user);
    }

    @GetMapping(value = "/register/{id}")
    public Registration getCourse(@PathVariable( name = "id") Integer id) {


        return repo.findById(id).orElse(new Registration());
    }




    @DeleteMapping(value = "/register/{id}")
    public void deleteStudent(@PathVariable( name = "id") Integer id) {


        Optional<Registration> stu = repo.findById(id);

        if (stu.isPresent()) {
            repo.delete(stu.get());
        }
        else {
            throw new RuntimeException("Data Not Found");
        }
    }

}
