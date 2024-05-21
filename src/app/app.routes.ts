import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'people',
    title: 'People',
    loadComponent: () =>
      import('./components/people/people.component').then(
        (m) => m.PeopleComponent
      ),
  },
  {
    path: 'about',
    title: 'About',
    loadComponent: () =>
      import('./components/about/about.component').then(
        (m) => m.AboutComponent
      ),
  },
  { path: '**', redirectTo: '/people' },
];
