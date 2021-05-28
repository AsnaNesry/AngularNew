import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
@Input() GridData: any;
@Input() ColData:any;
@Output() onRowSelection: EventEmitter<any> = new EventEmitter();  
@Output() onRowUpdate: EventEmitter<any> = new EventEmitter();
@Output() onRowDeletion: EventEmitter<any> = new EventEmitter();  




constructor(public router: Router) { }

  ngOnInit(): void {
  }
   onRowClick(record: any){
      this.onRowSelection.emit(record);
   }

   onUpdate(record: any){
     this.onRowUpdate.emit(record);
   }
   onDelete(record: any){
     console.log("From table comp")
    this.onRowDeletion.emit(record);
  }


}
