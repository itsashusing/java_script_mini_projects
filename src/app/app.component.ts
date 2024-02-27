import { Component, ViewChild } from '@angular/core';
import { NavComponent } from './nav/nav.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  @ViewChild(NavComponent) childComponent!: NavComponent;
  isDark = false;
  
  handleDarkModeToggle(isDark: boolean) {
    this.isDark = isDark;
    if (isDark) {
      document.body.style.backgroundColor = '#050505';
    } else {
      document.body.style.backgroundColor = '#fff';
    }
  }
}
