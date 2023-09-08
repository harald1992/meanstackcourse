import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormControlOptions,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  DynamicFormService,
  JsonFormControl,
  JsonFormData,
} from 'src/app/services/dynamic-form.service';

@Component({
  selector: 'app-dynamic-form',
  templateUrl: './dynamic-form.component.html',
  styleUrls: ['./dynamic-form.component.scss'],
})
export class DynamicFormComponent implements OnInit {
  jsonFormData: JsonFormData | undefined;

  myForm: FormGroup = this.fb.group({});

  constructor(
    private dynamicFormService: DynamicFormService,
    private fb: FormBuilder
  ) {}

  ngOnInit(): void {
    this.dynamicFormService.getJsonForm().subscribe((data: JsonFormData) => {
      console.log(data);
      this.createForm(data.controls);
      this.jsonFormData = data;
    });

    this.myForm.valueChanges.subscribe((value: any) => console.log(value));
  }

  createForm(controls: JsonFormControl[]) {
    for (const control of controls) {
      const formControlOptions = this.getFormControlOptions(control);

      this.myForm.addControl(
        control.name,
        new FormControl<string | null>(control.value, formControlOptions)
        // this.fb.control(control.value)
      );
    }
  }

  getFormControlOptions(control: JsonFormControl): FormControlOptions {
    let formControlOptions: FormControlOptions = {};

    let validatorsToAdd: ValidatorFn | ValidatorFn[] | null = [];

    for (const [key, value] of Object.entries(control.validators)) {
      switch (key) {
        case 'min':
          validatorsToAdd.push(Validators.min(value));
          break;
        case 'required':
          validatorsToAdd.push(Validators.required);
          break;
        case 'email':
          validatorsToAdd.push(Validators.email);
          break;
      }
    }

    formControlOptions.validators = validatorsToAdd;

    return formControlOptions;
  }

  onSubmit() {
    const isFormValid = this.myForm.valid;
    const formValues = this.myForm.value;

    console.log(isFormValid, formValues);
  }
}
