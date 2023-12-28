import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetatagsService } from '@services/metatags.service';
import { LocationMapComponent } from '../../components/location-map/location-map.component';
import { Cords } from '@models/cords.model';

@Component({
  selector: 'app-locations',
  standalone: true,
  imports: [LocationMapComponent],
  templateUrl: './locations.component.html',
  styleUrl: './locations.component.scss',
})
export class LocationsComponent implements OnInit {
  title = inject(Title);
  metaTagsService = inject(MetatagsService);

  readonly canadaCords = signal<Cords>({
    latitude: 43.712612417333915,
    longitude: -79.2494427613216,
  });

  readonly australiaCords = signal<Cords>({
    latitude: -33.106879403011476,
    longitude: 151.64518786731207,
  });

  readonly unitedKingdomCords = signal<Cords>({
    latitude: 53.73477994907449,
    longitude: -1.3164485045266536,
  });

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
