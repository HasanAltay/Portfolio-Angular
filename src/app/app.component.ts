import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],

})
export class AppComponent {
  title = 'my Portfolio';
  
  setActive(num: number) {
    const aboutBtn = document.getElementById('about_btn');
    const skillsBtn = document.getElementById('skills_btn');
    const portfolioBtn = document.getElementById('portfolio_btn');

    if (aboutBtn) {
      aboutBtn.className = 'nav_active';
    
    if (skillsBtn) {
      skillsBtn.className = 'nav_active';

    if (portfolioBtn) {
      portfolioBtn.className = 'nav_active';
    
    if (num === 0) {
      aboutBtn.className = '';
      skillsBtn.className = '';
      portfolioBtn.className = '';
    }

    else if (num === 1) {
      aboutBtn.className = 'nav_active';
      skillsBtn.className = '';
      portfolioBtn.className = '';
    }

    else if (num === 2) {
      aboutBtn.className = '';
      skillsBtn.className = 'nav_active';
      portfolioBtn.className = '';
    }

    else if (num === 3) {
      aboutBtn.className = '';
      skillsBtn.className = '';
      portfolioBtn.className = 'nav_active';
    }

  }}}
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