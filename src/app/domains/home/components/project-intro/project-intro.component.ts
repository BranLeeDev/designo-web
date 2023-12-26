import { Component, Input } from '@angular/core';
import { ProjectIntro } from '@models/project-intro.model';
import { BackgroundOvalComponent } from '../../../shared/components/background-oval/background-oval.component';

@Component({
  selector: 'app-project-intro',
  standalone: true,
  imports: [BackgroundOvalComponent],
  templateUrl: './project-intro.component.html',
  styleUrl: './project-intro.component.scss',
})
export class ProjectIntroComponent {
  @Input({ required: true }) projectIntro!: ProjectIntro;
}
