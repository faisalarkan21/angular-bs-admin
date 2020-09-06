import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { Appartement } from './appartement';
import { Observable, throwError } from 'rxjs';
// import { Appartement } from './appartement';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private BASE_URL = 'https://5d60ae24c2ca490014b27087.mockapi.io/api/v1';

  constructor(
    private http: HttpClient) { }

    private handleError(error: HttpErrorResponse) {
      if (error.error instanceof ErrorEvent) {
        // A client-side or network error occurred. Handle it accordingly.
        console.error('An error occurred:', error.error.message);
      } else {
        // The backend returned an unsuccessful response code.
        // The response body may contain clues as to what went wrong,
        console.error(
          `Backend returned code ${error.status}, ` +
          `body was: ${error.error}`);
      }
      // return an observable with a user-facing error message
      return throwError(
        'Something bad happened; please try again later.');
    };

    postAuth (email, password){
        var formData: any = new FormData();
        formData.append("email", email);
        formData.append("password",   password);
         return this.http.post('http://localhost:8080/api/login',formData);
    }

}
