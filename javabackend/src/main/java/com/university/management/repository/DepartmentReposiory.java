package com.university.management.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.university.management.model.Department;

public interface DepartmentReposiory extends JpaRepository<Department, Long> {

	 List<Department> findByDepartmentName(String departmentName);
}
