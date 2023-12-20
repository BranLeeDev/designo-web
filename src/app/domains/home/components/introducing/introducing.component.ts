import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component } from '@angular/core';
import { PortfolioCardComponent } from '../portfolio-card/portfolio-card.component';
import { CultureCardComponent } from '../culture-card/culture-card.component';

@Component({
  selector: 'app-introducing',
  standalone: true,
  imports: [NgOptimizedImage, PortfolioCardComponent, CultureCardComponent],
  templateUrl: './introducing.component.html',
  styleUrl: './introducing.component.scss',
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dbbixakcl')],
})
export class IntroducingComponent {}
