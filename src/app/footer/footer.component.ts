import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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

  reload() {
    setTimeout(function () {
      location.reload()
  }, 100);
  }
}
