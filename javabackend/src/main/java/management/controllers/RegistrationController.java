package management.controllers;

import com.university.management.model.Course;
import com.university.management.model.Department;
import com.university.management.model.Registration;
import com.university.management.model.Student;
import com.university.management.repository.CourseRepo;
import com.university.management.repository.RegistrationRepo;
import com.university.management.repository.StudentRepo;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class RegistrationController {


    @Autowired
    private RegistrationRepo repo;
    @Autowired
	StudentRepo studentRepository;


//    public void createRegister(@RequestBody Registration user, @PathVariable( name = "id") Integer id) {
//
//
//        repo.save(user);
//    }
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/register/{id}")
	public ResponseEntity<Registration> createRegister(@PathVariable("id") int id,@RequestBody Registration registrationRequest) {
		try {

			Registration newRegistration = studentRepository.findById(id).map(student -> {
				registrationRequest.setStudent(student);
			      return repo.save(registrationRequest);
			    }).orElseThrow(() -> new Exception("Not found Course with id = " + id));

			return new ResponseEntity<>(newRegistration, HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		}
	}
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/registrations")
    public List<Registration> getRegistrationsAll() {

        return repo.findAll();
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/register/{id}")
    public Registration getCourse(@PathVariable( name = "id") Integer id) {


        return repo.findById(id).orElse(new Registration());
    }



    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value = "/delete/registration/{id}")
//    @DeleteMapping(value = "/register/{id}")
    public void deleteStudent(@PathVariable( name = "id") Integer id) {
        Optional<Registration> stu = repo.findById(id);

        if (stu.isPresent()) {
            repo.delete(stu.get());
        }
        else {
            throw new RuntimeException("Data Not Found");
        }
    }
	@CrossOrigin(origins = "http://localhost:4200")
	@PostMapping("/updateRegistration/{id}/{studentId}")
	public ResponseEntity<Registration> updateRegistration(@PathVariable("id") int id,@PathVariable("studentId") int studentId, @RequestBody Registration registration) {

		Optional<Registration> registrationData = repo.findById(id);
		Optional<Student> studentData = studentRepository.findById(studentId);
		if (registrationData.isPresent() || studentData.isPresent()) {
			Registration updatedRegistration = registrationData.get();
			updatedRegistration.setName(registration.getName());
			updatedRegistration.setDate(registration.getDate());
			updatedRegistration.setContent(registration.getContent());
			updatedRegistration.setStudent(studentData.get());
			return new ResponseEntity<>(repo.save(updatedRegistration), HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}
}
