import { Component, OnInit } from '@angular/core';
import { AppartementService } from './AppartementService';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  form;
  constructor(
    private myRoute: Router,
    public auth: AuthService, private appartementService: AppartementService) {
  
      console.log(auth.isLoggedIn())
  }
  ngOnInit() {
  }
  login() {
    
    this.appartementService.postAuth().subscribe((data) => {
      this.auth.sendToken(data)
    })
  }
}
