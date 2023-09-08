import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import {
  NavigationAbstract,
  PageAbstract,
} from 'src/app/services/formspec/formspec.interface';

@Component({
  selector: 'app-formspec-navigation',
  templateUrl: './formspec-navigation.component.html',
  styleUrls: ['./formspec-navigation.component.scss'],
})
export class FormspecNavigationComponent {
  @Input() item: NavigationAbstract | PageAbstract;

  // get navigationAbstract(): NavigationAbstract {
  //   return this.item as NavigationAbstract;
  // }
  // get pageAbstract(): PageAbstract {
  //   return this.item as PageAbstract;
  // }

  asNavigationAbstract(val: any): NavigationAbstract {
    return val;
  }
  asPageAbstract(val: any): PageAbstract {
    return val;
  }
}
