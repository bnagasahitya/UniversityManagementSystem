package com.university.management.controllers;


import com.university.management.model.Student;
import com.university.management.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
@RestController
public class StudentController {


  @Autowired
  private StudentRepo repo;
  @CrossOrigin(origins = "http://localhost:4200")
  @PostMapping(value = "/student")
  public void createStudent(@RequestBody Student user) {
    repo.save(user);
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @PutMapping(value = "/student")
  public Student updateStudent(@RequestBody Student user) {

    Optional<Student> student = repo.findById( user.getId());
    if (student.isPresent()) {
      Student stu = student.get();
      stu.setStudentPhone(user.getStudentPhone());
      stu.setStudentEmail(user.getStudentEmail());
      stu.setStudentAddress(user.getStudentAddress());
      stu.setName(user.getName());
      stu.setStudentDOB(user.getStudentDOB());
      repo.save(stu);
      return stu;
    }
    else {
      throw new RuntimeException("Data Not Found");
    }
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping(value = "/student/{id}")
  public Student getStudent(@PathVariable( name = "id") Integer id) {


    return repo.findById(id).orElse(new Student());
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @GetMapping(value = "/students")
  public List<Student> getStudentAll() {

    return repo.findAll();
  }

  @CrossOrigin(origins = "http://localhost:4200")
  @PutMapping(value = "/delete/student/{id}")
//    @DeleteMapping(value = "/student/{id}")
  public void deleteStudent(@PathVariable( name = "id") Integer id) {

    Optional<Student> stu = repo.findById(id);

        if (stu.isPresent()) {
            repo.deleteById(id);
        }
        else {
            throw new RuntimeException("Data Not Found");
        }
    }


}
