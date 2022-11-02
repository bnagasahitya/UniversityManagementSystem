import { DepartmentService } from './../department.service';
import { Component, OnInit } from '@angular/core';
import { Department } from '../department.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-department',
  templateUrl: './add-department.component.html',
  styleUrls: ['./add-department.component.css']
})
export class AddDepartmentComponent implements OnInit {

  id = 0;
  department: Department = {
    departmentId:this.id,
    departmentName: '',
    deptDescription:'',
    location:'',
    course_id: 0,
    };
  constructor(
    private departmentService: DepartmentService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.department = new Department(this.id,'','','',9);
    if(this.id!=-1) {
      this.departmentService.retrieveDepartment(this.id)
          .subscribe (
            response =>{
              console.log(response);
              this.department = response;
            }
            
            // data => {this.course = data;}
          )
    }
  }
  saveDepartmentDetails(){
    if(this.id == -1) { //=== ==
      this.departmentService.addDepartment(this.department, this.department.course_id)
          .subscribe (
            data => {
              console.log(data);
              this.router.navigate(['departments'])
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
        this.departmentService.updateDepartment(this.id, this.department, this.department.course_id)
            .subscribe (
              data => {
                console.log(data)
                this.router.navigate(['departments'])
              }
            )
      }
    }
  
}


