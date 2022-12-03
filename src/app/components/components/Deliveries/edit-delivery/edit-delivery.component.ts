import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Delivery } from 'src/app/models/Delivery-model';
import { DeliveriesService } from 'src/app/services/Deliveries/deliveries.service';

@Component({
  selector: 'app-edit-delivery',
  templateUrl: './edit-delivery.component.html',
  styleUrls: ['./edit-delivery.component.css']
})
export class EditDeliveryComponent {

  deliveryDetails: Delivery = {
    id: '',
    dateOfDelivery: new Date(),
    deliveryMass: 0,
    warehouseId: 0,
    placementTime: 0,
    receiveTime: 0
  }
constructor(private route: ActivatedRoute,
  private deliveriesService: DeliveriesService, private router: Router) {}

ngOnInit() : void {
  this.route.paramMap.subscribe({
    next:(params) => {
      const id = params.get('id');

      if (id) {
        this.deliveriesService.getDelivery(id).subscribe({
          next: (response) => {
            this.deliveryDetails = response;
      }})
      }
    }
  })
}

updateDelivery() {
  this.deliveriesService.updateDelivery(this.deliveryDetails.id,
    this.deliveryDetails)
    .subscribe({
      next: (response) => {
        this.router.navigate(['deliveries']);
    }
  });
}

deleteDelivery(id: string) {
  this.deliveriesService.deleteDelivery(id)
  .subscribe({
    next: (response) => {
      this.router.navigate(['deliveries']);
    }
  });
}
}
