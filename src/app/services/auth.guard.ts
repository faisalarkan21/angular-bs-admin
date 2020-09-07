import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../utils/auth';
import { Observable } from 'rxjs';
@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private auth: AuthService,
    private myRoute: Router){
  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log('this.auth.isLoggedIn()', this.auth.isLoggedIn())
      if(this.auth.isLoggedIn()){
      return true;
    }else{
      this.myRoute.navigate(["/login"]);
      return false;
    }
  }
}