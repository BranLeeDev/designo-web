import { Component, inject, signal } from '@angular/core';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectsService } from '@services/projects.service';
import { ProjectIntroComponent } from '../../components/project-intro/project-intro.component';
import { ProjectIntro } from '@models/project-intro.model';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';
import { PortfolioCard } from '@models/cards.model';
import { TalkCardComponent } from '../../../shared/components/talk-card/talk-card.component';

@Component({
  selector: 'app-web-design',
  standalone: true,
  imports: [
    ProjectCardComponent,
    ProjectIntroComponent,
    PortfolioCardComponent,
    TalkCardComponent,
  ],
  templateUrl: './web-design.component.html',
  styleUrl: './web-design.component.scss',
})
export class WebDesignComponent {
  private projectsService = inject(ProjectsService);

  projectsList = this.projectsService.webDesignProjectsList;

  readonly projectIntro = signal<ProjectIntro>({
    id: 1,
    title: 'Web Design',
    description:
      'We build websites that serve as powerful marketing tools and bring memorable brand experiences.',
  });

  readonly portfoliosList = signal<PortfolioCard[]>([
    {
      id: 1,
      title: 'App Design',
      path: '/portfolio/app-design',
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
      id: 2,
      title: 'Graphic Design',
      path: '/portfolio/graphic-design',
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
}
