import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@components/views/home/home.module').then((m) => m.HomeModule), // Lazy load HomeModule
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@components/views/dashboard/dashboard.module').then((m) => m.DashboardModule), // Lazy load DashboardModule
  },
  {
    path: 'dashboard/createPost',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@components/views/create-post/create-post.module').then((m) => m.CreatePostModule), // Lazy load CreatePostModule
  },
  {
    path: 'dashboard/editPost/:postId',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@components/views/edit-post/edit-post.module').then((m) => m.EditPostModule), // Lazy load EditPostModule
  },
  {
    path: 'post/:postId',
    loadChildren: () =>
      import('@components/views/articles/articles.module').then((m) => m.ArticlesModule), // Lazy load ArticlesModule
  },
  {
    path: 'login',
    canActivate: [authGuard],
    loadChildren: () => import('@components/views/login/login.module').then((m) => m.LoginModule), // Lazy load LoginModule
  },
  {
    path: 'register',
    canActivate: [authGuard],
    loadChildren: () =>
      import('@components/views/register/register.module').then((m) => m.RegisterModule), // Lazy load RegisterModule
  },
  {
    path: '**',
    loadChildren: () =>
      import('@components/views/page-not-found/page-not-found.module').then(
        (m) => m.PageNotFoundModule,
      ), // Lazy load PageNotFoundModule
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
