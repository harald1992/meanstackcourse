import { Injectable } from '@angular/core';
import { Post } from '../modules/posts/post.model';
import { Observable, Subject, BehaviorSubject, tap } from 'rxjs';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  // private posts: Post[] = [];
  private posts = new BehaviorSubject<Post[]>([]);
  posts$ = this.posts.asObservable();

  constructor(private http: HttpClient) {}

  getPosts(): void {
    // return this.http.get<Post[]>(environment.posts);

    this.http
      .get<Post[]>(environment.posts, {
        observe: 'body', // or 'events',  'response', 'body' body is default // if you want to observe certain things, default is reesponse.
        // it does change the return type
      })
      .pipe(
        tap((event) => {
          // console.log('event ', event);
          // if (event.type === HttpEventType.DownloadProgress) {
          //   // can check several HttpEventTypes if observe: 'body'
          // }
        })
      )
      .subscribe((data) => this.posts.next(data));

    // return [...this.posts]; // spread so changes made on other parts calling this will not change the original ref
  }

  addPost(post: Post) {
    return this.http.post<any>(environment.posts, post).subscribe((data) => {
      console.log(data);
      this.posts.next([...this.posts.value, post]);
    });
  }
}
