import { Component } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isDark = false;
  message='Hello this is message of child';
  mode() {
    this.isDark = !this.isDark;
    console.log('Sending message to parent')
  }
}
