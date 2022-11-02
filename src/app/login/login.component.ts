// import { BasicAuthenticationService } from './../service/basic-authentication.service';
// import { HardcodedAuthenticationService } from './../service/hardcoded-authentication.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username = 'admin'
  password = '123'
  errorMessage = 'Invalid Credentials'
  invalidLogin = false
  constructor(private router: Router){

  }

  
  ngOnInit() {
  }

  handleLogin() {
    if(this.username==="admin" && this.password === '123') {
this.router.navigate(['welcome'])
  }


  }

}