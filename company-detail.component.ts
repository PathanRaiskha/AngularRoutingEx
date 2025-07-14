
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-company-detail',
  imports: [FormsModule,CommonModule],
  templateUrl: './company-detail.component.html',
  styleUrl: './company-detail.component.css'
})
export class CompanyDetailComponent implements OnInit  {
[x: string]: any;
  CompnyOBJ: any[] = [];
  UpdateObj:any={
    companyID:'',
    companyName:"",
    companyAdrress:"",
    companyMail:""
  }

  SaveObj:any={
    companyID:'',
    companyName:"",
    companyAdrress:"",
    companyMail:""

  }


  


  http = inject(HttpClient)

  ngOnInit() {
    this.GetAllCompanyDetail();
  }

  GetAllCompanyDetail() {
    this.http.get<any>("https://localhost:7063/api/CompanyDetail").subscribe((data) => {
      this.CompnyOBJ = data.result;
    });

  }

  AddCompanyDetail(AddCompanyDetail:any){
    this.http.post<any>("https://localhost:7063/api/CompanyDetail", AddCompanyDetail).subscribe((data)=>{
     if(data.success){
      alert(data.massege)
     }

    })
  }


  updateCompany( id:number ,update: any) {
    this.http.put<any>("https://localhost:7063/api/CompanyDetail/"+id, update).subscribe((data) => {
      if (data.success) {
        alert(data.massege);
        

      }

    });
  }
  deleteCompany(id: Number) {
    this.http.delete<any>("https://localhost:7063/api/CompanyDetail/"+id).subscribe((data)=>{
      if (data.success){
        alert(data.massege);
        this.CompnyOBJ= this.CompnyOBJ.filter(obj=>obj.companyID!==id);
        
      }
    })

  }
  Update(item:any){
    this.UpdateObj=item;


  }
  
}
