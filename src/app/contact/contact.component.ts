import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  @Input() mode!: boolean;
  name!: string;
  phone!: string;
  submit() {
   
    if (
      this.name !== null &&
      this.name !== undefined &&
      this.phone !== null &&
      this.phone !== undefined &&
      this.name.length > 0 &&
      this.phone.length > 0
    ) {
      alert(`${this.name} Sir, I will contact you soon.`);
      window.location.href = '';
    } else {
      alert('All field are mandatory.');
    }
  }
}
