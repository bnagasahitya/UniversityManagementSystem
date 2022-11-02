package management.repository;

import com.university.management.model.Course;
import com.university.management.model.Student;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CourseRepo extends CrudRepository<Course, Integer> {
    Student findByName(String name);
    List<Course> findAll();
}
