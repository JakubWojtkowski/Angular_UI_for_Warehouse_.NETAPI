import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Warehouse } from 'src/app/models/Warehouse-model';
import { WarehousesService } from 'src/app/services/Warehouses/warehouses.service';

@Component({
  selector: 'app-add-warehouse',
  templateUrl: './add-warehouse.component.html',
  styleUrls: ['./add-warehouse.component.css']
})
export class AddWarehouseComponent implements OnInit {

  addWarehouseRequest: Warehouse = {
    id: '',
    name: '',
    address: '',
    coOrdinates: ''
  };
  constructor(private warehouseService: WarehousesService, private router: Router) {}

  ngOnInit(): void {}

  addWarehouse() {
    this.warehouseService.addWarehouse(this.addWarehouseRequest)
    .subscribe({
      next: (warehouse) => {
        this.router.navigate(['warehouses'])
      }
    });
  }
}
