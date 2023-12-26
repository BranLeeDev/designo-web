import { Component, inject, signal } from '@angular/core';
import { ProjectIntroComponent } from '../../components/project-intro/project-intro.component';
import { ProjectCardComponent } from '../../components/project-card/project-card.component';
import { ProjectsService } from '@services/projects.service';
import { ProjectIntro } from '@models/project-intro.model';
import { PortfolioCard } from '@models/cards.model';
import { PortfolioCardComponent } from '../../components/portfolio-card/portfolio-card.component';

@Component({
  selector: 'app-app-design',
  standalone: true,
  imports: [
    ProjectIntroComponent,
    ProjectCardComponent,
    PortfolioCardComponent,
  ],
  templateUrl: './app-design.component.html',
  styleUrl: './app-design.component.scss',
})
export class AppDesignComponent {
  private projectsService = inject(ProjectsService);

  projectsList = this.projectsService.appDesignProjectsList;

  readonly projectIntro = signal<ProjectIntro>({
    id: 1,
    title: 'App Design',
    description:
      'Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.',
  });

  readonly portfoliosList = signal<PortfolioCard[]>([
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
