import { ViewContainerRef } from '@angular/core';
import { ModalContainerDirective } from './modal-container.directive';
import { TestBed } from '@angular/core/testing';

describe('ModalContainerDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ViewContainerRef, useValue: {} }],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = new ModalContainerDirective({} as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
