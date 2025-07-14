import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-r2',
  imports: [FormsModule,CommonModule],
  templateUrl: './r2.component.html',
  styleUrl: './r2.component.css'
})
export class R2Component {

  StudentObj:any={

    FirstName:"" ,
    LastName:"",
    Email:"",
    Password:"",
    Address1:"",
    Address2:"",
    City:"",
    State:"",
    Zip:"",
    IsTermAndCondition:false



  }
  TempObj:any;

  OnSubmit(){
    this.TempObj=this.StudentObj

  }

}
