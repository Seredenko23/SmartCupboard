import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';

@Component({
  selector: 'app-edit-item',
  templateUrl: './edit-item.component.html',
  styleUrls: ['./edit-item.component.css']
})
export class EditItemComponent implements OnInit {

  updateItemForm: FormGroup;

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService) { }

  ngOnInit() {
  	this.updateItemForm = this.fb.group({
  		title:['']
  	})
  }

  onSubmit(data: any) {
  	this.cupboardService.updateItemTitle(data ,this.cupboardService.getItemId())
  }

}
