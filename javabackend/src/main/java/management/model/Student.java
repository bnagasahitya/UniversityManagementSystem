package management.model;


import javax.persistence.*;

@Entity
@Table(name = "Student")
public class Student {

    @Id
    @Column(name ="Student_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "studentname")
    private String name;

    @Column(name = "studentdob")
    private String studentDOB;

    @Column(name = "studentemail")
    private String studentEmail;

    @Column(name = "studentphone")
    private Integer studentPhone;

//    @OneToOne(mappedBy = "student", fetch = FetchType.LAZY)
//    private Registration registration;

//    public Registration getRegistration() {
//        return registration;
//    }
//
//    public void setRegistration(Registration registration) {
//        this.registration = registration;
//    }



    @Column(name = "studentaddress")
    private String studentAddress;

    public String getStudentAddress() {
		return studentAddress;
	}

	public void setStudentAddress(String studentAddress) {
		this.studentAddress = studentAddress;
	}

	public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getStudentDOB() {
        return studentDOB;
    }

    public void setStudentDOB(String studentDOB) {
        this.studentDOB = studentDOB;
    }

    public String getStudentEmail() {
        return studentEmail;
    }

    public void setStudentEmail(String studentEmail) {
        this.studentEmail = studentEmail;
    }

    public Integer getStudentPhone() {
        return studentPhone;
    }

    public void setStudentPhone(Integer studentPhone) {
        this.studentPhone = studentPhone;
    }


}
