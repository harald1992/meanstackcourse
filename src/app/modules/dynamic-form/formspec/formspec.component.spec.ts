import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspecComponent } from './formspec.component';

describe('FormspecComponent', () => {
  let component: FormspecComponent;
  let fixture: ComponentFixture<FormspecComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspecComponent]
    });
    fixture = TestBed.createComponent(FormspecComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
