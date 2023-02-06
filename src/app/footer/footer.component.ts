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


    // showBurger() {
  //   const mobile = document.getElementById('burger');

  //   if (mobile) {
  //     mobile.className = 'nav_active';

  //   if (mobile.style.display == 'flex') {
  //     mobile.style.display = 'none';
  
  //   } else if (mobile.style.display = 'none') {
  //     mobile.style.display = 'flex';
  //   }
  // }
  // }
  
  
  // HideOnClick() {
  //   const mobile = document.getElementById('burger');
  //   if (mobile) {
  //     mobile.className = 'nav_active';

  //     mobile.style.display = 'none';
  //   }
  // }

  reload() {
    setTimeout(function () {
      location.reload()
  }, 100);
  }
}
