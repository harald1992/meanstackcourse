import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent {
  @Input() size?: string = 'md';

  @Input() title?: string = 'Modal Title';
  @Input() content: any;

  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor(private elementRef: ElementRef) {}

  closeModal() {
    this.elementRef.nativeElement.remove();
    this.close.emit();
  }

  submitModal() {
    this.elementRef.nativeElement.remove();
    this.submit.emit();
  }
}
