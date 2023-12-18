import { Component, signal } from '@angular/core';
import { WebLogoComponent } from '../web-logo/web-logo.component';
import { RoutesListComponent } from '../routes-list/routes-list.component';
import { SocialMedia } from '@models/social-media.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [WebLogoComponent, RoutesListComponent],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  socialMediaList = signal<SocialMedia[]>([
    { id: 1, url: '/', label: 'facebook', icon: 'square-facebook' },
    { id: 2, url: '/', label: 'youtube', icon: 'square-youtube' },
    { id: 3, url: '/', label: 'twitter', icon: 'twitter' },
    { id: 4, url: '/', label: 'pinterest', icon: 'pinterest' },
    { id: 5, url: '/', label: 'instagram', icon: 'instagram' },
  ]);
}
