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
      coords: {
        latitude: 43.712612417333915,
        longitude: -79.2494427613216,
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
      coords: {
        latitude: -33.106879403011476,
        longitude: 151.64518786731207,
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
      coords: {
        latitude: 53.73477994907449,
        longitude: -1.3164485045266536,
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
