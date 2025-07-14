import { Component,  Input ,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-reusable-compnent',
  imports: [ ],
  templateUrl: './reusable-compnent.component.html',
  styleUrl: './reusable-compnent.component.css'
})
export class ReusableCompnentComponent {

  @Input() Massege:string=""
  @Output() Outputmsg=new EventEmitter<any>();
}
