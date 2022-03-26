import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { finalize, first } from 'rxjs/operators';

import { environment } from '@env/environment';
import { Logger, UntilDestroy, untilDestroyed } from '@shared';
import { AdminService } from '../adminhome/admin.service';
import {MatSnackBar} from '@angular/material/snack-bar';

const log = new Logger('Login');



@Component({
  selector: 'app-admintrip',
  templateUrl: './admintrip.component.html',
  styleUrls: ['./admintrip.component.scss']
})
export class AdmintripComponent implements OnInit {
  version: string | null = environment.version;

  error: string | undefined;
  tripForm!: FormGroup;
  isLoading = false;
  errorMessage: string = '';
  resultdata: any;
  cities: any;
  errormsg: string | undefined;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private adminService: AdminService,
    private snackbar: MatSnackBar,
    
    ) {
    
    this.loadCities()
    this.createForm();
  }

  ngOnInit() {

    
  }


  loadCities(){

    const resultdata =   this.adminService.getCities();
    resultdata.pipe(first()).subscribe({
      next: (data) => {
        this.cities = data;
      },
      error: (error) => {
        this.errorMessage = error.message;
      },
    });
  }
  createTrip(){

    this.isLoading = true;
    const parceldata = this.adminService.createTrip(this.tripForm.value);
    parceldata
      .pipe(first())
      .subscribe(
        data => {
           this.resultdata = data;           
           this.isLoading = false;

          
          if (this.resultdata.id > 0) {
              
              this.snackbarMessage("Trip created Successfully!");
              
          }else{
            this.snackbarMessage("Trip Creation Failed!");
          }
        },
        (error) => {
          log.debug(`Login error: ${error}`);
          this.error = error;
        }
      );

      this.tripForm.reset();

  }


  private createForm() {
    this.tripForm = this.formBuilder.group({
      source_city_id: ['', Validators.required],
      destination_city_id: ['', Validators.required],
      spots: ['', Validators.required]

    });
  }


  snackbarMessage(message : string){
    this.snackbar.open(message, 'Close', {
            duration: 3000
      });
  }
}

