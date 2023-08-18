import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppSharedModule } from '../shared/app-shared.module';
import { RouterModule, Routes } from '@angular/router';
import { DynamicFormComponent } from './dynamic-form/dynamic-form.component';

const routes: Routes = [
  // {
  //   path: '',
  //   component: PostsComponent,
  // },
  // {
  //   path: 'detail',
  //   component: PostDetailComponent,
  // },

  { path: '**', component: DynamicFormComponent },
];

@NgModule({
  declarations: [],
  imports: [AppSharedModule, RouterModule.forChild(routes)],
})
export class DynamicFormModule {}
