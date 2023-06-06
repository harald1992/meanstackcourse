import { Component, OnInit } from '@angular/core';
import { Post } from './post.model';
import { PostsService } from 'src/app/services/posts.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss'],
})
export class PostsComponent implements OnInit {
  posts$: Observable<Post[]> = this.postsService.posts$;

  constructor(private postsService: PostsService) {}

  ngOnInit(): void {
    // this.postsService.getPosts().subscribe((posts) => {});
  }
}
