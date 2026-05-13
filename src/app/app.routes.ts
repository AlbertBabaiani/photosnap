import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
  },
  {
    path: 'stories',
    loadComponent: () => import('./features/stories/stories').then((m) => m.Stories),
  },
];
