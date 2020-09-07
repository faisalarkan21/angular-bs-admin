import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { AuthService } from "../../utils/auth";
import { ApiService } from "../../services/api.service";

@Component({
  selector: "routing-test-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.sass"],
})
export class LoginComponent implements OnInit {
  form;
  email: string = 'faisalarkan21@gmail.com';
  password: string = 'testing123';
  constructor(
    private myRoute: Router,
    public auth: AuthService,
    private appartementService: ApiService
  ) {
    console.log(auth.isLoggedIn());
  }
  ngOnInit() {
    if (this.auth.isLoggedIn()) {
      this.myRoute.navigate(["/"]);
    }
  }
  doLogin() {
    this.appartementService
      .postAuth(this.email, this.password)
      .subscribe(({ data }: any) => {
        this.auth.sendToken(data);
        this.myRoute.navigate(["/"]);
      });
  }
}
