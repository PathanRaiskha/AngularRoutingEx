import { Injectable } from '@angular/core';
import { HttpClient  } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
 
  constructor(private _http: HttpClient) { 

  }
  login( username: string, password: string ): Observable<any> {
     var apiUrl = 'https://localhost:7244/api/Account/Login'+"/"+username+"/"+password;
    return this._http.get<any>(apiUrl);
  }
}
