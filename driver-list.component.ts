import { Component,OnInit } from '@angular/core';
import {Driver} from "@core/models/driver";
import {RestApiService} from "@core/services/rest-api.service";
// import { AddEditDeviceComponent } from '../add-edit-device/add-edit-device.component';
// import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-driver-list',
  templateUrl: './driver-list.component.html',
  styleUrls: ['./driver-list.component.css']
})
export class DriverListComponent implements OnInit {
  dataSource: Driver[] = [];

  constructor(private restApiService: RestApiService) { }

  ngOnInit(){
     this.getDriverAll();
  }

  displayedColumns: string[] = [
    'id','firstName','lastName','birthday','driverLicense','action'
  ];

  getDriverAll() {
    this.restApiService.getAll().subscribe((data) => {
     
      this.dataSource = data;
    },(error) =>{
      console.error(error);
    });
  }
  
  deleteDriver(driver: any) {
    console.log(driver)
    this.restApiService.delete(driver.id).subscribe((data) => {
          this.getDriverAll();
        });
      
    
  }
}
