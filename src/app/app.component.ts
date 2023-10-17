import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  getElementById(arg0: string) {
    throw new Error('Method not implemented.');
  }
  title = 'my Portfolio';

  ngOnInit(): void {
    AOS.init({
      delay: 100,
      duration: 700,
      offset: 380,
      once: true
    });
  }

  setActive(num: number) {
    const buttons = ['about_btn', 'skills_btn', 'portfolio_btn', 'contact_btn'];

    for (let i = 0; i < buttons.length; i++) {
      const button = document.getElementById(buttons[i]);
      if (button) {
        if (i + 1 === num) {
          button.classList.add('nav_active');
        } else {
          button.classList.remove('nav_active');
        }
      }
    }
  }

  scrollToTop() {
    window.scrollTo(0, 0);
  }

  scrollToContact() {
    window.location.href = '#contact';
    return false;
  }
}
