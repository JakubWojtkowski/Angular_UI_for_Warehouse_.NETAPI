import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Delivery } from 'src/app/models/Delivery-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DeliveriesService {

  apiUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllDeliveries() : Observable<Delivery[]> {
    return this.http.get<Delivery[]>(this.apiUrl + '/api/Delivery');
  }

  addDelivery(addDeliveryRequest: Delivery): Observable<Delivery> {
    addDeliveryRequest.id = '00000000-0000-0000-0000-000000000000';
    return this.http.post<Delivery>(this.apiUrl + '/api/Delivery',
    addDeliveryRequest);
  }

  getDelivery(id: string): Observable<Delivery> { // potem zmienic na id: string bo guid
    return this.http.get<Delivery>(this.apiUrl + '/api/Delivery/' + id);
  }

  updateDelivery(id: string, updateDeliveryRequest: Delivery): Observable<Delivery> {
    return this.http.put<Delivery>(this.apiUrl + '/api/Delivery?id=' + id,
    updateDeliveryRequest);
  }

  deleteDelivery(id: string): Observable<Delivery> {
    return this.http.delete<Delivery>(this.apiUrl + '/api/Delivery/' + id);
  }
}
