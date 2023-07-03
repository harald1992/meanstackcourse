import { ElementRef } from '@angular/core';
import { TestBed } from '@angular/core/testing';
import { HighlightDirective } from './highlight.directive';

class MockElementRef implements ElementRef {
  nativeElement = {};
}

describe('HighlightDirective', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ElementRef, useClass: MockElementRef }],
    }).compileComponents();
  });

  it('should create an instance', () => {
    const directive = new HighlightDirective(new MockElementRef());
    expect(directive).toBeTruthy();
  });
});
