import { Routes } from '@angular/router';
import { R1Component } from './r1/r1.component';
import { R2Component } from './r2/r2.component';
import { R3Component } from './r3/r3.component';
import { R4Component } from './r4/r4.component';
import { LayoutComponent } from './layout/layout.component';
import { LoginComponent } from './login/login.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { InputAndOutputComponent } from './input-and-output/input-and-output.component';
import { DataTableComponent} from './data-table/data-table.component';
import { CompanyDetailComponent } from './company-detail/company-detail.component';
import { Company2Component } from './company2/company2.component';

export const routes: Routes = [
    { path:'',
        redirectTo:'login',
        pathMatch:'full'

    },
    {
        path:'login',
        component:LoginComponent

    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'r1',
                component:R1Component
        
                
            },
            {
                path:'r2',
                component:R2Component
            },
            {
                path:'r3',
                component:R3Component
            },
            {
                path:'r4',
                component:R4Component
            },
            {
                path:'DropDown',
                component:DropdownComponent
            },
            {
                path:'InputAnddOutput',
                component:InputAndOutputComponent
            },
            {
                path:'DataTable',
                component:DataTableComponent
            },
            {
                path:'CompanyDetail',
                component:CompanyDetailComponent
            },
            {
                path:'Company2',
                component:Company2Component
            }



        ]

    },
   
    
];
