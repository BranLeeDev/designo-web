import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component, Input } from '@angular/core';
import { SectionCard } from '@models/section-card.model';

@Component({
  selector: 'app-section-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './section-card.component.html',
  styleUrl: './section-card.component.scss',
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dbbixakcl')],
})
export class SectionCardComponent {
  @Input() hasTwoParagraphs: boolean = false;
  @Input() isSecondaryColor: boolean = false;
  @Input({ required: true }) infoSectionCard!: SectionCard;
}
