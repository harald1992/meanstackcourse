import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';

// config server resources get formspec

export interface JsonFormValidators {
  min?: number;
  max?: number;
  required?: boolean;
  requiredTrue?: boolean;
  email?: boolean;
  minLength?: boolean;
  maxLength?: boolean;
  pattern?: string;
  nullValidator?: boolean;
}
export interface JsonFormControlOptions {
  min?: string;
  max?: string;
  step?: string;
  icon?: string;
}

interface RadioButton {
  value: string;
  label: string;
}

export interface JsonFormControl {
  name: string;
  label: string;
  value: string;
  type: string;
  options?: JsonFormControlOptions;
  required: boolean;
  validators: JsonFormValidators;
  radioButtons?: RadioButton[];
}
export interface JsonFormData {
  controls: JsonFormControl[];
}

@Injectable({
  providedIn: 'root',
})
export class DynamicFormService {
  constructor(
    private httpClient: HttpClient,
    private formBuilder: FormBuilder
  ) {}

  getJsonForm(): Observable<JsonFormData> {
    // const headers = { 'Content-Type': 'application/json' };

    return this.httpClient.get<JsonFormData>(
      '/assets/basic-form.json'
      // { headers }
    );
  }
}
