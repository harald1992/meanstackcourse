import {
  ChangeDetectorRef,
  Component,
  OnInit,
  ViewRef,
  inject,
} from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { filter, map, of, takeUntil } from 'rxjs';
import { PostsService } from 'src/app/services/posts.service';
import { onDestroy$ } from 'src/app/utils/onDestroy';
import { Post } from '../post.model';

const getPageParam = () => {
  const route = inject(ActivatedRoute);
  let sub = route.queryParams.pipe(
    filter((params) => params['id']),
    map((params: any) => params['id'])
  );

  return sub;
};

@Component({
  selector: 'app-post-detail',
  templateUrl: './post-detail.component.html',
  styleUrls: ['./post-detail.component.scss'],
})
export class PostDetailComponent implements OnInit {
  postService = inject(PostsService); // needs to be done here on in constructor, otherwise inject doen't do anything
  page$ = getPageParam();
  destroy$ = onDestroy$();

  postDetail: Post | undefined;

  ngOnInit(): void {
    this.postService.getPosts();

    this.postService.posts$.pipe(takeUntil(this.destroy$)).subscribe((data) => {
      this.page$.subscribe((id: string) => {
        this.postDetail = data.find((d: Post) => d.id === id);
      });
    });
  }
}
