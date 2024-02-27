import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent {
  isDark = false;
  @Output() darkModeToggled = new EventEmitter<boolean>();
  mode() {
    this.isDark = !this.isDark;
    this.darkModeToggled.emit(this.isDark);
  }
}
