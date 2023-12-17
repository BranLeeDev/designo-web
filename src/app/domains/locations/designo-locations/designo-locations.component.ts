import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-designo-locations',
  standalone: true,
  imports: [],
  templateUrl: './designo-locations.component.html',
  styleUrl: './designo-locations.component.scss',
})
export class DesignoLocationsComponent implements OnInit {
  title = inject(Title);
  seo = inject(SeoService);

  ngOnInit(): void {
    const t = 'Locations | Designo';
    this.title.setTitle(t);

    this.seo.generateTags({
      title: t,
      description:
        'Leading creative agency with global presence in Canada, Australia, and the UK. Crafting impactful designs for clients worldwide',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Locations/uoleuop07jsqrywgma0l',
      slug: 'locations',
    });
  }
}
