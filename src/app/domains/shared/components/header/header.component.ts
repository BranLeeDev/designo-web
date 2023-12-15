import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavigationMenuService } from '../../services/navigation-menu.service';
import { MenuButtonComponent } from '../menu-button/menu-button.component';
import { WebLogoComponent } from '../web-logo/web-logo.component';
import { RoutesListComponent } from '../routes-list/routes-list.component';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    MenuButtonComponent,
    WebLogoComponent,
    RoutesListComponent,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  private navigationMenu = inject(NavigationMenuService);
  isOpenNavigationMenu = this.navigationMenu.statusNavMenu;
}
