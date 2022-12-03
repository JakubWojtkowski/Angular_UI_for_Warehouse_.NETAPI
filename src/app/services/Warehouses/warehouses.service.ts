import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Warehouse } from 'src/app/models/Warehouse-model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class WarehousesService {

  apiUrl: string = environment.apiUrl;

  constructor(private http: HttpClient) { }

  getAllWarehouses() : Observable<Warehouse[]> {
    return this.http.get<Warehouse[]>(this.apiUrl + '/api/Warehouse');
  }

 addWarehouse(addWarehouseRequest: Warehouse): Observable<Warehouse> {
  addWarehouseRequest.id = '0';
  return this.http.post<Warehouse>(this.apiUrl + '/api/Warehouse',
   addWarehouseRequest);
  }

  getWarehouse(id: string): Observable<Warehouse> { // potem zmienic na id: string bo guid
    return this.http.get<Warehouse>(this.apiUrl + '/api/Warehouse/' + id);
  }

  updateWarehouse(id: string, updateWarehouseRequest: Warehouse): Observable<Warehouse> {
    return this.http.put<Warehouse>(this.apiUrl + '/api/Warehouse?id=' + id,
    updateWarehouseRequest);
  }

  deleteWarehouse(id: string): Observable<Warehouse> {
    return this.http.delete<Warehouse>(this.apiUrl + '/api/Warehouse/' + id);
  }
}
