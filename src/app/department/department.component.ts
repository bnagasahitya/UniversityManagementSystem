import { DepartmentService } from './department.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Department{
  constructor(public id:number,public name: string,public description:string, public location:string){

  }
}
@Component({
  selector: 'app-department',
  templateUrl: './department.component.html',
  styleUrls: ['./department.component.css']
})

export class DepartmentComponent implements OnInit {


   
  // new Courses(1,'Maths','xyz'),
  // new Courses(2,'abc','xyz'),
  // new Courses(3,'abc','xyz'),
  department :Department[] | undefined;
  message: string | undefined;

  constructor(private departmentService: DepartmentService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveData()
  }
  retrieveData(){
    this.departmentService.retrieveDepartments().subscribe(
      response => {
        console.log(response);
      this.department = response;
      }
    )
  }
  deleteDepartment(id: any, department: Department){
    this.departmentService.deleteDepartment(id, department).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Department ${id} Successful!`;
        this.retrieveData();
      }
    )
  }
  updateDepartment(id: any){
    console.log(`update ${id}`)
    this.router.navigate(['adddepartment',id])
    // this.courseService.updateCourse(id).subscribe (
    //   response => {
    //     console.log(response);
    //     this.message = `Delete of Course ${id} Successful!`;
    //     this.retrieveData();
    //   }
    // )
  
     
    
  }
  addDepartment() {
    this.router.navigate(['adddepartment',-1])
  }
  }


