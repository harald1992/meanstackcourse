import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspecNavigationComponent } from './formspec-navigation.component';

describe('FormspecNavigationComponent', () => {
  let component: FormspecNavigationComponent;
  let fixture: ComponentFixture<FormspecNavigationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspecNavigationComponent]
    });
    fixture = TestBed.createComponent(FormspecNavigationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
