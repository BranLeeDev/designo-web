import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class NavigationMenuService {
  readonly statusNavMenu = signal<boolean>(false);

  changeStatusNavMenu() {
    this.statusNavMenu.update((preview) => !preview);
  }
}
