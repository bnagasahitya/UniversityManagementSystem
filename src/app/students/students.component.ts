import { StudentService } from './../student.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Student{
  constructor(public id:number,public name: string,public studentDOB:string, public studentEmail:string, public studentAddress: string, public studentPhone: number, public registration: string){

  }
}
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 student : Student[]
 //   new Student(1,'abc','xyz', new Date()),
 //   new Student(2,'abc','xyz', new Date()),
 //   new Student(3,'abc','xyz', new Date()),
 // ]
 | undefined
 message: string | undefined;
//   new Student(1,'abc','xyz', new Date()),
//   new Student(2,'abc','xyz', new Date()),
//   new Student(3,'abc','xyz', new Date()),
// ]

constructor(private studentService: StudentService,
  private router: Router) { }

  ngOnInit(): void {
    this.retrieveData()
  }


  retrieveData(){
    this.studentService.retrieveStudents().subscribe(
      response => {
        console.log(response);
      this.student = response;
      }
    )
  }
  deleteStudent(id: any, student: Student){
    this.studentService.deleteStudent(id, student).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Student ${id} Successful!`;
        this.retrieveData();
      }
    )
  }
  updateStudent(id: any){
    console.log(`update ${id}`)
    this.router.navigate(['addstudent',id])
    // this.courseService.updateCourse(id).subscribe (
    //   response => {
    //     console.log(response);
    //     this.message = `Delete of Course ${id} Successful!`;
    //     this.retrieveData();
    //   }
    // )
  
     
    
  }
  addStudent() {
    this.router.navigate(['addstudent',-1])
  }
  }

 


