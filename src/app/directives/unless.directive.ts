import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';
import { PostDetailComponent } from '../modules/posts/post-detail/post-detail.component';

@Directive({
  selector: '[unless]',
})
export class UnlessDirective {
  @Input() set unless(condition: boolean) {
    if (condition) {
      this.viewContainer.clear(); // remove element
    } else {
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.viewContainer.createComponent(PostDetailComponent);
    }
  }

  constructor(
    private templateRef: TemplateRef<unknown>,
    private viewContainer: ViewContainerRef
  ) {}
}
