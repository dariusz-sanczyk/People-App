import { Component } from '@angular/core';
import { AboutComponent } from '../about/about.component';
import { PeopleComponent } from '../people/people.component';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [AboutComponent, PeopleComponent, RouterLink, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {}
