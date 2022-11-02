import { FacultyService } from './../faculty.service';
import { Faculty } from './../faculty.component';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-faculty',
  templateUrl: './add-faculty.component.html',
  styleUrls: ['./add-faculty.component.css']
})
export class AddFacultyComponent implements OnInit {
  id = 0;
  faculty: Faculty = {
    id:this.id,
    name: '',
    gender:'',
    address:'',
    phone:0,
    age: 0,
    course_id: 0,
    department_id: 0,
  };
  constructor(
    private facultyService: FacultyService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.faculty = new Faculty(this.id,'','','',0,0,0,0);
    if(this.id!=-1) {
      this.facultyService.retrieveFaculty(this.id)
          .subscribe (
            response =>{
              console.log(response);
              this.faculty = response;
            }
            
            // data => {this.course = data;}
          )
    }
  }
  saveFacultyDetails(){
    if(this.id == -1) { //=== ==
      this.facultyService.addFaculty(this.faculty)
          .subscribe (
            data => {
              console.log(data);
              this.router.navigate(['faculty'])
            }
          )
    }
       else {
        this.facultyService.updateFaculty(this.id, this.faculty)
            .subscribe (
              data => {
                console.log(data)
                this.router.navigate(['faculty'])
              }
            )
      }
    }
  
}

