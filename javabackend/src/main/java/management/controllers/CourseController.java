package management.controllers;

import com.university.management.model.Course;
import com.university.management.model.Student;
import com.university.management.repository.CourseRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class CourseController {


    @Autowired
    private CourseRepo repo;
    @CrossOrigin(origins = "http://localhost:4200")
    @PostMapping(value = "/course")
	public void createCourse(@RequestBody Course user) {


        repo.save(user);
    }
    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/courses")
    public List<Course> getCoursesAll() {

        return repo.findAll();
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @GetMapping(value = "/course/{id}")
    public Course getCourse(@PathVariable( name = "id") Integer id) {


        return repo.findById(id).orElse(new Course());
    }

    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value = "/updatecourse/{id}")
    public Course updateCourse(@RequestBody Course user, @PathVariable( name = "id" ) Integer id) {

        Optional<Course> course = repo.findById( id);
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


    @CrossOrigin(origins = "http://localhost:4200")
    @PutMapping(value = "/delete/course/{id}")
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
