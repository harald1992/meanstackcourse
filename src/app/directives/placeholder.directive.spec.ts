import { TestBed } from '@angular/core/testing';
import { PlaceholderDirective } from './placeholder.directive';
import { ElementRef, ViewContainerRef } from '@angular/core';

describe('PlaceholderDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ViewContainerRef, useValue: {} }],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = new PlaceholderDirective({} as ViewContainerRef);
    expect(directive).toBeTruthy();
  });
});
