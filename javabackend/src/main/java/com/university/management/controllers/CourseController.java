package com.university.management.controllers;

import com.university.management.model.Course;
import com.university.management.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;

@RestController
public class CourseController {


    @Autowired
    private CourseRepo repo;

    @PostMapping(value = "/course")
    public void createCourse(@RequestBody Course user) {


        repo.save(user);
    }

    @GetMapping(value = "/course/{id}")
    public Course getCourse(@PathVariable( name = "id") Integer id) {


        return repo.findById(id).orElse(new Course());
    }


    @PutMapping(value = "/Course")
    public Course updateCourse(@RequestBody Course user) {

        Optional<Course> course = repo.findById( user.getId());
        if (course.isPresent()) {
            Course cou = course.get();
            cou.setCredits(user.getCredits());
            cou.setDuration(user.getDuration());
            cou.setType(user.getType());
            cou.setPreRequest(user.getPreRequest());
            repo.save(cou);
            return cou;
        }
        else {
            throw new RuntimeException("Data Not Found");
        }
    }



    @DeleteMapping(value = "/course/{id}")
    public void deleteStudent(@PathVariable( name = "id") Integer id) {


        Optional<Course> stu = repo.findById(id);

        if (stu.isPresent()) {
            repo.delete(stu.get());
        }
        else {
            throw new RuntimeException("Data Not Found");
        }
    }

}
