import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('@pages/home/home.component').then((module) => module.HomeComponent),
  },
  {
    path: 'dashboard',
    loadComponent: () =>
      import('@pages/dashboard/dashboard.component').then((module) => module.DashboardComponent),
  },
  {
    path: 'login',
    loadComponent: () =>
      import('@pages/login/login.component').then((module) => module.LoginComponent),
  },
  {
    path: 'register',
    loadComponent: () =>
      import('@pages/register/register.component').then((module) => module.RegisterComponent),
  },
];
