import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesService } from '../../services/routes.service';

@Component({
  selector: 'app-routes-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './routes-list.component.html',
  styleUrl: './routes-list.component.scss',
})
export class RoutesListComponent {
  private routesService = inject(RoutesService);
  routesList = this.routesService.routesList;
}
