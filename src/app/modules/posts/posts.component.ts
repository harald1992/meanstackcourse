import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Post } from '../../modules/posts/post.model';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit, OnDestroy {
  posts$: Observable<Post[]> = this.postsService.posts$;
  // posts: Post[] = [];
  router = inject(Router);

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // this.postsService.getPosts().subscribe({
    //   next: (data: Post[]) => (this.posts = data),

    //   error: (error: HttpErrorResponse) => console.error(error),

    //   complete: () => console.info('complete'),
    // });
    this.postsService.getPosts();
  }

  navigateToDetail(id: string = '0') {
    this.router.navigate(['posts/detail'], {
      queryParams: { id },
    });
  }

  ngOnDestroy() {}
}
