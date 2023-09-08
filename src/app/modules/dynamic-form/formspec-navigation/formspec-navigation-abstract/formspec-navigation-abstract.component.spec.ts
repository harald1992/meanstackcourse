import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspecNavigationAbstractComponent } from './formspec-navigation-abstract.component';

describe('FormspecNavigationAbstractComponent', () => {
  let component: FormspecNavigationAbstractComponent;
  let fixture: ComponentFixture<FormspecNavigationAbstractComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspecNavigationAbstractComponent]
    });
    fixture = TestBed.createComponent(FormspecNavigationAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
