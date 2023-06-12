import { Component, ComponentRef, TemplateRef } from '@angular/core';
import { DirectiveTesterComponent } from 'src/app/directives/directive-tester/directive-tester.component';
import { ModalService } from 'src/app/services/general-services/modal.service';
import { LoggedOutModalComponent } from '../logged-out-modal/logged-out-modal.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private modalService: ModalService) {}

  openModal2() {
    this.modalService
      .openComponent(LoggedOutModalComponent)
      .subscribe((action) => console.log(action));
  }

  openModal3(modalTemplate: TemplateRef<any>) {
    this.modalService
      .openTemplate(modalTemplate)
      .subscribe((action) => console.log(action));
  }
}
