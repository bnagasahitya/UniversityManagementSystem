import { Component, OnInit } from '@angular/core';
export class Student{
  constructor(public id:number, public name: string,public course:string, public date: Date){

  }
}
@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {
 student = [
   
  new Student(1,'abc','xyz', new Date()),
  new Student(2,'abc','xyz', new Date()),
  new Student(3,'abc','xyz', new Date()),
]

  constructor() { }

  ngOnInit(): void {
  }

}
