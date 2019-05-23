import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';

@Component({
  selector: 'app-create-shelf',
  templateUrl: './create-shelf.component.html',
  styleUrls: ['./create-shelf.component.css']
})
export class CreateShelfComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService ) { }

  response: any;

  createShelfForm: FormGroup;

  ngOnInit() {
    this.http.get("/api/devices")
    .subscribe(data => {
      this.response = data;
    })
  	this.createShelfForm = this.fb.group({
      title: [''],
      deviceId: ['']
    })
  }

  onSubmit(formValue: any) {
   this.cupboardService.createShelf(this.cupboardService.getCupboardId(), formValue);
  }

}
