import { Component, Input } from '@angular/core';
import { ProjectIntro } from '@models/project-intro.model';

@Component({
  selector: 'app-project-intro',
  standalone: true,
  imports: [],
  templateUrl: './project-intro.component.html',
  styleUrl: './project-intro.component.scss',
})
export class ProjectIntroComponent {
  @Input({ required: true }) projectIntro!: ProjectIntro;
}
