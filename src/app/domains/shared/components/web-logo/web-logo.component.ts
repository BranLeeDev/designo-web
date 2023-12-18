import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { NavigationMenuService } from '@services/navigation-menu.service';

@Component({
  selector: 'app-web-logo',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './web-logo.component.html',
  styleUrl: './web-logo.component.scss',
})
export class WebLogoComponent {
  private navigationMenu = inject(NavigationMenuService);

  closeNavigationMenu() {
    this.navigationMenu.setFalseStatusNavMenu();
  }
}
