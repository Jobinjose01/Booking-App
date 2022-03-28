import { AfterViewInit, Component, ViewChild  , OnInit } from '@angular/core';
import { finalize, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AdminService } from '../adminhome/admin.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

export interface BookingDetails {
  booking_id: string;
  booked_by: string;
  source: string;
  destination: string;
  spots: string;
  created_at: string;
  booking_status: string;
  cancelled_on: string;
}

const ELEMENT_DATA: BookingDetails[] = [];

@Component({
  selector: 'app-adminbookingdetails',
  templateUrl: './adminbookingdetails.component.html',
  styleUrls: ['./adminbookingdetails.component.scss']
})


export class AdminbookingdetailsComponent implements AfterViewInit  {

  result: any;
  isLoading = false;
  errorMessage: string = '';
  spots:any;
  
  displayedColumns : string[] = [
    'booking_id',
    'booked_by',
    'source',
    'destination',
    'spots',
    'created_at',
    'booking_status',
    'cancelled_on',
  ];
  dataSource = new MatTableDataSource<BookingDetails>(ELEMENT_DATA);


  //@ViewChild(MatPaginator, {static: false}) paginator: MatPaginator;

  ngAfterViewInit() {
   // this.dataSource.paginator = this.paginator;
  }

  
  constructor(
    private snackbar: MatSnackBar,
    private adminService : AdminService,
    
  ) {

    
   }

  ngOnInit(): void {

    this.loadAllBookingDetails();
  }


  loadAllBookingDetails(){

    this.isLoading = true;
    
    const resultdata = this.adminService.getAllBooking();
    resultdata.pipe(first()).subscribe({
      next: (data) => {
        this.dataSource = data.data;
        this.isLoading = false;
      },
      error: (error) => {
        this.errorMessage = error.message;
        this.isLoading = false;
      },
    });
  }
}
