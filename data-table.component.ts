import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-data-table',
  imports: [],
  templateUrl: './data-table.component.html',
  styleUrl: './data-table.component.css'
})
export class DataTableComponent {
  ArrayofStudents: any[] = [];

http=inject(HttpClient)



  FetchData(){

       this.http.get<any[]>("https://localhost:7244/api/Account").subscribe((data) => {
       this .ArrayofStudents= data;
      });
      
    
  }

}
