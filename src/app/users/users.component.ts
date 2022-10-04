import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';

import { AgGridAngular } from 'ag-grid-angular';
import { CellClickedEvent, ColDef, GridReadyEvent } from 'ag-grid-community';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

  constructor(private http: HttpClient) { }

  // Each Column Definition results in one Column.
  public columnDefs: ColDef[] = [
    { field: 'make'},
    { field: 'model'},
    { field: 'price' }
  ];

  rowData = [
    { make: 'Toyota', model: 'Celica', price: 35000 },
    { make: 'Ford', model: 'Mondeo', price: 32000 },
    { make: 'Porsche', model: 'Boxster', price: 72000 }
  ];

  // DefaultColDef sets props common to all Columns
  // public defaultColDef: ColDef = {
  //   sortable: true,
  //   filter: true,
  // };

  // Data that gets displayed in the grid
  // public rowData$!: Observable<any[]>;

  // // For accessing the Grid's API
  // @ViewChild(AgGridAngular) agGrid!: AgGridAngular;

  // // Example load data from sever
  // onGridReady(params: GridReadyEvent) {
  //   this.rowData$ = this.http
  //     .get<any[]>('https://www.ag-grid.com/example-assets/row-data.json');
  // }

  // // Example of consuming Grid Event
  // onCellClicked( e: CellClickedEvent): void {
  //   console.log('cellClicked', e);
  // }

  // // Example using Grid's API
  // clearSelection(): void {
  //   this.agGrid.api.deselectAll();
  // }
}
