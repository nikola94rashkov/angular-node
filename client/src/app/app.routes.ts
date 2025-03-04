import { Routes } from '@angular/router';

import { authGuard } from './guards/auth.guard';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/home/home.component').then((module) => module.HomeComponent),
  },
  {
    path: 'dashboard',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@pages/dashboard/dashboard.component').then((module) => module.DashboardComponent),
  },
  {
    path: 'dashboard/createPost',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@pages/create-post/create-post.component').then(
        (module) => module.CreatePostComponent,
      ),
  },
  {
    path: 'dashboard/editPost/:postId',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@pages/edit-post/edit-post.component').then((module) => module.EditPostComponent),
  },
  {
    path: 'login',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@pages/login/login.component').then((module) => module.LoginComponent),
  },
  {
    path: 'register',
    canActivate: [authGuard],
    loadComponent: () =>
      import('@pages/register/register.component').then((module) => module.RegisterComponent),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@pages/page-not-found/page-not-found.component').then(
        (module) => module.PageNotFoundComponent,
      ),
  },
];
