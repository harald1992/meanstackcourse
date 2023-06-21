import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, tap } from 'rxjs';

import { environment } from 'src/environments/environment';

export interface LoginData {
  email: string;
  password: string;
}

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  isLoggedIn$ = this.isLoggedIn.asObservable();

  constructor(private http: HttpClient) {}

  login(loginData: LoginData) {
    return this.http.post<any>(environment.login, loginData).pipe(
      tap((data) => {
        console.log('login:', data);
        console.log(data.headers);

        this.isLoggedIn.next(true);
      })
    );
  }

  signUp(loginData: LoginData): Observable<void> {
    return this.http.post<any>(environment.signUp, loginData);
  }
}
