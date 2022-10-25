import { StudentsComponent } from './../students/students.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../students/students.component';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {


  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }
  student?: Student;

  ngOnInit() {
    
    // this.id = this.route.snapshot.params['id'];
    
    this.student = new Student(6,'123','false',new Date());
  
  }

  // saveStudentDetails() {
  
  // }

}
