import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FormSpec } from './formspec.interface';

@Injectable({
  providedIn: 'root',
})
export class FormspecService {
  constructor(private http: HttpClient) {}

  getFormSpec(): Observable<FormSpec> {
    return this.http.get<FormSpec>('/assets/my-formspec.json');
  }
}
