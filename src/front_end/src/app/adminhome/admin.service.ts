import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

export interface TripContext {
  resultdata: any;
  source_city_id: string;
  destination_city_id: string;
  spots: BigInteger;

}

@Injectable({
  providedIn: 'root',
})
export class AdminService {
  result: any;

  constructor(private httpClient: HttpClient) {}

  getTripList() {
    return this.httpClient.get<any>(environment.serverUrl + 'trip/all').pipe(
      map((result) => {
        return result;
      })
    );
  }
  
  getCities() {
    return this.httpClient.get<any>(environment.serverUrl + 'trip/cities').pipe(
      map((result) => {
        return result;
      })
    );
  }

  createTrip(context: TripContext){

    let source_city_id = context.source_city_id;
    let destination_city_id = context.destination_city_id;
    let spots = context.spots;
    return this.httpClient
    .post<any>(environment.serverUrl + 'trip/create', { source_city_id , destination_city_id , spots})
    .pipe(
      map(result => {
        return result;
       
      })
    );
  }

  getAllBooking(){
    return this.httpClient.get<any>(environment.serverUrl + 'trip/allbooking').pipe(
      map((result) => {
        return result;
      })
    );
  }
  
}
