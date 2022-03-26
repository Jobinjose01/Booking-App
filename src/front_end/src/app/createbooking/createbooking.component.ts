import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, first } from 'rxjs/operators';
import {DateDialogComponent} from "../date-dialog/date-dialog.component";
import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { BookingService } from '../home/booking.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import {MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

const log = new Logger('Login');

@Component({
  selector: 'app-about',
  templateUrl: './createbooking.component.html',
  styleUrls: ['./createbooking.component.scss'],
})
export class CreateBookingComponent implements OnInit {
  version: string | null = environment.version;

  error: string | undefined;
  bookingForm!: FormGroup;
  isLoading = false;
  resultdata: any;
  errorMessage:any
  cities:any;
  errormsg: string | undefined;
  destination_city_id: any ;
  source_city_id: any;
  displayedColumns: any;
  dataSource: any;
  result:any;
  spots:any;
  picked_date:any;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    public dialog: MatDialog,
    private formBuilder: FormBuilder,
    private bookingService: BookingService,
    private snackbar: MatSnackBar
  ) {
    this.loadCities();
    this.createForm();

    this.displayedColumns = [
      'id',
      'source',
      'destination',
      'spots',
      'available_spots',
      'created_at'
    ];
  }

  ngOnInit() {

    this.dataSource = [];
  }

  loadCities(){

    const resultdata =   this.bookingService.getCities();
    resultdata.pipe(first()).subscribe({
      next: (data) => {
        this.cities = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }

  checkAvailability(){

    if(this.destination_city_id == this.source_city_id){

      this.snackbarMessage("From City and Destination City cannot be the same!");

    }else{


    const resultdata =   this.bookingService.checkAvailability(this.bookingForm.value);
    resultdata.pipe(first()).subscribe({
      next: (data) => {
        this.dataSource = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });

    }

  }

  bookmyTrip(trip_id : bigint){
    const dialogRef = this.dialog.open(DateDialogComponent, {
      width: '300px',
      data: {label : "Reservation",action : "Enter the number of spots required"}
    });

    dialogRef.afterClosed().subscribe(result => {
      
      if(result != '' && result !== undefined && result != 0 ){
        
        this.spots = result;
            console.log(this.spots);
           this.isLoading = true;
           const resultdata = this.bookingService.createBooking(trip_id, this.spots);
              resultdata
              .pipe(first())
              .subscribe(
                data => {
                    this.result = data;
                   
                    if(this.result.status == 1){
                      this.snackbarMessage(this.result.message);
                                   
                    }else{
                      this.snackbarMessage(this.result.message);
                    }
                },
                 (error) => {
                    this.snackbarMessage("something went wrong !");
                  }
            );
      }else{
          this.snackbarMessage("Please enter some valid numbers!");
      }

        

    });

       

  }

 

  private createForm() {
    this.bookingForm = this.formBuilder.group({
      destination_city_id: ['', Validators.required],
      source_city_id: ['', Validators.required],
    });
  }

  snackbarMessage(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
