import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { CreateBookingRoutingModule } from './createbooking-routing.module';
import { CreateBookingComponent } from './createbooking.component';

@NgModule({
  imports: [
    CommonModule,
    TranslateModule,
    SharedModule,
    ReactiveFormsModule,
    FlexLayoutModule,
    MaterialModule,
    CreateBookingRoutingModule,
  ],
  declarations: [CreateBookingComponent],
})
export class CreateBookingModule {}
