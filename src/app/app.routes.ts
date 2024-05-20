import { Routes } from '@angular/router';
import { PeopleComponent } from './components/people/people.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: 'people', title: 'People', component: PeopleComponent },
  { path: 'about', title: 'About', component: AboutComponent },
  { path: '**', redirectTo: '/people' },
];
