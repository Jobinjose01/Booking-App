import { Component, OnInit } from '@angular/core';
import { finalize, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Credentials, CredentialsService } from '../auth/credentials.service';
import { Router, NavigationEnd } from '@angular/router';
import { BookingService } from '../home/booking.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  result: any;
  isLoading = false;
  errorMessage: string = '';

  dataSource: any;
  displayedColumns: any;

  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private bookingService : BookingService
  ) {
    
    this.displayedColumns = [
      'booking_id',
      'source',
      'destination',
      'spots',
      'status',
      'cancelled_on',
      'created_at',
      'updated_at',
    ];
  }

  ngOnInit() {
    

    this.loadMyBooking();
  }

  

  loadMyBooking() {
    this.isLoading = true;
    
    this.dataSource = [];

   
      const resultdata = this.bookingService.getMyBooking();
      resultdata.pipe(first()).subscribe({
        next: (data) => {
          this.dataSource = data;
        },
        error: (error) => {
          this.errorMessage = error.message;
        },
      });
  }

  snackbarMessage(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
