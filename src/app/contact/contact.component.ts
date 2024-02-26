import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() mode!:boolean;
  name!: string;
  submit() {
    if (this.name !== null && this.name !== undefined) {
      alert(`Sir ${this.name}I will contact you soon.`);
      window.location.href = '';
    } else {
      console.log(this.name);
      alert('All field are mandatory.');
    }
  }
}
