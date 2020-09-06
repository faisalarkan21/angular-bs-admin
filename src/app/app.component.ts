import { Component } from '@angular/core';
import { AuthService } from './auth.service';
import { RouterLink, RouterLinkActive, Router } from '@angular/router';
declare var $: any 

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-bs-admin';


}
