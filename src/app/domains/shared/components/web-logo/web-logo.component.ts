import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-web-logo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './web-logo.component.html',
  styleUrl: './web-logo.component.scss',
})
export class WebLogoComponent {}
