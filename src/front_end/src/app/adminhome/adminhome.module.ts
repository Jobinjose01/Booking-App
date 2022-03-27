import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { FlexLayoutModule } from '@angular/flex-layout';

import { SharedModule } from '@shared';
import { MaterialModule } from '@app/material.module';
import { ReactiveFormsModule } from '@angular/forms';
import { AdminHomeRoutingModule } from './adminhome-routing.module';
import { AdminHomeComponent } from './adminhome.component';
import { AdmintripComponent } from '../admintrip/admintrip.component';
import { AdminbookingdetailsComponent } from '../adminbookingdetails/adminbookingdetails.component';

@NgModule({
  imports: [CommonModule, TranslateModule, SharedModule, FlexLayoutModule, MaterialModule, ReactiveFormsModule, AdminHomeRoutingModule],
  declarations: [AdminHomeComponent, AdmintripComponent, AdminbookingdetailsComponent],
})
export class AdminHomeModule {}
