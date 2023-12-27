import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Location } from '@models/location.model';

@Component({
  selector: 'app-locations-list',
  standalone: true,
  imports: [NgOptimizedImage, RouterLink],
  templateUrl: './locations-list.component.html',
  styleUrl: './locations-list.component.scss',
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dbbixakcl')],
})
export class LocationsListComponent {
  readonly locationsList = signal<Location[]>([
    {
      id: 1,
      country: 'CANADA',
      path: '/locations',
      image: {
        url: '/DesignoWeb/Home/Locations/djym8joigulpiylh30cq',
        alt: 'Illustration canada',
        width: 202,
        height: 202,
      },
    },
    {
      id: 2,
      country: 'AUSTRALIA',
      path: '/locations',
      image: {
        url: '/DesignoWeb/Home/Locations/nemhtwualtf0acfe4luq',
        alt: 'Illustration australia',
        width: 202,
        height: 202,
      },
    },
    {
      id: 3,
      country: 'UNITED KINGDOM',
      path: '/locations',
      image: {
        url: '/DesignoWeb/Home/Locations/mqoae8ccwyefanu9anms',
        alt: 'Illustration united kingdom',
        width: 202,
        height: 202,
      },
    },
  ]);
}
