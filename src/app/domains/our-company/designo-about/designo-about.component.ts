import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-designo-about',
  standalone: true,
  imports: [],
  templateUrl: './designo-about.component.html',
  styleUrl: './designo-about.component.scss',
})
export class DesignoAboutComponent implements OnInit {
  private title = inject(Title);
  private seo = inject(SeoService);

  ngOnInit(): void {
    const t = 'Our Company | Designo';

    this.title.setTitle(t);

    this.seo.generateTags({
      title: t,
      description:
        'Creative agency crafting impactful designs that connect with audiences. Partnering with startups, corporations, and nonprofits since 2010',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Our%20Company/qgezbdist8m0fbfieezv',
      slug: 'our-company',
    });
  }
}
