import { Student } from './../../students/students.component';
import { CourseService } from './../course.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Courses } from '../courses.component';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {
  id = 0;
  course: Courses = {
    id:this.id,
    name: '',
    preRequest:'',
    duration:'',
    type:'',
    credits: 0
  };
  constructor(
    private courseService: CourseService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.course = new Courses(this.id,'','','','',0);
    if(this.id!=-1) {
      this.courseService.retrieveCourse(this.id)
          .subscribe (
            response =>{
              console.log(response);
              this.course = response;
            }
            
            // data => {this.course = data;}
          )
    }
  }
  saveCourseDetails(){
    if(this.id == -1) { //=== ==
      this.courseService.createCourse(this.course)
          .subscribe (
            data => {
              console.log(data);
              this.router.navigate(['courses'])
            }
          )
    }
      // if(this.id == -1) { //=== ==
      //   // this.courseService.createCourse(this.course)
      //   //     .subscribe (
      //   //       data => {
      //   //         console.log(data)
      //   //         this.router.navigate(['todos'])
      //   //       }
      //   //     )
      // }
       else {
        this.courseService.updateCourse(this.id, this.course)
            .subscribe (
              data => {
                console.log(data)
                this.router.navigate(['courses'])
              }
            )
      }
    }
  
}

