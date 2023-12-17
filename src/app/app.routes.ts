import { Routes } from '@angular/router';
import { LayoutComponent } from './domains/shared/components/layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./domains/home/designo-home/designo-home.component'),
      },
      {
        path: 'our-company',
        loadComponent: () =>
          import(
            './domains/our-company/designo-about/designo-about.component'
          ).then((m) => m.DesignoAboutComponent),
      },
      {
        path: 'locations',
        loadComponent: () =>
          import(
            './domains/locations/designo-locations/designo-locations.component'
          ).then((m) => m.DesignoLocationsComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import(
            './domains/contact-us/designo-contact/designo-contact.component'
          ).then((m) => m.DesignoContactComponent),
      },
    ],
  },
];
