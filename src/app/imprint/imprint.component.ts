import { Component } from '@angular/core';

@Component({
  selector: 'app-imprint',
  templateUrl: './imprint.component.html',
  styleUrls: ['./imprint.component.scss']
})
export class ImprintComponent {
  scrollToTop() {
    window.scrollTo(0, 0);
  }
}
