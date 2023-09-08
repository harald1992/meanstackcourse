import { Component, Input } from '@angular/core';
import {
  NavigationAbstract,
  PageAbstract,
} from 'src/app/services/formspec/formspec.interface';

@Component({
  selector: 'app-formspec-navigation-item',
  templateUrl: './formspec-navigation-item.component.html',
  styleUrls: ['./formspec-navigation-item.component.scss'],
})
export class FormspecNavigationItemComponent {
  @Input() formSpecNavigationItem: NavigationAbstract | PageAbstract;
}
