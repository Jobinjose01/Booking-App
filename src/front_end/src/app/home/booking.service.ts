import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

import { environment } from '@env/environment';

export interface bookingContext {
  resultdata: any;
  source_city_id: string;
  destination_city_id: string;
}

@Injectable({
  providedIn: 'root',
})
export class BookingService {
  result: any;
  resultdata: any;

  constructor(private httpClient: HttpClient) {}

  getCities() {
    return this.httpClient.get<any>(environment.serverUrl + 'cities').pipe(
      map((result) => {
        return result;
      })
    );
  }

  checkAvailability(context: bookingContext){
    let source_city_id = context.source_city_id;
    let destination_city_id = context.destination_city_id;
    return this.httpClient.post<any>(environment.serverUrl + 'trip/availability',{destination_city_id, source_city_id}).pipe(
      map((result) => {
        return result;
      })
    );
  }

  createBooking(trip_id:bigint, spots :bigint) {
    
    return this.httpClient
      .post<any>(environment.serverUrl + 'trip/booking', {trip_id, spots})
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  cancelBooking(booking_id:string, spots :bigint) {
    
    return this.httpClient
      .post<any>(environment.serverUrl + 'trip/cancel', {booking_id, spots})
      .pipe(
        map((result) => {
          return result;
        })
      );
  }

  getMyBooking(){

    return this.httpClient.get<any>(environment.serverUrl + 'trip/mytrips').pipe(
      map((result) => {
        return result;
      })
    );
  }
}
