import { NgOptimizedImage, provideCloudinaryLoader } from '@angular/common';
import { Component, Input } from '@angular/core';
import { ProjectCard } from '@models/project-card.model';

@Component({
  selector: 'app-project-card',
  standalone: true,
  imports: [NgOptimizedImage],
  templateUrl: './project-card.component.html',
  styleUrl: './project-card.component.scss',
  providers: [provideCloudinaryLoader('https://res.cloudinary.com/dbbixakcl')],
})
export class ProjectCardComponent {
  @Input({ required: true }) projectCard!: ProjectCard;
}
