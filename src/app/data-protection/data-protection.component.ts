import { Component } from '@angular/core';

@Component({
  selector: 'app-data-protection',
  templateUrl: './data-protection.component.html',
  styleUrls: ['./data-protection.component.scss']
})
export class DataProtectionComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
