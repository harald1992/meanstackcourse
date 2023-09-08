import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { routerGuard } from './guards/router.guard';
import { LoginComponent } from './pages/login/login.component';
import { StandaloneComponent } from './generic components/standalone/standalone.component';

const routes: Routes = [
  { path: '', component: StandaloneComponent, title: 'Home' },
  { path: 'login', component: LoginComponent, title: 'Login' },
  {
    path: 'posts',
    loadChildren: () =>
      import('./modules/posts/posts.module').then((m) => m.PostsModule),
    title: 'Posts',
    canActivate: [routerGuard],
  },
  {
    path: 'forms',
    loadChildren: () =>
      import('./modules/dynamic-form/dynamic-form.module').then(
        (m) => m.DynamicFormModule
      ),
    title: 'Dynamic Form',
    canActivate: [routerGuard],
  },
  { path: '**', component: StandaloneComponent, title: 'Home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
