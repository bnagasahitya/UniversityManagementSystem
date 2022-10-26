import { Component, OnInit } from '@angular/core';
export class Courses{
  constructor(public id:number, public name: string,public description:string){

  }
}
@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {
 course = [
   
  new Courses(1,'Maths','xyz'),
  new Courses(2,'abc','xyz'),
  new Courses(3,'abc','xyz'),
]

  constructor() { }

  ngOnInit(): void {
  }

}
