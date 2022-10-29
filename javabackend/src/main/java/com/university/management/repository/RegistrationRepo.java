package com.university.management.repository;

import com.university.management.model.Registration;
import com.university.management.model.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface RegistrationRepo extends CrudRepository<Registration, Integer> {
    Student findByName(String name);
    List<Registration> findAll();
}
