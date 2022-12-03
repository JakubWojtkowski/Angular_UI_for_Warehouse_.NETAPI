import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { WarehousesListComponent } from './components/components/Warehouses/warehouses-list/warehouses-list.component';
import { DeliveriesListComponent } from './components/components/Deliveries/deliveries-list/deliveries-list.component';
import { CommonModule } from '@angular/common';
import { AddWarehouseComponent } from './components/components/Warehouses/add-warehouse/add-warehouse.component';
import { AddDeliveryComponent } from './components/components/Deliveries/add-delivery/add-delivery.component';
import { EditWarehouseComponent } from './components/components/Warehouses/edit-warehouse/edit-warehouse.component';
import { EditDeliveryComponent } from './components/components/Deliveries/edit-delivery/edit-delivery.component';

@NgModule({
  declarations: [
    AppComponent,
    WarehousesListComponent,
    DeliveriesListComponent,
    AddWarehouseComponent,
    AddDeliveryComponent,
    EditWarehouseComponent,
    EditDeliveryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
