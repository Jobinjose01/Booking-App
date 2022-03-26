import { Component, OnInit } from '@angular/core';
import { finalize, first } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Credentials, CredentialsService } from '../auth/credentials.service';
import { Router, NavigationEnd } from '@angular/router';


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
    private router: Router
  ) {
    
  }

  ngOnInit() {
    console.log("here 1");

    
  }

  

  loadParcelList() {
    this.isLoading = true;

    
    
  }

  snackbarMessage(message: string) {
    this.snackbar.open(message, 'Close', {
      duration: 3000,
    });
  }
}
