import { Component, OnInit, Inject } from '@angular/core';
import { finalize, first } from 'rxjs/operators';
import { Observable, fromEvent } from 'rxjs';
import { AdminService } from './admin.service';
import { Credentials, CredentialsService } from '../auth/credentials.service';
import { Router, NavigationEnd } from '@angular/router';
import { MatDialog, MatDialogConfig, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DateDialogComponent } from '../date-dialog/date-dialog.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { environment } from '@env/environment';

@Component({
  selector: 'app-home',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.scss'],
  providers: [],
})
export class AdminHomeComponent implements OnInit {
  result: any;
  isLoading = false;
  errorMessage: string = '';
  dataSource: any;
  displayedColumns: any;

  constructor(
    private adminService: AdminService,
    private credentialsService: CredentialsService,
    public dialog: MatDialog,
    private snackbar: MatSnackBar,
    private router: Router
  ) {
    this.displayedColumns = [
      'id',
      'source',
      'destination',
      'spots',
      'status',
      'created_at'
    ];
  }

  ngOnInit() {
    this.loadTripList();
    
  }
 

  loadTripList() {

    this.isLoading = true;
    this.dataSource = [];

   
      const resultdata = this.adminService.getTripList();
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
