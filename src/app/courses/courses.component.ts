import { CourseService } from './course.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Student } from '../students/students.component';
export class Courses{
  constructor(public id:number,public name: string,public type:string, public preRequest:string, public duration: string, public credits: number){

  }
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 course :Courses[] | undefined;
  message: string | undefined;
   
  // new Courses(1,'Maths','xyz'),
  // new Courses(2,'abc','xyz'),
  // new Courses(3,'abc','xyz'),


  constructor(private courseService: CourseService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveData()
  }
  retrieveData(){
    this.courseService.retrieveCourses().subscribe(
      response => {
        console.log(response);
      this.course = response;
      }
    )
  }
  deleteCourse(id: any, course: Courses){
    this.courseService.deleteCourse(id, course).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Course ${id} Successful!`;
        this.retrieveData();
      }
    )
  }
  updateCourse(id: any){
    console.log(`update ${id}`)
    this.router.navigate(['add',id]) 
  }

  
  addCourse() {
    this.router.navigate(['add',-1])
  }
  }

 
