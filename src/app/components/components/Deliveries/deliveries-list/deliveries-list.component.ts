import { Component, OnInit } from '@angular/core';
import { Delivery } from 'src/app/models/Delivery-model';
import { DeliveriesService } from 'src/app/services/Deliveries/deliveries.service';

@Component({
  selector: 'app-deliveries-list',
  templateUrl: './deliveries-list.component.html',
  styleUrls: ['./deliveries-list.component.css']
})
export class DeliveriesListComponent implements OnInit {

  deliveries: Delivery[] = [];
  constructor(private deliveryService: DeliveriesService) { }

  ngOnInit(): void {
    this.deliveryService.getAllDeliveries()
    .subscribe({
      next: (deliveries) => {
        this.deliveries = deliveries;
      },
      error: (response) => {
        console.log(response);
      }
    })
  }
}
