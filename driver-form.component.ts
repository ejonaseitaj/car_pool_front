// import {Component, OnInit} from '@angular/core';
// import {FormGroup, FormControl, Validators} from "@angular/forms";
// import {RestApiService} from "@core/services";

// @Component({
//   selector: 'app-driver-form',
//   templateUrl: './driver-form.component.html',
//   styleUrls: ['./driver-form.component.css']
// })
// export class DriverFormComponent implements OnInit {

//   driverForm: FormGroup = new FormGroup({});

//   constructor(private restApiService: RestApiService) {
//   }

//   ngOnInit(){
//     this.driverForm = new FormGroup({
//       'firstName': new FormControl('', Validators.required),
//       'lastName': new FormControl('', Validators.required),
//       'birthday': new FormControl('', Validators.required),
//       'driverLicense': new FormControl('', Validators.required)
//     });

//   }


//   onSubmit() {
//     console.log(this.driverForm);
//     this.driverForm.reset();
//   }

// }
