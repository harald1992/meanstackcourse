import { Component, Input } from '@angular/core';
import { NavigationAbstract } from 'src/app/services/formspec/formspec.interface';

@Component({
  selector: 'app-formspec-navigation-abstract',
  templateUrl: './formspec-navigation-abstract.component.html',
  styleUrls: ['./formspec-navigation-abstract.component.scss'],
})
export class FormspecNavigationAbstractComponent {
  @Input() item: NavigationAbstract;

  toggleExpand() {
    this.item.expanded = !this.item.expanded;
  }
}
