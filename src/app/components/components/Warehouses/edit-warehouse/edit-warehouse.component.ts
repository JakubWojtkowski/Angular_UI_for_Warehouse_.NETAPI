import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Warehouse } from 'src/app/models/Warehouse-model';
import { WarehousesService } from 'src/app/services/Warehouses/warehouses.service';

@Component({
  selector: 'app-edit-warehouse',
  templateUrl: './edit-warehouse.component.html',
  styleUrls: ['./edit-warehouse.component.css']
})
export class EditWarehouseComponent {

  warehouseDetails: Warehouse = {
    id: '',
    name: '',
    address: '',
    coOrdinates: ''
  }
constructor(private route: ActivatedRoute,
  private warehouseService: WarehousesService, private router: Router) {}

ngOnInit() : void {
  this.route.paramMap.subscribe({
    next:(params) => {
      const id = params.get('id');

      if (id) {
        this.warehouseService.getWarehouse(id).subscribe({
          next: (response) => {
            this.warehouseDetails = response;
      }})
      }
    }
  })
}

updateWarehouse() {
  this.warehouseService.updateWarehouse(this.warehouseDetails.id,
    this.warehouseDetails)
    .subscribe({
      next: (response) => {
      this.router.navigate(['warehouses']);
    }
  });
}

deleteWarehouse(id: string) {
  this.warehouseService.deleteWarehouse(id)
  .subscribe({
    next: (response) => {
      this.router.navigate(['warehouses']);
    }
  });
}
}
