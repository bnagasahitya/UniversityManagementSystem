import { RegistrationService } from './../registration.service';
import { Component, OnInit } from '@angular/core';
import { Registration } from '../registration.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-registration',
  templateUrl: './add-registration.component.html',
  styleUrls: ['./add-registration.component.css']
})
export class AddRegistrationComponent implements OnInit {
  id = 0;
  registration: Registration = {
    id:this.id,
    registrationname: '',
    registrationdate:new Date(),
    content:'',
    student_Id: 0
  };
  constructor(
    private registrationService: RegistrationService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
     this.registration = new Registration(this.id,'',new Date(),'',0);
    if(this.id!=-1) {
      this.registrationService.retrieveRegistration(this.id)
          .subscribe (
            response =>{
              console.log(response);
              this.registration = response;
            }
            
            // data => {this.course = data;}
          )
    }
  }
  saveRegistrationDetails(){
    if(this.id == -1) { //=== ==
      this.registrationService.createRegistration(this.registration)
          .subscribe (
            data => {
              console.log(data);
              this.router.navigate(['registrations'])
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
        this.registrationService.updateRegistration(this.id, this.registration)
            .subscribe (
              data => {
                console.log(data)
                this.router.navigate(['registrations'])
              }
            )
      }
    }
  
}

