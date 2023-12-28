import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Map, tileLayer } from 'leaflet';

@Component({
  selector: 'app-location-map',
  standalone: true,
  imports: [],
  templateUrl: './location-map.component.html',
  styleUrl: './location-map.component.scss',
})
export class LocationMapComponent implements AfterViewInit {
  @ViewChild('map') mapRef!: ElementRef;

  ngAfterViewInit(): void {
    const map = new Map(this.mapRef.nativeElement).setView(
      [43.712612417333915, -79.2494427613216],
      13
    );

    map.zoomControl.remove();

    tileLayer('http://{s}.google.com/vt?lyrs=m&x={x}&y={y}&z={z}', {
      maxZoom: 20,
      subdomains: ['mt0', 'mt1', 'mt2', 'mt3'],
    }).addTo(map);
  }
}
