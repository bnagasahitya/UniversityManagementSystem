package com.university.management.model;


import javax.persistence.*;

@Entity
@Table(name = "Student")
public class Student {

    @Id
    @Column(name ="Student_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(name = "Student_Name")
    private String name;

    @Column(name = "Student_DOB")
    private String studentDOB;

    @Column(name = "Student_Email")
    private String studentEmail;

    @Column(name = "Student_Phone")
    private Integer studentPhone;

    @OneToOne(mappedBy = "student", fetch = FetchType.LAZY)
    private Registration registration;

    public Registration getRegistration() {
        return registration;
    }

    public void setRegistration(Registration registration) {
        this.registration = registration;
    }

    public Integer getStudentAddress() {
        return studentAddress;
    }

    public void setStudentAddress(Integer studentAddress) {
        this.studentAddress = studentAddress;
    }

    @Column(name = "Student_ADDRESS")
    private Integer studentAddress;

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
