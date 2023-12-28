import { Component, Input } from '@angular/core';
import { LocationMapComponent } from '../location-map/location-map.component';
import { LocationCard } from '@models/location-card.model';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-location-card',
  standalone: true,
  imports: [LocationMapComponent, NgClass],
  templateUrl: './location-card.component.html',
  styleUrl: './location-card.component.scss',
})
export class LocationCardComponent {
  @Input({ required: true }) locationCard!: LocationCard;
}
