import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-dropdown',
  imports: [FormsModule],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.css'
})
export class DropdownComponent {
  newItem: string = ''; // Stores the input value
  dropdownItems: string[] = [];

 addToDropdown() {
    if (this.newItem.trim() !== '') {
      this.dropdownItems.push(this.newItem); // Add input value to array
      this.newItem = ''; // Clear input after adding
    }
  }

}
