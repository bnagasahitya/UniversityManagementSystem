package com.university.management.controllers;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.university.management.model.Course;
import com.university.management.model.Department;
import com.university.management.repository.CourseRepo;
import com.university.management.repository.DepartmentReposiory;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
public class DepartmentController {

		@Autowired
		DepartmentReposiory departmentRepository;

		@Autowired
		CourseRepo courseRepository;

		@CrossOrigin(origins = "http://localhost:4200")
		@GetMapping("/departments")
		public ResponseEntity<List<Department>> getAlldepartments() {
			try {
				List<Department> departments = new ArrayList<Department>();

				departmentRepository.findAll().forEach(departments::add);

				if (departments.isEmpty()) {
					return new ResponseEntity<>(HttpStatus.NO_CONTENT);
				}

				return new ResponseEntity<>(departments, HttpStatus.OK);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		@CrossOrigin(origins = "http://localhost:4200")
  @GetMapping("/getdepartment/{departmentId}")
		public ResponseEntity<Department> getdepartment(@PathVariable("departmentId") long id) {
			try {

				Optional<Department> departmentData = departmentRepository.findById(id);

				if (departmentData.isPresent()) {
					Department department = departmentData.get();
					return new ResponseEntity<>(department, HttpStatus.OK);
				} else {
					return new ResponseEntity<>(HttpStatus.NOT_FOUND);
				}

			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		@CrossOrigin(origins = "http://localhost:4200")
		@PostMapping("/updatedepartment/{id}/{courseId}")
		public ResponseEntity<Department> updatedepartment(@PathVariable("id") long id,@PathVariable("courseId") int courseId, @RequestBody Department department) {

			Optional<Department> departmentData = departmentRepository.findById(id);
//			Optional<Course> courseData = courseRepository.findById(department.getCourse().getCourseId());
			Optional<Course> courseData = courseRepository.findById(courseId);
			if (departmentData.isPresent() || courseData.isPresent()) {
				Department updatedDepartment = departmentData.get();
				updatedDepartment.setDepartmentName(department.getDepartmentName());
				updatedDepartment.setDeptDescription(department.getDeptDescription());
				updatedDepartment.setLocation(department.getLocation());
				updatedDepartment.setCourse(courseData.get());
				return new ResponseEntity<>(departmentRepository.save(updatedDepartment), HttpStatus.OK);
			} else {
				return new ResponseEntity<>(HttpStatus.NOT_FOUND);
			}
		}

		@CrossOrigin(origins = "http://localhost:4200")
		@PostMapping("/createdepartment/{courseId}")
		public ResponseEntity<Department> createdepartment(@PathVariable("courseId") int id,@RequestBody Department departmentRequest) {
			try {
				
				Department newDepartment = courseRepository.findById(id).map(course -> {
					departmentRequest.setCourse(course);
				      return departmentRepository.save(departmentRequest);
				    }).orElseThrow(() -> new Exception("Not found Course with id = " + id));
				
				return new ResponseEntity<>(newDepartment, HttpStatus.CREATED);
			} catch (Exception e) {
				return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
		@CrossOrigin(origins = "http://localhost:4200")
		@PostMapping("/deletedepartment/{id}")
		public ResponseEntity<HttpStatus> deletedepartment(@PathVariable("id") long id) {
			try {
				departmentRepository.deleteById(id);
				return new ResponseEntity<>(HttpStatus.NO_CONTENT);
			} catch (Exception e) {
				return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
			}
		}
}
