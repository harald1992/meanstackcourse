import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostCreateComponent } from './post-create/post-create.component';
import { PostsComponent } from './posts.component';
import { AppSharedModule } from '../shared/app-shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: PostsComponent,
  },
  {
    path: 'detail',
    component: PostDetailComponent,
  },

  { path: '**', component: PostDetailComponent },
];

@NgModule({
  declarations: [PostDetailComponent, PostCreateComponent, PostsComponent],
  imports: [AppSharedModule, RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostsModule {}
