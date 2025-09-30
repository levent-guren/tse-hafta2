import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);

  login(form: Login) {
    return this.http.get(`http://localhost:8080/login?u=${form.username}&p=${form.password}`);
  }
}
