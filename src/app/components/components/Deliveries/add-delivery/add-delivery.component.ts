import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Delivery } from 'src/app/models/Delivery-model';
import { DeliveriesService } from 'src/app/services/Deliveries/deliveries.service';

@Component({
  selector: 'app-add-delivery',
  templateUrl: './add-delivery.component.html',
  styleUrls: ['./add-delivery.component.css']
})
export class AddDeliveryComponent implements OnInit {

  addDeliveryRequest: Delivery = {
    id: '',
    dateOfDelivery: new Date(),
    deliveryMass: 0,
    warehouseId: 0,
    placementTime: 0,
    receiveTime: 0
  };

  constructor(private deliveriesService: DeliveriesService, private router: Router) {}

  ngOnInit(): void {}

  addDelivery() {
      this.deliveriesService.addDelivery(this.addDeliveryRequest)
      .subscribe({
        next: (delivery) => {
          this.router.navigate(['deliveries']);
        }
      });
  }
}
