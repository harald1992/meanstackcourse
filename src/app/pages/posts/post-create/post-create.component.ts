import { Component, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.model';
import { NgForm } from '@angular/forms';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss'],
})
export class PostCreateComponent {
  newPost: Post = { title: '', body: '' };

  constructor(private postsService: PostsService) {}

  onAddPost(form: NgForm) {
    const post: Post = form.form.value;
    if (post.title && post.body) {
      this.postsService.addPost(form.form.value);
      form.resetForm();
    }
  }
}
