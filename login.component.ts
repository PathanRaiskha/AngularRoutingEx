import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../shared/authentication.service';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userobj: any = {
    username: '',
    password: ''
  }

  router = inject(Router);
  _authService=inject(AuthenticationService);
  toster= inject(ToastrService);
  onlogin() {

    this._authService.login(this.userobj.username,this.userobj.password).subscribe(res=>{

    
      if(res.success){
        this.toster.success('log in succesfull', 'success', {
          timeOut: 3000,
          
        });
      }
      else{
        this.toster.error(res.massege, 'error', {
          timeOut: 3000,
        });
      }

    });




    // if (this.userobj.username == "rais" && this.userobj.password == "1234") 
    // {
     
    //   this.router.navigateByUrl('r2')
    // }
    // else{
    //    alert("wrong credentials")
    //  }

  }

}
