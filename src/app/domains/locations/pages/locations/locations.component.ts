import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetatagsService } from '@services/metatags.service';
import { LocationMapComponent } from '../../components/location-map/location-map.component';

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
