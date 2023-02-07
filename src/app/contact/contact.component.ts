import { Component } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
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
