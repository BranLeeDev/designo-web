import { Component, inject } from '@angular/core';
import { NavigationMenuService } from '../../services/navigation-menu.service';

@Component({
  selector: 'app-menu-button',
  standalone: true,
  imports: [],
  templateUrl: './menu-button.component.html',
  styleUrl: './menu-button.component.scss',
})
export class MenuButtonComponent {
  private navigationMenuService = inject(NavigationMenuService);
  isOpenNavigationMenu = this.navigationMenuService.statusNavMenu;

  changeStatusMenu() {
    this.navigationMenuService.changeStatusNavMenu();
  }
}
