import { StudentService } from './../student.service';
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
  message: string | undefined;
  id = 0;
  student: Student = {
    id:this.id,
    name: '',
    studentDOB:'',
    studentEmail:'',
    studentAddress:'',
    studentPhone: 0,
    registration: ''  };
  constructor(
    private studentService: StudentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.student = new Student(this.id,'','','','',0,'');
    if(this.id!=-1) {
      this.studentService.retrieveStudent(this.id)
          .subscribe (
            response =>{
              console.log(response);
              this.student = response;
            }
          )
    }
  }

  saveStudentDetails(){
    if(this.id == -1) { //=== ==
      this.studentService.addStudent(this.student)
          .subscribe (
            data => {
              console.log(data);
              this.message = `Added Student Details of ID ${this.id} Successfully!`;
              this.router.navigate(['students'])
            }
          )
    }
       else {
        this.studentService.updateStudent(this.id, this.student)
            .subscribe (
              data => {
                console.log(data)
                this.message = `Updated Student Details of ID ${this.id} Successfully!`;
                this.router.navigate(['students'])
              }
            )
      }
    }
  
}


