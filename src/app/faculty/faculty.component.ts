import { Component, OnInit } from '@angular/core';
export class Faculty{
  constructor(public id:number, public name: string,public coursename:string){

  }}
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor() { }
faculty = [
   
  new Faculty(1,'Maths','xyz'),
  new Faculty(2,'abc','xyz'),
  new Faculty(3,'abc','xyz'),
]

  ngOnInit(): void {
  }

}
