import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {DriverListComponent} from "./driver-list/driver-list.component";
import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { DetailsRoutingModule } from './details-routing.module';
// import { ConfirmationDialogComponent } from './confirmation-dialog/confirmation-dialog.component';
// import { AddEditDeviceComponent } from './add-edit-device/add-edit-device.component';
import {MatTableModule} from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    DriverListComponent,
  ],
  imports: [
    CommonModule,
    DetailsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatCardModule,
    MatTableModule,
    MatIconModule

  ],
  providers: [],
  exports: [
    DriverListComponent
  ]
})
export class DetailsModule { }
