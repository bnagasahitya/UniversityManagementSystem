package management.model;

import org.hibernate.annotations.Generated;
import org.hibernate.annotations.GenerationTime;

import javax.persistence.*;

@Entity
@Table(name = "Course")
public class Course {

    @Id
    @Column(name ="Course_ID")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "coursename")
    private  String name;

    @Column(name = "coursetype")
    private String type;

    @Column(name = "Prerequisite")
    private String preRequest;

    @Column(name = "Duration")
    private String duration;

    @Column(name = "Credits")
    private Integer credits;

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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public String getPreRequest() {
        return preRequest;
    }

    public void setPreRequest(String preRequest) {
        this.preRequest = preRequest;
    }

    public String getDuration() {
        return duration;
    }

    public void setDuration(String duration) {
        this.duration = duration;
    }

    public Integer getCredits() {
        return credits;
    }

    public void setCredits(Integer credits) {
        this.credits = credits;
    }
}
