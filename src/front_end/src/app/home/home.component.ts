import { Component, OnInit } from '@angular/core';
import { finalize, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router, NavigationEnd } from '@angular/router';
import { BookingService } from '../home/booking.service';
import {DateDialogComponent} from "../date-dialog/date-dialog.component";
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  result: any;
  isLoading = false;
  errorMessage: string = '';
  spots:any;
  dataSource: any;
  displayedColumns: any;


  constructor(
    private snackbar: MatSnackBar,
    private router: Router,
    private bookingService : BookingService,
    public dialog: MatDialog,
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

  cancelMyTrip(booking_id: string, spots :bigint){

    const dialogRef = this.dialog.open(DateDialogComponent, {
      width: '300px',
      data: {label : "Cancellation",action : "You can cancel upto "+spots+" spots"}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result != '' && result !== undefined && result != 0 && result <= spots){
        
        this.spots = result;
            console.log(this.spots);
           this.isLoading = true;
           const resultdata = this.bookingService.cancelBooking(booking_id, this.spots);
              resultdata
              .pipe(first())
              .subscribe(
                data => {
                    this.result = data;
                   
                    if(this.result.status == 1){
                      this.snackbarMessage(this.result.message);
                      this.loadMyBooking();
                                   
                    }else{
                      this.snackbarMessage(this.result.message);
                    }
                },
                 (error) => {
                    this.snackbarMessage("something went wrong !");
                  }
            );
      }else{

        if(result > spots){
          this.snackbarMessage("Your cannot cancel more than "+spots+" spots!");
        }else{
          this.snackbarMessage("Please enter some valid numbers!");
        }
      }

        

    });
  }

  snackbarMessage(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
