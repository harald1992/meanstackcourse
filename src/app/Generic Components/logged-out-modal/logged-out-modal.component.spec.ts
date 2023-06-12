import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoggedOutModalComponent } from './logged-out-modal.component';

describe('LoggedOutModalComponent', () => {
  let component: LoggedOutModalComponent;
  let fixture: ComponentFixture<LoggedOutModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LoggedOutModalComponent]
    });
    fixture = TestBed.createComponent(LoggedOutModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
