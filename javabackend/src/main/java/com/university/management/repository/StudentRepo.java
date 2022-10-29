package com.university.management.repository;

import com.university.management.model.Course;
import com.university.management.model.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface StudentRepo  extends CrudRepository<Student, Integer> {
    Student findByName(String name);
    List<Student> findAll();
}
