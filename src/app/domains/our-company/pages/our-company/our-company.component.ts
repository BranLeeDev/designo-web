import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetatagsService } from '@services/metatags.service';
import { LocationsListComponent } from '../../../shared/components/locations-list/locations-list.component';
import { SectionCardComponent } from '../../components/section-card/section-card.component';
import { SectionCard } from '@models/section-card.model';

@Component({
  selector: 'app-our-company',
  standalone: true,
  imports: [LocationsListComponent, SectionCardComponent],
  templateUrl: './our-company.component.html',
  styleUrl: './our-company.component.scss',
})
export class OurCompanyComponent implements OnInit {
  private title = inject(Title);
  private metaTagsService = inject(MetatagsService);

  ngOnInit(): void {
    const t = 'Our Company | Designo';

    this.title.setTitle(t);

    this.metaTagsService.updateMetaTags({
      title: t,
      description:
        'Creative agency crafting impactful designs that connect with audiences. Partnering with startups, corporations, and nonprofits since 2010',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Our%20Company/qgezbdist8m0fbfieezv',
      slug: 'our-company',
    });
  }

  readonly aboutUsCard = signal<SectionCard>({
    title: 'About Us',
    paragraphOne:
      'Founded in 2010, we are a creative agency that produces lasting results for our clients. We’ve partnered with many startups, corporations, and nonprofits alike to craft designs that make real impact. We’re always looking forward to creating brands, products, and digital experiences that connect with our clients’ audiences.',
    hasTwoParagraphs: false,
    isSecondaryColor: false,
    isImageRightAligned: true,
    image: {
      url: '/DesignoWeb/Our%20Company/wredluwqlxapuiog0ush',
      alt: 'Image about hero',
      width: 476,
      height: 480,
    },
  });

  readonly classTalentCard = signal<SectionCard>({
    title: 'World-class talent',
    hasTwoParagraphs: true,
    isSecondaryColor: true,
    isImageRightAligned: false,
    paragraphOne:
      'We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.',
    paragraphTwo:
      'Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.',
    image: {
      url: '/DesignoWeb/Our%20Company/z0t6cx1q9semo139yv4s',
      alt: 'Image world class talent',
      width: 476,
      height: 640,
    },
  });

  readonly realDealCard = signal<SectionCard>({
    title: 'The real deal',
    hasTwoParagraphs: true,
    isSecondaryColor: true,
    isImageRightAligned: true,
    paragraphOne:
      'As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success. ',
    paragraphTwo:
      'We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.',
    image: {
      url: '/DesignoWeb/Our%20Company/t8gnyww5wepprysknkxe',
      alt: 'Image real deal',
      width: 476,
      height: 640,
    },
  });
}
