import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  recive(isDark:boolean){
    console.log('Message recived',isDark)

  }
 
}
