import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';

@Component({
  selector: 'app-update-shelf',
  templateUrl: './update-shelf.component.html',
  styleUrls: ['./update-shelf.component.css']
})
export class UpdateShelfComponent implements OnInit {

  devices: any;
  updateShelfForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService) { }

  ngOnInit() {
  	this.cupboardService.getDevices()
  	.subscribe(data =>{
  		this.devices = data;
  	});
  	console.log(this.devices);
  	this.updateShelfForm = this.fb.group({
  		title:[''],
  		deviceId:['']
  	})
  }

  onSubmit(data: any) {
  	this.cupboardService.updateShelf(
  		this.cupboardService.getCupboardId(), this.cupboardService.getShelfId(), data)
  }

}
