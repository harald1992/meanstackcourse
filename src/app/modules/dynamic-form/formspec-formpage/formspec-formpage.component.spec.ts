import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspecFormpageComponent } from './formspec-formpage.component';

describe('FormspecFormpageComponent', () => {
  let component: FormspecFormpageComponent;
  let fixture: ComponentFixture<FormspecFormpageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspecFormpageComponent]
    });
    fixture = TestBed.createComponent(FormspecFormpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
