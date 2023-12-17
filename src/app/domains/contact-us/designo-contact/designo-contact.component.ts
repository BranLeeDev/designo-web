import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { SeoService } from '../../shared/services/seo.service';

@Component({
  selector: 'app-designo-contact',
  standalone: true,
  imports: [],
  templateUrl: './designo-contact.component.html',
  styleUrl: './designo-contact.component.scss',
})
export class DesignoContactComponent implements OnInit {
  private title = inject(Title);
  private seo = inject(SeoService);

  ngOnInit(): void {
    const t = 'Contact Us | Designo';
    this.title.setTitle(t);

    this.seo.generateTags({
      title: t,
      description:
        "Elevate your business with unique digital experiences. Let's discuss your project and find relatable solutions. Contact us today!",
      slug: 'contact',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Contact/qbagugxtkqd6qcfb1xg0',
    });
  }
}
