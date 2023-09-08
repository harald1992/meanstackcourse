import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspecNavigationItemComponent } from './formspec-navigation-item.component';

describe('FormspecNavigationItemComponent', () => {
  let component: FormspecNavigationItemComponent;
  let fixture: ComponentFixture<FormspecNavigationItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormspecNavigationItemComponent]
    });
    fixture = TestBed.createComponent(FormspecNavigationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
