import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent implements OnInit{
  title = 'my Portfolio';

  ngOnInit(): void {
    AOS.init(
      {
        delay: 100,
        duration: 800,
        offset: 500,

      }
    );
    this.scrollToTop();
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
    window.location.href='#contact'; 
    return false;
  }
}