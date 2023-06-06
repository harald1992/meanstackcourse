import { Injectable } from '@angular/core';
import { Post } from '../pages/posts/post.model';
import { Observable, Subject, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // private posts: Post[] = [];
  private posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();

  constructor() {}

  // getPosts() {
  //   // return [...this.posts]; // spread so changes made on other parts calling this will not change the original ref
  // }

  addPost(post: Post) {
    this.posts.next([...this.posts.value, post]);
  }
}
