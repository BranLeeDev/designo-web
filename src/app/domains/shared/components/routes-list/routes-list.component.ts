import { Component, Input, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { RoutesService } from '@services/routes.service';
import { NavigationMenuService } from '@services/navigation-menu.service';
import { NgClass } from '@angular/common';

@Component({
  selector: 'app-routes-list',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, NgClass],
  templateUrl: './routes-list.component.html',
  styleUrl: './routes-list.component.scss',
})
export class RoutesListComponent {
  @Input() isForHeader = true;

  private routesService = inject(RoutesService);
  routesList = this.routesService.routesList;

  private navigationMenu = inject(NavigationMenuService);
  closeNavigationMenu() {
    this.navigationMenu.setFalseStatusNavMenu();
  }
}
