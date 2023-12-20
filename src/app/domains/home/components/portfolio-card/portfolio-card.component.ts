import { NgOptimizedImage } from '@angular/common';
import { Component, Input } from '@angular/core';
import { PortfolioCard } from '@models/cards.model';

@Component({
  selector: 'app-portfolio-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './portfolio-card.component.html',
  styleUrl: './portfolio-card.component.scss',
})
export class PortfolioCardComponent {
  @Input({ required: true }) portfolioCard!: PortfolioCard;
}
