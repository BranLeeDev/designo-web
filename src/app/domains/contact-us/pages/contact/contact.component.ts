import { Component, OnInit, inject } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetatagsService } from '@services/metatags.service';
import { LocationsListComponent } from '../../../shared/components/locations-list/locations-list.component';
import { FormComponent } from '../../components/form/form.component';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [LocationsListComponent, FormComponent],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss',
})
export class ContactComponent implements OnInit {
  private title = inject(Title);
  private metaTagsService = inject(MetatagsService);

  ngOnInit(): void {
    const t = 'Contact Us | Designo';
    this.title.setTitle(t);

    this.metaTagsService.updateMetaTags({
      title: t,
      description:
        "Elevate your business with unique digital experiences. Let's discuss your project and find relatable solutions. Contact us today!",
      slug: 'contact',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Contact/qbagugxtkqd6qcfb1xg0',
    });
  }
}
