import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspecPageAbstractComponent } from './formspec-page-abstract.component';

describe('FormspecPageAbstractComponent', () => {
  let component: FormspecPageAbstractComponent;
  let fixture: ComponentFixture<FormspecPageAbstractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspecPageAbstractComponent]
    });
    fixture = TestBed.createComponent(FormspecPageAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
