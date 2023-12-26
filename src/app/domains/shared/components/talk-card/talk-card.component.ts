import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { BackgroundOvalComponent } from '../background-oval/background-oval.component';

@Component({
  selector: 'app-talk-card',
  standalone: true,
  imports: [RouterLink, BackgroundOvalComponent],
  templateUrl: './talk-card.component.html',
  styleUrl: './talk-card.component.scss',
})
export class TalkCardComponent {
  @Input() hasBackground: boolean = true;
}
