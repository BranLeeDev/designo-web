import { Component, OnInit, inject, signal } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MetatagsService } from '@services/metatags.service';
import { IntroducingComponent } from '../../components/introducing/introducing.component';
import { CultureCard, PortfolioCard } from '@models/cards.model';
import { CultureCardComponent } from '../../components/culture-card/culture-card.component';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [IntroducingComponent, CultureCardComponent, PortfolioCardComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  title = inject(Title);
  metaTagsService = inject(MetatagsService);

  portfoliosList = signal<PortfolioCard[]>([
    {
      id: 1,
      title: 'Web Design',
      images: {
        mobile:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/mobile/jpijmm8hi0de8vpzktfo',
        tablet:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/tablet/j0r5prtz39qa2s9egxox',
        desktop:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/desktop/bvfcagf0kd2bx14zxayg',
        alt: 'Web design image',
      },
    },
    {
      id: 2,
      title: 'App Design',
      images: {
        mobile:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/mobile/nrsndmdzusbbqyilda5s',
        tablet:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/tablet/gzivnk1oyejsudub4znu',
        desktop:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/desktop/cnrxv0kadswoqbfwztw1',
        alt: 'App Design image',
      },
    },
    {
      id: 3,
      title: 'Graphic Design',
      images: {
        mobile:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/mobile/u06nwndqqmk1ll5kxblx',
        tablet:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/tablet/ougca5dfvfea9s5jbxya',
        desktop:
          'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/portfolio-card/desktop/knghc8nrxn3pcnbxdcfo',
        alt: 'Graphic design image',
      },
    },
  ]);

  culturesList = signal<CultureCard[]>([
    {
      id: 1,
      title: 'Passionate',
      description:
        'Each project starts with an in-depth brand research to ensure we only create products that serve a purpose. We merge art, design, and technology into exciting new solutions.',
      image: {
        url: '/DesignoWeb/Home/culture-card/rfog1cgxtoolgx30j4ro',
        alt: 'Passionate image',
        width: 202,
        height: 202,
      },
    },
    {
      id: 2,
      title: 'Resourceful',
      description:
        'Everything that we do has a strategic purpose. We use an agile approach in all of our projects and value customer collaboration. It guarantees superior results that fulfill our clients’ needs.',
      image: {
        url: '/DesignoWeb/Home/culture-card/zipd3mshvjng3rplusun',
        alt: 'Resourceful image',
        width: 202,
        height: 202,
      },
    },
    {
      id: 3,
      title: 'Friendly',
      description:
        ' We are a group of enthusiastic folks who know how to put people first. Our success depends on our customers, and we strive to give them the best experience a company can provide.',
      image: {
        url: '/DesignoWeb/Home/culture-card/gig3kmgm5labhl6agbct',
        alt: 'Friendly image',
        width: 202,
        height: 202,
      },
    },
  ]);

  ngOnInit(): void {
    const t = 'Designo: Custom designs and digital branding solutions';

    this.title.setTitle(t);

    this.metaTagsService.updateMetaTags({
      title: t,
      description:
        'Creating impactful designs and branding solutions. Over 10 years of experience. Responsive websites, app designs & engaging brand experiences. Contact us now!',
      image:
        'https://res.cloudinary.com/dbbixakcl/image/upload/f_auto,q_auto/v1/DesignoWeb/Home/grbfv9yog7hjs20akr4s',
      slug: '',
    });
  }
}
