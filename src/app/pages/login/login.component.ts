import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import {
  AuthService,
  LoginData,
} from '../../services/general-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  isLoginMode = false;
  isLoading = false;

  // loginService.isLoggedIn$.pipe(take)
  isLoggedIn$ = this.authService.isLoggedIn$.pipe(takeUntilDestroyed());

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.isLoggedIn$.subscribe((data) => console.log(data)); // automatically unsubscribes ondestroy via the takeUntilDestroyed
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit(form: NgForm) {
    this.isLoading = true;
    if (!form.valid) {
      this.isLoading = false;
      return;
    }

    if (this.isLoginMode) {
      this.onLogin(form);
    } else {
      this.onSignUp(form);
    }
  }

  onLogin(form: NgForm) {
    const loginData: LoginData = form.form.value;
    this.authService.login(loginData).subscribe((data) => {
      this.isLoading = false;

      form.resetForm();
    });
  }

  onSignUp(form: NgForm) {
    const loginData: LoginData = form.form.value;
    this.authService.signUp(loginData).subscribe(() => {
      this.isLoginMode = true;
      this.isLoading = false;
    });

    form.resetForm();
  }
}
