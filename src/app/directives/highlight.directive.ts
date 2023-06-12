import { Directive, ElementRef, AfterViewInit, Input } from '@angular/core';

// usage:
// <div appHighlight color="grey">Text</div>;

// Attribute Directive
@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective implements AfterViewInit {
  @Input() color: string = 'yellow';

  constructor(private elementRef: ElementRef) {}

  ngAfterViewInit() {
    this.elementRef.nativeElement.style.background = this.color;
  }
}
