import { Routes } from '@angular/router';
import { Home } from './features/home/home';

export const routes: Routes = [
  {
    path: '',
    component: Home,
    title: 'Photosnap - Home',
  },
  {
    path: 'stories',
    loadComponent: () => import('./features/stories/stories').then((m) => m.Stories),
    title: 'Photosnap - Stories',
  },
];
