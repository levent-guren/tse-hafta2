import { JsonPipe } from '@angular/common';
import { Component, computed, effect, inject, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { emailValid, emailValidParam, formValid } from '../../../shared/validator/email.validator';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  loginForm = this.fb.group({
    adi: ['', [Validators.required]],
    email: ['', [
      Validators.required,
      Validators.minLength(3),
      Validators.pattern(/.+@.+\..{2,}/),
      emailValid, emailValidParam(5)
    ]]
  }, { validators: formValid });

  sayi1 = signal(0);
  sayi2 = signal(0);
  toplamSayi = computed(() => {
    return this.sayi1() + this.sayi2();
  });

  constructor() {
    effect(() => {
      console.log("Sayı1'in yeni değeri:" + this.sayi1());
    });
  }
  giris(val: any) {
    console.log(val);
    this.toplamSayi();
  }

  get(name: string) {
    return this.loginForm.get(name)!;
  }
  arttir() {
    this.sayi1.update((eskiVal) => eskiVal + 1);
  }


}
