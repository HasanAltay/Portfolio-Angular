import { Component } from '@angular/core';
import { AppComponent } from '../app.component';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent {
  constructor(private appComponent: AppComponent) { }

  setActive(num: number) {
    this.appComponent.setActive(num);
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToContact() {
    window.location.href='#contact'; 
    return false;
  }
}
