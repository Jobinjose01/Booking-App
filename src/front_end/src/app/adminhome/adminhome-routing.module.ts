import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { marker } from '@biesbjerg/ngx-translate-extract-marker';

import { AdminHomeComponent } from './adminhome.component';
import { AdmintripComponent } from '../admintrip/admintrip.component';
import { Shell } from '@app/shell/shell.service';

const routes: Routes = [
  Shell.childRoutes([
    { path: '', redirectTo: '/adminhome', pathMatch: 'full' },
    { path: 'adminhome', component: AdminHomeComponent, data: { title: marker('Admin Dashboard > Trips') } },
    { path: 'createtrip', component: AdmintripComponent, data: { title: marker('Admin Dashboard > Create Trip') } },
  ]),
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [],
})
export class AdminHomeRoutingModule {}
