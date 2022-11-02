package management.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.university.management.model.Student;

import javax.persistence.*;
import javax.persistence.criteria.CriteriaBuilder;
import java.sql.Date;

@Entity
@Table(name = "Registration")
@JsonInclude
public class Registration {

    @Id
    @Column(name ="registrationid")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "registrationname")
    private String name;

    @Column(name = "registrationdate")
    private Date date;

    @Column(name = "content")
    private String content;


    @OneToOne(fetch = FetchType.LAZY, optional = false, cascade = CascadeType.ALL)
	@JoinColumn(name = "Student_ID", nullable = false)
//    @OneToOne(cascade = CascadeType.ALL,fetch = FetchType.LAZY)
//    @JoinColumn(name = "Student_ID", referencedColumnName = "Student_ID")
    @JsonIgnore
    private com.university.management.model.Student student;

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

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public com.university.management.model.Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }
}
