import { DOCUMENT } from '@angular/common';
import {
  Injectable,
  ComponentRef,
  TemplateRef,
  ComponentFactoryResolver,
  Injector,
  Inject,
  ApplicationRef,
  ViewContainerRef,
} from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { ModalComponent } from 'src/app/generic components/modal/modal.component';
import { Type } from '@angular/core';

interface ModalOptions {
  size?: string;
  title?: string;
}

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private modalNotifier?: Subject<string>;

  constructor(
    private resolver: ComponentFactoryResolver,
    private injector: Injector,
    private _appRef: ApplicationRef
  ) // @Inject(DOCUMENT) private document: Document
  {}

  openComponent(component: Type<unknown>) {
    const appViewContainerRef: ViewContainerRef =
      this._appRef.components[0].instance.modalContainer.viewContainerRef;

    appViewContainerRef.clear();
    let componentRef: ComponentRef<any> =
      appViewContainerRef.createComponent(component);

    componentRef.instance.close.subscribe(() => this.closeModal());
    componentRef.instance.submit.subscribe(() => this.submitModal());

    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable();
  }

  openTemplate(content: TemplateRef<any>) {
    const factory = this.resolver.resolveComponentFactory(ModalComponent);
    const appViewContainerRef: ViewContainerRef =
      this._appRef.components[0].instance.modalContainer.viewContainerRef;

    appViewContainerRef.clear();
    const contentViewRef = content.createEmbeddedView(null);

    const modalComponent = factory.create(this.injector, [
      contentViewRef.rootNodes,
    ]);

    modalComponent.instance.close.subscribe((e) => this.closeModal());
    modalComponent.instance.submit.subscribe((e) => this.submitModal());
    modalComponent.hostView.detectChanges();
    appViewContainerRef.createComponent(factory);

    this.modalNotifier = new Subject();
    return this.modalNotifier.asObservable();
  }

  closeModal() {
    this.modalNotifier?.next('close');
    this.modalNotifier?.complete();
  }

  submitModal() {
    this.modalNotifier?.next('submit');
    this.closeModal();
  }
}

// open(content: TemplateRef<any>, options?: ModalOptions): Observable<any> {
//   const modalComponentFactory =
//     this.resolver.resolveComponentFactory(ModalComponent);
//   const contentViewRef = content.createEmbeddedView(null);

//   const modalComponent = modalComponentFactory.create(this.injector, [
//     contentViewRef.rootNodes,
//   ]);

//   // modalComponent.instance reaches the component ts
//   modalComponent.instance.size = options?.size;
//   modalComponent.instance.title = options?.title;
//   modalComponent.instance.close.subscribe((e) => this.closeModal());
//   modalComponent.instance.submit.subscribe((e) => this.submitModal());

//   modalComponent.hostView.detectChanges();

//   this.document.body.appendChild(modalComponent.location.nativeElement);

//   this.modalNotifier = new Subject();
//   return this.modalNotifier.asObservable();
// }
