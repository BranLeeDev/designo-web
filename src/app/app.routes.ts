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
          import('./domains/home/pages/home/home.component').then(
            (m) => m.HomeComponent
          ),
      },
      {
        path: 'our-company',
        loadComponent: () =>
          import(
            './domains/our-company/pages/our-company/our-company.component'
          ).then((m) => m.OurCompanyComponent),
      },
      {
        path: 'locations',
        loadComponent: () =>
          import(
            './domains/locations/pages/locations/locations.component'
          ).then((m) => m.LocationsComponent),
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./domains/contact-us/pages/contact/contact.component').then(
            (m) => m.ContactComponent
          ),
      },
    ],
  },
];
