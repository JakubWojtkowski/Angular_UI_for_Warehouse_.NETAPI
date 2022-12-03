import { Component, OnInit } from '@angular/core';
import { Warehouse } from 'src/app/models/Warehouse-model';
import { WarehousesService } from 'src/app/services/Warehouses/warehouses.service';

@Component({
  selector: 'app-warehouses-list',
  templateUrl: './warehouses-list.component.html',
  styleUrls: ['./warehouses-list.component.css']
})
export class WarehousesListComponent implements OnInit {

  warehouses: Warehouse[] = [];
  constructor(private warehouseService: WarehousesService) { }

  ngOnInit(): void {
    this.warehouseService.getAllWarehouses()
    .subscribe({
      next: (warehouses) => {
        this.warehouses = warehouses;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
