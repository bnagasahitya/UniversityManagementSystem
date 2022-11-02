package com.university.management.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "Department")
public class Department {

	  @Id
	  @Column(name = "Department_Id")
	  @GeneratedValue(strategy = GenerationType.IDENTITY)
	  private long departmentId;

	  @Column(name = "departmentname")
	  private String departmentName;

	  @Column(name = "deptdescription")
	  private String deptDescription;

	  @Column(name = "Location")
	  private String location;
	
	  @ManyToOne(fetch = FetchType.LAZY, optional = false)
	  @JoinColumn(name = "Course_ID", nullable = false)
	  @JsonIgnore
	  private Course course;


			  
	public Department() {
		super();
	}


	public long getDepartmentId() {
		return departmentId;
	}



	public void setDepartmentId(long departmentId) {
		this.departmentId = departmentId;
	}



	public String getDepartmentName() {
		return departmentName;
	}



	public void setDepartmentName(String departmentName) {
		this.departmentName = departmentName;
	}



	public String getDeptDescription() {
		return deptDescription;
	}



	public void setDeptDescription(String deptDescription) {
		this.deptDescription = deptDescription;
	}



	public String getLocation() {
		return location;
	}



	public void setLocation(String location) {
		this.location = location;
	}

	public Course getCourse() {
		return course;
	}

	public void setCourse(Course course) {
		this.course = course;
	}


}
