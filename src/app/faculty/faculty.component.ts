import { FacultyService } from './faculty.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Faculty{
  constructor(public id:number, public name: string,public gender:string, public address: string,public phone: number,public age: number, public course_id: number,public department_id: number){

  }}
@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.css']
})
export class FacultyComponent implements OnInit {

  constructor(private facultyService: FacultyService,
    private router: Router) { }
  
  ngOnInit(): void {
    this.retrieveData()
  }
faculty = [
   
  new Faculty(1,'Prof.Uma','Female','Hyderabad', 9912344667,28,1,1),
  new Faculty(2,'Sindhu','Female','Chennai', 8823446675,40,2,2),
  new Faculty(3,'Kiran','Male','Bangalore', 9844667522,50,3,1),
]

// faculty :Faculty[] | undefined;
  message: string | undefined;




retrieveData(){
  this.facultyService.retrieveFacultyData().subscribe(
    response => {
      console.log(response);
    this.faculty = response;
    }
  )
}
deleteFaculty(id: any, faculty: Faculty){
  this.facultyService.deleteFaculty(id, faculty).subscribe (
    response => {
      console.log(response);
      this.message = `Delete of Faculty ${id} Successful!`;
      this.retrieveData();
    }
  )
}
updateFaculty(id: any){
  console.log(`update ${id}`)
  this.router.navigate(['addfaculty',id]) 
}

addFaculty() {
  this.router.navigate(['addfaculty',-1])
}
}


