import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('@pages/home/home.module').then((module) => module.HomeModule),
  },
  {
    path: 'article',
    loadChildren: () =>
      import('@pages/article/article.module').then((module) => module.ArticleModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@pages/dashboard/dashboard.module').then((module) => module.DashboardModule),
  },
  {
    path: 'login',
    loadChildren: () => import('@pages/login/login.module').then((module) => module.LoginModule),
  },
  {
    path: 'register',
    loadChildren: () =>
      import('@pages/register/register.module').then((module) => module.RegisterModule),
  },
];
