import { Component, OnInit } from '@angular/core';
import { FormSpec } from 'src/app/services/formspec/formspec.interface';
import { FormspecService } from 'src/app/services/formspec/formspec.service';

@Component({
  selector: 'app-formspec',
  templateUrl: './formspec.component.html',
  styleUrls: ['./formspec.component.scss'],
})
export class FormspecComponent implements OnInit {
  formSpec: FormSpec;

  constructor(private formSpecService: FormspecService) {}

  ngOnInit() {
    this.formSpecService.getFormSpec().subscribe((data: FormSpec) => {
      this.formSpec = data;
    });
  }
}
