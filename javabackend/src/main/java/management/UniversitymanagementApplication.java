package management;

import com.university.management.model.Student;
import com.university.management.repository.StudentRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@SpringBootApplication
public class UniversitymanagementApplication {


	public static void main(String[] args) {
		SpringApplication.run(UniversitymanagementApplication.class, args);
	}

}
