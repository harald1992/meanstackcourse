import { Component, ViewChild, ViewContainerRef } from '@angular/core';
import { ModalContainerDirective } from './directives/modal-container.directive';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  @ViewChild(ModalContainerDirective, { static: false })
  modalContainer!: ModalContainerDirective;

  constructor(private viewContainerRef: ViewContainerRef) {}
}
