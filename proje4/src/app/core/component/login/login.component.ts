import { Component, inject } from '@angular/core';
import { FormBuilder, FormsModule, NgModel, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    adi: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.minLength(3)]]
  });

  giris(val: any) {
    console.log(val);
  }


}
