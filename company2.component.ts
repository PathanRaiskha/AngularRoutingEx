import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './company2.component.html',
  styleUrls: ['./company2.component.css'],
})
export class Company2Component {
  CompnyOBJ: any[] = []; // List of companies
  companyObj: any = {}; // Object to store form data
  isEditMode: boolean = false; // Flag for add/update mode

  constructor() {}

  // Open modal for adding a company
  openModalForAdd() {
    this.isEditMode = false;
    this.companyObj = {}; // Clear the object for a new entry
  }

  // Open modal for editing an existing company
  openModalForEdit(company: any) {
    this.isEditMode = true;
    this.companyObj = { ...company }; // Clone the object to avoid reference issues
  }

  // Save or Update Company
  saveOrUpdateCompany() {
    if (this.isEditMode) {
      // Update existing company
      const index = this.CompnyOBJ.findIndex(item => item.companyID === this.companyObj.companyID);
      if (index !== -1) {
        this.CompnyOBJ[index] = { ...this.companyObj };
      }
    } else {
      // Add new company
      this.CompnyOBJ.push({ ...this.companyObj });
    }
  }

  // Delete company
  deleteCompany(companyID: any) {
    this.CompnyOBJ = this.CompnyOBJ.filter(item => item.companyID !== companyID);
  }
}
