import { Component, OnInit } from '@angular/core';
import { FormGroup , FormBuilder, Validators, FormControl } from '@angular/forms';
import { NgModule } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { CupboardServiceService } from '../cupboard-service.service';

@Component({
  selector: 'app-create-cupboard',
  templateUrl: './create-cupboard.component.html',
  styleUrls: ['./create-cupboard.component.css']
})
export class CreateCupboardComponent implements OnInit {

  constructor(private fb: FormBuilder, private http: HttpClient, private cupboardService: CupboardServiceService) { }

  response: any;
  createCupboardForm: FormGroup;

  ngOnInit() {
  	this.createCupboardForm = this.fb.group({
      title: ['']
    })
  }

  onSubmit(data: any) {	
  	  this.cupboardService.createCupboard(data);
  }

}
