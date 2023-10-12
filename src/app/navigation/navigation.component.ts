import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss'],
})
export class NavigationComponent {
  constructor(private appComponent: AppComponent) {}

  isShown: boolean = false;

  setActive(num: number) {
    this.appComponent.setActive(num);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  toggleBurger() {
    const burger_dropdown_menu = document.getElementById(
      'burger_dropdown_menu'
    );
    this.isShown = !this.isShown;
  }

  hide() {
    this.isShown = false;
  }
}
