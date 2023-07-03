import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostCreateComponent } from './post-create.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule } from '@angular/forms';

describe('PostCreateComponent', () => {
  let component: PostCreateComponent;
  let fixture: ComponentFixture<PostCreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],
      declarations: [PostCreateComponent],
    });
    fixture = TestBed.createComponent(PostCreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
