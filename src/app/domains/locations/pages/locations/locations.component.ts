import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetatagsService } from '@services/metatags.service';
import { LocationCard } from '@models/location-card.model';
import { LocationCardComponent } from '../../components/location-card/location-card.component';
import { TalkCardComponent } from '../../../shared/components/talk-card/talk-card.component';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationCardComponent, TalkCardComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  title = inject(Title);
  metaTagsService = inject(MetatagsService);

  readonly locationsCardList = signal<LocationCard[]>([
    {
      id: 1,
      countryName: 'Canada',
      office: {
        name: 'Designo Central Office',
        street: '3886 Wellington Street',
        state: 'Toronto, Ontario',
        postalCode: 'M9C 3J5',
      },
      contact: {
        phoneNumber: '+1 253-863-8967',
        email: 'contact@designo.co',
      },
      images: {
        mobile: '',
        tablet:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/Maps/Tablet/uphhcudjoc1fiwbqxvok',
        desktop:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/Maps/Desktop/u3ddwvpfjqkjlqpg3ylp',
        alt: 'Image map Canada',
      },
      isImageRightAligned: true,
    },
    {
      id: 2,
      countryName: 'Australia',
      office: {
        name: 'Designo AU Office',
        street: '19 Balonne Street',
        state: 'New South Wales',
        postalCode: '2443',
      },
      contact: {
        phoneNumber: '(02) 6720 9092',
        email: 'contact@designo.au',
      },
      images: {
        mobile: '',
        tablet:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/Maps/Tablet/kd3wf0n29atm2kq5bvg4',
        desktop:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/Maps/Desktop/z8k0gvs482qgu5oqsjnf',
        alt: 'Image map Australia',
      },
      isImageRightAligned: false,
    },
    {
      id: 3,
      countryName: 'United kingdom',
      office: {
        name: 'Designo UK Office',
        street: '13 Colorado Way',
        state: 'Rhyd-y-fro',
        postalCode: 'SA8 9GA',
      },
      contact: {
        phoneNumber: '078 3115 1400',
        email: 'contact@designo.uk',
      },
      images: {
        mobile: '',
        tablet:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/Maps/Tablet/yejkk7ynxxl4nwa0mlqi',
        desktop:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/Maps/Desktop/lmdlzbo2yasivpc8smku',
        alt: 'Image map UK',
      },
      isImageRightAligned: true,
    },
  ]);

  ngOnInit(): void {
    const t = 'Locations | Designo';
    this.title.setTitle(t);

    this.metaTagsService.updateMetaTags({
      title: t,
      description:
        'Leading creative agency with global presence in Canada, Australia, and the UK. Crafting impactful designs for clients worldwide',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/uoleuop07jsqrywgma0l',
      slug: 'locations',
    });
  }
}
