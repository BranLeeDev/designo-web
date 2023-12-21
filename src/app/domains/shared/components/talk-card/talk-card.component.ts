import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-talk-card',
  standalone: true,
  imports: [],
  templateUrl: './talk-card.component.html',
  styleUrl: './talk-card.component.scss',
})
export class TalkCardComponent {
  @Input() hasBackground: boolean = true;
}
