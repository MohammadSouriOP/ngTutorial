import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-roles',
  imports: [FormsModule],
  templateUrl: './roles.component.html',
  styleUrl: './roles.component.css',
})
export class RolesComponent {
  firstName: String = 'Angular TUtorial';
  angularVersion = 'Version 18';
  version: Number = 18;
  isActive: boolean = false;
  currentDate = new Date();
  inputType: string = 'button';
  selectedState: string = '';

  showWelcomeAlert() {
    alert("welcome to Angular 18 Tutorial")
  }

  showMessage(message: string) {
    alert(message)
  }
}
