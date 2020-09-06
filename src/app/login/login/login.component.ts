import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from './loginService'
 
@Component({
  selector: 'routing-test-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  form;
  email:string;
  password: string;
  constructor(
    private myRoute: Router,
    public auth: AuthService, private appartementService: LoginService) {
  
      console.log(auth.isLoggedIn())
  }
  ngOnInit() {
  }
  doLogin() {
    
    this.appartementService.postAuth(this.email, this.password).subscribe((data) => {
      this.auth.sendToken(data)
      this.myRoute.navigate(["/"]);
    })
  }
}
