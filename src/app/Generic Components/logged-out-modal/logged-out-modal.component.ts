import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-logged-out-modal',
  templateUrl: './logged-out-modal.component.html',
  styleUrls: ['./logged-out-modal.component.scss'],
})
export class LoggedOutModalComponent {
  @Output() submit: EventEmitter<any> = new EventEmitter();

  @Output() close: EventEmitter<any> = new EventEmitter();

  submitModal() {
    this.submit.emit();
  }

  closeModal() {
    this.close.emit();
  }
}
