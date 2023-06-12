import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appModalContainer]',
})
export class ModalContainerDirective {
  constructor(public viewContainerRef: ViewContainerRef) {}
}
