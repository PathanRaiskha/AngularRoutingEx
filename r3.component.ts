import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-r3',
  imports: [ReactiveFormsModule],
  templateUrl: './r3.component.html',
  styleUrl: './r3.component.css'
})
export class R3Component {

  studentobj:FormGroup=new FormGroup({


    FirstName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    LastName:new FormControl("",[Validators.required,Validators.minLength(3)]),
    Email:new FormControl("",[Validators.email]),
    Password:new FormControl("",[Validators.required,Validators.minLength(3)]),
    DateOfBirth:new FormControl("",Validators.required),
    Gender :new FormControl("",[Validators.required]),
    Citizen: new FormControl("",[Validators.required]),
    State:new FormControl("",[Validators.required]),
    gender:new FormControl("",[Validators.required])
  })

  tempobj:any;
  onsave(){
    this.tempobj=this.studentobj.value
  }
}
