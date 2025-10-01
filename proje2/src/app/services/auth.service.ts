import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private loggedIn = false;

  login(form: Login) {
    return this.http.get(`http://localhost:8080/login?u=${form.username}&p=${form.password}`)
      .pipe(
        catchError((e) => {
          this.loggedIn = true;
          return e;
        })
      );
  }
  logout() {
    this.loggedIn = false;
  }
  isLoggedIn() {
    return this.loggedIn;
  }
}
