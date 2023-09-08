import { Component, Input } from '@angular/core';
import { PageAbstract } from 'src/app/services/formspec/formspec.interface';

@Component({
  selector: 'app-formspec-page-abstract',
  templateUrl: './formspec-page-abstract.component.html',
  styleUrls: ['./formspec-page-abstract.component.scss'],
})
export class FormspecPageAbstractComponent {
  @Input() item: PageAbstract;
}
