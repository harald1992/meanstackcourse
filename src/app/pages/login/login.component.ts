import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

import {
  AuthService,
  LoginData,
} from '../../services/general-services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent {
  isLoginMode = false;
  isLoading = false;

  constructor(private authService: AuthService) {}

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
