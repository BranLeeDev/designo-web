import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-talk-card',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './talk-card.component.html',
  styleUrl: './talk-card.component.scss',
})
export class TalkCardComponent {
  @Input() hasBackground: boolean = true;
}
