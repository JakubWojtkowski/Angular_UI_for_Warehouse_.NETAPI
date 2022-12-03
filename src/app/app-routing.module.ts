import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddDeliveryComponent } from './components/components/Deliveries/add-delivery/add-delivery.component';
import { DeliveriesListComponent } from './components/components/Deliveries/deliveries-list/deliveries-list.component';
import { EditDeliveryComponent } from './components/components/Deliveries/edit-delivery/edit-delivery.component';
import { AddWarehouseComponent } from './components/components/Warehouses/add-warehouse/add-warehouse.component';
import { EditWarehouseComponent } from './components/components/Warehouses/edit-warehouse/edit-warehouse.component';
import { WarehousesListComponent } from './components/components/Warehouses/warehouses-list/warehouses-list.component';

const routes: Routes = [
  {
    path: 'warehouses',
    component: WarehousesListComponent
  },
  {
    path: 'deliveries',
    component: DeliveriesListComponent
  },
  {
    path: 'warehouses/add',
    component: AddWarehouseComponent
  },
  {
    path: 'deliveries/add',
    component: AddDeliveryComponent
  },
  {
    path: 'warehouses/edit/:id',
    component: EditWarehouseComponent
  },
  {
    path: 'deliveries/edit/:id',
    component: EditDeliveryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
