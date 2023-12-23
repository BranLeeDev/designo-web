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
        path: 'portfolio',
        children: [
          {
            path: 'web-design',
            loadComponent: () =>
              import(
                './domains/home/pages/web-design/web-design.component'
              ).then((m) => m.WebDesignComponent),
          },
          {
            path: 'app-design',
            loadComponent: () =>
              import(
                './domains/home/pages/app-design/app-design.component'
              ).then((m) => m.AppDesignComponent),
          },
          {
            path: 'graphic-design',
            loadComponent: () =>
              import(
                './domains/home/pages/graphic-design/graphic-design.component'
              ).then((m) => m.GraphicDesignComponent),
          },
        ],
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
      {
        path: '**',
        loadComponent: () =>
          import(
            './domains/shared/components/not-found/not-found.component'
          ).then((m) => m.NotFoundComponent),
      },
    ],
  },
];
