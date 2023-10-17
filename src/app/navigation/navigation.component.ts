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
    this.isShown = !this.isShown;
    let burger_icon = document.getElementById('burger_icon');
  }

  hide() {
    this.isShown = false;
  }
}
