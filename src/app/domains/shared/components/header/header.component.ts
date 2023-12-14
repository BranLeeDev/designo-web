import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Route } from '@models/route.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  routesList = signal<Route[]>([
    {
      id: 1,
      path: '/our-company',
      label: 'Our Company',
    },
    {
      id: 2,
      path: '/locations',
      label: 'Locations',
    },
    {
      id: 3,
      path: '/contact',
      label: 'Contact',
    },
  ]);
}
