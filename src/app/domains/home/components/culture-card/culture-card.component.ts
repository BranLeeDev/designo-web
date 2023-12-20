import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component, Input } from '@angular/core';
import { CultureCard } from '@models/cards.model';

@Component({
  selector: 'app-culture-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './culture-card.component.html',
  styleUrl: './culture-card.component.scss',
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dbbixakcl')],
})
export class CultureCardComponent {
  @Input({ required: true }) cultureCard!: CultureCard;
}
