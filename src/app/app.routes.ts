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
  {
    path: 'features',
    loadComponent: () => import('./features/features/features').then((m) => m.Features),
    title: 'Photosnap - Features',
  },
  {
    path: 'pricing',
    loadComponent: () => import('./features/pricing/pricing').then((m) => m.Pricing),
    title: 'Photosnap - Pricing',
  },
];
