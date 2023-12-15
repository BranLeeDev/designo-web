import { Injectable, signal } from '@angular/core';
import { Route } from '@models/route.model';

@Injectable({
  providedIn: 'root',
})
export class RoutesService {
  readonly routesList = signal<Route[]>([
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
