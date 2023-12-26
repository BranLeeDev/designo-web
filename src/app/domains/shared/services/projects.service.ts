import { Injectable, signal } from '@angular/core';
import { ProjectCard } from '@models/project-card.model';

@Injectable({
  providedIn: 'root',
})
export class ProjectsService {
  readonly webDesignProjectsList = signal<ProjectCard[]>([
    {
      id: 1,
      title: 'EXPRESS',
      description: 'A multi-carrier shipping website for ecommerce businesses',
      image: {
        url: '/DesignoWeb/Home/Portfolios/web-design/ensnh5ei6nwxyqfetn3x',
        alt: 'Image express',
        width: 700,
        height: 640,
      },
    },
    {
      id: 2,
      title: 'TRANSFER',
      description:
        'Site for low-cost money transfers and sending money within seconds',
      image: {
        url: '/DesignoWeb/Home/Portfolios/web-design/wcvffcm4wxwa1m7rbjh7',
        alt: 'Image transfer',
        width: 700,
        height: 640,
      },
    },
    {
      id: 3,
      title: 'PHOTON',
      description:
        'A state-of-the-art music player with high-resolution audio and DSP effects',
      image: {
        url: '/DesignoWeb/Home/Portfolios/web-design/vff3wnuregve6jcnyive',
        alt: 'Image photon',
        width: 700,
        height: 640,
      },
    },
    {
      id: 4,
      title: 'BUILDER',
      description:
        'Connects users with local contractors based on their location',
      image: {
        url: '/DesignoWeb/Home/Portfolios/web-design/weu2ijpsi921krimlfou',
        alt: 'Image builder',
        width: 700,
        height: 640,
      },
    },
    {
      id: 5,
      title: 'BLOGR',
      description:
        'Blogr is a platform for creating an online blog or publication',
      image: {
        url: '/DesignoWeb/Home/Portfolios/web-design/aagszi4fy2oqqknsusi3',
        alt: 'Image blogr',
        width: 700,
        height: 640,
      },
    },
    {
      id: 6,
      title: 'CAMP',
      description:
        'Get expert training in coding, data, design, and digital marketing',
      image: {
        url: '/DesignoWeb/Home/Portfolios/web-design/jbfplqg7lgdchu8ckfn1',
        alt: 'Image camp',
        width: 700,
        height: 640,
      },
    },
  ]);

  readonly appDesignProjectsList = signal<ProjectCard[]>([
    {
      id: 1,
      title: 'AIRFILTER',
      description:
        'Solving the problem of poor indoor air quality by filtering the air',
      image: {
        url: '/DesignoWeb/Home/Portfolios/app-design/qcdb8zbi6dagj0dlrbjp',
        alt: 'Image airfilter',
        width: 700,
        height: 640,
      },
    },
    {
      id: 2,
      title: 'EYECAM',
      description:
        'Product that lets you edit your favorite photos and videos at any time',
      image: {
        url: '/DesignoWeb/Home/Portfolios/app-design/vd7y8oj9ouydhvyzsxgr',
        alt: 'Image eyecam',
        width: 700,
        height: 640,
      },
    },
    {
      id: 3,
      title: 'FACEIT',
      description:
        'Get to meet your favorite internet superstar with the faceit app',
      image: {
        url: '/DesignoWeb/Home/Portfolios/app-design/kxhya9dbnz7ivqplgkwk',
        alt: 'Image faceit',
        width: 700,
        height: 640,
      },
    },
    {
      id: 4,
      title: 'TODO',
      description:
        'A todo app that features cloud sync with light and dark mode',
      image: {
        url: '/DesignoWeb/Home/Portfolios/app-design/pag2hgz1wmky7temvz50',
        alt: 'Image todo',
        width: 700,
        height: 640,
      },
    },
    {
      id: 5,
      title: 'LOOPSTUDIOS',
      description: 'A VR experience app made for Loopstudios',
      image: {
        url: '/DesignoWeb/Home/Portfolios/app-design/ikvvfeojydvnspj2fftq',
        alt: 'Image loopstudios',
        width: 700,
        height: 640,
      },
    },
  ]);

  readonly graphicDesignProjectsList = signal<ProjectCard[]>([
    {
      id: 1,
      title: 'TIM BROWN',
      description:
        'A book cover designed for Tim Brown’s new release, ‘Change’',
      image: {
        url: '/DesignoWeb/Home/Portfolios/graphic-design/vq15j91hme9zvqgy9puj',
        alt: 'Image tim brown',
        width: 700,
        height: 640,
      },
    },
    {
      id: 2,
      title: 'BOXED WATER',
      description:
        'A book cover designed for Tim Brown’s new release, ‘Change’',
      image: {
        url: '/DesignoWeb/Home/Portfolios/graphic-design/aq0ozkz9zgvvldprvb42',
        alt: 'Image boxed water',
        width: 700,
        height: 640,
      },
    },
    {
      id: 3,
      title: 'SCIENCE!',
      description:
        'A poster made in collaboration with the Federal Art Project',
      image: {
        url: '/DesignoWeb/Home/Portfolios/graphic-design/vyfq5ro8plc9vpnyhf4w',
        alt: 'Image science',
        width: 700,
        height: 640,
      },
    },
  ]);
}
