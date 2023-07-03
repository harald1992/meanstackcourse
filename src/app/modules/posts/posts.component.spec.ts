import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostsComponent } from './posts.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { PostCreateComponent } from './post-create/post-create.component';
import { DirectiveTesterComponent } from 'src/app/directives/directive-tester/directive-tester.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Component, NO_ERRORS_SCHEMA } from '@angular/core';

@Component({
  selector: 'app-directive-tester',
  template: '',
  styleUrls: [],
})
export class MockComponent {}

describe('PostsComponent', () => {
  let component: PostsComponent;
  let fixture: ComponentFixture<PostsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, FormsModule],

      declarations: [PostsComponent, PostCreateComponent],

      schemas: [NO_ERRORS_SCHEMA],
    });
    fixture = TestBed.createComponent(PostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
