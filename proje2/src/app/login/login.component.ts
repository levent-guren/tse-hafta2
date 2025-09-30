import { Component, inject } from '@angular/core';
import { Login } from '../models/login';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loginForm = new Login('', '');
  private auth = inject(AuthService);
  private router = inject(Router);

  login() {
    this.auth.login(this.loginForm).subscribe({
      next: (result) => {
        console.log(result);
      },
      error: (err) => {
        console.error(err);
        // hata geldi. Sunucu çalışmıyor. Biliyoruz. 
        // Buradan Personel Liste ekranına geçelim.
        this.router.navigate(['/menu']);
      }
    });
  }
}
