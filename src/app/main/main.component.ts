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

// Hide eyecatcher when scrolled down 100px
window.addEventListener("scroll", () => {
  const eyecatcher = document.querySelector(".eyecatcher") as HTMLElement;
  if (window.scrollY > 290) {
    eyecatcher.classList.add("hidden");
  }
});