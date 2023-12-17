import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-web-logo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './web-logo.component.html',
  styleUrl: './web-logo.component.scss',
})
export class WebLogoComponent {}
