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

    constructor(public auth: AuthService, router:Router) {
      console.log(auth.isLoggedIn())
     }


  ngOnInit(): void {
    $("#sidebarToggle, #sidebarToggleTop").on('click', function(e) {
      $("body").toggleClass("sidebar-toggled");
      $(".sidebar").toggleClass("toggled");
      if ($(".sidebar").hasClass("toggled")) {
        $('.sidebar .collapse').collapse('hide');
      };
    });
  }

}
