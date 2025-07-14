import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ReusableCompnentComponent } from "../reusable-compnent/reusable-compnent.component";

@Component({
  selector: 'app-r4',
  imports: [ReactiveFormsModule, ReusableCompnentComponent],
  templateUrl: './r4.component.html',
  styleUrl: './r4.component.css'
})
export class R4Component {
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
