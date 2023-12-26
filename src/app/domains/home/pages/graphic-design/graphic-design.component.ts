import { Component, inject, signal } from '@angular/core';
import { ProjectsService } from '@services/projects.service';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectIntroComponent } from '../../components/project-intro/project-intro.component';
import { ProjectIntro } from '@models/project-intro.model';
import { PortfolioCard } from '@models/cards.model';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-graphic-design',
  standalone: true,
  imports: [
    ProjectCardComponent,
    ProjectIntroComponent,
    PortfolioCardComponent,
  ],
  templateUrl: './graphic-design.component.html',
  styleUrl: './graphic-design.component.scss',
})
export class GraphicDesignComponent {
  private projectsService = inject(ProjectsService);

  projectsList = this.projectsService.graphicDesignProjectsList;

  readonly projectIntro = signal<ProjectIntro>({
    id: 1,
    title: 'Graphic Design',
    description:
      'We deliver eye-catching branding materials that are tailored to meet your business objectives.',
  });

  portfoliosList = signal<PortfolioCard[]>([
    {
      id: 1,
      title: 'Web Design',
      path: '/portfolio/web-design',
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
  ]);
}
