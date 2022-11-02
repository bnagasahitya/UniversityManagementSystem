import { RegistrationService } from './registration.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
export class Registration{
  constructor(public id:number,public name: string,public date:Date, public content:string, public student_Id: number){

  }
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {


  registration :Registration[] | undefined;
  message: string | undefined;
   
  // new Courses(1,'Maths','xyz'),
  // new Courses(2,'abc','xyz'),
  // new Courses(3,'abc','xyz'),


  constructor(private registrationService: RegistrationService,
    private router: Router) { }

  ngOnInit(): void {
    this.retrieveData()
  }
  retrieveData(){
    this.registrationService.retrieveRegistrations().subscribe(
      response => {
        console.log(response);
      this.registration = response;
      }
    )
  }
  deleteRegistration(id: any, registration: Registration){
    this.registrationService.deleteRegistration(id, registration).subscribe (
      response => {
        console.log(response);
        this.message = `Delete of Registration ${id} Successful!`;
        this.retrieveData();
      }
    )
  }
  updateRegistration(id: any){
    console.log(`update ${id}`)
    this.router.navigate(['addregistration',id])
    // this.courseService.updateCourse(id).subscribe (
    //   response => {
    //     console.log(response);
    //     this.message = `Delete of Course ${id} Successful!`;
    //     this.retrieveData();
    //   }
    // )
  
     
    
  }
  addRegistration() {
    this.router.navigate(['addregistration',-1])
  }
  }

 


