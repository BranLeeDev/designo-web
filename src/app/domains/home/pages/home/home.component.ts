import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '@services/seo.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = inject(Title);
  seo = inject(SeoService);

  ngOnInit(): void {
    const t = 'Designo: Custom designs and digital branding solutions';

    this.title.setTitle(t);

    this.seo.generateTags({
      title: t,
      description:
        'Creating impactful designs and branding solutions. Over 10 years of experience. Responsive websites, app designs & engaging brand experiences. Contact us now!',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/grbfv9yog7hjs20akr4s',
      slug: '',
    });
  }
}
